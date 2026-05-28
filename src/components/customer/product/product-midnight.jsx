import { Link } from 'react-router-dom'
import { Heart, Moon, ShoppingCart, Star } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { FloatingChat } from '@/components/luxe/floating-chat'
import { formatVnd } from '@/data/luxe-data'

const meanings = [
  ['Love', Heart],
  ['Radiance', Star],
  ['Mystery', Moon],
]

export function ProductMidnight({ product }) {
  return (
    <LuxePage bg="#fbf9f9" className="text-[#1b1c1c]">
      <EditorialHeader variant="productCentered" />

      <main className="grid gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-20">
        <section className="relative mx-auto w-full max-w-4xl">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          <LuxeLabel className="absolute bottom-8 left-8 border border-black/20 bg-[#fbf9f9]/85 px-6 py-3">
            Premium Series
          </LuxeLabel>
        </section>

        <section className="flex flex-col justify-center">
          <h1 className="luxe-serif text-6xl leading-[1.02] lg:text-7xl">{product.name}</h1>
          <div className="mt-8 h-px w-16 bg-black" />
          <p className="mt-10 max-w-xl text-2xl leading-10 text-[#444748]">{product.description}</p>

          <div className="mt-14 grid max-w-sm grid-cols-3 gap-8">
            {meanings.map(([label, Icon]) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto h-8 w-8 stroke-[1.7]" aria-hidden="true" />
                <LuxeLabel className="mt-5 block">{label}</LuxeLabel>
              </div>
            ))}
          </div>

          <div className="mt-40 flex items-center justify-between border-t border-black/20 pt-10">
            <div>
              <LuxeLabel>Investment</LuxeLabel>
              <p className="luxe-serif mt-2 text-4xl">{formatVnd(product.price)}</p>
            </div>
            <Link
              to="/c/checkout/shipping"
              className="flex h-20 w-20 items-center justify-center rounded-full border border-black transition-colors hover:bg-black hover:text-white"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-8 w-8" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <FloatingChat variant="concierge" />
      <EditorialFooter variant="compact" />
    </LuxePage>
  )
}
