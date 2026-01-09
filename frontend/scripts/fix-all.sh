#!/bin/bash

echo "🚀 Running all checks and fixes..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Format code
echo "Step 1/2: Formatting code"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
bash scripts/fix-format.sh
FORMAT_EXIT=$?

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 2: Check types
echo "Step 2/2: Checking types"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
bash scripts/check-types.sh
TYPE_EXIT=$?

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Summary
echo "📊 Summary:"
if [ $FORMAT_EXIT -eq 0 ] && [ $TYPE_EXIT -eq 0 ]; then
  echo "✅ All checks passed!"
  echo ""
  exit 0
else
  if [ $FORMAT_EXIT -ne 0 ]; then
    echo "❌ Formatting: Issues found (run 'npm run fix:format' to fix)"
  else
    echo "✅ Formatting: OK"
  fi
  
  if [ $TYPE_EXIT -ne 0 ]; then
    echo "❌ Types: Errors found (fix manually)"
  else
    echo "✅ Types: OK"
  fi
  echo ""
  exit 1
fi

