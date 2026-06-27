### ## How to Set It Up (Step-by-Step)

This process is done once per project on your machine.

#### **1. Go to the Hooks Directory**

Navigate into the hidden `.git` folder within your project.

Shell

```
cd .git/hooks
```

You'll see a bunch of sample files there (like `commit-msg.sample`). We'll create a new one.

#### **2. Create the Hook File**

Create a new file named `prepare-commit-msg`.

Shell

```
touch prepare-commit-msg
```

#### **3. Add the Script Logic**

Open the new `prepare-commit-msg` file in your editor and paste the following script. This script finds the first number in your branch name and adds it to the start of your commit message.

Bash

```
#!/bin/bash

# The file where your commit message is stored
COMMIT_MSG_FILE=$1

# Get the current branch name (e.g., "feature/1305-new-login")
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Extract the first sequence of numbers from the branch name
TICKET_NUMBER=$(echo "$BRANCH_NAME" | grep -oE '[0-9]+' | head -n1)

# If a ticket number is found and the commit message is not empty...
if [ -n "$TICKET_NUMBER" ] && [ -s "$COMMIT_MSG_FILE" ]; then
  # Prepend the ticket number in the format "[#1305] " to the commit message
  sed -i.bak "1s/^/[#$TICKET_NUMBER] /" "$COMMIT_MSG_FILE"
fi
```

This script is safe—it only runs if it actually finds a number in your branch name, so it won't affect commits on branches like `develop` or `main`.

#### **4. Make the Hook Executable**

This is a crucial step. You need to give the file permission to be executed by Git.

Shell

```
chmod +x prepare-commit-msg
```

That's it! You're all set.

---

### ## How It Works Now

Your workflow won't change, but the result will.

1. You start a new feature with the ticket number in the branch name:
    
    git flow feature start 1305-user-profile-page
    
2. You make your changes, add the files, and commit as usual:
    
    git commit -m "Add user avatar component"
    
3. The hook runs silently in the background. It sees "1305" in your branch name and automatically prepends it.
    
4. Your final commit message will be saved as:
    
    [#1305] Add user avatar component
    

---

### ## Important: Sharing Hooks with Your Team

The `.git/hooks` directory is not tracked by Git, so this hook will only work on your machine. To share it with your team, the modern approach is:

1. Create a dedicated folder for hooks in your project's main directory, for example, .githooks.
    
    mkdir .githooks
    
2. Move your `prepare-commit-msg` script into that new folder.
    
3. Commit this new `.githooks` folder to your repository.
    
4. Tell Git to use this folder for its hooks by running this command. Everyone on the team will need to run this command once after cloning the project.
    
    git config core.hooksPath .githooks