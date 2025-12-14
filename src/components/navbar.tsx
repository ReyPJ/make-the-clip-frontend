import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, Moon, Scissors, Sun, X } from 'lucide-react'

import { Separator } from './ui/separator'
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

const themeOptions: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
]

const navLinks = [
  { href: '/', label: 'How It Works' },
  { href: '/', label: 'Features' },
  { href: '/', label: 'Pricing' },
]

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
      <nav className="container relative mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-violet-600">
            <Scissors className="size-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            Make The Clip
          </span>
        </Link>

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
                  render={<Link to="/" />}
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
                  render={<Link to="/" />}
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
                  render={<Link to="/" />}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
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
          <Button
            size="default"
            className="bg-violet-600 font-semibold uppercase text-white transition-colors hover:bg-violet-500"
          >
            Get Started
          </Button>
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
              nativeButton={false}
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
                  nativeButton={false}
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

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            to={link.href}
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
                <Button
                  size="lg"
                  className="h-12 w-full bg-violet-600 text-base font-semibold uppercase text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
