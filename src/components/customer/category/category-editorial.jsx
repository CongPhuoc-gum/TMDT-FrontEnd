import { Link } from 'react-router-dom'
import { ArrowDownUp } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { ProductTile } from '@/components/luxe/product-tile'
import { mixProductsForCategory } from '@/data/luxe-data'
import { cn } from '@/lib/utils'

export function CategoryEditorial({ category }) {
  const gallery = mixProductsForCategory(category.id, 6)

  return (
    <LuxePage bg="#fbf9f9" className="text-[#1a1c1a]">
      <EditorialHeader variant="prominent" />

      <main className="grid lg:grid-cols-[320px_1fr]">
        <aside className="hidden border-r border-black/15 px-16 py-20 lg:block">
          <div className="sticky top-28">
            <LuxeLabel>Categories</LuxeLabel>
            <div className="mt-8 grid gap-6 text-lg">
              {['All Collections', 'Bridal Editorial', 'Minimalist Vessels', 'Seasonal Installation', 'Monochromatic'].map(
                (item, index) => (
                  <Link key={item} className={cn(index === 0 && 'font-semibold')} to="/c/category/tulips">
                    {item}
                  </Link>
                ),
              )}
            </div>

            <LuxeLabel className="mt-16 block">Mood</LuxeLabel>
            <div className="mt-8 grid gap-5 text-base text-[#444748]">
              {['Serene & Light', 'Dramatic Noir', 'Earthly Textures'].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full border border-black" />
                  {item}
                </label>
              ))}
            </div>

            <LuxeLabel className="mt-16 block">Price Range</LuxeLabel>
            <div className="mt-8 h-px bg-black/20">
              <div className="relative h-px w-3/4 bg-black">
                <span className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-black" />
                <span className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-black" />
              </div>
            </div>
            <div className="mt-4 flex justify-between text-xs text-[#444748]">
              <span>$80</span>
              <span>$500+</span>
            </div>
          </div>
        </aside>

        <section className="px-5 py-12 sm:px-10 lg:px-8 lg:py-16">
          <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-10 md:flex-row md:items-end">
            <div>
              <LuxeLabel>Curated Collection</LuxeLabel>
              <h1 className="luxe-serif mt-5 text-6xl leading-none sm:text-7xl lg:text-8xl">{category.name}</h1>
            </div>
            <button className="luxe-label inline-flex items-center gap-3 self-start md:self-end" type="button">
              Sort by: Relevance <ArrowDownUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProductTile product={gallery[0]} className="aspect-[4/5] md:col-span-2 md:row-span-2" showPrice />
            {gallery.slice(1, 3).map((product) => (
              <ProductTile key={product.id} product={product} className="aspect-[4/5]" showPrice />
            ))}
            {gallery.slice(3, 6).map((product) => (
              <ProductTile key={product.id} product={product} className="aspect-square" showPrice />
            ))}
          </div>
        </section>
      </main>

      <EditorialFooter variant="editorial" />
    </LuxePage>
  )
}
