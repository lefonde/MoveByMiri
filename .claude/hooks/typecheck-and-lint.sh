#!/usr/bin/env bash
# PostToolUse hook: Run typecheck and lint on the file that was just edited.
# Scopes typecheck to the owning package for speed.
# Returns errors so Claude can self-correct.

set -uo pipefail

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | sed -n 's/.*"file_path"\s*:\s*"\([^"]*\)".*/\1/p' | head -1)

if [ -z "$FILE_PATH" ]; then
  exit 0
fi

FILE_PATH=$(echo "$FILE_PATH" | sed 's|\\|/|g')

if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

# Only check .ts/.tsx/.js/.jsx files
case "$FILE_PATH" in
  *.ts|*.tsx|*.js|*.jsx) ;;
  *) exit 0 ;;
esac

# Find the nearest package.json to scope the check
DIR=$(dirname "$FILE_PATH")
PKG_DIR=""
while [ "$DIR" != "/" ] && [ "$DIR" != "." ]; do
  if [ -f "$DIR/package.json" ]; then
    PKG_DIR="$DIR"
    break
  fi
  DIR=$(dirname "$DIR")
done

if [ -z "$PKG_DIR" ]; then
  exit 0
fi

ERRORS=""

# Run typecheck scoped to the package
if [ -f "$PKG_DIR/tsconfig.json" ]; then
  TC_OUTPUT=$(cd "$PKG_DIR" && npx tsc --noEmit --pretty 2>&1) || ERRORS="$ERRORS
TYPECHECK ERRORS:
$TC_OUTPUT"
fi

# Run eslint on the specific file
LINT_OUTPUT=$(npx eslint --no-warn-ignored "$FILE_PATH" 2>&1) || ERRORS="$ERRORS
LINT ERRORS:
$LINT_OUTPUT"

if [ -n "$ERRORS" ]; then
  echo "$ERRORS"
  exit 1
fi

exit 0
