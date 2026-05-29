import { Link, NavLink } from 'react-router-dom'
import { MessageSquare, Sparkles } from 'lucide-react'

import { EditorialHeader } from '@/components/luxe/editorial-header'
import { appConfig } from '@/config/env'
import { routes } from '@/config/routes'
import { formatVnd, selectedCheckoutProduct } from '@/data/luxe-data'
import { cn } from '@/lib/utils'

const steps = [
  { key: 'information', label: 'Information', to: routes.checkout.shipping },
  { key: 'shipping', label: 'Shipping', to: routes.checkout.payment },
  { key: 'payment', label: 'Payment', to: routes.checkout.review },
]

export function CheckoutField({ id, label, placeholder, className, type = 'text' }) {
  return (
    <div className={cn('space-y-4', className)}>
      <label className="luxe-label block" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full border-0 border-b border-black bg-transparent px-0 text-lg outline-none ring-0 placeholder:text-[#b8b8b8] focus:border-b-2 focus:ring-0"
      />
    </div>
  )
}

function CheckoutProgress({ activeStep }) {
  return (
    <div className="flex flex-wrap items-center gap-5 text-[#9a9a9a]">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center gap-5">
          <NavLink
            to={step.to}
            className={({ isActive }) =>
              cn(
                'luxe-label border-b pb-2 transition-colors hover:text-black',
                isActive || step.key === activeStep ? 'border-black text-black' : 'border-transparent',
              )
            }
          >
            {String(index + 1).padStart(2, '0')} {step.label}
          </NavLink>
          {index < steps.length - 1 && <span className="text-xl text-[#c4c7c7]">→</span>}
        </div>
      ))}
    </div>
  )
}

function OrderSummary({ framed = false }) {
  const subtotal = selectedCheckoutProduct.price
  const shipping = 30000
  const taxes = 0
  const total = framed ? subtotal : subtotal + shipping + taxes

  return (
    <aside className={cn('bg-[#f5f3f3] p-8 lg:p-12', framed && 'border border-black bg-transparent')}>
      <h2 className="luxe-serif text-4xl">{framed ? 'Your Order' : 'Order Summary'}</h2>

      <div className={cn('mt-10 flex gap-6', framed && 'block')}>
        <img
          src={selectedCheckoutProduct.image}
          alt={selectedCheckoutProduct.name}
          className={cn('object-cover', framed ? 'h-72 w-full' : 'h-32 w-28')}
        />
        <div className={cn(framed && 'mt-6 flex items-end justify-between')}>
          <div>
            <h3 className="text-xl font-semibold">{selectedCheckoutProduct.name}</h3>
            <p className="luxe-serif mt-2 text-2xl text-[#444748]">Large Bouquet</p>
          </div>
          <p className="mt-8 text-xl">{formatVnd(subtotal)}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-black/20 pt-8">
        <div className="flex justify-between py-3 text-lg">
          <span>Subtotal</span>
          <span>{formatVnd(subtotal)}</span>
        </div>
        <div className="flex justify-between py-3 text-lg">
          <span>Shipping</span>
          <span className="luxe-label">Calculated next step</span>
        </div>
        {!framed && (
          <div className="flex justify-between py-3 text-lg">
            <span>Taxes</span>
            <span>{formatVnd(taxes)}</span>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between border-t border-black/20 pt-8 text-xl font-semibold">
        <span>Total</span>
        <span className={cn(framed && 'luxe-serif text-4xl font-normal')}>{formatVnd(total)}</span>
      </div>

      {!framed && (
        <div className="mt-14 border-l-2 border-black bg-[#f2dfd1]/45 p-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="luxe-label">Florist&apos;s Note</span>
          </div>
          <p className="luxe-serif mt-6 text-2xl leading-8 text-[#6f6257]">
            Your bouquet will be hand-crafted and delivered in our signature sustainable luxury packaging.
          </p>
        </div>
      )}
    </aside>
  )
}

export default function CheckoutShell({
  activeStep = 'information',
  heading,
  children,
  backTo = routes.home,
  nextTo,
  nextLabel = 'Continue',
  framedSummary = false,
}) {
  return (
    <div className="luxe-home min-h-screen bg-[#fbf9f9] text-[#111]">
      <EditorialHeader variant="editorial" />

      <main className="grid gap-12 px-6 pb-28 pt-10 lg:grid-cols-[1fr_560px] lg:px-20">
        <section className="max-w-5xl">
          <CheckoutProgress activeStep={activeStep} />
          <h1 className="luxe-serif mt-20 text-6xl leading-none sm:text-7xl lg:text-8xl">{heading}</h1>

          <div className="mt-16">{children}</div>

          {nextTo ? (
            <Link
              to={nextTo}
              className="luxe-label mt-16 inline-flex h-16 min-w-80 items-center justify-center bg-black px-10 text-white transition-colors hover:bg-[#695c51]"
            >
              {nextLabel}
            </Link>
          ) : (
            <button
              className="luxe-label mt-16 inline-flex h-16 min-w-80 items-center justify-center bg-black px-10 text-white transition-colors hover:bg-[#695c51]"
              type="button"
            >
              {nextLabel}
            </button>
          )}

          {backTo && (
            <Link to={backTo} className="luxe-label ml-8 inline-flex border-b border-black pb-1">
              Back
            </Link>
          )}
        </section>

        <OrderSummary framed={framedSummary} />
      </main>

      <Link
        to={appConfig.staffChatPath}
        className="fixed bottom-10 right-10 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#f2dfd1]/65 shadow-xl backdrop-blur transition-transform hover:scale-105"
        aria-label="Open concierge chat"
      >
        <MessageSquare className="h-7 w-7" aria-hidden="true" />
      </Link>

      <footer className="flex flex-col justify-between gap-8 border-t border-black/15 px-6 py-12 text-sm text-[#444748] lg:flex-row lg:px-20">
        <p>© 2024 {appConfig.name}. Crafted for Elegance.</p>
        <div className="flex gap-10">
          <Link className="underline" to={routes.home}>
            Privacy Policy
          </Link>
          <Link className="underline" to={routes.home}>
            Terms of Service
          </Link>
          <Link className="underline" to={routes.checkout.shipping}>
            Shipping & Returns
          </Link>
          <Link className="underline" to={routes.home}>
            Sustainability
          </Link>
        </div>
      </footer>
    </div>
  )
}
