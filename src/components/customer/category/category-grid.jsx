import { Grid2X2, SlidersHorizontal } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { ProductTile } from '@/components/luxe/product-tile'
import { mixProductsForCategory } from '@/data/luxe-data'

export function CategoryGrid({ category }) {
  const gallery = mixProductsForCategory(category.id, 6)

  return (
    <LuxePage bg="#fbf9f9" className="text-[#1b1c1c]">
      <EditorialHeader variant="editorial" />

      <main className="px-5 py-16 sm:px-10 lg:px-16">
        <section className="flex flex-col justify-between gap-8 border-b border-black/15 pb-10 md:flex-row md:items-end">
          <div>
            <LuxeLabel>Categories / {category.name}</LuxeLabel>
            <h1 className="luxe-serif mt-6 text-6xl leading-none sm:text-7xl">{category.name}</h1>
          </div>
          <div className="max-w-md text-base italic leading-7 text-[#444748]">{category.description}</div>
          <div className="flex gap-3">
            <button className="flex h-11 w-11 items-center justify-center border border-black/35" type="button" aria-label="Filter">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            </button>
            <button className="flex h-11 w-11 items-center justify-center border border-black/35" type="button" aria-label="Grid">
              <Grid2X2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 md:grid-cols-3">
          {gallery.map((product) => (
            <ProductTile key={product.id} product={product} className="aspect-square" showPrice />
          ))}
        </section>

        <div className="py-24 text-center">
          <button className="luxe-label border-b border-black pb-2" type="button">
            Load More
          </button>
          <p className="mt-8 text-sm text-[#747878]">Showing {gallery.length} of 42 Arrangements</p>
        </div>
      </main>

      <EditorialFooter variant="compact" />
    </LuxePage>
  )
}
