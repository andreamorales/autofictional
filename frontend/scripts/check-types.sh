#!/bin/bash

echo "🔍 Checking TypeScript types..."
echo ""

# Run typecheck and capture output
OUTPUT=$(tsc --noEmit 2>&1)
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ No type errors found!"
  echo ""
  exit 0
else
  # Count errors
  ERROR_COUNT=$(echo "$OUTPUT" | grep -c "error TS" || echo "0")
  
  # Extract file names with errors (remove line numbers and keep unique)
  FILES_WITH_ERRORS=$(echo "$OUTPUT" | grep -E "^src/.*\.tsx?\([0-9]+,[0-9]+\):" | sed 's/(.*//' | sort -u)
  FILE_COUNT=$(echo "$FILES_WITH_ERRORS" | grep -c . || echo "0")
  
  echo "❌ Type errors found: $ERROR_COUNT error(s) in $FILE_COUNT file(s)"
  echo ""
  if [ ! -z "$FILES_WITH_ERRORS" ]; then
    echo "Files with errors:"
    echo "$FILES_WITH_ERRORS" | sed 's/^/  - /'
    echo ""
  fi
  echo "Error details (showing first 10):"
  echo "$OUTPUT" | grep -E "error TS" | head -10 | sed 's/^/  /'
  if [ "$ERROR_COUNT" -gt 10 ]; then
    echo "  ... and $((ERROR_COUNT - 10)) more error(s)"
  fi
  echo ""
  echo "📊 Summary: $ERROR_COUNT error(s) in $FILE_COUNT file(s)"
  echo ""
  exit 1
fi

