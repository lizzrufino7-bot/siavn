param (
    [string]$CommitMessage = "Actualización de sitio web"
)

Write-Host "Construyendo proyecto para producción..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error durante la compilación." -ForegroundColor Red
    exit 1
}

$git = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
if (-not (Test-Path $git)) {
    $git = "git"
}

# 1. Copiar logo actualizado a public
if (Test-Path "src/assets/logo-siav.png") {
    Copy-Item "src/assets/logo-siav.png" "public/logo-siav.png" -Force
}

# 2. Guardar en rama main
Write-Host "Guardando cambios en rama main..." -ForegroundColor Cyan
& $git add -A
& $git commit -m $CommitMessage
& $git push origin main

# 3. Publicar en rama gh-pages
Write-Host "Publicando en GitHub Pages (rama gh-pages)..." -ForegroundColor Green
$currentDir = Get-Location
Set-Location "dist"
& $git init
& $git config user.name "lizzrufino7-bot"
& $git config user.email "lizzrufino7-bot@users.noreply.github.com"
& $git add -A
& $git commit -m "Build: $CommitMessage"
& $git branch -M gh-pages
$remoteUrl = (& $git -C $currentDir config --get remote.origin.url)
& $git push $remoteUrl gh-pages:gh-pages --force
Remove-Item -Recurse -Force ".git" -ErrorAction SilentlyContinue
Set-Location $currentDir

Write-Host "¡Publicación completada exitosamente!" -ForegroundColor Green
Write-Host "Tu sitio web actualizado estará disponible en:" -ForegroundColor Yellow
Write-Host "https://lizzrufino7-bot.github.io/siavn/" -ForegroundColor Yellow
