import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
