import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [loading, setLoading] = useState(false)

  const handleTestConnection = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from('test').select('*').limit(1)
      if (error) throw error
      console.log('Supabase connection successful:', data)
      alert('Connected to Supabase successfully!')
    } catch (error) {
      console.error('Error connecting to Supabase:', error)
      alert('Error connecting to Supabase. Check your environment variables.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white p-l">
      <header className="text-center mb-xl">
        <h1 className="text-5xl font-bold mb-l">Autofictional</h1>
        <p className="text-xl opacity-90">React + Supabase + TanStack Router + shadcn/ui</p>
      </header>
      <main className="flex flex-col gap-m">
        <Button
          onClick={handleTestConnection}
          disabled={loading}
          size="lg"
          className="bg-white text-purple-600 hover:bg-white/90"
        >
          {loading ? 'Connecting...' : 'Test Supabase Connection'}
        </Button>
        <Button
          variant="outline"
          asChild
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <Link to="/test">View Component Test Page →</Link>
        </Button>
      </main>
    </div>
  )
}

