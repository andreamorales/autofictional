# Simple Publishing Guide (For Non-Developers)

## 🎯 What You Want to Do

You want to:
1. Make changes to your code
2. Publish to npm (so anyone can try it)
3. Test it yourself via npm (not just locally)
4. Repeat this cycle as you develop

**This is totally doable!** Here's how:

---

## 📦 Understanding npm Publishing (Simple Version)

Think of npm like the App Store, but for code:

- **Local development** = Working on your app on your computer
- **Publishing to npm** = Putting your app in the "store" so others can download it
- **Installing from npm** = Downloading your app from the "store"

### The Cycle:

```
1. Make changes locally
2. Publish to npm (like uploading to the store)
3. Install from npm (like downloading from the store)
4. Test it
5. Repeat!
```

---

## 🚀 Step-by-Step: Publishing Your First Version

### Step 1: Make Sure You're Logged In

```bash
npm login
```

Enter your npm username, password, and email.

**Check if it worked:**
```bash
npm whoami
```
Should show your username.

### Step 2: Build Your Packages

This turns your code into something npm can use:

```bash
npm run packages:build
```

This runs automatically, but you can do it manually too.

### Step 3: Publish!

```bash
npm run packages:publish
```

**That's it!** Your packages are now on npm.

---

## 🔄 The Development Cycle (How You'll Work)

### Option A: Publish Every Time (Recommended for Testing)

```bash
# 1. Make changes to your code
# (Edit files in packages/runtime/src/ or packages/cli/src/)

# 2. Build
npm run packages:build

# 3. Bump version (important!)
cd packages/runtime
npm version patch  # Changes 0.1.0 → 0.1.1

cd ../cli
npm version patch  # Changes 0.1.0 → 0.1.1

# 4. Publish
npm run packages:publish

# 5. Test it from npm!
cd ../frontend
npm install @autofictional/runtime@latest
npx @autofictional/cli install
```

### Option B: Quick Local Test First, Then Publish

```bash
# 1. Test locally first (faster)
# (Make changes, test locally)

# 2. When it works, publish
npm run packages:build
cd packages/runtime && npm version patch && cd ../..
cd packages/cli && npm version patch && cd ../..
npm run packages:publish

# 3. Test from npm
cd frontend
npm unlink @autofictional/runtime  # Stop using local
npm install @autofictional/runtime@latest  # Use npm version
```

---

## 🔢 Understanding Versions (Super Important!)

npm uses **semantic versioning**:

- **0.1.0** → **0.1.1** = Small fix (patch)
- **0.1.0** → **0.2.0** = New feature (minor)
- **0.1.0** → **1.0.0** = Big change (major)

**Why this matters:**
- Each time you publish, you need a NEW version number
- npm won't let you publish the same version twice
- `npm version patch` automatically bumps it for you

**Example:**
```bash
# First publish: 0.1.0
npm publish

# Make changes, publish again:
npm version patch  # Now it's 0.1.1
npm publish

# Make more changes:
npm version patch  # Now it's 0.1.2
npm publish
```

---

## 🧪 Testing Your Published Package

After publishing, test it like a real user would:

```bash
# 1. Stop using local version
cd frontend
npm unlink @autofictional/runtime

# 2. Install from npm
npm install @autofictional/runtime@latest

# 3. Test the CLI
npx @autofictional/cli install

# 4. Run your app
npm run dev
```

**This is how others will use it!**

---

## 📝 GitHub: Do You Need It?

**Short answer: Not required, but VERY helpful!**

### Why GitHub Helps:

1. **Backup** - Your code is saved online
2. **Version history** - See what changed when
3. **Sharing** - Others can see your code
4. **npm integration** - npm can link to your GitHub repo
5. **Professional** - Makes your project look legit

### What npm Shows:

When someone visits your package on npm, they'll see:
- Package name: `@autofictional/cli`
- Version: `0.1.0`
- **Repository** (if you add GitHub): Link to your code
- **Homepage** (if you add one)

### Should You Add GitHub?

**Yes!** It's free and makes your project more professional.

---

## 🎯 Recommended Workflow

### Daily Development:

1. **Make changes** (edit code)
2. **Test locally** (optional, but faster)
3. **Build** (`npm run packages:build`)
4. **Version bump** (`npm version patch` in each package)
5. **Publish** (`npm run packages:publish`)
6. **Test from npm** (install and test like a user would)
7. **Repeat!**

### Quick Commands Cheat Sheet:

```bash
# Build everything
npm run packages:build

# Version bump (do this in each package folder)
cd packages/runtime
npm version patch
cd ../cli
npm version patch
cd ../..

# Publish both
npm run packages:publish

# Test from npm
cd frontend
npm unlink @autofictional/runtime
npm install @autofictional/runtime@latest
npx @autofictional/cli install
```

---

## ❓ Common Questions

### "Do I need to publish every time I make a change?"

**No!** You can:
- Test locally first (faster)
- Publish when you want others to try it
- Publish when you're ready to test from npm

### "What if I publish something broken?"

**No worries!** You can:
- Fix it and publish a new version
- Or unpublish (within 72 hours)

### "How do others install it?"

They run:
```bash
npm install @autofictional/runtime
npx @autofictional/cli install
```

### "Do I need to pay?"

**No!** Public scoped packages are free.

---

## 🎉 You're Ready!

The key is:
1. Make changes
2. Build (`npm run packages:build`)
3. Version (`npm version patch`)
4. Publish (`npm run packages:publish`)
5. Test from npm
6. Repeat!

**It's that simple!** 🚀

