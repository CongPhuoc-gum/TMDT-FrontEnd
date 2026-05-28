import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Leaf, ShoppingCart, Sparkles, Sun } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { formatVnd, luxeImages } from '@/data/luxe-data'

const language = [
  { label: 'Profound Devotion', icon: Heart },
  { label: 'Radiant Vitality', icon: Sun },
  { label: 'Ephemeral Grace', icon: Sparkles },
  { label: 'Quiet Resilience', icon: Leaf },
]

export function ProductElysian({ product }) {
  const heroImage = product?.image ?? luxeImages.ivory

  return (
    <LuxePage bg="#fbf9f9" className="text-[#1a1c1a]">
      <EditorialHeader variant="productLarge" />

      <main>
        <section className="grid border-b border-black/15 lg:grid-cols-2">
          <div className="min-h-[720px] overflow-hidden">
            <img src={heroImage} alt={product?.name ?? 'Elysian Harmony bouquet'} className="h-full w-full object-cover" />
          </div>
          <div className="px-6 py-16 lg:px-20">
            <div className="flex items-start justify-between gap-6">
              <div>
                <LuxeLabel>Edition 04 / {product?.occasion ?? 'Midnight Petal'}</LuxeLabel>
                <h1 className="luxe-serif mt-6 text-6xl leading-[0.98] lg:text-7xl">
                  {product?.name ?? 'Elysian Harmony'}
                </h1>
              </div>
              <p className="luxe-serif text-3xl">{product ? formatVnd(product.price) : '$185'}</p>
            </div>

            <div className="mt-10 border-t border-black/15 pt-10">
              <LuxeLabel>The Visual Language</LuxeLabel>
              <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                {language.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="text-center">
                      <Icon className="mx-auto h-8 w-8 stroke-[1.5]" aria-hidden="true" />
                      <p className="luxe-serif mt-4 text-sm">{item.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <p className="mt-14 max-w-2xl text-xl italic leading-9 text-[#444748]">
              &ldquo;A dialogue between the untamed and the curated. Designed for spaces that breathe silence.&rdquo;
            </p>

            <Link
              to="/c/checkout/shipping"
              className="mt-12 grid h-16 grid-cols-[4rem_1fr_4rem] items-center border border-black/20"
            >
              <span className="flex h-full items-center justify-center border-r border-black/20">
                <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              </span>
              <LuxeLabel className="px-6">Select Delivery Window</LuxeLabel>
              <span className="flex h-full items-center justify-center">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        <section className="grid items-center gap-12 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-20">
          <div>
            <h2 className="luxe-serif text-4xl">Behind the Bouquet</h2>
            <p className="mt-8 max-w-md text-base leading-8 text-[#444748]">
              Our florists approach every arrangement as a temporary sculpture. We prioritize the natural line of the stem
              and the way shadows fall between petals.
            </p>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <img src={luxeImages.story} alt="Florist trimming a flower" className="w-full object-cover grayscale" />
          </div>
        </section>
      </main>

      <EditorialFooter variant="product" />
    </LuxePage>
  )
}
