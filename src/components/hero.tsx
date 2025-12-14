import { ArrowRight, Sparkles, Upload, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Gradient overlay effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent dark:from-violet-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent dark:from-indigo-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <Badge
            variant="outline"
            className="gap-2 border-violet-500/30 bg-violet-100 px-4 py-2 text-sm text-violet-700 dark:bg-violet-950/50 dark:text-violet-200"
          >
            <Sparkles className="size-4" />
            Now powered by AI
          </Badge>
        </div>

        {/* Main heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Turn long videos into{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
              viral clips with AI
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
              className="group h-12 gap-2 bg-violet-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Try for Free
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 border-border bg-background/50 px-6 text-base font-semibold text-foreground transition-all duration-200 hover:bg-muted"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Upload card */}
          <Card className="flex min-h-[200px] items-center justify-center border-border bg-card/50 ring-0">
            <CardContent className="flex flex-col items-center justify-center px-6 py-8 text-center">
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <Upload className="size-7" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Input: Long Video
              </p>
            </CardContent>
          </Card>

          {/* Processing card */}
          <Card className="flex min-h-[200px] items-center justify-center border-violet-300 bg-gradient-to-br from-violet-100/50 to-background ring-0 dark:border-violet-800/50 dark:from-violet-950/50 dark:to-slate-900/50">
            <CardContent className="flex flex-col items-center justify-center px-6 py-8 text-center">
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400">
                <Zap className="size-7" />
              </div>
              <p className="mb-1 font-semibold text-foreground">
                AI Processing...
              </p>
              <p className="text-sm text-muted-foreground">Smart extraction</p>
            </CardContent>
          </Card>

          {/* Output card */}
          <Card className="flex min-h-[200px] items-center justify-center border-border bg-card/50 ring-0 sm:col-span-2 lg:col-span-1">
            <CardContent className="w-full space-y-3 px-6 py-4">
              {/* Clip preview 1 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10" />
                </div>
              </div>

              {/* Clip preview 2 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10" />
                </div>
              </div>

              {/* Clip preview 3 */}
              <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="size-12 shrink-0 rounded-lg bg-violet-600/20" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/10" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
