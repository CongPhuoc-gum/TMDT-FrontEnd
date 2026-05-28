import { Link, useParams } from 'react-router-dom'

import { ProductElysian } from '@/components/customer/product/product-elysian'
import { ProductMidnight } from '@/components/customer/product/product-midnight'
import { ProductRosy } from '@/components/customer/product/product-rosy'
import { LuxePage } from '@/components/luxe/luxe-page'
import { findProduct } from '@/data/luxe-data'

export default function CustomerProduct() {
  const { productId } = useParams()
  const product = findProduct(productId)

  if (!product) {
    return (
      <LuxePage bg="#fbf9f9" className="px-6 py-20 text-[#1b1c1c]">
        <Link className="luxe-label border-b border-black pb-1" to="/c">
          Back home
        </Link>
        <h1 className="luxe-serif mt-10 text-6xl">Product not found.</h1>
      </LuxePage>
    )
  }

  if (productId === 'p-rose-02') {
    return <ProductRosy product={product} />
  }

  if (productId === 'p-rose-03' || productId === 'p-season-01') {
    return <ProductMidnight product={product} />
  }

  return <ProductElysian product={product} />
}
