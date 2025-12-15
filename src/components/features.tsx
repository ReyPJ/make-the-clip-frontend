import { useRef } from 'react'
import {
  Brain,
  Captions,
  Clock,
  Cloud,
  CreditCard,
  Download,
  Film,
  Gauge,
  Globe,
  HardDrive,
  // eslint-disable-next-line no-shadow-restricted-names
  Infinity,
  Languages,
  RefreshCw,
  Shield,
  Sparkles,
  TrendingUp,
  Upload,
  Video,
  Zap,
} from 'lucide-react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: 'violet' | 'blue' | 'pink' | 'emerald' | 'amber' | 'cyan'
}

const mainFeatures: Array<Feature> = [
  {
    icon: Brain,
    title: 'AI-Powered Viral Detection',
    description:
      'Our AI analyzes your entire video to find the most engaging, shareable moments with viral potential. Get a viral score from 1-10 for each clip.',
    color: 'violet',
  },
  {
    icon: Captions,
    title: 'Auto-Generated Subtitles',
    description:
      'TikTok-style animated subtitles burned directly into your clips. Powered by OpenAI Whisper for maximum accuracy.',
    color: 'pink',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Processing',
    description:
      '2-5 minutes for a 1-hour video. Our pipeline uses FFmpeg and parallel processing for blazing speed.',
    color: 'amber',
  },
  {
    icon: Video,
    title: 'Multiple Format Support',
    description:
      'Upload MP4, MOV, AVI, MKV, or WebM files up to 600MB. We handle the conversion automatically.',
    color: 'blue',
  },
  {
    icon: RefreshCw,
    title: 'Regenerate Anytime',
    description:
      'Not happy with the clips? Hit regenerate and our AI will find different viral moments from your video.',
    color: 'emerald',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Ready',
    description:
      'Clips are optimized for TikTok, YouTube Shorts, Instagram Reels, and any other platform you choose.',
    color: 'cyan',
  },
]

const additionalFeatures = [
  { icon: Upload, label: 'Drag & Drop Upload' },
  { icon: Cloud, label: 'Cloud Storage' },
  { icon: Download, label: 'Instant Downloads' },
  { icon: Shield, label: 'Secure Processing' },
  { icon: Clock, label: 'Real-time Status' },
  { icon: Languages, label: 'Multi-language' },
  { icon: Gauge, label: 'Usage Analytics' },
  { icon: CreditCard, label: 'Flexible Plans' },
]

