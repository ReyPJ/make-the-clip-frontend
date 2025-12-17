import { useRef, useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react'
import * as motion from 'motion/react-client'
import { useScroll, useTransform } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'pricing' | 'technical'
}

const faqs: Array<FAQItem> = [
  {
    question: 'What video formats do you support?',
    answer:
      'We support MP4, MOV, AVI, MKV, and WebM files. File size limits vary by plan: Free (600MB), Starter (1GB), Pro (2GB), Business (5GB). Our system automatically handles the conversion and optimization for processing.',
    category: 'technical',
  },
  {
    question: 'How long does processing take?',
    answer:
      'Most videos are processed in 2-5 minutes, regardless of length. Our AI pipeline uses parallel processing and optimized FFmpeg workflows to deliver fast results.',
    category: 'technical',
  },
  {
    question: 'How does the AI find viral moments?',
    answer:
      'Our AI analyzes your video for engagement signals: emotional peaks, humor, surprising statements, quotable moments, and natural hooks. Each clip gets a viral score from 1-10 based on its potential.',
    category: 'general',
  },
  {
    question: "Can I regenerate clips if I'm not satisfied?",
    answer:
      "Yes! You can regenerate clips anytime. The AI will analyze your video again and find different viral moments. This doesn't count against your monthly limit.",
    category: 'general',
  },
  {
    question: "What's included in the subtitles?",
    answer:
      'We use OpenAI Whisper for accurate transcription, then burn TikTok-style animated subtitles directly into your clips. The subtitles are styled for maximum readability and engagement.',
    category: 'technical',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      "Absolutely. You can cancel anytime from your dashboard. Your subscription will remain active until the end of your billing period, then you'll be moved to the free plan.",
    category: 'pricing',
  },
  {
    question: 'What happens if I exceed my clip limit?',
    answer:
      "You'll need to wait until your next billing cycle or upgrade to a higher plan. We'll notify you when you're approaching your limit so you can plan accordingly.",
    category: 'pricing',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact us and we'll process your refund, no questions asked.",
    category: 'pricing',
  },
  {
    question: "What's the maximum video length I can upload?",
    answer:
      'It depends on your plan: Free (15 min), Starter (30 min), Pro (60 min), Business (180 min). File size limits also vary by plan: Free (600MB), Starter (1GB), Pro (2GB), Business (5GB).',
    category: 'general',
  },
  {
    question: 'Are my videos stored securely?',
    answer:
      'Yes. All videos are encrypted in transit and at rest. We use enterprise-grade cloud storage with automatic backups. You can delete your videos anytime from your dashboard.',
    category: 'technical',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

function FAQItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
    >
      <div
        className={`group rounded-2xl border transition-all duration-300 ${
          isOpen
            ? 'border-violet-500/30 bg-violet-500/5 shadow-lg shadow-violet-500/5'
            : 'border-border bg-card/50 hover:border-violet-500/20 hover:bg-card/80'
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        >
          <span
            className={`text-base font-medium transition-colors sm:text-lg ${
              isOpen
                ? 'text-violet-600 dark:text-violet-400'
                : 'text-foreground'
            }`}
          >
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`shrink-0 rounded-full p-1 transition-colors ${
              isOpen
                ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                : 'text-muted-foreground group-hover:text-foreground'
            }`}
          >
            <ChevronDown className="size-5" />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const floatY1 = useTransform(scrollYProgress, [0, 1], ['0vh', '20vh'])
  const floatY2 = useTransform(scrollYProgress, [0, 1], ['5vh', '-15vh'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background py-20 sm:py-32"
    >
      {/* Background - Gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 size-125 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 size-125 translate-x-1/2 rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      {/* Decorative question marks */}
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[20%] text-violet-500/10 dark:text-violet-400/5"
        style={{ y: floatY1 }}
      >
        <HelpCircle className="size-24" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[30%] text-pink-500/10 dark:text-pink-400/5"
        style={{ y: floatY2 }}
      >
        <HelpCircle className="size-16 rotate-12" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[25%] left-[15%] text-blue-500/10 dark:text-blue-400/5"
        style={{ y: floatY2 }}
      >
        <HelpCircle className="size-20 -rotate-12" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-[35%] right-[12%] text-emerald-500/10 dark:text-emerald-400/5"
        style={{ y: floatY1 }}
      >
        <HelpCircle className="size-14" strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
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
              FAQ
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Frequently asked{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent blur-xl dark:from-violet-400 dark:to-pink-400">
                questions
              </span>
              <span className="relative bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
                questions
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Everything you need to know about Make The Clip. Can't find what
            you're looking for? Reach out to our team.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Card className="relative overflow-hidden border-0 bg-linear-to-br from-violet-600 via-purple-600 to-pink-600">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent" />
            </div>

            {/* Floating shapes */}
            <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-white/10 blur-2xl" />

            <CardContent className="relative flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:py-12 sm:text-left">
              <div>
                <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                  <MessageCircle className="size-5 text-white/80" />
                  <span className="text-sm font-medium text-white/80">
                    Still have questions?
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  We're here to help
                </h3>
                <p className="mt-2 text-white/80">
                  Our support team is available 24/7 to answer your questions.
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 bg-white font-semibold text-violet-700 shadow-lg shadow-black/10 hover:bg-white/90"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
