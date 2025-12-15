import { ArrowRight, Check, Sparkles, Upload, Zap } from 'lucide-react'
import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { VideoUploader } from '@/components/video-uploader'
import { useAuth } from '@/hooks/useAuth'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

export function Hero() {
  const { isAuthenticated, user } = useAuth()
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated floating orbs - Aurora effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 size-80 animate-[float_8s_ease-in-out_infinite] rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-500/10" />
        <div className="absolute -right-40 top-40 size-96 animate-[float_10s_ease-in-out_infinite_reverse] rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/10" />
        <div className="absolute -bottom-20 left-1/3 size-72 animate-[float_12s_ease-in-out_infinite_2s] rounded-full bg-purple-500/15 blur-[100px] dark:bg-purple-500/10" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent dark:from-violet-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent dark:from-indigo-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Badge with shimmer effect */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge
            variant="outline"
            className="group relative gap-2 overflow-hidden border-violet-500/30 bg-violet-100 px-4 py-2 text-sm text-violet-700 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 dark:bg-violet-950/50 dark:text-violet-200"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="size-4 animate-[pulse_2s_ease-in-out_infinite]" />
            {isAuthenticated ? 'Ready to create' : 'Powered by AI'}
          </Badge>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {isAuthenticated ? (
            /* Authenticated Hero Content */
            <>
              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Welcome back,{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent blur-2xl dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
                    {user?.email.split('@')[0]}
                  </span>
                  <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
                    {user?.email.split('@')[0]}
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                Upload your video and let AI extract the{' '}
                <span className="text-violet-600 underline decoration-violet-600/50 underline-offset-4 dark:text-violet-400 dark:decoration-violet-400/50">
                  best viral moments
                </span>{' '}
                for you
              </motion.p>

              {/* Video Uploader */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <VideoUploader
                  onUpload={(file) => {
                    console.log('Uploading file:', file.name)
                    // TODO: Implement actual upload logic
                  }}
                />
              </motion.div>

              {/* User stats */}
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-600 dark:text-violet-400"
                  >
                    <Zap className="size-3.5" />5 clips remaining
                  </Badge>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
                  >
                    <Check className="size-3.5" />
                    Free plan active
                  </Badge>
                </motion.div>
              </motion.div>
            </>
          ) : (
            /* Guest Hero Content */
            <>
              <motion.h1
                className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Turn long videos into{' '}
                <span className="relative inline-block">
                  {/* Glow effect behind text */}
                  <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent blur-2xl dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
                    viral clips with AI
                  </span>
                  <span className="relative bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
                    viral clips with AI
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                Upload your podcast, interview, or gameplay. Our AI extracts the
                best moments, adds subtitles, and{' '}
                <span className="text-violet-600 underline decoration-violet-600/50 underline-offset-4 dark:text-violet-400 dark:decoration-violet-400/50">
                  you can choose the lenguage of the subtitles
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="group relative h-12 gap-2 overflow-hidden bg-violet-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/40 hover:scale-[1.02]"
                >
                  {/* Button glow on hover */}
                  <span className="absolute inset-0 bg-linear-to-r from-violet-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <span className="relative flex items-center gap-2">
                    Start Clipping Now
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 border-border bg-background/50 px-6 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-muted hover:border-violet-500/30 hover:shadow-lg"
                >
                  Watch Demo
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="mt-6 flex flex-wrap items-center justify-center gap-3"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
                  >
                    <Check className="size-3.5" />
                    Free 5 clips mounth
                  </Badge>
                </motion.div>
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
                  >
                    <Check className="size-3.5" />
                    No credit card required
                  </Badge>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Feature cards - Pipeline visualization (only show for guests) */}
        {!isAuthenticated && (
          <div className="mx-auto mt-20 max-w-5xl">
            {/* Connection line behind cards */}
            <div className="relative">
              {/* Animated flow line - desktop */}
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                <div className="h-1 w-full rounded-full bg-linear-to-r from-muted via-violet-500/50 to-muted" />
                <motion.div
                  className="absolute left-0 top-0 h-1 w-20 rounded-full bg-linear-to-r from-violet-400 to-purple-500 blur-sm"
                  animate={{ x: ['0%', '1400%', '0%'] }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </div>

              <motion.div
                className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
              >
                {/* Upload card */}
                <motion.div
                  className="h-full"
                  variants={scaleIn}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Card className="group flex h-full min-h-52 items-center justify-center border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/20">
                    <CardContent className="flex flex-col items-center justify-center px-6 py-8 text-center">
                      <motion.div
                        className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-violet-100 group-hover:text-violet-600 dark:group-hover:bg-violet-900/50 dark:group-hover:text-violet-400"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Upload className="size-8" />
                      </motion.div>
                      <p className="text-base font-semibold text-foreground">
                        Input: Long Video
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Drop your file here
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Processing card - with animated gradient border */}
                <motion.div
                  className="h-full"
                  variants={scaleIn}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                >
                  <Card className="group relative flex h-full min-h-52 items-center justify-center overflow-hidden border-transparent ring-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/30">
                    {/* Animated gradient border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-60 blur-sm"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        ease: 'linear',
                        repeat: Infinity,
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    />
                    <div className="absolute inset-px rounded-xl bg-linear-to-br from-violet-100/95 to-background dark:from-violet-950/95 dark:to-slate-900" />

                    <CardContent className="relative flex flex-col items-center justify-center px-6 py-8 text-center">
                      <motion.div
                        className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 2,
                          ease: 'easeInOut',
                          repeat: Infinity,
                        }}
                      >
                        <Zap className="size-8" />
                      </motion.div>
                      <p className="text-base font-semibold text-foreground">
                        AI Processing...
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Smart extraction
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Output card */}
                <motion.div
                  className="h-full sm:col-span-2 lg:col-span-1"
                  variants={scaleIn}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                >
                  <Card className="group flex h-full min-h-52 items-center justify-center border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/20">
                    <CardContent className="w-full space-y-3 px-6 py-5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-all duration-300 group-hover:bg-muted/70"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                        >
                          <div className="size-10 shrink-0 rounded-lg bg-violet-600/20 transition-colors duration-300 group-hover:bg-violet-600/30" />
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="h-2 w-3/4 rounded bg-muted-foreground/20 transition-all duration-500 group-hover:w-full group-hover:bg-violet-500/30" />
                            <div className="h-2 w-1/2 rounded bg-muted-foreground/10 transition-all duration-700 group-hover:w-3/4 group-hover:bg-violet-500/20" />
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom gradient line with glow */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="h-8 bg-linear-to-t from-violet-500/5 to-transparent" />
      </div>
    </section>
  )
}
