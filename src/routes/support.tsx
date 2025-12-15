import { Link, createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  CreditCard,
  ExternalLink,
  FileText,
  HelpCircle,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Shield,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform } from 'motion/react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/support')({
  component: SupportPage,
})

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

const quickLinks = [
  {
    icon: FileText,
    title: 'Pricing',
    description: 'Plans, features, and usage limits',
    href: '/',
    color: 'violet',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Guides and tutorials',
    href: '/',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    description: 'How we handle your data',
    href: '/',
    color: 'emerald',
  },
  {
    icon: FileText,
    title: 'Terms of Service',
    description: 'Usage terms and conditions',
    href: '/',
    color: 'amber',
  },
]

const contactOptions = [
  {
    icon: Mail,
    title: 'General Support',
    description: 'For general questions and help',
    email: 'support@maketheclip.com',
    color: 'violet',
  },
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'For business and team inquiries',
    email: 'enterprise@maketheclip.com',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Privacy & DPO',
    description: 'Data protection inquiries',
    email: 'privacy@maketheclip.com',
    color: 'emerald',
  },
  {
    icon: FileText,
    title: 'Legal',
    description: 'Legal matters and compliance',
    email: 'legal@maketheclip.com',
    color: 'pink',
  },
]

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  violet: {
    bg: 'bg-violet-100 dark:bg-violet-900/50',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-500/30',
    glow: 'group-hover:shadow-violet-500/20',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/50',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/30',
    glow: 'group-hover:shadow-blue-500/20',
  },
  emerald: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  amber: {
    bg: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/30',
    glow: 'group-hover:shadow-amber-500/20',
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900/50',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-500/30',
    glow: 'group-hover:shadow-pink-500/20',
  },
}

const EMAILJS_SERVICE_ID = 'service_583knrh'
const EMAILJS_TEMPLATE_ID = 'template_7d9hh6x'
const EMAILJS_PUBLIC_KEY = '5bkt4k0522Ybjqn09'

function SupportPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const floatY1 = useTransform(scrollYProgress, [0, 1], ['0vh', '20vh'])
  const floatY2 = useTransform(scrollYProgress, [0, 1], ['5vh', '-15vh'])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY,
      )
      setFormState('success')
      setFormData({ from_name: '', from_email: '', subject: '', message: '' })

      // Reset to idle after 5 seconds
      setTimeout(() => setFormState('idle'), 5000)
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-linear-to-b from-violet-100/50 via-background to-background py-16 dark:from-violet-950/30 sm:py-24"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute -left-40 top-20 size-80 rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-500/10" />
          <div className="absolute -right-40 top-40 size-96 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/10" />
        </div>

        {/* Floating elements */}
        <motion.div
          className="pointer-events-none absolute left-[10%] top-[20%]"
          style={{ y: floatY1 }}
        >
          <HelpCircle
            className="size-16 text-violet-500/10 dark:text-violet-400/5"
            strokeWidth={1}
          />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-[15%] top-[30%]"
          style={{ y: floatY2 }}
        >
          <MessageCircle
            className="size-12 rotate-12 text-pink-500/10 dark:text-pink-400/5"
            strokeWidth={1}
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Badge
                variant="outline"
                className="group relative mb-6 gap-2 overflow-hidden border-violet-500/30 bg-violet-100 px-4 py-2 text-sm text-violet-700 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 dark:bg-violet-950/50 dark:text-violet-200"
              >
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <Sparkles className="size-4 animate-[pulse_2s_ease-in-out_infinite]" />
                We're here to help
              </Badge>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              How can we{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                  help you?
                </span>
                <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                  help you?
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto max-w-2xl text-lg text-muted-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Find quick links, resources, and ways to reach our team. We
              typically respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.h2
              className="mb-3 text-2xl font-bold text-foreground sm:text-3xl"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Quick Links
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              Self-serve resources to help you get started
            </motion.p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => {
              const colors = colorClasses[link.color]
              return (
                <motion.div
                  key={link.title}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={scaleIn}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: index * 0.1,
                  }}
                >
                  <Link to={link.href}>
                    <Card
                      className={`group relative h-full cursor-pointer overflow-hidden border-0 bg-card/50 ring-1 ring-border/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.glow}`}
                    >
                      <CardContent className="flex items-start gap-4 p-5">
                        <motion.div
                          className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 15,
                          }}
                        >
                          <link.icon className="size-6" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <h3 className="mb-1 flex items-center gap-1.5 font-semibold text-foreground">
                            {link.title}
                            <ExternalLink className="size-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="relative bg-muted/30 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Options */}
            <div>
              <motion.div
                className="mb-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.h2
                  className="mb-3 text-2xl font-bold text-foreground sm:text-3xl"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  Contact Us
                </motion.h2>
                <motion.p
                  className="text-muted-foreground"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                >
                  Choose the right channel for your inquiry
                </motion.p>
              </motion.div>

              <div className="space-y-4">
                {contactOptions.map((option, index) => {
                  const colors = colorClasses[option.color]
                  return (
                    <motion.a
                      key={option.title}
                      href={`mailto:${option.email}`}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, margin: '-50px' }}
                      variants={fadeInUp}
                      transition={{
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: index * 0.1,
                      }}
                    >
                      <Card className="group cursor-pointer border-0 bg-card/80 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <CardContent className="flex items-center gap-4 p-4">
                          <div
                            className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-transform duration-300 group-hover:scale-110`}
                          >
                            <option.icon className="size-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground">
                              {option.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {option.description}
                            </p>
                          </div>
                          <div className="hidden sm:block">
                            <span
                              className={`text-sm font-medium ${colors.text} transition-colors group-hover:underline`}
                            >
                              {option.email}
                            </span>
                          </div>
                          <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                        </CardContent>
                      </Card>
                    </motion.a>
                  )
                })}
              </div>

              {/* Additional Info Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                >
                  <Card className="border-0 bg-card/80 ring-1 ring-border/50">
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <CreditCard className="size-5 text-violet-500" />
                        <h3 className="font-semibold text-foreground">
                          Billing
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Manage your subscription in{' '}
                        <Link
                          to="/"
                          className="text-violet-500 hover:underline"
                        >
                          Settings → Billing
                        </Link>
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                >
                  <Card className="border-0 bg-card/80 ring-1 ring-border/50">
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Users className="size-5 text-violet-500" />
                        <h3 className="font-semibold text-foreground">
                          Community
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Join our{' '}
                        <a href="#" className="text-violet-500 hover:underline">
                          Discord server
                        </a>{' '}
                        for community support
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
              variants={scaleIn}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Card className="relative overflow-hidden border-0 bg-card ring-1 ring-border/50">
                {/* Gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-purple-500 to-pink-500" />

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/50">
                        <MessageCircle className="size-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        Send us a message
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="from_name">Name</Label>
                        <Input
                          id="from_name"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          disabled={formState === 'sending'}
                          className="bg-background transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="from_email">Email</Label>
                        <Input
                          id="from_email"
                          name="from_email"
                          type="email"
                          value={formData.from_email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          disabled={formState === 'sending'}
                          className="bg-background transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        disabled={formState === 'sending'}
                        className="bg-background transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your issue or question in detail..."
                        rows={5}
                        required
                        disabled={formState === 'sending'}
                        className="resize-none bg-background transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>

                    {/* Success message */}
                    {formState === 'success' && (
                      <motion.div
                        className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-600 dark:text-emerald-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle className="size-4" />
                        Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}

                    {/* Error message */}
                    {formState === 'error' && (
                      <motion.div
                        className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-600 dark:text-red-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Failed to send message. Please try again or email us
                        directly.
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={
                        formState === 'sending' || formState === 'success'
                      }
                      className="group w-full gap-2 bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-50"
                    >
                      {formState === 'sending' ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Sending...
                        </>
                      ) : formState === 'success' ? (
                        <>
                          <CheckCircle className="size-4" />
                          Sent!
                        </>
                      ) : (
                        <>
                          <Send className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to our{' '}
                      <Link to="/" className="text-violet-500 hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-violet-600">
                <Zap className="size-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">RPJ Labs Inc.</p>
                <p className="text-sm text-muted-foreground">dba MakeTheClip</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
