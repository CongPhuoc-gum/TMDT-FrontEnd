import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, User2, X } from 'lucide-react'

import { appConfig } from '@/config/env'
import { cn } from '@/lib/utils'

const primaryNavLinks = [
  { label: 'Home', to: '/c', end: true },
  { label: 'Shop', to: '/c/category/roses' },
  { label: 'Custom', to: '/c/custom' },
  { label: 'Subscription', to: '/c/subscription' },
]

const mobileNavLinks = [
  ...primaryNavLinks,
  { label: 'Visual Menu', to: '/c/menu' },
  { label: 'Account', to: '/c/auth' },
  { label: 'Checkout', to: '/c/checkout/shipping' },
]

const variants = {
  home: {
    fixed: true,
    shellClass: 'fixed left-0 top-0 z-50 w-full border-b border-black/15 bg-[#fbf9f9]/88 text-black backdrop-blur-md',
  },
  editorial: {
    sticky: true,
    shellClass: 'sticky top-0 z-40 w-full border-b border-black/15 bg-[#fbf9f9]/94 text-black backdrop-blur-md',
  },
  prominent: {
    sticky: true,
    shellClass: 'sticky top-0 z-40 w-full border-b border-black/15 bg-[#fbf9f9]/94 text-black backdrop-blur-md',
  },
  product: {
    sticky: true,
    shellClass: 'sticky top-0 z-40 w-full border-b border-black/15 bg-[#fbf9f9]/94 text-black backdrop-blur-md',
  },
  productLarge: {
    sticky: true,
    shellClass: 'sticky top-0 z-40 w-full border-b border-black/15 bg-[#fbf9f9]/94 text-black backdrop-blur-md',
  },
  productCentered: {
    sticky: true,
    shellClass: 'sticky top-0 z-40 w-full border-b border-black/15 bg-[#fbf9f9]/94 text-black backdrop-blur-md',
  },
}

function MobileOverlay({ open, onClose }) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] bg-[#f9f8f5]/96 backdrop-blur-md transition duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <button
        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white"
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
        {mobileNavLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="luxe-serif text-5xl transition-opacity hover:opacity-55"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function EditorialHeader({ variant = 'editorial' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const config = variants[variant] ?? variants.editorial

  const HeaderTag = config.fixed || config.sticky ? 'nav' : 'header'

  const navLinkClass = ({ isActive }) =>
    cn(
      'luxe-label border-b border-transparent pb-1 text-black/64 transition-colors hover:border-black/35 hover:text-black',
      isActive && 'border-black text-black',
    )

  return (
    <>
      <HeaderTag className={config.shellClass} aria-label="Customer navigation">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-5 sm:h-[4.5rem] lg:px-16">
          <div className="flex items-center gap-7">
            <button
              className="flex h-10 w-10 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white md:hidden"
              type="button"
              aria-label="Open navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="hidden items-center gap-7 md:flex">
              {primaryNavLinks.map(({ label, to, end }) => (
                <NavLink key={to} to={to} end={end} className={navLinkClass}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <Link
            to="/c"
            className="luxe-serif text-center text-2xl leading-none text-black transition-opacity hover:opacity-70 sm:text-3xl"
            aria-label={`${appConfig.name} home`}
          >
            {appConfig.name}
          </Link>

          <div className="flex items-center justify-end gap-3 sm:gap-5">
            <Link className="luxe-label hidden transition-opacity hover:opacity-60 md:block" to="/c/menu">
              Menu
            </Link>
            <Link className="hidden transition-opacity hover:opacity-60 sm:block" to="/c/auth" aria-label="Account">
              <User2 className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link className="transition-opacity hover:opacity-60" to="/c/checkout/shipping" aria-label="Open cart">
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </HeaderTag>

      <MobileOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
