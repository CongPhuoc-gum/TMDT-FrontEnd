import { Link } from 'react-router-dom'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { homeHeroLinks, luxeImages } from '@/data/luxe-data'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[780px] w-full items-center justify-center overflow-hidden pt-14 sm:min-h-screen sm:pt-16">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={luxeImages.hero}
        alt="Florist arranging coral and ivory roses in a sunlit studio"
      />
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 grid h-full min-h-[720px] w-full grid-cols-1 pt-12 sm:min-h-screen md:grid-cols-3 md:pt-0">
        {homeHeroLinks.map(({ title, label, to }) => (
          <Link
            key={title}
            to={to}
            className="group flex min-h-[180px] flex-col items-center justify-center border-white/20 text-white transition-colors duration-500 hover:bg-black/15 md:justify-end md:border-l md:pb-24"
          >
            <span className="luxe-serif translate-y-2 text-5xl opacity-100 transition duration-500 group-hover:translate-y-0 sm:text-6xl md:opacity-0 md:group-hover:opacity-100 lg:text-7xl">
              {title}
            </span>
            <LuxeLabel className="mt-4 text-white">{label}</LuxeLabel>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 left-5 z-20 text-white sm:left-10 lg:left-16">
        <h1 className="luxe-serif max-w-[9ch] text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
          Artistic Floristry.
        </h1>
      </div>
    </section>
  )
}
