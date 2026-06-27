Ctrl + A → Jump to beginning of line  
Ctrl + E → Jump to end of line  
Ctrl + W → Delete one word backward  
Ctrl + U → Clear everything before cursor  
Ctrl + K → Clear everything after cursor  
Ctrl + L → Clear the screen (same as 'clear')  
Ctrl + C → Cancel current command  
Ctrl + Z → Suspend current process (bring back with 'fg')  
Alt + F → Jump forward one word  
Alt + B → Jump backward one word

```bash
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoredups:erasedups

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability
#force_color_prompt=yes
if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
        color_prompt=yes
    else
        color_prompt=
    fi
fi

# Git Branch Parser for the Prompt
parse_git_branch() {
    local BRANCH=$(git branch 2>/dev/null | grep '^*' | colrm 1 2)
    if [[ -n "$BRANCH" ]]; then
        local UNCLEAN=$(git status --porcelain 2>/dev/null | wc -l)
        local COLOR="\[\033[38;5;12m\]"
        local RESET="\[\033[38;5;15m\]"
        local SUFFIX=""

        if [[ "$UNCLEAN" -ne 0 ]]; then
            COLOR="\[\033[38;5;1m\]"
            SUFFIX=" (${UNCLEAN})"
        elif [[ $(git status 2>/dev/null) =~ "Branch ist auf demselben Stand" ]] || [[ $(git status 2>/dev/null) =~ "Your branch is up to date with" ]]; then
            COLOR="\[\033[38;5;12m\]"
        else
            COLOR="\[\033[38;5;208m\]"
        fi
        
        echo "-[${COLOR}${BRANCH}${SUFFIX}${RESET}]"
    fi
}

# Dynamic Prompt Generator
prompt_command() {
    local EXIT=$?
    local SMOKE="\[\033[38;5;12m\]"
    local DKGRAY="\[\033[38;5;8m\]"
    local DEFAULT="\[\033[38;5;15m\]"
    
    # Unicode box-drawing characters
    local UPPER=$'\u2553'
    local MIDDLE=$'\u2551'
    local LOWER=$'\u2559'

    export PS1="\n${DEFAULT}${UPPER}[${SMOKE}\D{%A, %e. %B %Y}${DEFAULT}]-[${SMOKE}\t${DEFAULT}]-[${EXIT}]\n${MIDDLE}   ${DKGRAY}\u@\H ${DEFAULT}\n${LOWER}[${SMOKE}\w${DEFAULT}]$(parse_git_branch)\n$ "
}

if [ "$color_prompt" = yes ]; then
    # Bind the prompt_command function so it runs on every new line
    PROMPT_COMMAND="prompt_command"
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# ==============================================================================
# ALIASES
# ==============================================================================

# some more ls aliases
alias la='ls -A'
alias l='ls -CF'

# Navigation
alias ..='cd ..'
alias ...='cd ../..'
alias ~='cd ~'
alias -- -='cd -'          # go back to previous directory

# Listing
alias ll='ls -alF'
alias lt='ls -ltr'         # list by time, newest last

# Safety net (ask before overwriting)
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Git shortcuts
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline --graph --decorate'
alias gco='git checkout'

# Docker shortcuts
alias dps='docker ps'
alias dc='docker-compose'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down'

# Dev shortcuts
alias pa='php artisan'
alias forge='rm composer.lock bootstrap/cache/{packages.php,services.php} && composer i && sh scripts/{update-forgeron-packages.sh,fix-permissions.sh} && php artisan migrate:fresh --seed && php artisan ziggy:generate && php artisan forgeron:lang:js && php artisan route:clear && php artisan config:clear && php artisan view:clear && npm run dev'
alias ni='npm install'
alias nrd='npm run dev'
alias crd='composer run dev'
alias nrb='npm run build'

# System
alias reload='source ~/.bashrc'

# Add an "alert" alias for long running commands. Use like so: sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Include external aliases
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features
if ! shopt -oq posix; then
    if [ -f /usr/share/bash-completion/bash_completion ]; then
        . /usr/share/bash-completion/bash_completion
    elif [ -f /etc/bash_completion ]; then
        . /etc/bash_completion
    fi
fi

# ==============================================================================
# ENVIRONMENT VARIABLES & PATHS
# ==============================================================================

export PATH="$PATH:$HOME/.config/composer/vendor/bin"

# NVM (Node Version Manager)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Go & System Binaries
export GOPATH="$HOME/go"
# Note: $HOME is used here instead of the hardcoded /home/mohamad/ to ensure it scales correctly on Uberspace.
export PATH="$HOME/.nvm/versions/node/v20.14.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:$HOME/.config/composer/vendor/bin:$PATH"

# Bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Homebrew (Safely checking before evaluation)
[ -f /bin/brew ] && eval "$(/bin/brew shellenv)"
[ -f /home/linuxbrew/.linuxbrew/bin/brew ] && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Global NPM Packages
export PATH="$HOME/.npm-global/bin:$PATH"

# OpenClaw Completion
if [ -f "$HOME/.openclaw/completions/openclaw.bash" ]; then
    source "$HOME/.openclaw/completions/openclaw.bash"
fi
 
```

Here is how to link them. Run this command once to append the loading instructions to your `.bash_profile`:

Bash

```
echo -e "\n# Load .bashrc if it exists\nif [ -f ~/.bashrc ]; then\n    source ~/.bashrc\nfi" >> ~/.bash_profile
```

Once you've done that, force the terminal to read your config right now without having to disconnect:

Bash

```
source ~/.bashrc
```

Try running `pa optimize:clear` again. It should immediately map to `php artisan optimize:clear`.


