# Lazygit Gemini Configuration Guide

This guide explains how to configure **Lazygit** to use **Google Gemini 3 Pro** for generating commit messages on any device.

## Prerequisites

Ensure you have the following installed on your system:
- `curl`
- `jq` (JSON processor)
- `lazygit`
- `git`

## Step 1: Create the Helper Script

Create a script file at `~/.config/lazygit/gemini_commit_msg.sh`.

```bash
#!/bin/bash

# Check if GEMINI_API_KEY is set
if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY is not set."
    exit 1
fi

# Get the current branch name
BRANCH_NAME=$(git symbolic-ref --short HEAD 2>/dev/null)
if [ -z "$BRANCH_NAME" ]; then
    echo "Error: Not in a git repository or detached HEAD."
    exit 1
fi

# Extract ticket number (e.g., 123 from feature/123-foo)
TICKET_ID=$(echo "$BRANCH_NAME" | grep -oE '[0-9]+' | head -n 1)

# Get staged changes
DIFF=$(git diff --cached --diff-algorithm=minimal)

if [ -z "$DIFF" ]; then
    echo "Error: No staged changes found."
    exit 1
fi

# Construct the prompt
PROMPT="You are an expert developer. Write a commit message for the following git diff.
The commit message MUST follow the Conventional Commits format: <type>: <description>.
The type must be one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.
Keep the description concise (under 72 characters if possible).
Do NOT include the ticket number in your output, I will add it myself.
Do NOT output anything else, just the commit message line.

Diff:
$DIFF"

# Model Configuration
MODEL="gemini-3-pro-preview"

PAYLOAD=$(jq -n \
    --arg text "$PROMPT" \
    '{
        contents: [{
            parts: [{
                text: $text
            }]
        }]
    }')

# Call Gemini API
RESPONSE=$(curl -s -X POST \
    -H "Content-Type: application/json" \
    -d "$PAYLOAD" \
    "https://generativelanguage.googleapis.com/v1beta/models/$MODEL:generateContent?key=$GEMINI_API_KEY")

# Extract the text
COMMIT_MSG=$(echo "$RESPONSE" | jq -r '.candidates[0].content.parts[0].text' | tr -d '\n')

if [ -z "$COMMIT_MSG" ] || [ "$COMMIT_MSG" == "null" ]; then
    echo "Error: Failed to generate commit message."
    echo "Response: $RESPONSE"
    exit 1
fi

# Format the final message
if [ -n "$TICKET_ID" ]; then
    echo "(#$TICKET_ID) $COMMIT_MSG"
else
    echo "$COMMIT_MSG"
fi
```

Make the script executable:
```bash
chmod +x ~/.config/lazygit/gemini_commit_msg.sh
```

## Step 2: Configure Lazygit

Add the following to your `~/.config/lazygit/config.yml` file under the `customCommands` section:

```yaml
customCommands:
  - key: 'C'
    context: 'files'
    description: 'Generate commit message with Gemini'
    command: 'git commit -m "$(bash ~/.config/lazygit/gemini_commit_msg.sh)" -e'
    subprocess: true
```

## Step 3: Set Your API Key

Export your Gemini API key in your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`, or `~/.profile`):

```bash
export GEMINI_API_KEY="your_actual_api_key_here"
```

Reload your shell or restart your terminal.

## Usage

1.  Open Lazygit in your repository.
2.  Stage your changes.
3.  Press `C` (Shift+C) in the **Files** panel.
4.  Review the generated commit message in your editor.