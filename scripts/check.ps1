# ==============================================================================
# Portfolio 2026 - PowerShell Multi-Level Health Check Pipeline
# Run with: .\scripts\check.ps1
# ==============================================================================

$Host.UI.RawUI.WindowTitle = "Portfolio 2026 - Verification Pipeline"

Write-Host ""
Write-Host "╔═════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          PORTFOLIO 2026 — MULTI-LEVEL SYSTEM TEST PIPELINE              ║" -ForegroundColor Cyan
Write-Host "╚═════════════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$TotalStart = Get-Date
$FailedCount = 0

function Run-Step($level, $name, [scriptblock]$action) {
    Write-Host -NoNewline "[Level $level] ➜ $name... " -ForegroundColor Yellow
    $stepStart = Get-Date
    try {
        & $action
        $elapsed = [math]::Round(((Get-Date) - $stepStart).TotalMilliseconds)
        Write-Host "`r[Level $level] ✔ $name ... " -ForegroundColor Green -NoNewline
        Write-Host "Checked! " -ForegroundColor White -NoNewline
        Write-Host "(${elapsed}ms)" -ForegroundColor DarkGray
    }
    catch {
        $elapsed = [math]::Round(((Get-Date) - $stepStart).TotalMilliseconds)
        Write-Host "`r[Level $level] ✖ $name ... " -ForegroundColor Red -NoNewline
        Write-Host "FAILED! " -ForegroundColor Red -NoNewline
        Write-Host "(${elapsed}ms)" -ForegroundColor DarkGray
        Write-Host "Error Details: $($_.Exception.Message)" -ForegroundColor Red
        $script:FailedCount++
    }
}

# Level 1: Configuration check
Run-Step 1 "Project Configuration & Environment Sanity" {
    $required = @("package.json", "tsconfig.json", "vite.config.ts", "index.html", "tailwind.config.js")
    foreach ($file in $required) {
        if (-not (Test-Path $file)) {
            throw "Missing critical project file: $file"
        }
    }
}

# Level 2: TypeScript strict check
Run-Step 2 "Strict TypeScript Type Check (npx tsc --noEmit)" {
    $output = npx tsc --noEmit 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "TypeScript compile errors detected:`n$output"
    }
}

# Level 3: Architecture and data integrity
Run-Step 3 "Data & Component Architecture Audit" {
    $dataFiles = @(
        "src/data/profile.ts",
        "src/data/projects.ts",
        "src/data/experience.ts",
        "src/data/skills.ts",
        "src/data/silicon.ts",
        "src/data/achievements.ts",
        "src/data/education.ts"
    )
    foreach ($df in $dataFiles) {
        if (-not (Test-Path $df)) {
            throw "Missing data store: $df"
        }
    }
}

# Level 4: Vite Production Build
Run-Step 4 "Vite Production Build (npx vite build)" {
    $output = npx vite build 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Vite build failed:`n$output"
    }
}

# Level 5: Distribution verification
Run-Step 5 "Distribution Artifacts Verification" {
    if (-not (Test-Path "dist/index.html")) {
        throw "dist/index.html was not generated!"
    }
    if (-not (Test-Path "dist/assets")) {
        throw "dist/assets was not generated!"
    }
}

# Level 6: Clean up temporary build artifacts
Run-Step 6 "Clean Up Temporary Build Artifacts (dist/)" {
    if (Test-Path "dist") {
        Remove-Item -Recurse -Force "dist"
    }
}

$TotalElapsed = [math]::Round(((Get-Date) - $TotalStart).TotalSeconds, 2)
Write-Host ""
Write-Host "═════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan

if ($FailedCount -eq 0) {
    Write-Host " ✔ ALL CHECKPOINTS PASSED — WORKSPACE 100% PRODUCTION-READY! " -ForegroundColor Black -BackgroundColor Green
    Write-Host " Total Execution Time: ${TotalElapsed}s" -ForegroundColor DarkGray
    Write-Host ""
    exit 0
} else {
    Write-Host " ✖ TEST PIPELINE FAILED ($FailedCount errors) — Please fix the issues above " -ForegroundColor White -BackgroundColor Red
    Write-Host " Total Execution Time: ${TotalElapsed}s" -ForegroundColor DarkGray
    Write-Host ""
    exit 1
}
