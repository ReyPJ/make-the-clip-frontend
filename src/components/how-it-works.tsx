import {
  Brain,
  Captions,
  ChevronRight,
  FileText,
  Sparkles,
  Upload,
} from 'lucide-react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: 1,
    title: 'Upload Your Video',
    description:
      'Drop your podcast, interview, or gameplay. We support MP4, MOV, AVI, MKV, and WebM. File size limits depend on your plan.',
    icon: Upload,
    color: 'blue',
  },
  {
    number: 2,
    title: 'AI Finds Viral Moments',
    description:
      'Our AI agent analyzes your entire video to identify the most engaging and shareable moments.',
    icon: Brain,
    color: 'violet',
    highlight: true,
  },
  {
    number: 3,
    title: 'Smart Transcription',
    description:
      'A second AI transcribes each clip with precision, understanding context and speaker changes.',
    icon: FileText,
    color: 'purple',
  },
  {
    number: 4,
    title: 'Auto Subtitles',
    description:
      'FFmpeg burns stylish, TikTok-style animated subtitles directly into your clips.',
    icon: Captions,
    color: 'pink',
  },
  {
    number: 5,
    title: 'Ready to Share',
    description:
      'Download polished clips ready for TikTok, YouTube Shorts, Instagram Reels, or any platform.',
    icon: Sparkles,
    color: 'emerald',
  },
]

