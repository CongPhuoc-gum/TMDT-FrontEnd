import { Link } from 'react-router-dom'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { formatVnd } from '@/data/luxe-data'
import { cn } from '@/lib/utils'

export function ProductTile({ product, className, showPrice = false }) {
  return (
    <Link
      to={`/c/product/${product.id}`}
      className={cn('group relative block overflow-hidden bg-[#e4e2e2]', className)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="luxe-image h-full w-full object-cover grayscale-[12%] transition-all duration-700 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      <div className="absolute bottom-4 left-4 right-4 translate-y-2 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <LuxeLabel className="text-white/80">{product.occasion}</LuxeLabel>
        <div className="luxe-serif mt-2 text-2xl">{product.name}</div>
        {showPrice && <div className="mt-2 text-sm">{formatVnd(product.price)}</div>}
      </div>
    </Link>
  )
}
