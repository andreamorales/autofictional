-- Create test table for Supabase connection testing
CREATE TABLE IF NOT EXISTS test (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert test data
INSERT INTO test (name) VALUES ('Test Record 1'), ('Test Record 2');
