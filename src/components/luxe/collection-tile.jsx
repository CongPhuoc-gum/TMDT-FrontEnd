import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { cn } from '@/lib/utils'

export function CollectionTile({ item }) {
  return (
    <Link
      to={item.to}
      className={cn(
        'group relative col-span-12 block overflow-hidden border border-black/10 bg-black',
        item.className,
      )}
    >
      <img
        src={item.image}
        alt={`${item.title} floral collection`}
        className="luxe-image h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />
      <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-6 sm:left-6">
        <LuxeLabel className="mb-1 block text-white/85">{item.eyebrow}</LuxeLabel>
        <h3 className="luxe-serif text-3xl leading-tight sm:text-4xl">{item.title}</h3>
      </div>
      <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/45 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
