# Autofictional

A full-stack application built with React (frontend) and Supabase (backend).

## Project Structure

```
├── frontend/              # React application (Vite + TypeScript)
│   ├── src/
│   │   ├── routes/       # TanStack Router file-based routes
│   │   ├── components/   # React components (including shadcn/ui)
│   │   ├── lib/          # Utilities and Supabase client
│   │   └── ...
│   ├── components.json   # shadcn/ui configuration
│   └── package.json
├── backend/              # Backend configuration (Supabase)
│   ├── migrations/       # Database migrations
│   ├── seed.sql         # Seed data for local development
│   └── config.toml      # Supabase local configuration
└── package.json          # Root package.json with workspace scripts
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase CLI (for local development)

## Getting Started

### 1. Install Dependencies

```bash
# Install root dependencies (Supabase CLI)
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 2. Set Up Supabase

#### Option A: Using Supabase Cloud (Recommended for Production)

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Create a `.env` file in the `frontend` directory:

```bash
cd frontend
cp ../env.example .env
```

Edit `.env` and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Option B: Using Supabase Local Development (Recommended for Development)

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Start Supabase locally:
```bash
npm run backend:start
```

3. The CLI will output your local credentials. Add them to `frontend/.env`:
```
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=your_local_anon_key
```

4. Run migrations and seed data:
```bash
npm run backend:reset
```

### 3. Run the Application

```bash
# From the root directory
npm run dev

# Or from the frontend directory
cd frontend
npm run dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

### Root Level
- `npm run dev` - Start the web frontend
- `npm run build` - Build the frontend for production
- `npm run install:all` - Install all dependencies (root + frontend)
- `npm run backend:start` - Start local Supabase instance
- `npm run backend:stop` - Stop local Supabase instance
- `npm run backend:reset` - Reset local database (runs migrations + seed)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run tsr:generate` - Generate TanStack Router route types
- `npm run shadcn:install-all` - Install all shadcn/ui components at once

## Database Migrations

To create a new migration:
```bash
cd backend
supabase migration new migration_name
```

Migrations are stored in `backend/migrations/` and are automatically applied when you run `npm run backend:reset` or `npm run backend:start`.

## Environment Variables

Copy `env.example` to `frontend/.env` and fill in your Supabase credentials:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Routing**: TanStack Router (file-based routing)
- **UI Components**: shadcn/ui (locally installed, fully customizable)
- **Styling**: Tailwind CSS with custom semantic spacing
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Realtime)

## Styling Guidelines

**IMPORTANT: Always use semantic spacing classes. Never use Tailwind's default numeric spacing.**

✅ **DO USE**: `p-xs`, `p-s`, `p-m`, `p-l`, `m-xs`, `gap-m`, etc.  
❌ **DON'T USE**: `p-4`, `m-8`, `gap-2`, etc.

See [STYLING_GUIDE.md](./STYLING_GUIDE.md) for complete styling rules and spacing reference.

## Adding shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components, which are copied directly into your project so you can customize them freely.

### Install All Components at Once

To install all available shadcn/ui components:

```bash
cd frontend
npm run shadcn:install-all
```

This will install all ~60+ components from shadcn/ui into your project.

### Install Individual Components

To add a single component:

```bash
cd frontend
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

### Using Components

Components will be added to `frontend/src/components/ui/` and you can import them like:

```tsx
import { Button } from '@/components/ui/button'
```

See all available components at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## TanStack Router

This project uses [TanStack Router](https://tanstack.com/router/latest) for file-based routing.

### Creating Routes

Create routes by adding files in `frontend/src/routes/`:

- `index.tsx` → `/`
- `about.tsx` → `/about`
- `posts/$postId.tsx` → `/posts/:postId`

Example route file:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div>About Page</div>
}
```

### Route Generation

TanStack Router automatically generates route types. If needed, manually regenerate:

```bash
npm run tsr:generate
```

## Development Workflow

1. Make changes to the frontend code in `frontend/src/`
2. Create database migrations in `backend/migrations/` when needed
3. Test locally with `npm run dev` and `npm run backend:start`
4. Deploy frontend to your hosting provider
5. Link Supabase project or deploy migrations to production

## Resources

- [React Documentation](https://react.dev/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev/)

