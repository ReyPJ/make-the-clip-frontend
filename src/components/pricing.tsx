import { useRef, useState } from 'react'
import { Check, Crown, Rocket, Sparkles, Star, X, Zap } from 'lucide-react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Plan {
  name: string
  price: number
  description: string
  features: Array<string>
  notIncluded?: Array<string>
  popular?: boolean
  icon: typeof Zap
  color: 'slate' | 'blue' | 'violet' | 'amber'
  cta: string
}

const plans: Array<Plan> = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for trying out the platform',
    icon: Zap,
    color: 'slate',
    cta: 'Get Started',
    features: [
      '5 clips per month',
      '15 minute max video',
      '1 GB storage',
      'Basic support',
      'Standard processing',
    ],
    notIncluded: ['No watermark', 'Analytics dashboard', 'Priority support'],
  },
  {
    name: 'Starter',
    price: 9,
    description: 'For content creators getting started',
    icon: Rocket,
    color: 'blue',
    cta: 'Start Creating',
    features: [
      '12 clips per month',
      '30 minute max video',
      '10 GB storage',
      'Email support',
      'No watermark',
      '2 concurrent jobs',
    ],
    notIncluded: ['Analytics dashboard', 'Priority support'],
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For serious content creators',
    icon: Crown,
    color: 'violet',
    cta: 'Go Pro',
    popular: true,
    features: [
      '60 clips per month',
      '60 minute max video',
      '100 GB storage',
      'Priority support',
      'No watermark',
      'HD export',
      'Analytics dashboard',
      '5 concurrent jobs',
    ],
  },
  {
    name: 'Business',
    price: 79,
    description: 'For teams and agencies',
    icon: Star,
    color: 'amber',
    cta: 'Contact Sales',
    features: [
      'Unlimited clips',
      '180 minute max video',
      '1 TB storage',
      'Dedicated support',
      'No watermark',
      'HD export',
      'Advanced analytics',
      '10 concurrent jobs',
      'API access',
      'Custom branding',
    ],
  },
]

