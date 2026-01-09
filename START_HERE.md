# 🎯 START HERE - Your Complete Guide

## What You Want to Do

You want to:
1. ✅ Make changes to your code locally
2. ✅ Publish to npm (so anyone can try it)
3. ✅ Test it yourself via npm (not just locally)
4. ✅ Keep GitHub updated
5. ✅ Repeat this cycle as you develop

**This guide shows you exactly how!**

---

## 📋 Step-by-Step Setup (One Time)

### 1. Set Up GitHub

**You already have a git repo!** Now connect it to GitHub:

1. Go to [github.com](https://github.com) and create account (if needed)
2. Click **"+"** → **"New repository"**
3. Name it: `autofictional`
4. Make it **Public**
5. **Don't** check "Initialize with README"
6. Click **"Create repository"**

**Then connect your code:**

**Option A: GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. **File** → **Add Local Repository**
4. Navigate to `/Users/andy/Documents/Autofictional`
5. Click **"Publish repository"** (make sure it's public)

**Option B: Command Line**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/autofictional.git
git push -u origin master
```

### 2. Update package.json Files

After creating GitHub repo, update these files:

1. Open `packages/runtime/package.json`
2. Find `YOUR_GITHUB_USERNAME` and replace with your actual GitHub username
3. Open `packages/cli/package.json`
4. Find `YOUR_GITHUB_USERNAME` and replace with your actual GitHub username

**Example:** If your GitHub username is `andy`, change:
```json
"url": "https://github.com/YOUR_GITHUB_USERNAME/autofictional.git"
```
to:
```json
"url": "https://github.com/andy/autofictional.git"
```

### 3. Make Sure You're Logged Into npm

```bash
npm login
```

Enter your npm username, password, and email.

**Check if it worked:**
```bash
npm whoami
```

---

## 🚀 Your Daily Workflow (Super Simple!)

### The Easy Way (One Command!)

```bash
npm run publish:all
```

This script does **everything**:
1. Saves to GitHub
2. Builds packages
3. Bumps versions
4. Publishes to npm
5. Optionally tests from npm

**Just run it and follow the prompts!**

### The Manual Way (Step by Step)

If you want more control:

```bash
# 1. Save to GitHub
git add .
git commit -m "What you changed"
git push

# 2. Build packages
npm run packages:build

# 3. Bump versions (do this in each package folder)
cd packages/runtime
npm version patch  # 0.1.0 → 0.1.1
cd ../..

cd packages/cli
npm version patch  # 0.1.0 → 0.1.1
cd ../..

# 4. Publish to npm
npm run packages:publish

# 5. Test from npm (like a real user)
cd frontend
npm unlink @autofictional/runtime  # Stop using local
npm install @autofictional/runtime@latest  # Use npm version
npx @autofictional/cli install
npm run dev
```

---

## 📚 Documentation

- **[YOUR_WORKFLOW.md](./YOUR_WORKFLOW.md)** - Complete workflow guide
- **[SIMPLE_PUBLISHING_GUIDE.md](./SIMPLE_PUBLISHING_GUIDE.md)** - Simple npm publishing explained
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - Detailed GitHub setup
- **[PRD.md](./PRD.md)** - Product Requirements Document

---

## 🎯 Quick Reference

### Most Common Commands

```bash
# Publish everything (easiest!)
npm run publish:all

# Just build
npm run packages:build

# Just publish (after building and versioning)
npm run packages:publish

# Save to GitHub
git add . && git commit -m "message" && git push
```

### Understanding Versions

npm requires a NEW version number each time you publish:

- **0.1.0** → **0.1.1** = Small change (patch)
- **0.1.0** → **0.2.0** = New feature (minor)
- **0.1.0** → **1.0.0** = Big change (major)

**For now, just use `npm version patch`** - it's the safest!

---

## ❓ Common Questions

### "Do I need GitHub?"

**No, but it's VERY helpful!**
- Free backup of your code
- Version history
- Makes your project look professional
- npm shows a link to your code

### "Do I need to publish every time I make a change?"

**No!** You can:
- Test locally first (faster)
- Publish when you want others to try it
- Publish when you're ready to test from npm

### "What if I publish something broken?"

**No worries!**
- Fix it and publish a new version
- Or unpublish (within 72 hours)

### "How do others install it?"

They run:
```bash
npm install @autofictional/runtime
npx @autofictional/cli install
```

---

## ✅ Checklist

- [ ] Create GitHub account
- [ ] Create `autofictional` repository on GitHub
- [ ] Connect local code to GitHub
- [ ] Update `package.json` files with your GitHub username
- [ ] Login to npm (`npm login`)
- [ ] Test publishing (`npm run publish:all`)

---

## 🎉 You're Ready!

**The simplest workflow:**

1. Make changes
2. Run `npm run publish:all`
3. Follow the prompts
4. Test from npm
5. Repeat!

**That's it!** 🚀

