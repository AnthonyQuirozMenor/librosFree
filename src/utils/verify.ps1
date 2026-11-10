$ErrorActionPreference = "Stop"
$root = "c:\Users\The-b\Downloads\libros\librosFree"
$errors = @()

Write-Output "=== INICIANDO PRUEBAS DE INTEGRIDAD Y CALIDAD DE LIBROSFREE ==="

# 1. Verificar estructura obligatoria de directorios y archivos
$requiredPaths = @(
  "index.html",
  "README.md",
  "package.json",
  "src/app.js",
  "src/components/Navbar.js",
  "src/components/BookCard.js",
  "src/components/Footer.js",
  "src/pages/HomePage.js",
  "src/pages/CatalogPage.js",
  "src/pages/AuthorsPage.js",
  "src/pages/ReaderPage.js",
  "src/pages/FavoritesPage.js",
  "src/pages/MyReadingPage.js",
  "src/pages/TeamPage.js",
  "src/pages/AboutPage.js",
  "src/pages/ContactPage.js",
  "src/styles/variables.css",
  "src/styles/main.css",
  "src/styles/components.css",
  "src/styles/reader.css",
  "src/data/books.js",
  "src/data/authors.js",
  "src/data/team.js",
  "src/data/config.js",
  "src/utils/storage.js"
)

foreach ($p in $requiredPaths) {
  $full = Join-Path $root $p
  if (-not (Test-Path $full)) {
    $errors += "Archivo faltante: $p"
  }
}
Write-Output "[OK] Verificados $($requiredPaths.Count) archivos principales de arquitectura."

# 2. Verificar que todas las rutas de imagenes y PDFs referenciadas existan (0 enlaces rotos)
$jsAndHtmlFiles = Get-ChildItem -Path $root -Recurse -Include *.js, *.html
$assetMatches = 0
foreach ($file in $jsAndHtmlFiles) {
  $content = Get-Content $file.FullName -Raw
  $matches = [regex]::Matches($content, '\./(src|public)/[a-zA-Z0-9_\-/]+\.(svg|pdf|css|js)')
  foreach ($m in $matches) {
    $relPath = $m.Value.Substring(2)
    $targetPath = Join-Path $root $relPath
    $assetMatches++
    if (-not (Test-Path $targetPath)) {
      $errors += "Recurso roto en $($file.Name): $($m.Value)"
    }
  }
}
Write-Output "[OK] Verificadas $assetMatches referencias a recursos locales (SVGs, PDFs, CSS, JS) sin enlaces rotos."

# 3. Verificar paleta de colores oficial en variables.css
$varsCss = Get-Content (Join-Path $root "src/styles/variables.css") -Raw
foreach ($hex in @("#172554", "#FAF7F0", "#D6A85F", "#FFFFFF", "#F1F3F5")) {
  if ($varsCss -notmatch $hex) {
    $errors += "Color requerido no encontrado en variables.css: $hex"
  }
}
Write-Output "[OK] Verificada paleta de colores oficial (#172554, #FAF7F0, #D6A85F, #FFFFFF, #F1F3F5)."

# 4. Verificar los 5 integrantes exactos del equipo
$teamJs = Get-Content (Join-Path $root "src/data/team.js") -Raw
$expectedMembers = @(
  "Estrellita De Los Angeles Yovera Araujo",
  "Shelly Sthefanny Leiva Gaona",
  "Sarita Martinez Gonzáles",
  "Orlando Daniel Torres Matta",
  "Jhack Zavaleta Leon"
)
foreach ($member in $expectedMembers) {
  if ($teamJs -notmatch [regex]::Escape($member)) {
    $errors += "Integrante no encontrado exactamente: $member"
  }
}
Write-Output "[OK] Verificados los 5 integrantes del equipo."

# 5. Verificar autores peruanos obligatorios
$authorsJs = Get-Content (Join-Path $root "src/data/authors.js") -Raw
$expectedAuthors = @(
  "César Vallejo",
  "José María Arguedas",
  "Ricardo Palma",
  "Clorinda Matto de Turner",
  "Abraham Valdelomar",
  "Mario Vargas Llosa"
)
foreach ($author in $expectedAuthors) {
  if ($authorsJs -notmatch [regex]::Escape($author)) {
    $errors += "Autor peruano requerido no encontrado: $author"
  }
}
Write-Output "[OK] Verificados los 6 escritores peruanos protagonistas y autores universales."

if ($errors.Count -gt 0) {
  Write-Error ("Se encontraron errores:`n" + ($errors -join "`n"))
  exit 1
} else {
  Write-Output "=== TODAS LAS PRUEBAS PASARON EXITOSAMENTE (0 ERRORES) ==="
}

