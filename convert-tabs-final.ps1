# 将 @tab 替换为 ==
# 用法: .\convert-tabs-final.ps1 [-DryRun]

param(
    [string]$Path = "docs",
    [switch]$DryRun = $false
)

function Convert-TabSyntax {
    param(
        [string]$FilePath,
        [switch]$DryRun
    )
    
    $content = Get-Content -Path $FilePath -Raw -Encoding UTF8
    
    # 只替换 @tab 为 ==
    if ($content -match '@tab\s+') {
        $newContent = $content -replace '@tab\s+', '== '
        
        if ($DryRun) {
            Write-Host "Would modify: $FilePath" -ForegroundColor Yellow
        }
        else {
            Set-Content -Path $FilePath -Value $newContent -Encoding UTF8 -NoNewline
            Write-Host "Modified: $FilePath" -ForegroundColor Green
        }
        return $true
    }
    
    return $false
}

# 查找所有包含 @tab 的 Markdown 文件
Write-Host "Searching for Markdown files with @tab..." -ForegroundColor Cyan
$mdFiles = Get-ChildItem -Path $Path -Recurse -Filter *.md | Where-Object {
    $contentRaw = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    $contentRaw -match '@tab\s+'
}

if ($mdFiles.Count -eq 0) {
    Write-Host "No files found with @tab syntax." -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($mdFiles.Count) files to convert`n" -ForegroundColor Cyan

$totalFiles = 0
$modifiedFiles = 0

foreach ($file in $mdFiles) {
    $totalFiles++
    if (Convert-TabSyntax -FilePath $file.FullName -DryRun:$DryRun) {
        $modifiedFiles++
    }
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "Total files: $totalFiles"
Write-Host "Files modified: $modifiedFiles"

if ($DryRun) {
    Write-Host "`nDry run. To apply: .\convert-tabs-final.ps1" -ForegroundColor Yellow
} else {
    Write-Host "`nDone! Run: pnpm docs:dev" -ForegroundColor Green
}
