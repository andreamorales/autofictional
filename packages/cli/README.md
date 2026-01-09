# @autofictional/cli

CLI tool to install Autofictional autonomous sidebar adaptation into your React app.

## Installation

From your project directory (frontend or root):

```bash
node path/to/packages/cli/dist/index.js install
```

Or if published to npm:

```bash
npx autofictional
```

## Requirements

- React 18+
- Tailwind CSS
- shadcn Sidebar component (must be installed first)

## What it does

1. Detects your project setup (React, Tailwind, shadcn Sidebar)
2. Installs `@autofictional/runtime` package
3. Generates a unique app ID
4. Patches your main entry file to wrap your app with `<AutofictionalProvider>`

## Safety

- Creates a backup of your main file (`.backup` extension)
- Exits safely if patching fails
- Will not install if already installed

## Verification

After installation:

1. Start your dev server: `npm run dev`
2. Visit `/autofictional-test` to verify the installation
3. Check for no console errors
4. Verify `AutofictionalProvider` is mounted

## NIGHT 1 Status

✅ Runtime skeleton installed
✅ Provider renders children without behavior
✅ No UI changes yet
✅ No backend yet
✅ No sidebar changes yet

This is NIGHT 1 of the MVP - the foundation is in place for autonomous sidebar adaptation.

