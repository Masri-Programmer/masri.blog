## Setting Up Command Shortcuts for Laravel Development

This guide explains how to create shortcuts (aliases) in your terminal to streamline common Laravel development tasks. This can save you time and reduce typing.

**Goal:**

1. Create a shortcut `php a` to execute `php artisan` commands.
2. Create a shortcut `forge` to run a series of commands for a specific workflow (in this case, related to "xxx" packages, database migrations, Ziggy, language generation, and clearing caches).

**Steps:**

**1. Editing Your Shell Configuration File:**

Your terminal uses a shell program (like Bash or Zsh). These shells have configuration files where you can define aliases.

- **For Bash:** The configuration file is usually `~/.bashrc`.
- **For Zsh:** The configuration file is usually `~/.zshrc`.

You'll need to open this file in a text editor. You can use commands like `nano`, `vim`, or `code` (if you have VS Code's command-line tools installed).

[[private/📁 General/💻 Development/Bash|Bash Settings]]

```
# For Bash
nano ~/.bashrc

# For Zsh
nano ~/.zshrc
```

**2. Adding the `php artisan` Alias:**

Inside the configuration file, add the following line at the end:

[[private/📁 General/💻 Development/Bash|Bash Settings]]

```
alias a='php artisan'
```

- `alias`: This is the command used to define a new alias.
- `a`: This is the shortcut you want to use.
- `'php artisan'`: This is the actual command that will be executed when you type `a`.

**3. Adding the `forge` Workflow Alias:**

Next, add the following line to your configuration file:

[[private/📁 General/💻 Development/Bash|Bash Settings]]

```
alias forge='rm composer.lock bootstrap/cache/{packages.php,services.php} && composer i && sh scripts/{update.sh,fix-permissions.sh} && php artisan migrate:fresh --seed && php artisan ziggy:generate && php artisan xxxx:lang:js && php artisan route:clear && php artisan config:clear && php artisan view:clear'
```

- `alias`: Again, defines a new alias.
- `forge`: This is the shortcut for your custom workflow.
- The rest of the line is a sequence of commands joined by `&&`. This means each command will run in order, and the next command will only execute if the previous one was successful.
    - `rm composer.lock bootstrap/cache/{packages.php,services.php}`: Deletes the Composer lock file and specific cache files.
    - `composer i`: Installs the Composer dependencies.
    - `sh scripts/{update-xxx-packages.sh,fix-permissions.sh}`: Executes two shell scripts.
    - `php artisan migrate:fresh --seed`: Drops all tables, re-runs migrations, and executes seeders.
    - `php artisan ziggy:generate`: Generates the Ziggy JavaScript routes file.
    - `php artisan xxx:lang:js`: Generates JavaScript language files (specific to your "xxx" packages).
    - `php artisan route:clear`: Clears the route cache.
    - `php artisan config:clear`: Clears the configuration cache.
    - `php artisan view:clear`: Clears the view cache.

**4. Applying the Changes:**

After adding these lines to your configuration file, you need to tell your current terminal session to reload the configuration. You can do this using the `source` command:

Bash

```
# For Bash
source ~/.bashrc

# For Zsh
source ~/.zshrc
```

**5. Using the Shortcuts:**

Now, in any new terminal window (or the current one after running the `source` command) while you are in your Laravel project's root directory:

- You can run Artisan commands like this:
    
    Bash
    
    ```
    php a migrate
    php a make:controller UserController
    php a queue:work
    ```
    
- You can execute your entire workflow with:
    
    Bash
    
    ```
    forge
    ```
    

**Important Considerations:**

- **Location:** These shortcuts are most useful when you are in the root directory of your Laravel project (where the `artisan` file and `composer.json` are located).
- **Customization:** You can adapt the `forge` alias to include any sequence of commands you frequently use in your development process.
- **Shell Specific:** These instructions are for Bash and Zsh, which are common on macOS and Linux. The process might be slightly different on Windows if you are using a different shell (like PowerShell).
- **Error Handling:** The `&&` operator will stop the execution of the `forge` alias if any of the preceding commands fail. You might want to consider more robust scripting for complex workflows that require error handling.

By setting up these aliases, you can significantly speed up your common Laravel development tasks. Remember to adapt the `forge` alias to match your specific project needs and workflow.