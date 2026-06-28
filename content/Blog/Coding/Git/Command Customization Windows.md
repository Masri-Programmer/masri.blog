### How to install this

1. Open PowerShell.
    
2. Type the following command to edit your profile (it will create the file if it doesn't exist):
    
    PowerShell
    
    ```
    notepad $PROFILE
    ```
    
3. **Paste the code below** into that file.
    
4. Save and close Notepad.
    
5. Restart PowerShell or type `. $PROFILE` to reload.
    

### The PowerShell Script (`$PROFILE`)

PowerShell

```
# ==================================================
# Environment Variables
# ==================================================
$env:GEMINI_API_KEY = ""

# Set Composer/NVM/Go paths (Adjusted for Windows structure)
# You may need to adjust exact paths like 'C:\Users\YourName'
$env:PATH += ";$HOME\AppData\Roaming\Composer\vendor\bin"
$env:PATH += ";$HOME\.config\composer\vendor\bin" 
$env:PATH += ";$HOME\go\bin"
# Note: NVM for Windows usually manages the path automatically, 
# but if you need specific additions, add them here.

# ==================================================
# Console Settings
# ==================================================
# Enable ANSI color support in older Windows builds
if ($Host.UI.SupportsVirtualTerminal) { 
    $Host.UI.RawUI.WindowTitle = "$env:USERNAME@$env:COMPUTERNAME : $(Get-Location)" 
}

# ==================================================
# Aliases & Functions
# ==================================================

# List directory aliases
function ll { Get-ChildItem -Force -Verbose }
function la { Get-ChildItem -Force }
Set-Alias l Get-ChildItem

# Git aliases
function gst { git status }
function gam { git add .; git commit -m $args }

# PHP / Laravel aliases
function pa { php artisan $args }

# The complex 'forge' alias converted to a PowerShell function
function forge {
    Write-Host "Running Forge Sequence..." -ForegroundColor Yellow
    
    # Chain commands using logical checks
    try {
        if (Test-Path "composer.lock") { Remove-Item "composer.lock" -ErrorAction SilentlyContinue }
        if (Test-Path "bootstrap/cache/packages.php") { Remove-Item "bootstrap/cache/packages.php" -ErrorAction SilentlyContinue }
        if (Test-Path "bootstrap/cache/services.php") { Remove-Item "bootstrap/cache/services.php" -ErrorAction SilentlyContinue }
        
        cmd /c "composer i"
        
        # Assuming 'sh' is in your path (e.g., from Git Bash) for .sh scripts
        if (Get-Command sh -ErrorAction SilentlyContinue) {
            sh scripts/update-forgeron-packages.sh
            sh scripts/fix-permissions.sh
        } else {
            Write-Warning "'sh' command not found. Skipping shell scripts."
        }

        php artisan migrate:fresh --seed
        php artisan ziggy:generate
        php artisan forgeron:lang:js
        php artisan route:clear
        php artisan config:clear
        php artisan view:clear
        npm run dev
    }
    catch {
        Write-Error "An error occurred during the forge sequence."
    }
}

# ==================================================
# Custom Prompt Logic (The Box Style)
# ==================================================

function Get-GitStatusFormatted {
    $branch = git branch --show-current 2>$null
    if (-not $branch) { return "" }

    $status = git status --porcelain 2>$null
    $statusText = git status 2>$null | Out-String
    
    $colorCode = "12" # Blue (Clean/Synced)
    $suffix = ""

    # Logic to match your bash script colors
    if ($status) {
        # Changes exist (Unclean)
        $count = ($status | Measure-Object -Line).Lines
        $colorCode = "1" # Red
        $suffix = " ($count)"
    }
    elseif ($statusText -match "Your branch is up to date" -or $statusText -match "Branch ist auf demselben Stand") {
        $colorCode = "12" # Blue
    }
    else {
        # Ahead or Behind (Orange/208 approximated to Magenta or standard Yellow for Windows compatibility)
        $colorCode = "208" 
    }

    # ANSI Escape sequence for color
    $esc = [char]27
    return "-[$esc[38;5;${colorCode}m$branch$suffix$esc[38;5;15m]"
}

function prompt {
    $lastExitCode = $LASTEXITCODE
    
    # Colors (ANSI 256)
    $esc = [char]27
    $cSmoke = "$esc[38;5;12m"  # Blue-ish
    $cDkGray = "$esc[38;5;8m"  # Dark Gray
    $cDefault = "$esc[38;5;15m" # White
    $cReset = "$esc[0m"

    # Box Characters
    $upper = [char]0x2553 # ╓
    $middle = [char]0x2551 # ║
    $lower = [char]0x2559 # ╙

    # Date and Time
    $dateStr = Get-Date -Format "dddd, dd. MMMM yyyy"
    $timeStr = Get-Date -Format "HH:mm:ss"
    
    # Path (shortened like \w)
    $currentDir = (Get-Location).Path.Replace($HOME, "~")

    # Git Status
    $gitInfo = Get-GitStatusFormatted

    # Line 1: ╓ [Date]-[Time]-[ExitCode]
    Write-Host -NoNewline "$cDefault$upper[$cSmoke$dateStr$cDefault]-[$cSmoke$timeStr$cDefault]-[$lastExitCode]"
    
    # Line 2: ║   User@Host
    Write-Host -NoNewline "`n$middle   $cDkGray$env:USERNAME@$env:COMPUTERNAME$cDefault"
    
    # Line 3: ╙ [Path]-[Git]
    Write-Host -NoNewline "`n$lower[$cSmoke$currentDir$cDefault]$gitInfo"
    
    # Line 4: $ 
    return "`n$ "
}
```