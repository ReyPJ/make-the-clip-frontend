import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </div>
  )
}
