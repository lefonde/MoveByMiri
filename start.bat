@echo off
cd /d "%~dp0"
echo Starting MOOV by Miri dev server...
pnpm --filter @yoga/web dev
