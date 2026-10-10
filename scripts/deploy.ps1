<#
.SYNOPSIS
  Builds the site and copies it into a JBoss/WildFly deployment folder.

.EXAMPLE
  npm run deploy -- -Target C:\jboss\standalone\deployments\rubiks.war

.NOTES
  The build uses relative asset paths, so the folder can have any name. For an
  exploded deployment, JBoss/WildFly needs a "<name>.war.dodeploy" marker next to the
  folder; pass -Marker to create it (not needed for an already-deployed webapp
  directory in a non-war location such as an Apache-style static folder).
#>
param(
  [Parameter(Mandatory = $true)][string]$Target,
  [switch]$Marker,
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
  if (-not $SkipBuild) {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Build failed' }
  }
  $dist = Join-Path $root 'dist'
  if (-not (Test-Path $dist)) { throw "Nothing to deploy: $dist does not exist" }

  New-Item -ItemType Directory -Force -Path $Target | Out-Null
  # Replace only what a previous deployment produced, keep anything else in the folder.
  Get-ChildItem -Path $dist -Force | ForEach-Object {
    $dest = Join-Path $Target $_.Name
    if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
    Copy-Item -Recurse -Force $_.FullName $dest
  }
  if ($Marker) {
    New-Item -ItemType File -Force -Path ($Target.TrimEnd('\', '/') + '.dodeploy') | Out-Null
  }
  Write-Host "Deployed to $Target"
}
finally {
  Pop-Location
}
