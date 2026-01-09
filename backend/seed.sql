-- This file contains seed data for your local development database
-- Run `supabase db reset` to apply migrations and seed data

-- Example: Create a test table
CREATE TABLE IF NOT EXISTS test (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some test data
INSERT INTO test (name) VALUES ('Test Record 1'), ('Test Record 2');
