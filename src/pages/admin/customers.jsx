import { Plus, UserPlus } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { AdminMetric, AdminPage, AdminTitle, Pager } from '@/components/admin/admin-ui'

const customers = [
  {
    name: 'Alessandra Moretti',
    email: 'a.moretti@studio-lux.com',
    points: '2,450 pts',
    spent: '$12,840.00',
    lastOrder: 'Oct 24, 2023',
    image: luxeImages.dried,
    accent: true,
  },
  {
    name: 'Julian Vane',
    email: 'julian.vane@arch-global.net',
    points: '840 pts',
    spent: '$3,120.50',
    lastOrder: 'Nov 12, 2023',
    image: luxeImages.story,
  },
  {
    name: 'Clara Dupont',
    email: 'c.dupont@paris-vogue.fr',
    points: '5,100 pts',
    spent: '$22,400.00',
    lastOrder: 'Dec 01, 2023',
    image: luxeImages.rosy,
    accent: true,
  },
  {
    name: 'Marcus Thorne',
    email: 'm.thorne@luxury-estates.com',
    points: '120 pts',
    spent: '$980.00',
    lastOrder: 'Dec 05, 2023',
    image: luxeImages.magenta,
  },
]

export default function AdminCustomers() {
  return (
    <AdminPage>
      <AdminTitle
        eyebrow="Customer Base"
        title="Customer Relations"
        action={<button className="h-16 bg-black px-12 text-sm font-semibold uppercase text-white">Export Database</button>}
      >
        Review and manage your high-end clientele. Track floral preferences, lifetime value, and loyalty status across the global registry.
      </AdminTitle>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetric label="Total Customers" value="12,482" note="+4.2% from last month" />
        <AdminMetric label="Average Spent" value="$412.50" note="Per transaction" />
        <AdminMetric label="Active Members" value="8,901" note="Loyalty enrolled" />
        <AdminMetric label="Retention" value="68%" note="Annual average" />
      </div>

      <section className="mt-14 border border-neutral-400">
        <div className="grid grid-cols-[1.25fr_1.4fr_0.9fr_1fr_0.9fr_0.7fr] bg-neutral-100 px-7 py-7 text-sm font-semibold uppercase">
          <span>Customer Name</span>
          <span>Email</span>
          <span>Loyalty Points</span>
          <span>Total Spent ($)</span>
          <span>Last Order Date</span>
          <span>Actions</span>
        </div>
        {customers.map((customer) => (
          <div
            key={customer.email}
            className="grid grid-cols-[1.25fr_1.4fr_0.9fr_1fr_0.9fr_0.7fr] items-center border-t border-neutral-300 px-7 py-6"
          >
            <div className="flex items-center gap-5">
              <img src={customer.image} alt="" className="h-12 w-12 object-cover grayscale" />
              <strong>{customer.name}</strong>
            </div>
            <div className="max-w-[14rem] break-words">{customer.email}</div>
            <div>
              <span className={customer.accent ? 'inline-block bg-[#eadfcc] px-4 py-3' : 'inline-block bg-neutral-200 px-4 py-3 text-neutral-600'}>
                {customer.points}
              </span>
            </div>
            <strong>{customer.spent}</strong>
            <div>{customer.lastOrder}</div>
            <div className="space-y-1 text-sm uppercase">
              <button className="block border-b border-black">Edit</button>
              <button className="block border-b border-black">Loyalty</button>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-5 border-t border-neutral-300 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-neutral-600">Showing 1 to 4 of 12,482 customers</p>
          <Pager />
        </div>
      </section>

      <button className="fixed bottom-10 right-10 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white shadow-xl">
        <UserPlus className="h-8 w-8" aria-hidden="true" />
        <Plus className="-ml-2 h-4 w-4" aria-hidden="true" />
      </button>
    </AdminPage>
  )
}
