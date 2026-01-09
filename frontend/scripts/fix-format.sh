#!/bin/bash

echo "🔧 Fixing code formatting..."
echo ""

# Count total files
TOTAL=$(find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.md" \) 2>/dev/null | wc -l | tr -d ' ')

# Run prettier and capture output
OUTPUT=$(prettier --write "src/**/*.{ts,tsx,js,jsx,json,css,md}" 2>&1)
EXIT_CODE=$?

# Extract files that were formatted (prettier outputs file paths when formatting)
FILES_LIST=$(echo "$OUTPUT" | grep -E "^src/.*" | sort -u)
FIXED=$(echo "$FILES_LIST" | grep -c . || echo "0")

if [ "$FIXED" -eq 0 ]; then
  echo "✅ All $TOTAL files were already properly formatted!"
  echo ""
  exit 0
else
  echo "✅ Fixed formatting in $FIXED out of $TOTAL files:"
  echo "$FILES_LIST" | sed 's/^/  - /'
  echo ""
  echo "📊 Summary: $FIXED out of $TOTAL files were formatted"
  echo ""
  exit 0
fi

