#!/bin/bash

# Autofictional Package Publisher
# Usage: ./publish.sh [runtime|cli|both]

set -e

PUBLISH_BOTH=false
PUBLISH_RUNTIME=false
PUBLISH_CLI=false

case "$1" in
  runtime)
    PUBLISH_RUNTIME=true
    ;;
  cli)
    PUBLISH_CLI=true
    ;;
  both|"")
    PUBLISH_BOTH=true
    ;;
  *)
    echo "Usage: ./publish.sh [runtime|cli|both]"
    exit 1
    ;;
esac

echo "🚀 Autofictional Package Publisher"
echo ""

# Check if logged in to npm
if ! npm whoami &> /dev/null; then
  echo "❌ Not logged in to npm. Run 'npm login' first."
  exit 1
fi

echo "✓ Logged in as: $(npm whoami)"
echo ""

# Build and publish runtime
if [ "$PUBLISH_RUNTIME" = true ] || [ "$PUBLISH_BOTH" = true ]; then
  echo "📦 Building @autofictional/runtime..."
  cd runtime
  npm run build
  
  echo "📤 Publishing @autofictional/runtime..."
  npm publish
  echo "✓ Published @autofictional/runtime"
  echo ""
  cd ..
fi

# Build and publish CLI
if [ "$PUBLISH_CLI" = true ] || [ "$PUBLISH_BOTH" = true ]; then
  echo "📦 Building @autofictional/cli..."
  cd cli
  npm run build
  
  echo "📤 Publishing @autofictional/cli..."
  npm publish
  echo "✓ Published @autofictional/cli"
  echo ""
  cd ..
fi

echo "✅ Publishing complete!"
echo ""
echo "To use in your project:"
echo "  npm install @autofictional/runtime@latest"
echo "  npx @autofictional/cli install"

