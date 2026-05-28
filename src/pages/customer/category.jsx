import { Link, useParams } from 'react-router-dom'

import { CategoryEditorial } from '@/components/customer/category/category-editorial'
import { CategoryFresh } from '@/components/customer/category/category-fresh'
import { CategoryGrid } from '@/components/customer/category/category-grid'
import { LuxePage } from '@/components/luxe/luxe-page'
import { findCategory } from '@/data/luxe-data'

export default function CustomerCategory() {
  const { categoryId } = useParams()
  const category = findCategory(categoryId)

  if (!category) {
    return (
      <LuxePage bg="#fbf9f9" className="px-6 py-20 text-[#1b1c1c]">
        <Link className="luxe-label border-b border-black pb-1" to="/c">
          Back home
        </Link>
        <h1 className="luxe-serif mt-10 text-6xl">Category not found.</h1>
      </LuxePage>
    )
  }

  if (categoryId === 'roses') {
    return <CategoryFresh category={category} />
  }

  if (categoryId === 'tulips') {
    return <CategoryEditorial category={category} />
  }

  return <CategoryGrid category={category} />
}
