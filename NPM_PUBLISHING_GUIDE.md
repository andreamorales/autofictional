# NPM Publishing Guide - Private Scoped Packages

## 🎯 Quick Answer

**Important Clarification:** 

npm has two concepts:
1. **Scoped packages** (`@autofictional/cli`) - FREE, but PUBLIC by default
2. **Private packages** - $7/month (truly private, not searchable)

**For testing, you have two options:**

### Option A: Publish as Public Scoped Packages (FREE) ⭐ Recommended for MVP
- ✅ Free forever
- ✅ Namespaced under your scope (`@autofictional/*`)
- ⚠️ Technically public (but unlikely to be discovered)
- ✅ Perfect for MVP testing - no one will find them unless they search specifically
- ✅ You can always delete them later

### Option B: Pay for Private Packages ($7/month)
- ✅ Truly private
- ✅ Only you/your team can access
- ❌ Costs money
- ✅ Better if you're sharing with a team or want absolute privacy

**For NIGHT 1-5 MVP testing, Option A is usually fine** - your packages will be public but:
- They won't show up in general npm searches easily
- Only people who know the exact package name can install them
- You can delete/unpublish them anytime
- It's free!

---

## ⚠️ Important: Scope Name

**Before publishing, check if `@autofictional` scope is available:**

```bash
npm view @autofictional/cli
```

If you get a 404, the scope is available! If not, you'll need to:

**Option 1:** Use your npm username as scope:
- Change `@autofictional/cli` → `@yourusername/autofictional-cli`
- Change `@autofictional/runtime` → `@yourusername/autofictional-runtime`

**Option 2:** Create an npm organization:
- Go to npmjs.com → Create Organization
- Name it `autofictional`
- Then you can use `@autofictional/*` packages

---

## 📋 Step-by-Step Guide

### 1. Create npm Account (if you don't have one)

```bash
# Go to npmjs.com and sign up, OR:
npm adduser
```

Follow the prompts to create your account.

### 2. Login to npm

```bash
npm login
```

Enter your username, password, and email when prompted.

### 3. Verify You're Logged In

```bash
npm whoami
```

Should show your username.

---

## 🚀 Publishing Your Packages

### Option A: Publish Both Packages (Recommended)

From the root directory:

```bash
# Build both packages
cd packages/runtime && npm run build && cd ../..
cd packages/cli && npm run build && cd ../..

# Publish runtime first (CLI depends on it)
cd packages/runtime
npm publish
cd ../..

# Publish CLI
cd packages/cli
npm publish
cd ../..
```

### Option B: Publish One at a Time (For Testing)

```bash
# Test runtime first
cd packages/runtime
npm run build
npm publish --dry-run  # Preview what will be published
npm publish            # Actually publish
```

---

## 🔒 Privacy Explained

**Scoped packages (`@autofictional/*`) are PUBLIC by default, but:**

- ✅ Free to publish
- ✅ Namespaced under your scope (only you can publish to `@autofictional/*`)
- ⚠️ Publicly visible (but unlikely to be discovered)
- ✅ Perfect for MVP testing!

**To make them TRULY private** (requires npm Pro/Team - $7/month):
1. Pay for npm Pro/Team
2. Keep `"private": true` and `"access": "restricted"` in package.json
3. Then they become truly private

**For testing purposes:** Public scoped packages work great - they're free and unlikely to be found unless someone specifically searches for your scope name.

**To make them public later** (if you want):
```json
"publishConfig": {
  "access": "public"  // Change from "restricted"
}
```

---

## 📦 Using Your Published Packages

### In Your Frontend Project

After publishing, update your installation:

```bash
cd frontend

# Install from npm (instead of local link)
npm install @autofictional/runtime@latest

# Or install specific version
npm install @autofictional/runtime@0.1.0
```

### Using the CLI Globally

```bash
# Install CLI globally from npm
npm install -g @autofictional/cli

# Now you can use it anywhere:
autofictional install
```

