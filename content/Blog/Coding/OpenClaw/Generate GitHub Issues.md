Got you — let’s do this **step-by-step from zero**, no assumptions. Follow these exactly and you’ll have a working weekly cron job that creates issues.

---

# 🧭 Goal

Every Monday, GitHub automatically creates an issue in your repos.

---

# ✅ Step 1 — Pick ONE repo to host the workflow

You only need the workflow in **one repo** (a “controller” repo).

👉 Choose one of these:

- your backend repo
    
- your frontend repo
    
- or a dedicated `automation` repo (best long-term)
    

For now, pick one existing repo.

---

# ✅ Step 2 — Create the workflow file

In that repo:

1. Go to **Code**
    
2. Click **Add file → Create new file**
    
3. Name it EXACTLY:
    

```
.github/workflows/scheduled-issue.yml
```

⚠️ The path must be exact.

---

# ✅ Step 3 — Paste the working workflow

Delete everything and paste this **fully working version**:

```yaml
name: Scheduled Issue Creator

on:
  schedule:
    - cron: "0 0 * * 1" # every Monday 00:00 UTC
  workflow_dispatch:

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      contents: read

    steps:
      - name: Create weekly issues
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          set -e

          TITLE="[Technical Debt] Weekly Dependency Audit"

          BODY=$(cat <<'EOF'
          ### Type
          technical-debt

          ### Source
          scheduled-audit

          ### Priority
          medium

          ### Description
          Automated check for outdated Vue/Laravel dependencies.

          ### Expected Behavior
          All packages should be on the latest stable versions.

          ### Steps to Reproduce
          1. Run `npm outdated`
          2. Run `composer outdated`

          ### Context
          - Stack: Vue 3, Laravel, Tailwind
          EOF
          )

          REPOS=(
            "YOUR_USERNAME/repo-frontend-vue"
            "YOUR_USERNAME/repo-backend-laravel"
          )

          for REPO in "${REPOS[@]}"; do
            echo "Creating issue in $REPO"

            gh issue create \
              --repo "$REPO" \
              --title "$TITLE" \
              --body "$BODY" \
              --label "Technical Debt" || true
          done
```

---

# 🚨 Step 4 — IMPORTANT: Replace your username

You MUST edit this part:

```bash
REPOS=(
  "YOUR_USERNAME/repo-frontend-vue"
  "YOUR_USERNAME/repo-backend-laravel"
)
```

### Example

If your GitHub username is `john-dev`:

```bash
REPOS=(
  "john-dev/repo-frontend-vue"
  "john-dev/repo-backend-laravel"
)
```

⚠️ If this is wrong → issues will NOT be created.

---

# ✅ Step 5 — Commit the file

Scroll down → click:

**Commit changes**

---

# ✅ Step 6 — Enable workflow permissions (MOST MISSED STEP)

In the SAME repo:

1. Go to **Settings**
    
2. Click **Actions → General**
    
3. Scroll to **Workflow permissions**
    
4. Select:
    

✅ **Read and write permissions**

5. Save
    

⚠️ Without this, issue creation fails.

---

# ✅ Step 7 — Create the label in target repos

In EACH repo where issues will be created:

1. Go to **Issues → Labels**
    
2. Create label:
    

```
Technical Debt
```

(Exact spelling matters)

---

# ✅ Step 8 — Run it manually once (very important)

Scheduled jobs don’t always start immediately.

Do this:

1. Go to **Actions**
    
2. Click **Scheduled Issue Creator**
    
3. Click **Run workflow**
    
4. Run
    

---

# ✅ Step 9 — Verify it worked

Check your target repos.

You should see:

✅ new issue created  
✅ correct title  
✅ correct body

---

# 🕐 Step 10 — Let cron take over

Your cron:

```
0 0 * * 1
```

Means:

- Monday
    
- midnight UTC
    
- every week
    

In Germany (winter):

👉 runs at **01:00 Monday**

---

# 🚨 If it doesn’t work

Check the Actions logs for errors.

**Most common causes:**

- wrong repo name
    
- missing label
    
- permissions not set
    
- workflow not on default branch
    

---

# ✅ Minimal success checklist

Before you test, confirm:

-  workflow file exists
    
-  username replaced
    
-  permissions = read/write
    
-  label exists
    
-  manual run triggered
    

---

---

## 👍 When you're ready for the next level

Say the word and I’ll help you add:

- duplicate prevention
    
- OpenClaw auto-triage
    
- only create issue when deps outdated
    
- org-wide automation
    

Just tell me 🚀