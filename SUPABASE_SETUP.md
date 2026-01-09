# Supabase Setup Guide

## Quick Start - Choose Your Option

### Option 1: Supabase Cloud (Recommended for Production)

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Sign up/login
   - Click "New Project"
   - Fill in project details and wait for it to be created

2. **Get Your API Credentials**
   - Go to your project dashboard
   - Navigate to **Settings** → **API**
   - Copy:
     - **Project URL** (under "Project URL")
     - **anon public** key (under "Project API keys")

3. **Create Environment File**
   ```bash
   cd frontend
   cp ../env.example .env
   ```

4. **Add Your Credentials to `.env`**
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

5. **Create the Test Table**
   - Go to **SQL Editor** in your Supabase dashboard
   - Run this SQL:
   ```sql
   CREATE TABLE IF NOT EXISTS test (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   INSERT INTO test (name) VALUES ('Test Record 1'), ('Test Record 2');
   ```

6. **Test the Connection**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Click "Test Supabase Connection"
   - You should see a success message!

---

### Option 2: Local Supabase (Recommended for Development)

1. **Install Supabase CLI**
   ```bash
   npm install -g supabase
   ```
   Or using Homebrew (macOS):
   ```bash
   brew install supabase/tap/supabase
   ```

2. **Start Supabase Locally**
   ```bash
   npm run backend:start
   ```
   This will:
   - Start PostgreSQL database
   - Start Supabase API
   - Start Supabase Studio (web interface)
   - Apply migrations and seed data

3. **Get Your Local Credentials**
   After starting, the CLI will output something like:
   ```
   API URL: http://localhost:54321
   anon key: eyJhbGc...
   ```

4. **Create Environment File**
   ```bash
   cd frontend
   cp ../env.example .env
   ```

5. **Add Local Credentials to `.env`**
   ```env
   VITE_SUPABASE_URL=http://localhost:54321
   VITE_SUPABASE_ANON_KEY=your-local-anon-key-from-output
   ```

6. **The Test Table is Already Created**
   The `backend/seed.sql` file automatically creates the test table when you run `npm run backend:start`

7. **Test the Connection**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Click "Test Supabase Connection"
   - You should see a success message!

---

## Troubleshooting

### Environment Variables Not Loading
- Make sure `.env` is in the `frontend/` directory (not root)
- Restart your dev server after creating/updating `.env`
- Check that variable names start with `VITE_`

### Connection Errors
- Verify your URL and key are correct (no extra spaces)
- For local Supabase: Make sure `npm run backend:start` is running
- For cloud: Check your project is active in Supabase dashboard
- Check browser console for detailed error messages

### Test Table Not Found
- **Local**: Run `npm run backend:reset` to recreate tables
- **Cloud**: Run the SQL from Step 5 in SQL Editor

### Supabase Studio (Local Development)
- Access at: http://localhost:54323
- Use it to view/edit your database, run SQL queries, etc.

## Useful Commands

```bash
# Start local Supabase
npm run backend:start

# Stop local Supabase
npm run backend:stop

# Reset database (reapply migrations + seed)
npm run backend:reset

# Create a new migration
cd backend
supabase migration new migration_name
```

## Next Steps

Once Supabase is working:
1. ✅ Test connection works
2. Create your own tables via migrations
3. Set up authentication (if needed)
4. Configure Row Level Security (RLS) policies
5. Build your app features!

Need help? Check the [Supabase Documentation](https://supabase.com/docs)

