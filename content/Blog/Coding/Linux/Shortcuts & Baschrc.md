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
export GEMINI_API_KEY=""
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

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

parse_git_branch() {
    local BRANCH=$(git branch 2>/dev/null | grep '^*' | colrm 1 2)
    if [[ $BRANCH ]]; then
       local UNCLEAN=$(git status --porcelain | wc -l)
       local COLOR=$(echo -e "\033[38;5;12m")
       local RESET=$(echo -e "\033[38;5;15m")
       local SUFFIX=""
       if [ $UNCLEAN != 0 ]; then
           COLOR=$(echo -e "\033[38;5;1m")
           SUFFIX=" (${UNCLEAN})"
       elif [[ $(git status 2>/dev/null) =~ "Branch ist auf demselben Stand" ]]; then
           COLOR=$(echo -e "\033[38;5;12m")
       elif [[ $(git status 2>/dev/null) =~ "Your branch is up to date with" ]]; then
           COLOR=$(echo -e "\033[38;5;12m")
       else
           COLOR=$(echo -e "\033[38;5;208m")
       fi
       echo "-[${COLOR}${BRANCH}${SUFFIX}${RESET}]"
    fi
}

prompt_command () {
   local EXIT='$?'
   local SMOKE="\[\033[38;5;12m\]"
   local DKGRAY="\]\[\033[38;5;8m\]"
   local DEFAULT="\]\[\033[38;5;15m\]"
   local UPPER=$'\u2553'
   local MIDDLE=$'\u2551'
   local LOWER=$'\u2559'
   export PS1="\n${DEFAULT}${UPPER}[${SMOKE}\D{%A, %e. %B %Y}${DEFAULT}]-[${SMOKE}\t${DEFAULT}]-[${EXIT}]\n${MIDDLE}   ${DKGRAY}\u@\H ${DEFAULT}\n${LOWER}[${SMOKE}\w${DEFAULT}]\$(parse_git_branch)\n\$ "
}

if [ "$color_prompt" = yes ]; then
    #PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    prompt_command
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
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias la='ls -A'
alias l='ls -CF'
alias pa='php artisan'
alias forge='rm composer.lock bootstrap/cache/{packages.php,services.php} && composer i && sh scripts/{update-forgeron-packages.sh,fix-permissions.sh} && php artisan migrate:fresh --seed && php artisan ziggy:generate && php artisan forgeron:lang:js && php artisan route:clear && php artisan config:clear && php artisan view:clear && npm run dev'
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
alias ni='npm install'
alias nrd='npm run dev'
alias crd='composer run dev'
alias nrb='npm run build'

# Reload shell config after editing
alias reload='source ~/.bashrc'
# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

export PATH="$PATH:$HOME/.config/composer/vendor/bin"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export GOPATH=/home/mohamad/go
export PATH=/home/mohamad/.nvm/versions/node/v20.14.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/home/mohamad/.config/composer/vendor/bin:/bin

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
eval "$(/bin/brew shellenv)"
eval "$(/bin/brew shellenv)"
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
export PATH="$(npm config get prefix)/bin:$PATH"

# OpenClaw Completion
source "/home/mohamad/.openclaw/completions/openclaw.bash"
export GEMINI_API_KEY='AIzaSyA7Et4mVYMSXq9O-3NIiUpeZKBX4IyWw5k'


´´´