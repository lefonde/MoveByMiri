#!/usr/bin/env bash
# Stop hook: Run tests for changed packages before allowing Claude to finish.
# Uses git diff to find changed packages and runs their tests.

set -uo pipefail

# Get changed files relative to HEAD (staged + unstaged)
CHANGED_FILES=$(git diff --name-only HEAD 2>/dev/null || git diff --name-only 2>/dev/null || echo "")

if [ -z "$CHANGED_FILES" ]; then
  # No changes, nothing to test
  exit 0
fi

# Extract unique package directories from changed files
PACKAGES=""
while IFS= read -r file; do
  case "$file" in
    apps/*)
      PKG=$(echo "$file" | cut -d'/' -f1-2)
      ;;
    packages/*)
      PKG=$(echo "$file" | cut -d'/' -f1-2)
      ;;
    *)
      continue
      ;;
  esac
  if [ -f "$PKG/package.json" ]; then
    PACKAGES="$PACKAGES $PKG"
  fi
done <<< "$CHANGED_FILES"

# Deduplicate
PACKAGES=$(echo "$PACKAGES" | tr ' ' '\n' | sort -u | tr '\n' ' ')

if [ -z "$PACKAGES" ]; then
  exit 0
fi

# Check if any of these packages have a test script
HAS_TESTS=false
for PKG in $PACKAGES; do
  if grep -q '"test"' "$PKG/package.json" 2>/dev/null; then
    HAS_TESTS=true
    break
  fi
done

if [ "$HAS_TESTS" = false ]; then
  exit 0
fi

# Run tests for changed packages
ERRORS=""
for PKG in $PACKAGES; do
  if grep -q '"test"' "$PKG/package.json" 2>/dev/null; then
    PKG_NAME=$(grep -oP '"name"\s*:\s*"[^"]*"' "$PKG/package.json" | head -1 | sed 's/.*"\([^"]*\)".*/\1/' | tail -1)
    echo "Running tests for $PKG_NAME..."
    TEST_OUTPUT=$(pnpm --filter "$PKG_NAME" test 2>&1) || ERRORS="$ERRORS
TESTS FAILED for $PKG_NAME:
$TEST_OUTPUT"
  fi
done

if [ -n "$ERRORS" ]; then
  echo "$ERRORS"
  exit 1
fi

echo "All tests passed."
exit 0
