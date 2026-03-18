#!/usr/bin/env bash
# PostToolUse hook: Format the file that was just edited with Prettier.
# Reads tool input JSON from stdin, extracts file_path, runs prettier.
# Always exits 0 — formatting failure should not block work.

set -euo pipefail

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | sed -n 's/.*"file_path"\s*:\s*"\([^"]*\)".*/\1/p' | head -1)

if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Convert Windows paths to Unix-style for npx
FILE_PATH=$(echo "$FILE_PATH" | sed 's|\\|/|g')

if [ -f "$FILE_PATH" ]; then
  npx prettier --write "$FILE_PATH" 2>/dev/null || true
fi

exit 0
