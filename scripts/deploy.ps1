param(
  [string]$Message = "update site",
  [switch]$NoCommit,
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if ($env:npm_config_message) {
  $Message = $env:npm_config_message
}

if ($env:npm_config_nocommit -or $env:npm_config_no_commit) {
  $NoCommit = $true
}

if ($env:npm_config_nopush -or $env:npm_config_no_push) {
  $NoPush = $true
}

function Run-Step {
  param(
    [string]$Title,
    [scriptblock]$Command
  )

  Write-Host ""
  Write-Host "==> $Title" -ForegroundColor Cyan
  & $Command
}

Run-Step "Building production bundle" {
  npm run build
}

$distPath = Join-Path $repoRoot "dist"
if (-not (Test-Path $distPath)) {
  throw "Build output folder not found: $distPath"
}

Run-Step "Copying dist output to repository root for GitHub Pages" {
  Copy-Item -Path (Join-Path $distPath "*") -Destination $repoRoot -Recurse -Force
}

Run-Step "Current git changes" {
  git status --short
}

if ($NoCommit) {
  Write-Host ""
  Write-Host "Skipped commit because -NoCommit was provided." -ForegroundColor Yellow
  exit 0
}

$hasChanges = (git status --porcelain)
if (-not $hasChanges) {
  Write-Host ""
  Write-Host "No changes to deploy." -ForegroundColor Yellow
  exit 0
}

Run-Step "Committing deploy changes" {
  git add .
  git commit -m $Message
}

if ($NoPush) {
  Write-Host ""
  Write-Host "Skipped push because -NoPush was provided." -ForegroundColor Yellow
  exit 0
}

Run-Step "Pushing to origin" {
  git push origin HEAD
}

Write-Host ""
Write-Host "Deploy pushed. GitHub Pages will publish from the repository root." -ForegroundColor Green
