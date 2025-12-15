import { Link } from '@tanstack/react-router'
import { Scissors } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '/' },
      { label: 'Pricing', href: '/' },
      { label: 'How It Works', href: '/' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Discord', href: '/' },
      { label: 'Contact', href: '/support' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/' },
      { label: 'Blog', href: '/' },
      { label: 'Careers', href: '/' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Refunds & Cancellation', href: '/' },
    ],
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-slate-950">
      {/* Top border gradient */}
      <div className="h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-12 lg:px-8 lg:py-16">
        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-violet-600">
                <Scissors className="size-4 text-white" />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Turn long videos into viral clips with AI. Powered by advanced AI
              to find the best moments automatically.
            </p>
          </div>

          {/* Links sections */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-slate-200">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-slate-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} RPJ Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