const colorClasses = {
  blue: {
    gradient: 'from-blue-500 to-cyan-500',
    gradientVia: 'from-blue-500 via-cyan-400 to-blue-500',
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100 dark:bg-blue-900/50',
    text: 'text-blue-600 dark:text-blue-400',
    glow: 'bg-blue-500/40',
    shadow: 'shadow-blue-500/30',
    border: 'border-blue-500/30',
    ring: 'ring-blue-500/20',
  },
  violet: {
    gradient: 'from-violet-500 to-purple-500',
    gradientVia: 'from-violet-500 via-purple-400 to-violet-500',
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-100 dark:bg-violet-900/50',
    text: 'text-violet-600 dark:text-violet-400',
    glow: 'bg-violet-500/40',
    shadow: 'shadow-violet-500/30',
    border: 'border-violet-500/30',
    ring: 'ring-violet-500/20',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    gradientVia: 'from-purple-500 via-pink-400 to-purple-500',
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-100 dark:bg-purple-900/50',
    text: 'text-purple-600 dark:text-purple-400',
    glow: 'bg-purple-500/40',
    shadow: 'shadow-purple-500/30',
    border: 'border-purple-500/30',
    ring: 'ring-purple-500/20',
  },
  pink: {
    gradient: 'from-pink-500 to-rose-500',
    gradientVia: 'from-pink-500 via-rose-400 to-pink-500',
    bg: 'bg-pink-500',
    bgLight: 'bg-pink-100 dark:bg-pink-900/50',
    text: 'text-pink-600 dark:text-pink-400',
    glow: 'bg-pink-500/40',
    shadow: 'shadow-pink-500/30',
    border: 'border-pink-500/30',
    ring: 'ring-pink-500/20',
  },
  emerald: {
    gradient: 'from-emerald-500 to-green-500',
    gradientVia: 'from-emerald-500 via-green-400 to-emerald-500',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    glow: 'bg-emerald-500/40',
    shadow: 'shadow-emerald-500/30',
    border: 'border-emerald-500/30',
    ring: 'ring-emerald-500/20',
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })

  // Timeline progress bar grows as you scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Parallax transforms using viewport units for dramatic effect
  const orbY1 = useTransform(sectionProgress, [0, 1], ['0vh', '50vh'])
  const orbY2 = useTransform(sectionProgress, [0, 1], ['10vh', '-40vh'])
  const orbY3 = useTransform(sectionProgress, [0, 1], ['20vh', '-30vh'])
  // Multiple layers at different speeds for depth
  const layerSlow = useTransform(sectionProgress, [0, 1], ['0vh', '40vh'])
  const layerMedium = useTransform(sectionProgress, [0, 1], ['0vh', '70vh'])
  const layerFast = useTransform(sectionProgress, [0, 1], ['0vh', '100vh'])
  const layerReverse = useTransform(sectionProgress, [0, 1], ['0vh', '-50vh'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-b from-violet-100/50 via-background to-purple-100/50 py-20 dark:from-muted/50 dark:via-background dark:to-muted/50 sm:py-32"
    >
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-600 to-transparent dark:via-violet-500" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-violet-400/30 to-transparent dark:from-violet-500/15" />
      </div>

      {/* Parallax floating orbs - these MOVE as you scroll */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[10%] size-96 rounded-full bg-blue-500/40 blur-[100px] dark:bg-blue-500/25"
        style={{ y: orbY1 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[30%] size-125 rounded-full bg-purple-500/35 blur-[120px] dark:bg-purple-500/20"
        style={{ y: orbY2 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[30%] size-80 rounded-full bg-pink-500/40 blur-[80px] dark:bg-pink-500/25"
        style={{ y: orbY3 }}
      />

      {/* === LAYER 1: SLOW (background) === */}
      <motion.div
        className="pointer-events-none absolute left-[3%] top-[5%]"
        style={{ y: layerSlow }}
      >
        <div className="size-8 rotate-45 border-2 border-violet-500/20 dark:border-violet-400/15" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[5%] top-[15%]"
        style={{ y: layerSlow }}
      >
        <div className="size-12 rounded-full border-2 border-blue-500/15 dark:border-blue-400/10" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[12%] top-[70%]"
        style={{ y: layerSlow }}
      >
        <div className="size-10 rotate-12 border-2 border-pink-500/20 dark:border-pink-400/15" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[85%]"
        style={{ y: layerSlow }}
      >
        <div className="size-6 rounded-full border-2 border-emerald-500/20 dark:border-emerald-400/15" />
      </motion.div>

      {/* === LAYER 2: MEDIUM === */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[20%]"
        style={{ y: layerMedium }}
      >
        <div className="size-4 rotate-45 rounded-sm bg-violet-500/30 dark:bg-violet-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[10%]"
        style={{ y: layerMedium }}
      >
        <div className="size-5 rounded-full bg-pink-500/25 dark:bg-pink-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[45%]"
        style={{ y: layerMedium }}
      >
        <div className="size-3 rounded-full bg-blue-500/35 dark:bg-blue-400/25" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[18%] top-[55%]"
        style={{ y: layerMedium }}
      >
        <div className="size-6 rotate-45 border-2 border-violet-500/30 dark:border-violet-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[6%] top-[65%]"
        style={{ y: layerMedium }}
      >
        <div className="size-4 rounded-full border-2 border-emerald-500/30 dark:border-emerald-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[75%]"
        style={{ y: layerMedium }}
      >
        <div className="size-5 rotate-12 bg-purple-500/25 dark:bg-purple-400/20" />
      </motion.div>

      {/* === LAYER 3: FAST (foreground) === */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[30%]"
        style={{ y: layerFast }}
      >
        <div className="size-3 rounded-full bg-pink-500/40 dark:bg-pink-400/30" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[7%] top-[40%]"
        style={{ y: layerFast }}
      >
        <div className="size-4 rotate-45 bg-violet-500/35 dark:bg-violet-400/25" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[18%] top-[25%]"
        style={{ y: layerFast }}
      >
        <div className="size-2 rounded-full bg-blue-500/45 dark:bg-blue-400/35" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[22%] top-[35%]"
        style={{ y: layerFast }}
      >
        <div className="size-3 rotate-45 bg-emerald-500/35 dark:bg-emerald-400/25" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[80%]"
        style={{ y: layerFast }}
      >
        <div className="size-4 rounded-full bg-purple-500/30 dark:bg-purple-400/25" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[90%]"
        style={{ y: layerFast }}
      >
        <div className="size-3 rotate-12 bg-pink-500/40 dark:bg-pink-400/30" />
      </motion.div>

      {/* === LAYER 4: REVERSE (moves up as you scroll down) === */}
      <motion.div
        className="pointer-events-none absolute left-[25%] top-[60%]"
        style={{ y: layerReverse }}
      >
        <div className="size-5 rotate-45 border-2 border-cyan-500/25 dark:border-cyan-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[25%] top-[70%]"
        style={{ y: layerReverse }}
      >
        <div className="size-4 rounded-full border-2 border-violet-500/30 dark:border-violet-400/20" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[30%] top-[40%]"
        style={{ y: layerReverse }}
      >
        <div className="size-3 rounded-full bg-pink-500/30 dark:bg-pink-400/25" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[30%] top-[50%]"
        style={{ y: layerReverse }}
      >
        <div className="size-6 rotate-45 border-2 border-blue-500/20 dark:border-blue-400/15" />
      </motion.div>

      {/* Static dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--muted-foreground) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center sm:mb-24"
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
              5-Step Process
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            How It{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                Works
              </span>
              <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                Works
              </span>
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            From long-form content to viral clips in minutes. Our AI-powered
            pipeline handles everything{' '}
            <span className="text-violet-600 underline decoration-violet-600/50 underline-offset-4 dark:text-violet-400 dark:decoration-violet-400/50">
              automatically.
            </span>
          </motion.p>
        </motion.div>

        {/* Mobile: Vertical timeline */}
        <div className="space-y-4 md:hidden">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={step.number}
                className="relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeInUp}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.08,
                }}
              >
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-full z-10 flex h-4 w-12 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ChevronRight className="size-4 rotate-90 text-muted-foreground/50" />
                    </motion.div>
                  </div>
                )}

                <Card
                  className={`group relative overflow-hidden border-border bg-card/80 ring-0 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${colors.border} hover:${colors.shadow}`}
                >
                  <div
                    className={`absolute -right-10 -top-10 size-32 rounded-full ${colors.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <CardContent className="relative flex gap-4 p-5">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className={`relative flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${colors.gradient} text-base font-bold text-white shadow-lg ${colors.shadow}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.div
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${colors.bgLight} ${colors.text}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <step.icon className="size-5" />
                      </motion.div>
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="mb-1.5 text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop: Alternating timeline */}
        <div className="relative hidden md:block" ref={timelineRef}>
          {/* Center timeline with animated flow */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2">
            {/* Base gradient line (unfilled) */}
            <div className="h-full w-full rounded-full bg-muted-foreground/20" />

            {/* Scroll-driven progress fill */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-linear-to-b from-blue-500 via-violet-500 to-emerald-500"
              style={{ scaleY }}
            />

            {/* Glow effect on the filled portion */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-linear-to-b from-blue-500 via-violet-500 to-emerald-500 blur-md"
              style={{ scaleY, opacity: 0.5 }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              const colors =
                colorClasses[step.color as keyof typeof colorClasses]

              return (
                <div
                  key={step.number}
                  className="relative flex items-center gap-8"
                >
                  {/* Left side */}
                  <div className={`flex-1 ${isLeft ? 'text-right' : ''}`}>
                    {isLeft && (
                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInLeft}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1,
                        }}
                      >
                        <Card
                          className={`group relative ml-auto max-w-md overflow-hidden border-0 bg-card/80 ring-1 ${colors.ring} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${colors.shadow}`}
                        >
                          {/* Animated gradient border on hover */}
                          <motion.div
                            className={`absolute inset-0 rounded-xl bg-linear-to-r ${colors.gradientVia} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                            animate={{
                              backgroundPosition: [
                                '0% 50%',
                                '100% 50%',
                                '0% 50%',
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                          />

                          {/* Glow effect */}
                          <div
                            className={`absolute -left-20 -top-20 size-40 rounded-full ${colors.glow} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100`}
                          />

                          <CardContent className="relative p-6">
                            <div className="mb-4 flex items-center justify-end gap-4">
                              <h3 className="text-xl font-semibold text-foreground">
                                {step.title}
                              </h3>
                              <motion.div
                                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${colors.bgLight} ${colors.text} shadow-sm`}
                                whileHover={{ scale: 1.15, rotate: -10 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <step.icon className="size-7" />
                              </motion.div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>

                  {/* Center node */}
                  <motion.div
                    className="relative z-10"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={scaleIn}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                  >
                    {/* Glow behind node */}
                    <div
                      className={`absolute -inset-2 rounded-full ${colors.glow} blur-xl`}
                    />

                    {/* Main node */}
                    <motion.div
                      className={`relative flex size-20 items-center justify-center rounded-full bg-linear-to-br ${colors.gradient} text-2xl font-bold text-white shadow-2xl ${colors.shadow} ring-4 ring-background`}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>

                  {/* Right side */}
                  <div className="flex-1">
                    {!isLeft && (
                      <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInRight}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1,
                        }}
                      >
                        <Card
                          className={`group relative mr-auto max-w-md overflow-hidden border-0 bg-card/80 ring-1 ${colors.ring} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${colors.shadow}`}
                        >
                          {/* Animated gradient border on hover */}
                          <motion.div
                            className={`absolute inset-0 rounded-xl bg-linear-to-r ${colors.gradientVia} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                            animate={{
                              backgroundPosition: [
                                '0% 50%',
                                '100% 50%',
                                '0% 50%',
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                          />

                          {/* Glow effect */}
                          <div
                            className={`absolute -right-20 -top-20 size-40 rounded-full ${colors.glow} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100`}
                          />

                          <CardContent className="relative p-6">
                            <div className="mb-4 flex items-center gap-4">
                              <motion.div
                                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${colors.bgLight} ${colors.text} shadow-sm`}
                                whileHover={{ scale: 1.15, rotate: 10 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <step.icon className="size-7" />
                              </motion.div>
                              <h3 className="text-xl font-semibold text-foreground">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 text-center sm:mt-28"
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
            <Sparkles className="size-4" />
            Average processing time: 2-5 minutes for a 1-hour video
          </Badge>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="h-8 bg-linear-to-t from-violet-500/5 to-transparent" />
      </div>
    </section>
  )
}
