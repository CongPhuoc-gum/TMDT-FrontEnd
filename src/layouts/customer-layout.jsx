import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Flower2, Search, ShoppingBag, Sparkles, User2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { appConfig } from '@/config/env'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/c', label: 'Home', end: true },
  { to: '/c/category/roses', label: 'Shop' },
  { to: '/c/custom', label: 'Custom' },
  { to: '/c/menu', label: 'Menu' },
  { to: '/c/checkout/shipping', label: 'Checkout' },
]

const quickActions = [
  { to: '/c', label: 'Discover', icon: Sparkles },
  { to: '/c/category/roses', label: 'Browse', icon: Search },
  { to: '/c/checkout/shipping', label: 'Cart', icon: ShoppingBag },
  { to: '/c/auth', label: 'Account', icon: User2 },
]

function IconLink({ to, label, children }) {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full">
      <Link to={to} aria-label={label} title={label}>
        {children}
      </Link>
    </Button>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Customer navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            cn(
              'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground',
              isActive && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function MobileDock() {
  return (
    <nav
      className="fixed inset-x-3 bottom-3 z-30 rounded-[1.4rem] border bg-card/92 p-2 shadow-2xl shadow-primary/15 backdrop-blur sm:inset-x-auto sm:left-1/2 sm:w-[28rem] sm:-translate-x-1/2 lg:hidden"
      aria-label="Mobile customer navigation"
    >
      <div className="grid grid-cols-4 gap-1">
        {quickActions.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/c'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[0.68rem] font-semibold text-muted-foreground transition-colors',
                  isActive && 'bg-primary text-primary-foreground',
                )
              }
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default function CustomerLayout() {
  const location = useLocation()
  const isEditorialRoute =
    location.pathname === '/c' ||
    location.pathname === '/c/' ||
    location.pathname.startsWith('/c/category/') ||
    location.pathname.startsWith('/c/checkout/') ||
    location.pathname.startsWith('/c/product/') ||
    location.pathname.startsWith('/c/custom') ||
    ['/c/about', '/c/floral-care', '/c/shipping-returns', '/c/contact', '/c/faq', '/c/privacy-policy', '/c/terms-of-service', '/c/sustainability'].includes(location.pathname) ||
    location.pathname === '/c/menu' ||
    location.pathname === '/c/subscription' ||
    location.pathname === '/c/auth'

  if (isEditorialRoute) {
    return <Outlet />
  }

  return (
    <div className="min-h-screen overflow-hidden text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 soft-grid opacity-70" />

      <header className="sticky top-0 z-20 border-b bg-background/78 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/c"
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            aria-label="Go to TMDT home"
          >
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Flower2 className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-accent" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-black tracking-[0.24em]">
                {appConfig.name.split(' ')[0]}
              </span>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {appConfig.tagline}
              </span>
            </span>
          </Link>

          <div className="flex-1" />
          <DesktopNav />

          <div className="hidden items-center gap-1 sm:flex" aria-label="Customer quick actions">
            {quickActions.slice(1).map((item) => {
              const Icon = item.icon
              return (
                <IconLink key={item.to} to={item.to} label={item.label}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </IconLink>
              )
            })}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-6 pb-28 sm:px-6 sm:py-8 lg:px-8 lg:pb-10">
        <Outlet />
      </main>

      <footer className="border-t bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:px-6 lg:px-8">
          <div>
            <div className="font-display text-3xl font-semibold">
              {appConfig.name}
            </div>
            <p className="mt-2 max-w-md text-primary-foreground/72">
              Responsive storefront prototype for curated bouquets, custom requests, and a guided checkout flow.
            </p>
          </div>
          <div>
            <div className="font-semibold">Studio</div>
            <p className="mt-2 text-primary-foreground/72">District delivery, atelier pickup, and event builds.</p>
          </div>
          <div>
            <div className="font-semibold">Hours</div>
            <p className="mt-2 text-primary-foreground/72">
              09:00 to 20:00 daily. Same-day slots depend on stem availability.
            </p>
          </div>
        </div>
      </footer>

      <MobileDock />
    </div>
  )
}
