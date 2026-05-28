import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { appConfig } from '@/config/env'
import { editorialNavLinks, mobileNavLinks } from '@/data/luxe-data'
import { cn } from '@/lib/utils'

const variants = {
  home: {
    fixed: true,
    showDesktopNav: true,
    showMobileMenu: true,
    brandClass: 'luxe-serif absolute left-1/2 -translate-x-1/2 text-xl text-black sm:text-2xl',
    shellClass: 'fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-black/15 bg-[#f9f8f5]/86 px-5 backdrop-blur-md sm:h-16 lg:px-16',
  },
  editorial: {
    sticky: true,
    showMenuIcon: true,
    brandClass: 'luxe-serif absolute left-1/2 -translate-x-1/2 text-xl text-black sm:text-2xl',
    shellClass: 'relative z-20 border-b border-black/15 bg-[#fbf9f9]/92 backdrop-blur-md',
    innerClass: 'flex h-16 items-center justify-between px-5 lg:px-16',
  },
  prominent: {
    sticky: true,
    showMenuIcon: true,
    brandClass: 'luxe-serif absolute left-1/2 -translate-x-1/2 text-center text-4xl uppercase leading-none text-black sm:text-6xl lg:text-7xl',
    shellClass: 'sticky top-0 z-40 border-b border-black/15 bg-[#fbf9f9]/92 backdrop-blur-md',
    innerClass: 'flex h-20 items-center justify-between px-5 lg:px-16',
  },
  product: {
    brandClass: 'luxe-serif text-2xl text-black',
    shellClass: 'border-b border-black/15 bg-[#fbf9f9]',
    innerClass: 'flex h-16 items-center justify-between px-6 lg:px-16',
  },
  productLarge: {
    brandClass: 'luxe-serif text-5xl uppercase leading-none text-black sm:text-6xl',
    shellClass: 'border-b border-black/15 bg-[#fbf9f9]',
    innerClass: 'flex h-20 items-center justify-between px-6 lg:px-16',
  },
  productCentered: {
    brandClass: 'luxe-serif absolute left-1/2 -translate-x-1/2 uppercase tracking-[0.18em] text-2xl text-black',
    shellClass: 'border-b border-black/15 bg-[#fbf9f9]',
    innerClass: 'relative flex h-16 items-center justify-between px-6 lg:px-16',
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
  const isHome = variant === 'home'

  const NavTag = config.fixed || config.sticky ? 'nav' : 'header'
  const shellProps = config.fixed ? {} : {}

  const content = (
    <>
          <div className="flex items-center gap-8">
            {config.showDesktopNav &&
              editorialNavLinks.map(({ label, to }) => (
                <Link key={to} className="luxe-label hidden transition-opacity hover:opacity-60 md:block" to={to}>
                  {label}
                </Link>
              ))}

            {config.showMobileMenu && (
              <button
                className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-60 md:hidden"
                type="button"
                aria-label="Open navigation"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            )}

            {config.showMenuIcon && (
              <Link className="flex items-center gap-3 transition-opacity hover:opacity-60" to="/c">
                <Menu className="h-5 w-5" aria-hidden="true" />
                <LuxeLabel>{variant === 'prominent' ? 'Menu' : 'Shop'}</LuxeLabel>
              </Link>
            )}

            {(variant === 'product' || variant === 'productLarge') && (
              <>
                {editorialNavLinks.map(({ label, to }) => (
                  <Link key={to} className="luxe-label hidden transition-opacity hover:opacity-60 md:block" to={to}>
                    {label}
                  </Link>
                ))}
                {variant === 'productLarge' && (
                  <button className="hidden items-center gap-3 md:flex" type="button" aria-label="Menu">
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </>
            )}
          </div>

          <Link to="/c" className={config.brandClass} aria-label={`${appConfig.name} home`}>
            {appConfig.name}
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            {variant !== 'productLarge' && (
              <Link className="luxe-label hidden transition-opacity hover:opacity-60 md:block" to="/c/auth">
                Sign in
              </Link>
            )}
            <Link
              className={cn(
                'flex items-center gap-2 transition-opacity hover:opacity-60',
                isHome && 'h-10 px-1',
              )}
              to="/c/checkout/shipping"
              aria-label="Open cart"
            >
              {isHome && <span className="luxe-label hidden sm:inline">[ 00 ]</span>}
              {variant === 'product' && <LuxeLabel className="hidden md:inline">Cart</LuxeLabel>}
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </div>
        </>
  )

  return (
    <>
      {config.innerClass ? (
        <NavTag className={config.shellClass} {...shellProps}>
          <div className={config.innerClass}>{content}</div>
        </NavTag>
      ) : (
        <NavTag className={config.shellClass} {...shellProps}>
          {content}
        </NavTag>
      )}

      {isHome && <MobileOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />}
    </>
  )
}
