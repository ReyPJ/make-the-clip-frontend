import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}
