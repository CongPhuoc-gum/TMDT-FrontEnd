import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { luxeImages } from '@/data/luxe-data'

export function HomeStory() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-24 sm:px-10 lg:grid-cols-12 lg:gap-4 lg:px-16 lg:py-32">
      <div className="lg:col-span-5">
        <LuxeLabel>Our Story</LuxeLabel>
        <h2 className="luxe-serif mt-5 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
          Crafting Beauty in Kyiv.
        </h2>
        <p className="mt-10 max-w-md text-base leading-8 text-[#5d5f5f]">
          Every petal is selected with intent. Born from a passion for editorial aesthetics and the raw beauty of the
          Ukrainian landscape, LuxeBouquets reimagines floristry as high art.
        </p>
        <Link
          to="/c/custom"
          className="luxe-label mt-8 inline-flex items-center gap-3 border-b border-black pb-1 transition-opacity hover:opacity-60"
        >
          Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="relative lg:col-span-7">
        <div className="ml-auto aspect-[4/5] max-h-[760px] overflow-hidden bg-[#e3e2e0] lg:w-[78%]">
          <img
            src={luxeImages.story}
            alt="Minimal architectural flower arrangement in a white vase"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 left-0 hidden w-64 border border-black/10 bg-[#f9f8f5] p-10 lg:block">
          <span className="luxe-serif text-7xl text-[#dbdad7]">01</span>
          <p className="mt-4 text-xs italic text-[#747878]">Signature Collection</p>
        </div>
      </div>
    </section>
  )
}
