### 1. The Script

Save this code as `~/.bashrc` (inside your user folder, e.g., `C:\Users\YourName\.bashrc`).1

Bash

```
# ~/.bashrc for Git Bash on Windows

# Force UTF-8 for the box drawing characters
export LANG='C.UTF-8'
export LC_ALL='C.UTF-8'

# Set Gemini Key
export GEMINI_API_KEY=""

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# History Settings
HISTCONTROL=ignoreboth
shopt -s histappend
HISTSIZE=1000
HISTFILESIZE=2000

# Check window size after each command
shopt -s checkwinsize

# Colored Prompt Settings
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# Force color if not detected
if [ -z "$color_prompt" ]; then
    color_prompt=yes
fi

# =========================================================
#  GIT PROMPT LOGIC
# =========================================================
parse_git_branch() {
    local BRANCH=$(git branch 2>/dev/null | grep '^*' | colrm 1 2)
    if [[ $BRANCH ]]; then
        local UNCLEAN=$(git status --porcelain 2>/dev/null | wc -l)
        local COLOR=$(echo -e "\033[38;5;12m") # Blue
        local RESET=$(echo -e "\033[38;5;15m") # White
        local SUFFIX=""
        
        # Capture status text for "up to date" checks
        local STATUSTEXT=$(git status 2>/dev/null)

        if [ $UNCLEAN != 0 ]; then
            COLOR=$(echo -e "\033[38;5;1m") # Red
            SUFFIX=" (${UNCLEAN})"
        elif [[ "$STATUSTEXT" =~ "Your branch is up to date" ]] || [[ "$STATUSTEXT" =~ "Branch ist auf demselben Stand" ]]; then
            COLOR=$(echo -e "\033[38;5;12m") # Blue
        else
            COLOR=$(echo -e "\033[38;5;208m") # Orange (Ahead/Behind)
        fi
        echo "-[${COLOR}${BRANCH}${SUFFIX}${RESET}]"
    fi
}

prompt_command () {
    local EXIT='$?'
    local SMOKE="\[\033[38;5;12m\]"
    local DKGRAY="\]\[\033[38;5;8m\]"
    local DEFAULT="\]\[\033[38;5;15m\]"
    # Box Drawing Characters
    local UPPER=$'\xe2\x95\x93' # ╓
    local MIDDLE=$'\xe2\x95\x91' # ║
    local LOWER=$'\xe2\x95\x99' # ╙

    # Git Bash sometimes needs explicit escapes for the title bar
    PS1="\n${DEFAULT}${UPPER}[${SMOKE}\D{%A, %e. %B %Y}${DEFAULT}]-[${SMOKE}\t${DEFAULT}]-[${EXIT}]\n${MIDDLE}   ${DKGRAY}\u@\h ${DEFAULT}\n${LOWER}[${SMOKE}\w${DEFAULT}]\$(parse_git_branch)\n\$ "
}

if [ "$color_prompt" = yes ]; then
    prompt_command
else
    PS1='\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# Title bar settings
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;\u@\h: \w\a\]$PS1"
    ;;
esac

# =========================================================
#  ALIASES
# =========================================================

# Enable colors for ls (Git Bash usually has this, but just in case)
alias ls='ls --color=auto'
alias grep='grep --color=auto'

# List aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Git aliases
alias gst='git status'
alias gam='git add . && git commit -m'

# PHP / Laravel
alias pa='php artisan'

# Complex Forge Alias
# Note: In Git Bash, paths are /c/Users/..., but relative paths work fine.
alias forge='rm -f composer.lock bootstrap/cache/{packages.php,services.php} && composer i && sh scripts/update-forgeron-packages.sh && sh scripts/fix-permissions.sh && php artisan migrate:fresh --seed && php artisan ziggy:generate && php artisan forgeron:lang:js && php artisan route:clear && php artisan config:clear && php artisan view:clear && npm run dev'

# Alert Alias (Adapted for Windows)
# Linux "notify-send" doesn't exist on Windows. 
# This version uses a sound beep and a simple echo.
alias alert='echo -e "\a" && echo "Task Complete!"'

# =========================================================
#  PATHS & COMPLETION
# =========================================================

# Load Git Bash completion (standard location for Git for Windows)
if [ -f /usr/share/git/completion/git-completion.bash ]; then
    . /usr/share/git/completion/git-completion.bash
fi

# NVM (If you installed NVM for Windows, it handles itself. 
# If you are using NVM-sh within Git Bash, use this:)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

# Add Composer/Go to Path
# Note: $HOME in Git Bash is usually /c/Users/YourName
export PATH="$PATH:$HOME/AppData/Roaming/Composer/vendor/bin"
export PATH="$PATH:$HOME/.config/composer/vendor/bin"
export PATH="$PATH:$HOME/go/bin"

# Enable bun if installed
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

### 2. How to install it

1. Open **Git Bash**.
    
2. Type `nano ~/.bashrc`
    
3. Paste the code above.
    
4. Press `Ctrl+O` to save, then `Enter`, then `Ctrl+X` to exit.
    
5. Important: Git Bash often looks for .bash_profile instead of .bashrc at startup. You need to make sure .bash_profile loads your new file.
    
    Run this command to create/update your profile:
    
    Bash
    
    ```
    echo "if [ -f ~/.bashrc ]; then . ~/.bashrc; fi" >> ~/.bash_profile
    ```
    
6. Restart Git Bash.
    

