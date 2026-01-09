# Development Workflow

## 🎯 Current Setup

✅ Packages are linked locally
✅ Frontend is using local runtime
✅ CLI is available globally

## 📝 Daily Workflow

### Making Changes to Runtime

1. **Edit source**
   ```bash
   # Edit packages/runtime/src/index.tsx
   ```

2. **Rebuild** (or use watch mode)
   ```bash
   cd packages/runtime
   npm run build
   # OR for watch mode:
   npm run dev
   ```

3. **Test in frontend**
   ```bash
   # Frontend automatically picks up changes
   npm run dev
   ```

### Making Changes to CLI

1. **Edit source**
   ```bash
   # Edit packages/cli/src/commands/install.ts
   ```

2. **Rebuild**
   ```bash
   cd packages/cli
   npm run build
   # OR for watch mode:
   npm run dev
   ```

3. **Test CLI**
   ```bash
   autofictional install
   ```

## 🚀 Publishing Workflow

### When Ready to Publish

1. **Make sure everything builds**
   ```bash
   npm run packages:build
   ```

2. **Test locally first**
   ```bash
   # Make sure frontend works with linked packages
   cd frontend
   npm run dev
   ```

3. **Version bump**
   ```bash
   cd packages/runtime
   npm version patch  # 0.1.0 → 0.1.1
   
   cd ../cli
   npm version patch  # 0.1.0 → 0.1.1
   ```

4. **Publish**
   ```bash
   npm run packages:publish
   ```

5. **Switch frontend to published version** (optional)
   ```bash
   cd frontend
   npm unlink @autofictional/runtime
   npm install @autofictional/runtime@latest
   ```

## 🔄 Switching Between Local and Published

### Use Local Version
```bash
cd frontend
npm link @autofictional/runtime
```

### Use Published Version
```bash
cd frontend
npm unlink @autofictional/runtime
npm install @autofictional/runtime@latest
```

## 📋 Quick Commands

```bash
# Build all packages
npm run packages:build

# Link packages (one-time setup)
npm run packages:link

# Watch mode (dev)
cd packages/runtime && npm run dev
cd packages/cli && npm run dev

# Publish to npm
npm run packages:publish
```

## 💡 Tips

- **Keep watch mode running** - `npm run dev` in each package watches for changes
- **Test before publishing** - Always test with local links first
- **Version carefully** - Use semantic versioning (patch/minor/major)
- **Commit source only** - Don't commit `dist/` folders (they're gitignored)