const colorClasses = {
  slate: {
    bg: 'bg-slate-500',
    bgLight: 'bg-slate-100 dark:bg-slate-800',
    text: 'text-slate-600 dark:text-slate-400',
    border: 'border-slate-200 dark:border-slate-700',
    button:
      'bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900',
    gradient: 'from-slate-500 to-slate-600',
    glow: 'shadow-slate-500/20',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100 dark:bg-blue-900/50',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    button: 'bg-blue-600 hover:bg-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  violet: {
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-100 dark:bg-violet-900/50',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-800',
    button: 'bg-violet-600 hover:bg-violet-500',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/25',
  },
  amber: {
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    button: 'bg-amber-600 hover:bg-amber-500',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly',
  )

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const floatY1 = useTransform(scrollYProgress, [0, 1], ['0vh', '25vh'])
  const floatY2 = useTransform(scrollYProgress, [0, 1], ['5vh', '-15vh'])

  const yearlyDiscount = 0.2 // 20% off

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-background to-slate-50 py-20 dark:from-slate-950 dark:via-background dark:to-slate-950 sm:py-32"
    >
      {/* Background - Radial gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large radial gradients */}
        <div className="absolute left-1/4 top-0 size-150 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 size-150 translate-x-1/2 rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      {/* Hexagon pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 15v22L30 52 0 37V15z' fill='none' stroke='%239C92AC' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 52px',
        }}
      />

      {/* Floating accents */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[15%]"
        style={{ y: floatY1 }}
      >
        <div className="size-20 rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-500/10 to-transparent backdrop-blur-sm" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[25%]"
        style={{ y: floatY2 }}
      >
        <div className="size-16 rotate-12 rounded-xl border border-amber-500/20 bg-linear-to-br from-amber-500/10 to-transparent backdrop-blur-sm" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[5%]"
        style={{ y: floatY2 }}
      >
        <div className="size-12 rounded-lg border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-transparent backdrop-blur-sm" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[30%] right-[12%]"
        style={{ y: floatY1 }}
      >
        <div className="size-14 -rotate-12 rounded-xl border border-pink-500/20 bg-linear-to-br from-pink-500/10 to-transparent backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
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
              Simple Pricing
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Choose your{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-amber-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:via-purple-400 dark:to-amber-400">
                perfect plan
              </span>
              <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-amber-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-amber-400">
                perfect plan
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Start free, upgrade when you need. All plans include our core AI
            features.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly',
                )
              }
              className={`relative h-7 w-14 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-violet-600' : 'bg-muted'
              }`}
            >
              <motion.div
                className="absolute top-1 size-5 rounded-full bg-white shadow-sm"
                animate={{ left: billingCycle === 'yearly' ? '32px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                Save 20%
              </Badge>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const colors = colorClasses[plan.color]
            const price =
              billingCycle === 'yearly'
                ? Math.round(plan.price * (1 - yearlyDiscount) * 12)
                : plan.price

            return (
              <motion.div
                key={plan.name}
                className="relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
                variants={scaleIn}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                    <Badge className="gap-1.5 bg-violet-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-violet-500/30">
                      <Star className="size-3.5 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`group relative h-full overflow-hidden border-0 transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? 'bg-linear-to-b from-violet-600 to-purple-700 text-white shadow-2xl shadow-violet-500/30 ring-2 ring-violet-500'
                      : 'bg-card/80 ring-1 ring-border/50 backdrop-blur-sm hover:shadow-xl'
                  }`}
                >
                  {/* Gradient overlay for popular card */}
                  {plan.popular && (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent" />
                    </>
                  )}

                  {/* Hover gradient for non-popular */}
                  {!plan.popular && (
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${colors.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                    />
                  )}

                  <CardContent className="relative flex h-full flex-col p-6">
                    {/* Icon and name */}
                    <div className="mb-4 flex items-center gap-3">
                      <motion.div
                        className={`flex size-12 items-center justify-center rounded-xl ${
                          plan.popular
                            ? 'bg-white/20 text-white'
                            : `${colors.bgLight} ${colors.text}`
                        }`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        <plan.icon className="size-6" />
                      </motion.div>
                      <div>
                        <h3
                          className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}
                        >
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}
                        >
                          $
                          {billingCycle === 'yearly' && plan.price > 0
                            ? Math.round(price / 12)
                            : price}
                        </span>
                        {plan.price > 0 && (
                          <span
                            className={
                              plan.popular
                                ? 'text-white/70'
                                : 'text-muted-foreground'
                            }
                          >
                            /mo
                          </span>
                        )}
                      </div>
                      {billingCycle === 'yearly' && plan.price > 0 && (
                        <p
                          className={`mt-1 text-sm ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}
                        >
                          ${price} billed yearly
                        </p>
                      )}
                      <p
                        className={`mt-2 text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`mb-6 w-full font-semibold cursor-pointer ${
                        plan.popular
                          ? 'bg-white text-violet-700 hover:bg-white/90'
                          : `${colors.button} text-white`
                      }`}
                    >
                      {plan.cta}
                    </Button>

                    {/* Features */}
                    <div className="flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular
                                ? 'bg-white/20 text-white'
                                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            <Check className="size-3" />
                          </div>
                          <span
                            className={`text-sm ${
                              plan.popular
                                ? 'text-white/90'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}

                      {/* Not included features */}
                      {plan.notIncluded?.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 opacity-50"
                        >
                          <div
                            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular
                                ? 'bg-white/10 text-white/50'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <X className="size-3" />
                          </div>
                          <span
                            className={`text-sm line-through ${
                              plan.popular
                                ? 'text-white/50'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge
            variant="outline"
            className="gap-2 border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400"
          >
            <Check className="size-4" />
            14-day money-back guarantee
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-400"
          >
            <Check className="size-4" />
            Cancel anytime
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-600 dark:text-violet-400"
          >
            <Check className="size-4" />
            No hidden fees
          </Badge>
        </motion.div>

        {/* Custom plan CTA */}
        <motion.div
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <Card className="relative overflow-hidden border-0 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />
            </div>

            <CardContent className="relative flex flex-col items-center justify-between gap-6 py-8 sm:flex-row sm:py-10">
              <div className="text-center sm:text-left">
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  Need a custom plan?
                </h3>
                <p className="text-slate-300">
                  Let's build something tailored to your team's needs.
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 bg-white font-semibold text-slate-900 hover:bg-slate-100"
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          className="w-full text-slate-100 dark:text-slate-900"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V24c-120 12-240 18-360 18s-240-6-360-18-240-18-360-18-240 6-360 18v24z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
