import { Brain, Captions, FileText, Sparkles, Upload } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: 1,
    title: 'Upload Your Video',
    description:
      'Drop your podcast, interview, or gameplay. We support MP4, MOV, AVI, MKV, and WebM up to 600MB.',
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
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100 dark:bg-blue-900/50',
    text: 'text-blue-600 dark:text-blue-400',
    glow: 'bg-blue-500/30',
    shadow: 'shadow-blue-500/25',
    border: 'border-blue-500/30',
  },
  violet: {
    gradient: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-100 dark:bg-violet-900/50',
    text: 'text-violet-600 dark:text-violet-400',
    glow: 'bg-violet-500/30',
    shadow: 'shadow-violet-500/25',
    border: 'border-violet-500/30',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-100 dark:bg-purple-900/50',
    text: 'text-purple-600 dark:text-purple-400',
    glow: 'bg-purple-500/30',
    shadow: 'shadow-purple-500/25',
    border: 'border-purple-500/30',
  },
  pink: {
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-500',
    bgLight: 'bg-pink-100 dark:bg-pink-900/50',
    text: 'text-pink-600 dark:text-pink-400',
    glow: 'bg-pink-500/30',
    shadow: 'shadow-pink-500/25',
    border: 'border-pink-500/30',
  },
  emerald: {
    gradient: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    glow: 'bg-emerald-500/30',
    shadow: 'shadow-emerald-500/25',
    border: 'border-emerald-500/30',
  },
}

