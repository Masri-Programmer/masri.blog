---
title: "25+ Essential Linux Bash Commands Every Aspiring DevOps Must Know"
source: "https://dev.to/knight03/25-essential-linux-bash-commands-every-aspiring-devops-must-know-17cl?ref=dailydev"
author:
  - "DEV Community"
published: 2025-02-21
created: 2025-03-28
description: "I'm on a journey to become a DevOps professional, so like many others, I jumped straight into... Tagged with linux, bash, terminal, beginners."
tags: 
---
I'm on a journey to become a DevOps professional, so like many others, I jumped straight into Docker—it's undeniably essential. I even learned the basics [check out this guide](https://dev.to/knight03/docker-101-a-simple-clear-introduction-5fhh). But later, I realized just how important Linux is, so I naturally started with Bash😅.

If you want video explanation then [please refer this](https://youtu.be/oxuRxtrO2Ag?si=G1jqICSrSJJWUCoK)

---

## Table of Contents

[1\. Getting Started: The Terminal Environment](https://dev.to/knight03/?ref=dailydev#1-getting-started-the-terminal-environment)  
[2\. Basic Navigation and Directory Management](https://dev.to/knight03/?ref=dailydev#2-basic-navigation-and-directory-management)  
[3\. File and Directory Management](https://dev.to/knight03/?ref=dailydev#3-file-and-directory-management)  
[4\. Viewing and Editing File Content](https://dev.to/knight03/?ref=dailydev#4-viewing-and-editing-file-content)  
[5\. Searching and Filtering Text](https://dev.to/knight03/?ref=dailydev#5-searching-and-filtering-text)  
[6\. Managing Permissions and System Commands](https://dev.to/knight03/?ref=dailydev#6-managing-permissions-and-system-commands)  
[7\. Additional Helpful Commands](https://dev.to/knight03/?ref=dailydev#7-additional-helpful-commands)  
[8\. Pipes and Redirection](https://dev.to/knight03/?ref=dailydev#8-pipes-and-redirection)  
[9\. Best Practices and Tips for Beginners](https://dev.to/knight03/?ref=dailydev#9-best-practices-and-tips-for-beginners)  
[10\. Conclusion](https://dev.to/knight03/?ref=dailydev#10-conclusion)

---

## 1\. Getting Started: The Terminal Environment

Before diving into commands, remember that the terminal is your gateway to interacting directly with the operating system.  
  
**Quick Tips:**

| Shortcut | Action |
| --- | --- |
| `Ctrl + C` | Force-stop a running command |
| `Ctrl + Z` | Pause a process |
| `Tab` | Auto-complete filenames |
| `Ctrl + R` | Search command history |
| `!!` | Repeat the last command |

---

## 2\. Basic Navigation and Directory Management

### ls – Listing Directory Contents

Lists files and directories within the current folder.

- **Basic usage:**
```
ls
```

**Sample Output:**  

```
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```
- **Detailed list:**
```
ls -l
```

**Sample Output:**  

```
drwxr-xr-x  2 user user 4096 Feb 20 09:00 Desktop
  drwxr-xr-x  5 user user 4096 Feb 19 08:45 Documents
  -rw-r--r--  1 user user  123 Feb 20 08:00 file.txt
```

*Note: We'll understand this zombie language in the output later—don't worry!*

- **Including hidden files:**
```
ls -a
```

**Sample Output:**  

```
.  ..  .bashrc  Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```

*Explanation:*

- `-l` = "long format" (detailed information).
- `-a` = "all", including hidden files (files starting with a dot).

---

### cd – Changing Directories

Navigate between directories.

- **Move into a directory:**
```
cd Documents
```

**Output:**  

```
<your_email_or_username>:~/Documents
```
- **Go back to the parent directory:**
```
cd ..
```

*(your prompt reflects the parent directory.)*

- **Return to your home directory:**
```
cd ~
```

*Tip:* Simply typing `cd` without arguments does the same.

---

### pwd – Print Working Directory

Displays the full path of your current directory.

- **Usage:**
```
pwd
```

**Sample Output:**  

```
/home/username/Documents
```

---

## 3\. File and Directory Management

### mkdir – Making Directories

Create new folders.

- **Basic creation:**
```
mkdir new_folder
```
- **Creating nested directories:**
```
mkdir -p Projects/2025/January
```

---

### touch – Creating or Updating Files

Creates an empty file or updates its modification timestamp.

- **Example:**
```
touch file.txt
```

---

### cp – Copying Files and Directories

Copies files or directories to another location.

- **Copy a file:**
```
cp file.txt file_backup.txt
```
```
ls
```

**Sample Output:**  

```
file.txt  file_backup.txt  Documents  Downloads  ...
```
- **Copy a directory recursively:**
```
cp -r folder1 folder2
```
- **Copy Directory Command (Explicit Example):**
```
cp -r /path/to/source_directory /path/to/destination_directory
```

**Explanation:**  
  
The `-r` flag (recursive) ensures that the entire directory—including subdirectories and files—is copied.

---

### mv – Moving and Renaming Files

Moves files between directories or renames them.

- **Move a file to another directory:**
```
mv file.txt Documents/
```

**Output:**

- The file is now inside the `Documents` directory.
	- **Rename a file:**
```
mv oldname.txt newname.txt
```

**Output:**

- The file now appears as `newname.txt` in the directory.

---

### rm – Removing Files and Directories

Deletes files or directories (use with caution—removals are irreversible by default).

- **Remove a file:**
```
rm file.txt
```
- **Remove a directory and its contents:**
```
rm -r folder
```
- **Force removal without prompting:**
```
rm -rf dangerous_folder
```

---

## 4\. Viewing and Editing File Content

### cat – Concatenating, Displaying, and Appending File Content

The `cat` command is versatile and can be used to display file contents, merge files, or even append new content to an existing file.

- **Display a file’s content:**
```
cat file.txt
```

**Sample Output:**  

```
This is a sample text file.
  It has multiple lines.
```
- **Merge files into one:**
```
cat file1.txt file2.txt > combined.txt
```

**Output:**  
  
*(No direct output; use `cat combined.txt` to view the merged content.)*

- **Append text to a file interactively:**
```
cat >> file.txt
```

**Usage:**

- After running the command, your terminal will wait for you to enter text.
- Type in your additional content.
- When you’re finished, press **Ctrl+D** (EOF) to save the appended text and return to the command prompt.

**Example Interaction:**  

```
cat >> file.txt
  This is an appended line.
  And another appended line.
  [Press Ctrl+D here]
```

**Result:**  
  
The contents of `file.txt` will now include the new lines at the end:  

```
This is a sample text file.
  It has multiple lines.
  This is an appended line.
  And another appended line.
```

---

### less – Viewing Files Page-by-Page

Ideal for browsing large files.

- **Usage:**
```
less longfile.txt
```
- **Behavior:**
	- The content of `longfile.txt` is displayed one screen (or line) at a time.
	- Navigate using the arrow keys, space bar, Enter, or Page Up/Page Down.
	- Exit by pressing `q`.

#### Note: While less is more feature-rich, the more command also allows you to view text files one page at a time.

### head and tail – Viewing the Beginning or End of Files

Quickly view the first or last few lines of a file.

- **Display the first 10 lines:**
```
head file.txt
```

**Sample Output:**  

```
Line 1: Introduction to Linux
  Line 2: Basic Commands
  ...
  Line 10: Summary
```
- **Display the last 10 lines:**
```
tail file.txt
```

**Sample Output:**  

```
Line 90: Advanced Topics
  Line 91: Tips and Tricks
  ...
  Line 100: Conclusion
```
- **Custom number of lines:**
```
head -n 5 file.txt
  tail -n 5 file.txt
```

---

### clear – Clearing the Terminal Screen

Keep your workspace uncluttered.

- **Usage:**
```
clear
```

**Output:**  
  
*(Clears the terminal, leaving you with a fresh prompt.)*

---

## 5\. Searching and Filtering Text

### grep – Searching for Patterns

Find specific text within files.

- **Basic search for a pattern:**
```
grep "error" log.txt
```

**Sample Output:**  

```
[ERROR] 2025-02-20 09:30: An error occurred in the application.
```
- **Case-insensitive search:**
```
grep -i "warning" log.txt
```

**Sample Output:**  

```
[WARNING] 2025-02-20 09:31: This is a warning message.
```
- **Recursive search in directories:**
```
grep -r "pattern" /path/to/directory
```

**Output:**  
  
*(Displays matching lines from all files within the directory tree.)*

---

### find – Locating Files and Directories

Search for files by name or other attributes.

- **Find a file by name in the current directory:**
```
find . -name "file.txt"
```

**Sample Output:**  

```
./Documents/file.txt
```
- **Search for directories starting with "config":**
```
find . -type d -name "config*"
```

**Output:**  
  
*(Lists directories that match the given pattern.)*

---

## 6\. Managing Permissions and System Commands

### chmod – Changing File Permissions

[![File Permissions](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ds6ypsli59zc0cpss2a.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ds6ypsli59zc0cpss2a.png)

Modify access permissions for files and directories.

- **Example:**
```
chmod 755 script.sh
```

**Explanation & Output:**

- `755` means:
	- Owner: read, write, execute
	- Group and Others: read, execute
- *If successful, verify using:*  
	```shell
	ls -l script.sh
	```
	**Sample Verification Output:**
```
-rwxr-xr-x 1 user user 1024 Feb 20 09:00 script.sh
```

*Tip: Experiment with different permission levels to learn more about access control.*

---

### sudo – Executing Commands with Superuser Privileges

Run commands that require administrative rights.

- **Example (updating package lists on a Debian-based system):***(If you’re not familiar with Debian-based systems, [check this out](https://linuxjourney.com/lesson/linux-history).)*
```
sudo apt update
```

**Sample Output:**  

```
Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  Get:2 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  ...
  Reading package lists... Done
```

*Note: You’ll be prompted to enter your password.*

---

### man – Accessing Manual Pages

View detailed documentation for commands.

- **Example:**
```
man ls
```

**Output:**

- Opens the manual page for `ls` in a paginated view.
- *Navigate using arrow keys and press `q` to exit.*

---

### echo – Printing Text and Redirecting Output

Display messages or write text to files.

- **Print a message to the terminal:**
```
echo "Hello, Linux!"
```

**Sample Output:**  

```
Hello, Linux!
```
- **Write text to a file (overwriting the file):**
```
echo "Hello, Linux!" > greetings.txt
```

**Output:**  
  
*(No output; verify by running `cat greetings.txt`.)*

- **Append text to a file:**
```
echo "Welcome back!" >> greetings.txt
```

**Output:**  
  
*(No output; the text is appended to `greetings.txt`.)*

---

## 7\. Additional Helpful Commands

### history – Viewing Command History

Review commands you’ve recently executed.

- **Usage:**
```
history
```

**Sample Output:**  

```
1  ls -l
  2  cd Documents
  3  cat file.txt
  ...
```

---

### alias – Creating Command Shortcuts

Simplify long commands by creating aliases.

- **Example:**
```
alias ll='ls -alF'
```

**Output:**  
  
*(No output; the alias is now set for the current session. Add to your `~/.bashrc` for persistence.)*

---

### df and du – Disk Space Usage

Monitor your disk usage.

- **`df` – Display disk free space in a human-readable format:**
```
df -h
```

**Sample Output:**  

```
Filesystem      Size  Used Avail Use% Mounted on
  /dev/sda1        50G   20G   28G  42% /
  tmpfs           7.8G     0  7.8G   0% /dev/shm
```
- **`du` – Show disk usage for files and directories:**
```
du -sh *
```

**Sample Output:**  

```
4.0K    file.txt
  1.2M    Documents
  500K    Downloads
```

---

## 8\. Pipes and Redirection

Pipes and redirection are powerful features in Bash that allow you to control how data flows between commands and files, enabling you to build complex command sequences and automate tasks efficiently.

### Pipes (|)

- **Purpose:**  
	  
	A pipe ( `|` ) takes the output (stdout) of one command and sends it directly as input (stdin) to another command.
- **Example 1: Paginating Output**
```
ls -l | less
```

**Explanation:**

- `ls -l` produces a detailed list of files.
- `less` displays this output one page at a time.
	- **Example 2: Filtering Data**
```
dmesg | grep "error"
```

**Explanation:**

- `dmesg` outputs system messages.
- `grep "error"` filters for lines containing "error".

### Redirection

Redirection lets you change where the output of a command goes or where the command reads its input.

#### Standard Output Redirection (>)

- **Purpose:**Redirects command output to a file, overwriting the file if it exists.
- **Example:**
```
echo "Hello, Linux!" > greetings.txt
```

**Explanation:**

- Writes "Hello, Linux!" to `greetings.txt`.

#### Appending Output (>>)

- **Purpose:**Appends command output to the end of a file instead of overwriting it.
- **Example:**
```
echo "Welcome back!" >> greetings.txt
```

**Explanation:**

- Adds "Welcome back!" to the end of `greetings.txt`.

#### Standard Input Redirection (<)

- **Purpose:**Directs a command to take input from a file.
- **Example:**
```
sort < unsorted.txt
```

**Explanation:**

- `sort` reads from `unsorted.txt` and outputs sorted results.

#### Combining Pipes and Redirection

You can mix pipes and redirection for advanced tasks. For example:

- **Save Filtered Output to a File:**
```
dmesg | grep "error" > errors.txt
```

**Explanation:**

- Filters `dmesg` output for "error" and saves it to `errors.txt`.

---

## 9\. Best Practices and Tips for Beginners

- **Double-check before deleting:**Always review what you’re deleting, especially when using recursive options like `rm -rf`.
- **Use `man` or `--help`:**If in doubt, check the manual or use `command --help` for guidance.
- **Keep your system updated:**Regularly run commands like `sudo apt update` (on Debian-based systems) to maintain software currency.
- **Experiment safely:**Use a test directory or virtual machine to try out commands without risking important files.

---

## 10\. Conclusion

That's all for not, this guide covers the essentials of the Linux Bash terminal—from navigation and file management to searching, permissions, and system maintenance. With these commands, sample outputs, and best practices at your fingertips, you're well on your way to mastering the Linux command line.a critical skill for any aspiring DevOps professional.

Happy coding and exploring!

---

 [![profile](https://media2.dev.to/dynamic/image/width=64,height=64,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F2028%2F55d4ec28-b9c7-4adb-bd8f-08fad8f4c075.png) Timescale](https://dev.to/timescale) Promoted

[![Image of Timescale](https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxxx6qtsa80l2bomxcrjp.png)](https://dev.to/timescale/benchmarking-databases-for-real-time-analytics-applications-f2d?bb=219677)