# Autofictional

Autonomous sidebar adaptation for React apps. The sidebar learns from user behavior and adapts automatically.

## 🚀 Quick Start

```bash
npx @autofictional/cli install
```

## 📦 Packages

- `@autofictional/runtime` - React provider and hooks
- `@autofictional/cli` - Installation CLI tool

## 🛠️ Development

See [YOUR_WORKFLOW.md](./YOUR_WORKFLOW.md) for the complete development workflow.

### Quick Commands

```bash
# Build packages
npm run packages:build

# Publish everything (GitHub + npm + test)
npm run publish:all

# Or step by step:
npm run packages:build
cd packages/runtime && npm version patch && cd ../..
cd packages/cli && npm version patch && cd ../..
npm run packages:publish
```

## 📚 Documentation

- [YOUR_WORKFLOW.md](./YOUR_WORKFLOW.md) - Your complete development workflow
- [SIMPLE_PUBLISHING_GUIDE.md](./SIMPLE_PUBLISHING_GUIDE.md) - Simple npm publishing guide
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) - GitHub setup instructions
- [PRD.md](./PRD.md) - Product Requirements Document

## 🎯 Status

**NIGHT 1 COMPLETE** ✅
- Runtime skeleton installed
- Provider renders children without behavior
- No UI changes yet

**Next:** NIGHT 2 - Metrics Loop