export function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-violet-100/50 via-background to-purple-100/50 py-20 dark:from-muted/50 dark:via-background dark:to-muted/50 sm:py-32">
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top gradient accent - very bright */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-600 to-transparent dark:via-violet-500" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-violet-400/30 to-transparent dark:from-violet-500/15" />

        {/* Large animated radial glow from center - intense for light mode */}
        <div className="absolute left-1/2 top-1/2 size-350 -translate-x-1/2 -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-violet-400/40 via-purple-400/20 to-transparent dark:from-violet-500/20 dark:via-purple-500/10" />

        {/* Animated diagonal light beams - very visible in light mode */}
        <div className="absolute -left-1/4 -top-1/2 h-[200%] w-3/4 animate-[beam-slide_12s_ease-in-out_infinite] rotate-20 bg-linear-to-b from-transparent via-violet-400/30 to-transparent blur-3xl dark:via-violet-500/15" />
        <div className="absolute -right-1/4 -top-1/2 h-[200%] w-3/4 animate-[beam-slide_15s_ease-in-out_infinite_reverse] -rotate-20 bg-linear-to-b from-transparent via-purple-400/30 to-transparent blur-3xl dark:via-purple-500/15" />

        {/* Floating accent orbs - much more intense for light mode */}
        <div className="absolute left-[10%] top-[20%] size-64 animate-[float_20s_ease-in-out_infinite] rounded-full bg-blue-400/40 blur-[100px] dark:bg-blue-500/20" />
        <div className="absolute right-[15%] top-[60%] size-72 animate-[float_18s_ease-in-out_infinite_2s] rounded-full bg-pink-400/35 blur-[100px] dark:bg-pink-500/15" />
        <div className="absolute bottom-[10%] left-[40%] size-56 animate-[float_14s_ease-in-out_infinite_reverse] rounded-full bg-emerald-400/35 blur-[80px] dark:bg-emerald-500/15" />
      </div>

      {/* Dot matrix pattern - very visible */}
      <div
        className="absolute inset-0 opacity-80 dark:opacity-35"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--muted-foreground) / 0.35) 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal gradient bands - brighter */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-[30%] h-px w-full bg-linear-to-r from-transparent via-violet-500/50 to-transparent dark:via-violet-500/30" />
        <div className="absolute left-0 top-[70%] h-px w-full bg-linear-to-r from-transparent via-purple-500/50 to-transparent dark:via-purple-500/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header with shimmer badge */}
        <div className="mb-16 text-center sm:mb-20">
          <Badge
            variant="outline"
            className="group relative mb-6 gap-2 overflow-hidden border-violet-500/30 bg-violet-100 px-4 py-2 text-sm text-violet-700 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 dark:bg-violet-950/50 dark:text-violet-200"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="size-4 animate-[pulse_2s_ease-in-out_infinite]" />
            5-Step Process
          </Badge>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            How It{' '}
            <span className="relative inline-block">
              {/* Glow effect behind text */}
              <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                Works
              </span>
              <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-pink-400">
                Works
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From long-form content to viral clips in minutes. Our AI-powered
            pipeline handles everything{' '}
            <span className="text-violet-600 underline decoration-violet-600/50 underline-offset-4 dark:text-violet-400 dark:decoration-violet-400/50">
              automatically.
            </span>
          </p>
        </div>

        {/* Mobile: Vertical timeline with dramatic cards */}
        <div className="space-y-6 md:hidden">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses]

            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-full z-0 h-6 w-px bg-linear-to-b from-border to-transparent" />
                )}

                <Card
                  className={`group relative overflow-hidden border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    step.highlight
                      ? `${colors.border} hover:shadow-violet-500/20`
                      : 'hover:shadow-muted-foreground/10'
                  }`}
                >
                  {/* Background glow on hover */}
                  <div
                    className={`absolute -right-10 -top-10 size-32 rounded-full ${colors.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <CardContent className="relative flex gap-4 p-5">
                    {/* Number circle with gradient */}
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${colors.gradient} text-base font-bold text-white shadow-lg ${colors.shadow} transition-transform duration-300 group-hover:scale-110`}
                      >
                        {step.number}
                      </div>
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${colors.bgLight} ${colors.text} transition-all duration-300 group-hover:scale-105`}
                      >
                        <step.icon className="size-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Desktop: Alternating timeline with WOW effect */}
        <div className="relative hidden md:block">
          {/* Animated center line with gradient */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
            <div className="h-full w-full bg-linear-to-b from-blue-500/50 via-violet-500/50 to-emerald-500/50" />
            {/* Animated glow on the line */}
            <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite] bg-linear-to-b from-blue-500/30 via-violet-500/30 to-emerald-500/30 blur-sm" />
          </div>

          <div className="space-y-16">
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
                      <Card
                        className={`group relative ml-auto max-w-md overflow-hidden border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                          step.highlight
                            ? `${colors.border} hover:shadow-violet-500/20`
                            : 'hover:shadow-muted-foreground/10'
                        }`}
                      >
                        {/* Gradient border effect on hover */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-linear-to-r ${colors.gradient} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-30`}
                        />
                        <div className="absolute inset-px rounded-2xl bg-card" />

                        {/* Background glow */}
                        <div
                          className={`absolute -left-10 -top-10 size-40 rounded-full ${colors.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        <CardContent className="relative p-6">
                          <div className="mb-4 flex items-center justify-end gap-4">
                            <h3 className="text-xl font-semibold text-foreground">
                              {step.title}
                            </h3>
                            <div
                              className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colors.bgLight} ${colors.text} transition-transform duration-300 group-hover:scale-110`}
                            >
                              <step.icon className="size-6" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Center node with glow */}
                  <div className="relative z-10">
                    {/* Glow behind node */}
                    <div
                      className={`absolute inset-0 rounded-full ${colors.glow} blur-xl transition-opacity duration-300`}
                    />
                    <div
                      className={`relative flex size-16 items-center justify-center rounded-full bg-linear-to-br ${colors.gradient} text-lg font-bold text-white shadow-xl ${colors.shadow} ring-4 ring-background transition-all duration-300 hover:scale-110`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex-1">
                    {!isLeft && (
                      <Card
                        className={`group relative mr-auto max-w-md overflow-hidden border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                          step.highlight
                            ? `${colors.border} hover:shadow-violet-500/20`
                            : 'hover:shadow-muted-foreground/10'
                        }`}
                      >
                        {/* Gradient border effect on hover */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-linear-to-r ${colors.gradient} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-30`}
                        />
                        <div className="absolute inset-px rounded-2xl bg-card" />

                        {/* Background glow */}
                        <div
                          className={`absolute -right-10 -top-10 size-40 rounded-full ${colors.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        <CardContent className="relative p-6">
                          <div className="mb-4 flex items-center gap-4">
                            <div
                              className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colors.bgLight} ${colors.text} transition-transform duration-300 group-hover:scale-110`}
                            >
                              <step.icon className="size-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer with subtle animation */}
        <div className="mt-16 text-center sm:mt-20">
          <p className="text-muted-foreground">
            Average processing time:{' '}
            <span className="font-semibold text-foreground">2-5 minutes</span>{' '}
            for a 1-hour video
          </p>
        </div>
      </div>

      {/* Bottom gradient line with glow */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="h-6 bg-linear-to-t from-violet-500/5 to-transparent" />
      </div>
    </section>
  )
}
