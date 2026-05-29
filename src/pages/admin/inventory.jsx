import { Eye, MoreVertical, Plus, Trash2, X } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { AdminMetric, AdminPage, AdminTopbar, Pager } from '@/components/admin/admin-ui'

const inventoryRows = [
  {
    name: 'Midnight Orchid',
    id: 'LUX-8902-O',
    image: luxeImages.iris,
    tags: ['Sympathy', 'Mystery'],
    stock: '14 Units',
    price: '$125.00',
  },
  {
    name: 'Sun-Kissed Peonies',
    id: 'LUX-4421-P',
    image: luxeImages.rosy,
    tags: ['Joy', 'Abundance'],
    stock: '3 Units',
    price: '$85.00',
    low: true,
  },
  {
    name: 'Velvet Crimson Roses',
    id: 'LUX-1212-R',
    image: luxeImages.magenta,
    tags: ['Love', 'Passion'],
    stock: '42 Units',
    price: '$110.00',
  },
]

function TagChip({ children }) {
  return <span className="bg-neutral-200 px-2 py-1 text-[0.65rem] uppercase text-neutral-700">{children}</span>
}

export default function AdminInventory() {
  return (
    <>
      <AdminTopbar placeholder="Search catalog..." role="ADMINISTRATOR" />
      <div className="grid xl:grid-cols-[1fr_360px]">
        <AdminPage compact>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="luxe-serif text-xl">Inventory Overview</p>
              <p className="mt-3 max-w-3xl text-neutral-700">
                Curate the seasonal collection, manage botanical rarity stocks, and assign emotional resonance to each arrangement.
              </p>
            </div>
            <button className="inline-flex h-14 items-center justify-center gap-3 bg-black px-8 text-sm font-semibold uppercase text-white">
              <Plus className="h-5 w-5" aria-hidden="true" />
              New Product
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <AdminMetric label="Total Products" value="142" />
            <AdminMetric label="Low Stock Alert" value="08" tone="danger" />
            <AdminMetric label="Active Categories" value="12" />
            <AdminMetric label="Meanings Defined" value="24" />
          </div>

          <section className="mt-10 border border-neutral-300">
            <div className="grid grid-cols-[1.3fr_1fr_0.7fr_0.7fr_0.5fr] bg-neutral-200 px-6 py-5 text-sm uppercase text-neutral-700">
              <span>Product & Visuals</span>
              <span>Meaning / Emotions</span>
              <span>Stock Level</span>
              <span>Retail Price</span>
              <span>Actions</span>
            </div>
            {inventoryRows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[1.3fr_1fr_0.7fr_0.7fr_0.5fr] items-center border-t border-neutral-300 px-6 py-6"
              >
                <div className="flex items-center gap-5">
                  <img src={row.image} alt="" className="h-16 w-16 object-cover" />
                  <div>
                    <div className="font-semibold">{row.name}</div>
                    <div className="mt-1 text-sm text-neutral-600">ID: {row.id}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.tags.map((tag) => (
                    <TagChip key={tag}>{tag}</TagChip>
                  ))}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-400 text-xs">+</span>
                </div>
                <div className={row.low ? 'text-red-700' : ''}>{row.stock}</div>
                <div>{row.price}</div>
                <div className="flex items-center gap-4">
                  <Eye className="h-5 w-5" aria-hidden="true" />
                  <MoreVertical className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-5 border-t border-neutral-300 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-600">Showing 3 of 142 products</p>
              <Pager />
            </div>
          </section>
        </AdminPage>

        <aside className="border-l border-neutral-300 bg-white p-8 shadow-2xl shadow-black/10">
          <div className="flex items-center justify-between">
            <h2 className="luxe-serif text-xl">Edit Meaning</h2>
            <X className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="mt-8">
            <p className="luxe-label text-neutral-500">Selected Flower</p>
            <div className="mt-4 flex items-center gap-4 border border-neutral-300 p-4">
              <img src={luxeImages.rosy} alt="" className="h-14 w-14 object-cover" />
              <span className="font-semibold">Sun-Kissed Peonies</span>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <p className="luxe-label text-neutral-500">Assigned Emotions</p>
            {['Joy', 'Abundance'].map((emotion) => (
              <div key={emotion} className="flex items-center justify-between bg-neutral-100 px-4 py-3">
                <span>{emotion}</span>
                <Trash2 className="h-4 w-4 text-red-700" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="luxe-label text-neutral-500">Add New Emotion</p>
            <div className="mt-4 border-b border-black py-3">Sympathy</div>
          </div>

          <button className="mt-72 h-14 w-full bg-black text-sm font-semibold uppercase text-white">
            Save Changes
          </button>
        </aside>
      </div>
    </>
  )
}
