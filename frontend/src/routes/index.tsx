import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-l">
      <header className="text-center mb-xl">
        <div className="flex justify-center mb-l">
          <Logo className="w-16 h-auto text-foreground" />
        </div>
        <h1 className="text-5xl font-bold mb-l text-foreground">Autofictional</h1>
        <p className="text-xl text-foreground/70">React + Supabase + TanStack Router + shadcn/ui</p>
      </header>
      <main className="flex flex-col gap-m">
        <Button
          onClick={handleTestConnection}
          disabled={loading}
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90"
        >
          {loading ? 'Connecting...' : 'Test Supabase Connection'}
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-foreground/20 text-foreground hover:bg-foreground/5"
        >
          <Link to="/test">View Component Test Page →</Link>
        </Button>
      </main>
    </div>
  )
}

