# Local Development Guide

## 🎯 Quick Start

### 1. Initial Setup (One Time)

```bash
# From project root
npm run packages:link
```

This will:
- Build both packages
- Link them globally via `npm link`
- Make them available for local development

### 2. Use in Frontend Project

```bash
cd frontend
npm link @autofictional/runtime
```

Now your frontend uses the local version!

### 3. Development Workflow

**Option A: Watch Mode (Recommended)**

```bash
# Terminal 1: Watch runtime for changes
cd packages/runtime
npm run dev

# Terminal 2: Watch CLI for changes  
cd packages/cli
npm run dev

# Terminal 3: Run your frontend
npm run dev
```

**Option B: Manual Build**

```bash
# Make changes to packages/runtime/src/index.tsx
cd packages/runtime
npm run build

# Frontend will pick up changes (if using npm link)
```

### 4. Test CLI Locally

```bash
# After linking, CLI is available globally
autofictional install

# Or use npx with local path
node packages/cli/dist/index.js install
```

---

## 📋 Common Commands

### Build All Packages
```bash
npm run packages:build
```

### Link Packages for Local Dev
```bash
npm run packages:link
```

### Unlink Packages
```bash
npm run packages:unlink
```

### Watch Mode (dev)
```bash
npm run packages:dev
```

### Publish to npm
```bash
npm run packages:publish
```

---

## 🔄 Development Cycle

### Making Changes

1. **Edit source files**
   ```bash
   # Edit packages/runtime/src/index.tsx
   # Edit packages/cli/src/commands/install.ts
   ```

2. **Build (if not in watch mode)**
   ```bash
   npm run packages:build
   ```

3. **Test in frontend**
   ```bash
   cd frontend
   npm run dev
   # Changes should be picked up automatically
   ```

4. **When ready, publish**
   ```bash
   npm run packages:publish
   ```

---

## 🐛 Troubleshooting

### "Cannot find module '@autofictional/runtime'"

**Solution:**
```bash
# Make sure runtime is linked
cd packages/runtime
npm link

# Link it in your frontend
cd ../../frontend
npm link @autofictional/runtime
```

### Changes Not Reflecting

**Solution:**
```bash
# Rebuild the package
cd packages/runtime
npm run build

# Or restart your dev server
```

### Want to Switch Back to Published Version

**Solution:**
```bash
cd frontend
npm unlink @autofictional/runtime
npm install @autofictional/runtime@latest
```

### CLI Not Found

**Solution:**
```bash
# Make sure CLI is linked globally
cd packages/cli
npm link

# Or use directly
node packages/cli/dist/index.js install
```

---

## 📁 Project Structure

```
Autofictional/
├── packages/
│   ├── runtime/
│   │   ├── src/          # Source code
│   │   ├── dist/         # Built output (gitignored)
│   │   └── package.json
│   ├── cli/
│   │   ├── src/          # Source code
│   │   ├── dist/         # Built output (gitignored)
│   │   └── package.json
│   ├── dev-setup.sh      # Setup script
│   └── publish.sh        # Publish script
└── frontend/
    └── node_modules/
        └── @autofictional/
            └── runtime -> ../../packages/runtime (symlink)
```

---

## 💡 Tips

1. **Use watch mode** - `npm run dev` in each package watches for changes
2. **Keep dist/ gitignored** - Only commit source, not built files
3. **Test locally first** - Always test with `npm link` before publishing
4. **Version bump** - Use `npm version patch` before publishing changes

---

## 🚀 Quick Reference

```bash
# Setup (one time)
npm run packages:link
cd frontend && npm link @autofictional/runtime

# Daily development
cd packages/runtime && npm run dev  # Terminal 1
cd packages/cli && npm run dev     # Terminal 2
npm run dev                         # Terminal 3 (frontend)

# When ready to publish
npm run packages:publish
```

