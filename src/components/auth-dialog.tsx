import { useEffect, useState } from 'react'
import { Eye, EyeOff, Loader2, Lock, Mail, Sparkles } from 'lucide-react'
import * as motion from 'motion/react-client'
import type { AxiosError } from 'axios'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/useAuth'

interface ApiErrorResponse {
  detail?: string
  message?: string
}

function getErrorMessage(error: unknown): string {
  if (!error) return ''

  // Handle Axios errors
  const axiosError = error as AxiosError<ApiErrorResponse>

  if (axiosError.response) {
    const status = axiosError.response.status
    const data = axiosError.response.data

    // Check for backend error message
    if (data.detail) return data.detail
    if (data.message) return data.message

    // Fallback based on status code
    switch (status) {
      case 401:
        return 'Invalid email or password'
      case 403:
        return 'Access denied'
      case 404:
        return 'Account not found'
      case 409:
        return 'An account with this email already exists'
      case 422:
        return 'Invalid email or password format'
      case 429:
        return 'Too many attempts. Please try again later'
      case 500:
        return 'Server error. Please try again later'
      default:
        return 'An error occurred. Please try again'
    }
  }

  // Network error
  if (axiosError.code === 'ERR_NETWORK') {
    return 'Unable to connect. Please check your internet connection'
  }

  // Generic error with message
  if (error instanceof Error) {
    return error.message
  }

  return 'An error occurred. Please try again'
}

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab?: 'login' | 'register'
}

export function AuthDialog({
  open,
  onOpenChange,
  defaultTab = 'login',
}: AuthDialogProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(defaultTab)

  // Sync activeTab when defaultTab changes
  useEffect(() => {
    setActiveTab(defaultTab)
  }, [defaultTab])
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    login,
    register,
    isLoggingIn,
    isRegistering,
    loginError,
    registerError,
  } = useAuth()

  const isLoading = isLoggingIn || isRegistering
  const error = activeTab === 'login' ? loginError : registerError

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const credentials = { email, password }

    if (activeTab === 'login') {
      login(credentials, {
        onSuccess: () => {
          onOpenChange(false)
          resetForm()
        },
      })
    } else {
      register(credentials, {
        onSuccess: () => {
          onOpenChange(false)
          resetForm()
        },
      })
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setShowPassword(false)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'login' | 'register')
    resetForm()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden border-border bg-background p-0 sm:max-w-md">
        {/* Header gradient accent */}
        <div className="h-1 bg-linear-to-r from-violet-500 via-purple-500 to-pink-500" />

        <div className="p-6">
          <DialogHeader className="mb-6 text-center">
            <motion.div
              className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Sparkles className="size-7 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <DialogTitle className="text-2xl font-bold">
              {activeTab === 'login' ? 'Welcome back' : 'Create an account'}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {activeTab === 'login'
                ? 'Sign in to continue creating viral clips'
                : 'Start creating viral clips with AI today'}
            </DialogDescription>
          </DialogHeader>

          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-6 grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="login" className="mt-0 space-y-4">
                <AuthFormFields
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  isLoading={isLoading}
                />
              </TabsContent>

              <TabsContent value="register" className="mt-0 space-y-4">
                <AuthFormFields
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  isLoading={isLoading}
                />
              </TabsContent>

              {/* Error message */}
              {error && (
                <motion.div
                  className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-600 dark:text-red-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {getErrorMessage(error)}
                </motion.div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !email || !password}
                className="mt-6 w-full gap-2 bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {activeTab === 'login'
                      ? 'Signing in...'
                      : 'Creating account...'}
                  </>
                ) : activeTab === 'login' ? (
                  'Sign In'
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>
          </Tabs>

          {/* Footer text */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-violet-500 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-violet-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface AuthFormFieldsProps {
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  showPassword: boolean
  setShowPassword: (show: boolean) => void
  isLoading: boolean
}

function AuthFormFields({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLoading,
}: AuthFormFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="bg-muted/50 pl-10 transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="bg-muted/50 pl-10 pr-10 transition-shadow duration-200 focus:ring-2 focus:ring-violet-500/20"
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
      </div>
    </>
  )
}
