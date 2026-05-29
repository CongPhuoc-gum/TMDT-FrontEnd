import { ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, Pencil, Trash2 } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label, StaffTopbar, StatusPill } from '@/components/staff/staff-ui'

const orders = [
  ['#LB-89230', 'Elena Volkova', 'Standard Delivery', 'White Elegance', 'Oct 24, 2023', 'Processing', 'light', luxeImages.ivory],
  ['#LB-89231', 'Markian Shevchenko', 'Express Courier', 'Autumn Crimson', 'Oct 24, 2023', 'Shipped', 'dark', luxeImages.autumn],
  ['#LB-89232', 'Sofia Petrenko', 'Store Pickup', 'Lavender Dream', 'Oct 25, 2023', 'Delivered', 'warm', luxeImages.iris],
  ['#LB-89233', 'Dmitry Ivanov', 'Standard Delivery', 'Spring Whisper', 'Oct 26, 2023', 'Processing', 'light', luxeImages.spring],
]

export default function StaffOrders() {
  return (
    <div>
      <StaffTopbar placeholder="Search orders, customers, IDs..." rightLabel="Staff Admin" />

      <div className="px-6 py-12 lg:px-16">
        <section className="flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
          <div>
            <h1 className="luxe-serif text-6xl leading-none lg:text-7xl">Orders Center</h1>
            <p className="mt-5 max-w-4xl text-xl leading-8">
              Manage the full lifecycle of luxury floral arrangements. Monitor status, update logistics, and ensure
              every bouquet meets the Kyiv LuxeBouquets standard.
            </p>
          </div>
          <div className="flex gap-5">
            <button className="luxe-label h-20 w-56 border border-black/40" type="button">
              Export
              <br />
              CSV
            </button>
            <button className="luxe-label flex h-20 items-center gap-4 bg-[#efeded] px-10" type="button">
              <Filter className="h-5 w-5" aria-hidden="true" />
              Filter
            </button>
          </div>
        </section>

        <section className="mt-12 grid gap-8 xl:grid-cols-[280px_280px_1fr]">
          <div className="border border-black/20 p-8">
            <Label>Active Processing</Label>
            <div className="luxe-serif mt-14 text-5xl">24</div>
            <div className="mt-4 h-1 w-36 bg-black" />
          </div>
          <div className="border border-black/20 p-8">
            <Label>Scheduled Today</Label>
            <div className="luxe-serif mt-14 text-5xl">12</div>
            <p className="mt-3 text-lg text-[#444748]">Next pickup in 45 mins</p>
          </div>
          <div className="relative overflow-hidden bg-black">
            <img src={luxeImages.magenta} alt="Operational insight" className="h-full min-h-48 w-full object-cover opacity-45" />
            <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
              <Label className="text-white">Operational Insight</Label>
              <p className="luxe-serif mt-3 text-3xl">Inventory check: Peonies low</p>
            </div>
          </div>
        </section>

        <section className="mt-16 overflow-x-auto border border-black/20">
          <table className="w-full min-w-[980px] text-left">
            <thead>
              <tr className="border-b border-black/20">
                {['Order ID', 'Customer', 'Product', 'Delivery Date', 'Status', 'Actions'].map((head) => (
                  <th key={head} className="luxe-label px-8 py-8 text-lg">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(([id, customer, delivery, product, date, status, tone, image]) => (
                <tr key={id} className="border-b border-black/15 last:border-b-0">
                  <td className="px-8 py-8 text-xl font-semibold">{id}</td>
                  <td className="px-8 py-8">
                    <div className="text-xl">{customer}</div>
                    <Label className="mt-2 block text-[#444748]">{delivery}</Label>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-4">
                      <img src={image} alt={product} className="h-12 w-12 object-cover" />
                      <span className="text-xl">{product}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8 text-xl">{date}</td>
                  <td className="px-8 py-8">
                    <StatusPill tone={tone}>
                      {status} <ChevronDown className="ml-2 inline h-4 w-4" aria-hidden="true" />
                    </StatusPill>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex gap-5">
                      <Eye className="h-6 w-6" />
                      <Pencil className="h-6 w-6" />
                      <Trash2 className="h-6 w-6 text-red-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between border-t border-black/20 px-8 py-6">
            <p className="text-lg">Showing 1 to 4 of 124 orders</p>
            <div className="flex gap-3">
              {[ChevronLeft, '1', '2', ChevronRight].map((item, index) => {
                const isIcon = typeof item !== 'string'
                const Icon = item
                return (
                  <button
                    key={index}
                    className={`flex h-12 w-12 items-center justify-center border border-black/20 ${item === '1' ? 'bg-black text-white' : ''}`}
                    type="button"
                  >
                    {isIcon ? <Icon className="h-5 w-5" /> : item}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-12 text-xl">
          <span><span className="mr-3 inline-block h-4 w-4 border border-black/20" />Processing: In Studio</span>
          <span><span className="mr-3 inline-block h-4 w-4 bg-black" />Shipped: Out for Delivery</span>
          <span><span className="mr-3 inline-block h-4 w-4 bg-[#f2dfd1]" />Delivered: Success</span>
        </div>
      </div>
    </div>
  )
}
