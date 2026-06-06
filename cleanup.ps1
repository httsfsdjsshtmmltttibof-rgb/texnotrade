$backupDir = "C:\Users\ASUS\Desktop\proftexnotrade\scripts_backup"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

$filesToMove = @(
    "fix-init.js",
    "fix-init.ps1",
    "fix-translations.js",
    "fix.ps1",
    "fix.py",
    "fix2.ps1",
    "fix3.ps1",
    "fix_absolute.ps1",
    "fix_absolute2.ps1",
    "fix_syntax.ps1",
    "fix_syntax.py",
    "fix_syntax2.ps1",
    "patch.js",
    "update-badges.js",
    "update-edgers.js",
    "update-lasers.js",
    "update-me1.js",
    "update-script.js",
    "copy_script.ps1",
    "script.js"
)

foreach ($file in $filesToMove) {
    $filePath = "C:\Users\ASUS\Desktop\proftexnotrade\$file"
    if (Test-Path $filePath) {
        Move-Item -Path $filePath -Destination $backupDir -Force
    }
}
Write-Output "Cleanup complete"