### Using the CLI via npx (Recommended)

```bash
# No installation needed - runs directly from npm
npx @autofictional/cli install
```

---

## 🔄 Versioning for Iterative Testing

### Semantic Versioning

- `0.1.0` → `0.1.1` = Patch (bug fixes)
- `0.1.0` → `0.2.0` = Minor (new features)
- `0.1.0` → `1.0.0` = Major (breaking changes)

### Quick Version Bump

```bash
cd packages/runtime

# Patch version (0.1.0 → 0.1.1)
npm version patch

# Minor version (0.1.0 → 0.2.0)
npm version minor

# Major version (0.1.0 → 1.0.0)
npm version major

# Then publish
npm publish
```

### Or Edit package.json Manually

```json
{
  "version": "0.1.1"  // Change this
}
```

Then:
```bash
npm publish
```

---

## 🧪 Testing Workflow

### 1. Make Changes Locally

```bash
# Edit code in packages/runtime/src/index.tsx
# Build
cd packages/runtime && npm run build
```

### 2. Test Locally First (Optional)

```bash
# Link locally for testing
cd packages/runtime
npm link

# In your frontend project
cd ../../frontend
npm link @autofictional/runtime
```

### 3. Publish New Version

```bash
cd packages/runtime
npm version patch  # Bumps version
npm publish        # Publishes
```

### 4. Test Published Version

```bash
cd frontend
npm install @autofictional/runtime@latest
```

---

## 📝 Package.json Settings Explained

### What We Added:

```json
{
  "private": true,              // Marks intent (but requires paid plan for true privacy)
  "publishConfig": {
    "access": "restricted"      // Tries to keep private (requires paid plan)
  },
  "prepublishOnly": "npm run build"  // Auto-builds before publishing
}
```

**Note:** Without a paid npm plan, these settings won't actually make packages private - they'll still be public but namespaced. For MVP testing, this is usually fine!

---

## 🐛 Common Issues & Solutions

### Issue: "You must verify your email"

**Solution:**
1. Check your email for npm verification
2. Click the verification link
3. Try publishing again

### Issue: "Package name already exists"

**Solution:**
- Scoped packages are namespaced to your account
- `@autofictional/cli` is unique to YOUR npm account
- If you see this, someone else already has `@autofictional` scope
- **Fix:** Change scope in package.json to `@yourusername/cli`

### Issue: "403 Forbidden"

**Solution:**
```bash
# Make sure you're logged in
npm whoami

# If not logged in:
npm login
```

### Issue: "Cannot find module '@autofictional/runtime'"

**Solution:**
```bash
# Make sure you published it first
cd packages/runtime
npm publish

# Then install it
cd ../../frontend
npm install @autofictional/runtime
```

---

## 🎯 Recommended Workflow

### For NIGHT 1-5 Development:

1. **Develop locally** (using `npm link`)
2. **Test in your app**
3. **When ready to test published version:**
   ```bash
   cd packages/runtime
   npm version patch
   npm publish
   ```
4. **Install in your app:**
   ```bash
   cd frontend
   npm install @autofictional/runtime@latest
   ```

### For Sharing with Others:

1. Publish both packages
2. Share your npm username/org name
3. They add you as collaborator OR you make packages public

---

## 📚 Additional Resources

- [npm docs: Scoped packages](https://docs.npmjs.com/cli/v9/using-npm/scope)
- [npm docs: Publishing](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)

---

## ✅ Quick Checklist

- [ ] Create npm account (`npm adduser`)
- [ ] Login (`npm login`)
- [ ] Build packages (`npm run build` in each package)
- [ ] Publish runtime (`cd packages/runtime && npm publish`)
- [ ] Publish CLI (`cd packages/cli && npm publish`)
- [ ] Test installation (`npm install @autofictional/runtime@latest`)
- [ ] Test CLI (`npx @autofictional/cli install`)

---

**Remember:** Scoped packages are private by default - perfect for testing! 🎉

