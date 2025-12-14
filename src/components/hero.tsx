import { ArrowRight, Sparkles, Upload, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradien  t-stops))] from-indigo-500/5 via-transparent to-transparent dark:from-indigo-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Badge with shimmer effect */}
        <div className="mb-8 flex justify-center">
          <Badge
            variant="outline"
            className="group relative gap-2 overflow-hidden border-violet-500/30 bg-violet-100 px-4 py-2 text-sm text-violet-700 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20 dark:bg-violet-950/50 dark:text-violet-200"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="size-4 animate-[pulse_2s_ease-in-out_infinite]" />
            Now powered by AI
          </Badge>
        </div>

        {/* Main heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
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
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Upload your podcast, interview, or gameplay. Our AI extracts the
            best moments, adds subtitles, and{' '}
            <span className="text-violet-600 underline decoration-violet-600/50 underline-offset-4 dark:text-violet-400 dark:decoration-violet-400/50">
              writes your posts automatically.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group relative h-12 gap-2 overflow-hidden bg-violet-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/40 hover:scale-[1.02]"
            >
              {/* Button glow on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-violet-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              <span className="relative flex items-center gap-2">
                Try for Free
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
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Upload card */}
          <Card className="group flex min-h-50 items-center justify-center border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10">
            <CardContent className="flex flex-col items-center justify-center px-6 py-8 text-center">
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-violet-100 group-hover:text-violet-600 dark:group-hover:bg-violet-900/50 dark:group-hover:text-violet-400">
                <Upload className="size-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                Input: Long Video
              </p>
            </CardContent>
          </Card>

          {/* Processing card - with animated gradient border */}
          <Card className="group relative flex min-h-50 items-center justify-center overflow-hidden border-transparent bg-linear-to-br from-violet-100/50 to-background ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20 dark:from-violet-950/50 dark:to-slate-900/50">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-50 blur-sm transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-px rounded-xl bg-linear-to-br from-violet-100/90 to-background dark:from-violet-950/90 dark:to-slate-900" />

            <CardContent className="relative flex flex-col items-center justify-center px-6 py-8 text-center">
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-transform duration-300 group-hover:scale-110 dark:bg-violet-900/50 dark:text-violet-400">
                <Zap className="size-7 animate-[pulse_1.5s_ease-in-out_infinite]" />
              </div>
              <p className="mb-1 font-semibold text-foreground">
                AI Processing...
              </p>
              <p className="text-sm text-muted-foreground">Smart extraction</p>
            </CardContent>
          </Card>

          {/* Output card */}
          <Card className="group flex min-h-50 items-center justify-center border-border bg-card/50 ring-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 sm:col-span-2 lg:col-span-1">
            <CardContent className="w-full space-y-3 px-6 py-4">
              {/* Clip preview 1 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-all duration-300 group-hover:bg-muted/70">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20 transition-colors duration-300 group-hover:bg-violet-600/30" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20 transition-all duration-500 group-hover:w-full group-hover:bg-violet-500/30" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10 transition-all duration-700 group-hover:w-3/4 group-hover:bg-violet-500/20" />
                </div>
              </div>

              {/* Clip preview 2 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-all duration-300 group-hover:bg-muted/70">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20 transition-colors duration-300 group-hover:bg-violet-600/30" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20 transition-all duration-600 group-hover:w-full group-hover:bg-violet-500/30" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10 transition-all duration-800 group-hover:w-3/4 group-hover:bg-violet-500/20" />
                </div>
              </div>

              {/* Clip preview 3 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-all duration-300 group-hover:bg-muted/70">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20 transition-colors duration-300 group-hover:bg-violet-600/30" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20 transition-all duration-700 group-hover:w-full group-hover:bg-violet-500/30" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10 transition-all duration-900 group-hover:w-3/4 group-hover:bg-violet-500/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom gradient line with glow */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="h-8 bg-linear-to-t from-violet-500/5 to-transparent" />
      </div>
    </section>
  )
}
