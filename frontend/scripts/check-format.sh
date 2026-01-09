#!/bin/bash

echo "🔍 Checking code formatting..."
echo ""

# Count total files
TOTAL=$(find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.md" \) 2>/dev/null | wc -l | tr -d ' ')

# Run prettier check and capture output
OUTPUT=$(prettier --check "src/**/*.{ts,tsx,js,jsx,json,css,md}" 2>&1)
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ All $TOTAL files are properly formatted!"
  echo ""
  exit 0
else
  # Extract files that need formatting (prettier outputs file paths)
  FILES_LIST=$(echo "$OUTPUT" | grep -E "^src/.*" | sort -u)
  NEEDS_FIX=$(echo "$FILES_LIST" | grep -c . || echo "0")
  
  if [ "$NEEDS_FIX" -gt 0 ]; then
    echo "❌ Formatting issues found"
    echo ""
    echo "Files needing formatting ($NEEDS_FIX out of $TOTAL):"
    echo "$FILES_LIST" | sed 's/^/  - /'
    echo ""
    echo "📊 Summary: $NEEDS_FIX out of $TOTAL files need formatting"
    echo ""
  else
    echo "✅ All $TOTAL files are properly formatted!"
    echo ""
  fi
  exit 1
fi

