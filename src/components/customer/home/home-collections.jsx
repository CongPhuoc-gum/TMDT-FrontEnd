import { CollectionTile } from '@/components/luxe/collection-tile'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { homeCollections } from '@/data/luxe-data'

export function HomeCollections() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <LuxeLabel>Shop the Look</LuxeLabel>
          <h2 className="luxe-serif mt-5 text-5xl leading-none sm:text-6xl lg:text-7xl">
            Current Collections.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-[#5d5f5f]">
          A seasonal curation of rare blossoms, harvested at peak freshness and delivered within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {homeCollections.map((item) => (
          <CollectionTile key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
