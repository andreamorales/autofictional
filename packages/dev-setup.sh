#!/bin/bash

# Local Development Setup Script
# Sets up npm links for local development

set -e

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "🔗 Setting up local development environment..."
echo ""

# Build both packages
echo "📦 Building packages..."
cd runtime
npm run build
echo "✓ Runtime built"
cd ..

cd cli
npm run build
echo "✓ CLI built"
cd ..

# Link runtime
echo ""
echo "🔗 Linking @autofictional/runtime..."
cd runtime
npm link
echo "✓ Runtime linked globally"
cd ..

# Link CLI
echo ""
echo "🔗 Linking @autofictional/cli..."
cd cli
npm link
echo "✓ CLI linked globally"
cd ..

echo ""
echo "✅ Local development setup complete!"
echo ""
echo "To use in your frontend project:"
echo "  cd ../frontend"
echo "  npm link @autofictional/runtime"
echo ""
echo "To use CLI:"
echo "  autofictional install"
echo "  # or"
echo "  npx @autofictional/cli install"

