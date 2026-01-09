import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Check if env vars are actually set (not just placeholder values)
const hasValidConfig =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseAnonKey !== 'your_supabase_anon_key' &&
  !supabaseUrl.includes('localhost:54321') // Default local placeholder

// Create a mock client if env vars are missing (for development without Supabase)
const createMockClient = () => {
  return createClient('https://placeholder.supabase.co', 'placeholder-key')
}

// Only warn in development, create client either way
if (!hasValidConfig) {
  if (import.meta.env.DEV) {
    console.warn('⚠️  Supabase environment variables are not set.')
    console.warn('📝 Edit frontend/.env file with your Supabase credentials:')
    console.warn('   VITE_SUPABASE_URL=your_url')
    console.warn('   VITE_SUPABASE_ANON_KEY=your_key')
    console.warn('💡 Using mock client for now. Supabase features will not work.')
  }
}

export const supabase = hasValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient()