const colorClasses = {
  violet: {
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-100 dark:bg-violet-900/50',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/25',
    gradient: 'from-violet-500 to-purple-500',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100 dark:bg-blue-900/50',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/25',
    gradient: 'from-blue-500 to-cyan-500',
  },
  pink: {
    bg: 'bg-pink-500',
    bgLight: 'bg-pink-100 dark:bg-pink-900/50',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500/25',
    gradient: 'from-pink-500 to-rose-500',
  },
  emerald: {
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/25',
    gradient: 'from-emerald-500 to-green-500',
  },
  amber: {
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/25',
    gradient: 'from-amber-500 to-orange-500',
  },
  cyan: {
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-100 dark:bg-cyan-900/50',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/25',
    gradient: 'from-cyan-500 to-teal-500',
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

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax for floating elements
  const floatY1 = useTransform(scrollYProgress, [0, 1], ['0vh', '30vh'])
  const floatY2 = useTransform(scrollYProgress, [0, 1], ['10vh', '-20vh'])
  const floatY3 = useTransform(scrollYProgress, [0, 1], ['5vh', '40vh'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background py-20 sm:py-32"
    >
      {/* Diagonal lines background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      {/* Gradient accents - corners */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-violet-500/10 blur-[150px] dark:bg-violet-500/5" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-pink-500/10 blur-[150px] dark:bg-pink-500/5" />

      {/* Animated grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal scanning line */}
        <motion.div
          className="absolute left-0 h-px w-full bg-linear-to-r from-transparent via-violet-500/50 to-transparent"
          style={{ y: floatY1 }}
        />
        {/* Vertical scanning line */}
        <motion.div
          className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-pink-500/30 to-transparent"
          style={{ x: floatY2 }}
        />
      </div>

      {/* Floating tech elements - circuit-like */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[20%]"
        style={{ y: floatY1 }}
      >
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-full bg-violet-500/40" />
          <div className="h-px w-8 bg-violet-500/30" />
          <div className="size-1.5 rounded-full border border-violet-500/40" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[30%]"
        style={{ y: floatY2 }}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="size-1.5 rounded-full bg-pink-500/40" />
          <div className="h-6 w-px bg-pink-500/30" />
          <div className="size-2 rotate-45 border border-pink-500/40" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[25%] left-[12%]"
        style={{ y: floatY3 }}
      >
        <div className="flex items-center gap-1">
          <div className="size-1.5 rotate-45 bg-blue-500/40" />
          <div className="h-px w-12 bg-blue-500/30" />
          <div className="size-2 rounded-full border border-blue-500/40" />
          <div className="h-px w-6 bg-blue-500/20" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[40%] right-[15%]"
        style={{ y: floatY1 }}
      >
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <div className="h-px w-4 bg-emerald-500/30" />
            <div className="size-1.5 rounded-full bg-emerald-500/40" />
          </div>
          <div className="h-4 w-px bg-emerald-500/20" />
          <div className="size-2 rounded-full border border-emerald-500/30" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
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
              Powerful Features
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Everything you need to{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-pink-600 to-violet-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:via-pink-400 dark:to-violet-400">
                go viral
              </span>
              <span className="relative bg-linear-to-r from-violet-600 via-pink-600 to-violet-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-pink-400 dark:to-violet-400">
                go viral
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            From upload to viral-ready clips in minutes. Our AI handles the
            heavy lifting so you can focus on creating.
          </motion.p>
        </motion.div>

        {/* Main features grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature, index) => {
            const colors = colorClasses[feature.color]
            return (
              <motion.div
                key={feature.title}
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
                <Card
                  className={`group relative h-full overflow-hidden border-0 bg-card/80 ring-1 ring-border/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${colors.glow}`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${colors.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />

                  {/* Top accent line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${colors.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <CardContent className="relative p-6">
                    {/* Icon */}
                    <motion.div
                      className={`mb-4 inline-flex size-14 items-center justify-center rounded-2xl ${colors.bgLight} ${colors.text} transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <feature.icon className="size-7" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Card className="relative overflow-hidden border-0 bg-linear-to-br from-violet-600 via-purple-600 to-pink-600 shadow-2xl shadow-violet-500/25">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            {/* Floating orbs inside */}
            <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl" />

            <CardContent className="relative py-12 sm:py-16">
              <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { value: '2-5', label: 'Minutes Processing', suffix: 'min' },
                  { value: '600', label: 'Max File Size', suffix: 'MB' },
                  { value: '5', label: 'Formats Supported', suffix: '+' },
                  { value: '99.9', label: 'Uptime', suffix: '%' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: index * 0.1,
                    }}
                  >
                    <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                      {stat.value}
                      <span className="text-2xl text-white/70">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional features */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h3
            className="mb-8 text-2xl font-semibold text-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            And so much more...
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: index * 0.05,
                }}
              >
                <Badge
                  variant="outline"
                  className="group gap-2 border-border bg-card/80 px-4 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-100/50 hover:text-violet-600 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                >
                  <feature.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                  {feature.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Plans teaser */}
        <motion.div
          className="mt-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Card className="relative overflow-hidden border-border bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-linear-to-r from-violet-500/5 via-transparent to-pink-500/5" />

            <CardContent className="relative py-10 text-center sm:py-12">
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex -space-x-2">
                    {['violet', 'pink', 'blue', 'emerald'].map((color, i) => (
                      <div
                        key={color}
                        className={`size-8 rounded-full border-2 border-background bg-${color}-500 flex items-center justify-center`}
                        style={{ zIndex: 4 - i }}
                      >
                        {i === 0 && <Film className="size-4 text-white" />}
                        {i === 1 && (
                          <TrendingUp className="size-4 text-white" />
                        )}
                        {i === 2 && <HardDrive className="size-4 text-white" />}
                        {i === 3 && <Infinity className="size-4 text-white" />}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                  Plans for every creator
                </h3>
                <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
                  From hobbyists to professional content teams. Start free,
                  scale as you grow.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">FREE</span>5
                    clips/month
                  </span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      STARTER
                    </span>
                    12 clips/month
                  </span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-violet-600 dark:text-violet-400">
                      PRO
                    </span>
                    60 clips/month
                  </span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      BUSINESS
                    </span>
                    Unlimited
                  </span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom border - tech style */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex h-px items-center justify-center">
          <div className="h-px w-1/4 bg-linear-to-r from-transparent to-violet-500/40" />
          <div className="size-1.5 rounded-full bg-violet-500/60" />
          <div className="h-px flex-1 bg-violet-500/40" />
          <div className="size-1.5 rounded-full bg-pink-500/60" />
          <div className="h-px w-1/4 bg-linear-to-l from-transparent to-pink-500/40" />
        </div>
      </div>
    </section>
  )
}
