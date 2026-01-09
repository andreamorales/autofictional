#!/bin/bash

# Complete Publishing and Testing Workflow
# This does everything: GitHub → Build → Version → Publish → Test

set -e

echo "🚀 Autofictional Publishing Workflow"
echo ""

# Step 1: Save to GitHub
echo "📝 Step 1: Saving to GitHub..."
read -p "Commit message (what did you change?): " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="Update packages"
fi

git add .
git commit -m "$COMMIT_MSG"
git push

echo "✓ Saved to GitHub"
echo ""

# Step 2: Build
echo "📦 Step 2: Building packages..."
npm run packages:build
echo "✓ Built"
echo ""

# Step 3: Version bump
echo "🔢 Step 3: Bumping versions..."
cd packages/runtime
npm version patch --no-git-tag-version
RUNTIME_VERSION=$(node -p "require('./package.json').version")
echo "  Runtime: $RUNTIME_VERSION"
cd ../..

cd packages/cli
npm version patch --no-git-tag-version
CLI_VERSION=$(node -p "require('./package.json').version")
echo "  CLI: $CLI_VERSION"
cd ../..

echo "✓ Versions bumped"
echo ""

# Step 4: Publish
echo "📤 Step 4: Publishing to npm..."
npm run packages:publish
echo "✓ Published"
echo ""

# Step 5: Ask if they want to test
read -p "🧪 Test from npm now? (y/n): " TEST_NOW

if [ "$TEST_NOW" = "y" ] || [ "$TEST_NOW" = "Y" ]; then
  echo ""
  echo "🧪 Testing from npm..."
  cd frontend
  
  echo "  Unlinking local version..."
  npm unlink @autofictional/runtime 2>/dev/null || true
  
  echo "  Installing from npm..."
  npm install @autofictional/runtime@latest
  
  echo ""
  echo "✅ Done! Now test with:"
  echo "   npx @autofictional/cli install"
  echo "   npm run dev"
fi

echo ""
echo "✅ Complete!"
echo ""
echo "Published versions:"
echo "  @autofictional/runtime@$RUNTIME_VERSION"
echo "  @autofictional/cli@$CLI_VERSION"

