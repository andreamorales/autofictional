# Your Development Workflow (Simple Version)

## 🎯 What You Want

You want to:
1. Make changes to your code
2. Publish to npm (so anyone can try it)
3. Test it yourself via npm
4. Keep GitHub updated
5. Repeat!

**Here's exactly how to do it:**

---

## 📋 The Complete Workflow

### Step 1: Make Changes

Edit your code:
- `packages/runtime/src/index.tsx` - Runtime code
- `packages/cli/src/commands/install.ts` - CLI code

### Step 2: Save to GitHub (Backup)

```bash
git add .
git commit -m "What you changed"
git push
```

**This saves your code online.**

### Step 3: Build Your Packages

```bash
npm run packages:build
```

**This prepares your code for npm.**

### Step 4: Bump Version Numbers

npm requires a NEW version number each time you publish:

```bash
cd packages/runtime
npm version patch  # 0.1.0 → 0.1.1
cd ../..

cd packages/cli
npm version patch  # 0.1.0 → 0.1.1
cd ../..
```

**This automatically updates the version number.**

### Step 5: Publish to npm

```bash
npm run packages:publish
```

**Now your packages are on npm!**

### Step 6: Test Like a User Would

```bash
cd frontend

# Stop using local version
npm unlink @autofictional/runtime

# Install from npm (like a real user)
npm install @autofictional/runtime@latest

# Test the CLI
npx @autofictional/cli install

# Run your app
npm run dev
```

**This tests it exactly how others will use it!**

---

## 🚀 Quick Command Cheat Sheet

```bash
# 1. Save to GitHub
git add .
git commit -m "Your change description"
git push

# 2. Build
npm run packages:build

# 3. Version bump
cd packages/runtime && npm version patch && cd ../..
cd packages/cli && npm version patch && cd ../..

# 4. Publish
npm run packages:publish

# 5. Test from npm
cd frontend
npm unlink @autofictional/runtime
npm install @autofictional/runtime@latest
npx @autofictional/cli install
npm run dev
```

---

## 💡 Pro Tips

### Tip 1: Test Locally First (Faster)

Before publishing, test locally:

```bash
# Make changes
# Build
npm run packages:build

# Test locally (no need to publish)
cd frontend
npm run dev
```

**Only publish when you're ready for others to try it!**

### Tip 2: Meaningful Commit Messages

When saving to GitHub, describe what you changed:

```bash
git commit -m "Added route tracking"
git commit -m "Fixed sidebar detection"
git commit -m "Updated README"
```

### Tip 3: Version Numbers Matter

- **Patch** (0.1.0 → 0.1.1) = Small fix
- **Minor** (0.1.0 → 0.2.0) = New feature
- **Major** (0.1.0 → 1.0.0) = Big change

For now, just use `npm version patch` - it's the safest!

---

## 🔄 Example: Adding a New Feature

Let's say you want to add route tracking:

1. **Edit code**
   ```bash
   # Edit packages/runtime/src/index.tsx
   # Add route tracking code
   ```

2. **Save to GitHub**
   ```bash
   git add .
   git commit -m "Added route tracking feature"
   git push
   ```

3. **Build**
   ```bash
   npm run packages:build
   ```

4. **Version bump**
   ```bash
   cd packages/runtime && npm version patch && cd ../..
   ```

5. **Publish**
   ```bash
   npm run packages:publish
   ```

6. **Test**
   ```bash
   cd frontend
   npm unlink @autofictional/runtime
   npm install @autofictional/runtime@latest
   npm run dev
   ```

**Done!** Now anyone can install version 0.1.1 with your new feature!

---

## ❓ Troubleshooting

### "npm says version already exists"

**Solution:** You need to bump the version first:
```bash
cd packages/runtime
npm version patch  # This bumps it
npm publish
```

### "Git says nothing to commit"

**Solution:** You haven't made any changes, or you need to add files:
```bash
git add .
git commit -m "Your message"
```

### "Can't push to GitHub"

**Solution:** Make sure you've connected your local repo to GitHub (see GITHUB_SETUP.md)

---

## ✅ You're Ready!

The workflow is:
1. **Change** → Edit code
2. **Save** → `git add . && git commit -m "message" && git push`
3. **Build** → `npm run packages:build`
4. **Version** → `npm version patch` (in each package)
5. **Publish** → `npm run packages:publish`
6. **Test** → Install from npm and test

**Repeat as you develop!** 🚀

