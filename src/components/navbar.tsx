import { useEffect, useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import {
  LayoutDashboard,
  Menu,
  Moon,
  Scissors,
  Sun,
  User,
  X,
} from 'lucide-react'

import { Separator } from './ui/separator'
import { AuthDialog } from './auth-dialog'
import type { Theme } from '@/hooks/use-theme'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useTheme } from '@/hooks/use-theme'
import { useAuth } from '@/hooks/useAuth'

const themeOptions: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
]

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
]

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [authDialogTab, setAuthDialogTab] = useState<'login' | 'register'>(
    'login',
  )

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun

  const openAuthDialog = (tab: 'login' | 'register') => {
    setAuthDialogTab(tab)
    setAuthDialogOpen(true)
  }

  // Get username from email (part before @)
  const username = user?.email.split('@')[0] || ''

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/50 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent backdrop-blur-none'
        }`}
      >
        <nav className="container relative mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo + Dashboard button */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-violet-600">
                <Scissors className="size-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Make The Clip
              </span>
            </Link>

            {isAuthenticated && (
              <Button
                size="sm"
                className="hidden cursor-pointer gap-1.5 bg-violet-600 text-white shadow-md shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/30 md:flex"
                onClick={() => navigate({ to: '/dashboard' })}
              >
                <LayoutDashboard className="size-4" />
                Dashboard
              </Button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            <NavigationMenu>
              <NavigationMenuList className="items-center gap-0">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() +
                      ' bg-transparent text-muted-foreground hover:bg-foreground/10 hover:text-foreground'
                    }
                    render={<a href="#how-it-works" />}
                  >
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <Separator orientation="vertical" className="mx-4 bg-border" />
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() +
                      ' bg-transparent text-muted-foreground hover:bg-foreground/10 hover:text-foreground'
                    }
                    render={<a href="#features" />}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <Separator orientation="vertical" className="mx-4 bg-border" />
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={
                      navigationMenuTriggerStyle() +
                      ' bg-transparent text-muted-foreground hover:bg-foreground/10 hover:text-foreground'
                    }
                    render={<a href="#pricing" />}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Switcher */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-foreground/10 hover:text-foreground">
                    <CurrentIcon className="size-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36 border-border bg-popover">
                    <ul className="flex flex-col gap-1 p-2">
                      {themeOptions.map(({ value, label, icon: Icon }) => (
                        <li key={value}>
                          <NavigationMenuLink
                            className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                            onClick={() => setTheme(value)}
                          >
                            <Icon className="size-4" />
                            {label}
                            {theme === value && (
                              <span className="ml-auto text-violet-500">•</span>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth buttons or User menu */}
            {isLoading ? (
              <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
            ) : isAuthenticated ? (
              /* User Dropdown (placeholder for now) */
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="gap-2 bg-transparent text-muted-foreground hover:bg-foreground/10 hover:text-foreground">
                      <div className="flex size-7 items-center justify-center rounded-full bg-violet-600">
                        <User className="size-4 text-white" />
                      </div>
                      <span className="max-w-30 truncate text-sm font-medium">
                        {username}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-48 border-border bg-popover">
                      <ul className="flex flex-col gap-1 p-2">
                        <li>
                          <NavigationMenuLink className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground">
                            Dashboard
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground">
                            Settings
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Separator className="my-1" />
                        </li>
                        <li>
                          <NavigationMenuLink
                            className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 transition-colors hover:bg-red-500/10"
                            onClick={() => logout()}
                          >
                            Sign Out
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              /* Auth Buttons */
              <>
                <Button
                  size="default"
                  className="bg-gray-800 font-semibold uppercase text-white/80 hover:cursor-pointer hover:bg-gray-700 hover:text-white"
                  onClick={() => openAuthDialog('login')}
                >
                  Sign In
                </Button>
                <Button
                  size="default"
                  className="bg-violet-600 font-semibold uppercase text-white transition-colors hover:cursor-pointer hover:bg-violet-500"
                  onClick={() => openAuthDialog('register')}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              <CurrentIcon className="size-5" />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                nativeButton={true}
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                  />
                }
              >
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-[320px] flex-col border-border bg-background p-0"
                showCloseButton={false}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-violet-600">
                      <Scissors className="size-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      Make The Clip
                    </span>
                  </div>
                  <SheetClose
                    nativeButton={true}
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                      />
                    }
                  >
                    <X className="size-5" />
                  </SheetClose>
                </div>

                {/* User info (if logged in) */}
                {isAuthenticated && (
                  <div className="border-b border-border px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-violet-600">
                        <User className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {username}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6">
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <SheetClose
                          nativeButton={false}
                          render={
                            <a
                              href={link.href}
                              className="flex w-full items-center rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
                            />
                          }
                        >
                          {link.label}
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="border-t border-border p-6">
                  {isAuthenticated ? (
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 w-full text-base font-semibold text-red-500 hover:bg-red-500/10 hover:text-red-500"
                      onClick={() => {
                        setOpen(false)
                        logout()
                      }}
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        size="lg"
                        className="h-12 w-full bg-violet-600 text-base font-semibold uppercase text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30"
                        onClick={() => {
                          setOpen(false)
                          openAuthDialog('register')
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-12 w-full text-base font-semibold"
                        onClick={() => {
                          setOpen(false)
                          openAuthDialog('login')
                        }}
                      >
                        Sign In
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Auth Dialog */}
      <AuthDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
        defaultTab={authDialogTab}
      />
    </>
  )
}
