## 🗺️ Architecture Overview

```
Cron Job (twice/day)
    → Python script
    → Gmail API (fetch latest emails)
    → Claude API (classify: keep / archive / delete)
    → Gmail API (execute actions)
```

---

## Step 1: Set Up Gmail API Access

**1.1 — Enable Gmail API**

1. Go to [console.cloud.google.com](https://console.cloud.google.com/)
2. Create a new project (e.g., "InboxBot")
3. Go to **APIs & Services → Library** → search "Gmail API" → Enable it
4. Go to **APIs & Services → Credentials** → Create **OAuth 2.0 Client ID**
5. Choose **Desktop App**, download the `credentials.json` file

**1.2 — Install dependencies**

```bash
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client anthropic
```

**1.3 — First-time OAuth (run once manually)**

```python
# auth_setup.py - run once to generate token.json
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ['https://www.googleapis.com/auth/gmail.modify']
flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
creds = flow.run_local_server(port=0)

with open('token.json', 'w') as f:
    f.write(creds.to_json())

print("token.json saved!")
```

Run it once: `python auth_setup.py` — it opens a browser, you log in with `mohmasri9753@gmail.com`, and it saves `token.json`.

---

## Step 2: Write the Main Script

Save this as `inbox_cleaner.py`:

```python
import os
import base64
import json
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import anthropic

SCOPES = ['https://www.googleapis.com/auth/gmail.modify']
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")
MAX_EMAILS = 50  # process up to 50 per run

def get_gmail_service():
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
    return build('gmail', 'v1', credentials=creds)

def get_email_body(payload):
    """Extract plain text body from email payload."""
    body = ""
    if 'parts' in payload:
        for part in payload['parts']:
            if part['mimeType'] == 'text/plain':
                data = part['body'].get('data', '')
                body = base64.urlsafe_b64decode(data).decode('utf-8', errors='ignore')
                break
    elif payload['mimeType'] == 'text/plain':
        data = payload['body'].get('data', '')
        body = base64.urlsafe_b64decode(data).decode('utf-8', errors='ignore')
    return body[:1500]  # limit tokens

def classify_email(client, subject, sender, body_snippet):
    """Ask Claude to classify an email."""
    prompt = f"""You are an inbox management assistant. Classify this email and decide what to do with it.

From: {sender}
Subject: {subject}
Body preview: {body_snippet}

Respond ONLY with a valid JSON object like this:
{{
  "action": "keep" | "archive" | "delete",
  "reason": "brief reason"
}}

Rules:
- "delete": newsletters, promotional blasts, no-reply marketing, sale announcements, spam
- "archive": receipts, shipping notifications, account alerts, one-time notifications (useful but not urgent)
- "keep": personal emails, direct communication, replies, action required, important accounts/bills

JSON only, no other text."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=150,
        messages=[{"role": "user", "content": prompt}]
    )
    
    try:
        return json.loads(response.content[0].text)
    except:
        return {"action": "keep", "reason": "parse error, defaulting to keep"}

def apply_action(service, msg_id, action):
    """Execute the action on Gmail."""
    if action == "archive":
        service.users().messages().modify(
            userId='me',
            id=msg_id,
            body={'removeLabelIds': ['INBOX']}
        ).execute()
    elif action == "delete":
        service.users().messages().trash(userId='me', id=msg_id).execute()
    # "keep" = do nothing

def run():
    service = get_gmail_service()
    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    # Fetch unread inbox emails
    results = service.users().messages().list(
        userId='me',
        labelIds=['INBOX', 'UNREAD'],
        maxResults=MAX_EMAILS
    ).execute()

    messages = results.get('messages', [])
    print(f"Found {len(messages)} unread inbox emails")

    stats = {"keep": 0, "archive": 0, "delete": 0}

    for msg in messages:
        msg_id = msg['id']
        full_msg = service.users().messages().get(
            userId='me', id=msg_id, format='full'
        ).execute()

        headers = {h['name']: h['value'] for h in full_msg['payload']['headers']}
        subject = headers.get('Subject', '(no subject)')
        sender = headers.get('From', '')
        body = get_email_body(full_msg['payload'])

        result = classify_email(client, subject, sender, body)
        action = result.get('action', 'keep')
        reason = result.get('reason', '')

        print(f"[{action.upper()}] {sender[:40]} | {subject[:50]} → {reason}")
        apply_action(service, msg_id, action)
        stats[action] += 1

    print(f"\n✅ Done. Kept: {stats['keep']} | Archived: {stats['archive']} | Deleted: {stats['delete']}")

if __name__ == "__main__":
    run()
```

---

## Step 3: Set Up the Cron Job

**3.1 — Make it run twice daily**

Open crontab:

```bash
crontab -e
```

Add these lines (runs at 7 AM and 7 PM):

```cron
0 7 * * * /usr/bin/python3 /path/to/inbox_cleaner.py >> /path/to/inbox_log.txt 2>&1
0 19 * * * /usr/bin/python3 /path/to/inbox_cleaner.py >> /path/to/inbox_log.txt 2>&1
```

**3.2 — Set your API key persistently**

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

Or use a `.env` file and load with `python-dotenv`.

---

## Step 4: Safety Measures (Important)

Before going live, add these safeguards:

**Dry-run mode** — test without actually modifying emails:

```python
DRY_RUN = True  # set to False when you're confident

def apply_action(service, msg_id, action):
    if DRY_RUN:
        print(f"  [DRY RUN] Would {action} message {msg_id}")
        return
    # ... actual code
```

**Whitelist senders** — never delete emails from specific addresses:

```python
WHITELIST = ["boss@company.com", "bank@mybank.com"]

# Before classify:
if any(w in sender for w in WHITELIST):
    print(f"[KEEP - WHITELISTED] {sender}")
    continue
```

---

## Step 5: Folder Structure

```
inbox-bot/
├── credentials.json      # from Google Cloud (keep secret!)
├── token.json            # auto-generated after auth
├── inbox_cleaner.py      # main script
├── auth_setup.py         # run once only
└── inbox_log.txt         # cron logs
```

---

## Quick Start Checklist

- [ ] Create Google Cloud project + enable Gmail API
- [ ] Download `credentials.json`
- [ ] Run `auth_setup.py` once to generate `token.json`
- [ ] Set `ANTHROPIC_API_KEY` env variable
- [ ] Run `inbox_cleaner.py` in **dry-run mode** first
- [ ] Review the logs, tune whitelist/rules
- [ ] Set `DRY_RUN = False` and add to crontab

---

This setup will cost roughly **$0.01–0.05/run** depending on email volume, since you're only sending short snippets to Claude. With 2 runs/day that's well under $3/month. Want me to add any features like email summaries, label-based routing, or a digest report?