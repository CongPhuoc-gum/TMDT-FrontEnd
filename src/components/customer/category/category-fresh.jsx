import { CategoryDetailFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { ProductTile } from '@/components/luxe/product-tile'
import { luxeImages, mixProductsForCategory } from '@/data/luxe-data'

export function CategoryFresh({ category }) {
  const gallery = mixProductsForCategory(category.id, 9)

  return (
    <LuxePage bg="#fbf9f9" className="text-[#1b1c1c]">
      <EditorialHeader variant="editorial" />

      <main>
        <section className="grid min-h-[600px] border-b border-black/15 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            <h1 className="luxe-serif absolute bottom-20 left-8 text-6xl leading-none text-white mix-blend-difference sm:text-7xl lg:left-16">
              {category.name}
            </h1>
          </div>

          <div className="flex flex-col justify-center px-8 py-16 lg:px-20">
            <h2 className="luxe-serif max-w-xl text-5xl leading-[1.04] lg:text-6xl">{category.description}</h2>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-[#444748]">
              <LuxeLabel>Filter by</LuxeLabel>
              {['Price', 'Season', 'Color'].map((item) => (
                <button key={item} type="button" className="border-b border-black/40 pb-1">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3">
          {gallery.map((product) => (
            <ProductTile
              key={product.id}
              product={product}
              className="aspect-square border-b border-r border-black/15"
              showPrice
            />
          ))}
        </section>

        <section className="grid border-b border-black/15 md:grid-cols-2">
          <div className="flex min-h-[460px] flex-col justify-center px-8 py-16 lg:px-16">
            <h2 className="luxe-serif text-5xl">Stay in Bloom</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#747878]">
              Subscribe to receive seasonal collection previews and editorial insights from our florist studio.
            </p>
            <form className="mt-12 max-w-md" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="fresh-email">
                Your Email
              </label>
              <input
                id="fresh-email"
                className="h-12 w-full border-0 border-b border-black bg-transparent px-0 text-sm outline-none focus:border-b-2 focus:ring-0"
                placeholder="Your Email"
                type="email"
              />
              <button className="luxe-label mt-8 bg-black px-8 py-4 text-white" type="submit">
                Remind Me
              </button>
            </form>
          </div>
          <div className="min-h-[460px] overflow-hidden bg-black">
            <img src={luxeImages.ivory} alt="White lily bloom" className="h-full w-full object-cover" />
          </div>
        </section>
      </main>

      <CategoryDetailFooter />
    </LuxePage>
  )
}
