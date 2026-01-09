# GitHub Setup Guide

## 🎯 Why GitHub?

GitHub is like Google Drive for code:
- ✅ **Backup** - Your code is saved online
- ✅ **Version history** - See what changed when
- ✅ **Sharing** - Others can see your code
- ✅ **npm integration** - npm shows a link to your code
- ✅ **Professional** - Makes your project look legit

**It's FREE and you don't need it, but it's VERY helpful!**

---

## 🚀 Step-by-Step Setup

### Step 1: Create GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose username (e.g., `yourname` or `autofictional`)
4. Verify email

### Step 2: Create a New Repository

1. Click the **"+"** icon (top right) → **"New repository"**
2. Repository name: `autofictional`
3. Description: "Autonomous sidebar adaptation for React apps"
4. Choose: **Public** (so others can see it)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### Step 3: Connect Your Local Code to GitHub

**Option A: Using GitHub Desktop (Easiest for Non-Developers)**

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click **"File" → "Add Local Repository"**
4. Navigate to `/Users/andy/Documents/Autofictional`
5. Click **"Add Repository"**
6. Click **"Publish repository"** (top right)
7. Make sure "Keep this code private" is **UNCHECKED** (public)
8. Click **"Publish Repository"**

**Option B: Using Command Line**

```bash
# Make sure you're in the project folder
cd /Users/andy/Documents/Autofictional

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/autofictional.git

# Push your code
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Step 4: Update package.json Files

After creating the GitHub repo, update the repository URLs:

1. Open `packages/runtime/package.json`
2. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
3. Open `packages/cli/package.json`
4. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

**Example:**
If your GitHub username is `andy`, change:
```json
"url": "https://github.com/YOUR_GITHUB_USERNAME/autofictional.git"
```
to:
```json
"url": "https://github.com/andy/autofictional.git"
```

---

## 📝 What Happens After Setup

### On npm:

When someone visits your package, they'll see:
- Package name: `@autofictional/cli`
- **Repository**: Link to your GitHub repo
- **Homepage**: Link to your GitHub repo

### On GitHub:

Your code will be visible at:
- `https://github.com/YOUR_USERNAME/autofictional`

---

## 🔄 Daily Workflow with GitHub

### Making Changes and Publishing:

1. **Make changes** (edit code)
2. **Commit to GitHub** (save your changes)
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. **Build packages**
   ```bash
   npm run packages:build
   ```
4. **Version bump**
   ```bash
   cd packages/runtime && npm version patch && cd ../..
   cd packages/cli && npm version patch && cd ../..
   ```
5. **Publish to npm**
   ```bash
   npm run packages:publish
   ```

**Now both GitHub AND npm are updated!**

---

## 🎯 Quick Reference

### First Time Setup:
1. Create GitHub account
2. Create `autofictional` repository
3. Connect local code to GitHub (GitHub Desktop or command line)
4. Update `package.json` files with your GitHub username
5. Commit and push

### Daily Workflow:
1. Make changes
2. Commit to GitHub (`git add . && git commit -m "message" && git push`)
3. Build (`npm run packages:build`)
4. Version (`npm version patch` in each package)
5. Publish (`npm run packages:publish`)

---

## ❓ Common Questions

### "Do I need GitHub to publish to npm?"

**No!** npm works without GitHub. But GitHub makes your project more professional and gives you backup.

### "What if I don't want my code public?"

You can make the GitHub repo private, but npm packages will still be public (unless you pay $7/month).

### "How do I update GitHub after making changes?"

```bash
git add .
git commit -m "Description of what you changed"
git push
```

### "What if I mess up?"

GitHub keeps history! You can always go back to previous versions.

---

## ✅ Checklist

- [ ] Create GitHub account
- [ ] Create `autofictional` repository
- [ ] Connect local code to GitHub
- [ ] Update `package.json` files with your GitHub username
- [ ] Push code to GitHub
- [ ] Verify it's visible on GitHub

**You're done!** 🎉

