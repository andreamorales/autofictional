# Quick Start - Publishing to npm

## 🚀 First Time Setup (5 minutes)

```bash
# 1. Create npm account (if needed)
npm adduser

# 2. Login
npm login

# 3. Check scope availability
npm view @autofictional/cli
# If 404 → good! If not → use @yourusername/autofictional-cli instead

# 4. Publish both packages
cd packages
./publish.sh both
```

## 📦 Publishing Updates

```bash
cd packages

# Publish both
./publish.sh both

# Or just one
./publish.sh runtime
./publish.sh cli
```

## 🧪 Using Published Packages

```bash
# In your frontend project
cd frontend
npm install @autofictional/runtime@latest

# Use CLI via npx
npx @autofictional/cli install
```

## 🔄 Version Bump

```bash
cd packages/runtime
npm version patch  # 0.1.0 → 0.1.1
npm publish
```

## ✅ That's It!

**Note:** Scoped packages are **public by default** (but free and namespaced). For MVP testing, this is usually fine - your packages are unlikely to be discovered unless someone specifically searches for your scope.

If you need truly private packages, you'll need npm Pro/Team ($7/month).

See `NPM_PUBLISHING_GUIDE.md` for full details.

