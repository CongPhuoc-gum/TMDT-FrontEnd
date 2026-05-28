import { Link } from 'react-router-dom'

import { homeSplitCategories } from '@/data/luxe-data'

export function HomeSplitCategories() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {homeSplitCategories.map((category) => (
        <Link
          key={category.title}
          to={category.to}
          className="group relative min-h-[520px] overflow-hidden bg-black md:min-h-[680px]"
        >
          <img
            src={category.image}
            alt={`${category.title} category`}
            className="luxe-image absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
            <h2 className="luxe-serif text-5xl sm:text-6xl">{category.title}</h2>
            <p className="mt-5 max-w-xs text-sm leading-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {category.text}
            </p>
            <div className="mt-7 h-px w-0 bg-white transition-all duration-700 group-hover:w-28" />
          </div>
        </Link>
      ))}
    </section>
  )
}
