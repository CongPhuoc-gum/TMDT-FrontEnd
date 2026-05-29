import { Calendar, CheckCircle, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react'

import { AdminPage, AdminTitle } from '@/components/admin/admin-ui'

const coupons = [
  { code: 'SUMMER_BLOOM', note: 'Created June 12, 2023', discount: '15%', usage: '1,240', expiry: 'Sep 30, 2023', active: true },
  { code: 'WELCOME_20', note: 'New User Promo', discount: '20%', usage: '8,592', expiry: 'No Expiry', active: true },
  { code: 'VIP_EXCLUSIVE', note: 'Manual Disabling', discount: '30%', usage: '421', expiry: 'Dec 31, 2023', active: false },
  { code: 'ANNIVERSARY_10', note: 'Loyalty Reward', discount: '10%', usage: '3,120', expiry: 'Oct 15, 2023', active: true },
]

export default function AdminCoupons() {
  return (
    <AdminPage>
      <AdminTitle title="Coupon Control Center">
        Manage your promotional strategy with precision. Create, track, and toggle active discounts for the Kyiv LuxeBouquets storefront.
      </AdminTitle>

      <div className="mt-14 grid gap-12 xl:grid-cols-[360px_1fr]">
        <section className="border border-neutral-400 bg-[#f7f7f5] p-10">
          <div className="flex items-center gap-4">
            <PlusCircle className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
            <h2 className="luxe-serif text-4xl leading-tight">
              Create New
              <br />
              Coupon
            </h2>
          </div>

          <div className="mt-12 space-y-9">
            <label className="block">
              <span className="luxe-label">Coupon Code</span>
              <span className="mt-5 block border-b border-neutral-700 pb-4 text-2xl text-neutral-400">LUXE25</span>
            </label>
            <div className="grid grid-cols-2 gap-8">
              <label>
                <span className="luxe-label">Discount (%)</span>
                <span className="mt-5 block border-b border-neutral-700 pb-4 text-2xl text-neutral-400">25</span>
              </label>
              <label>
                <span className="luxe-label">Min Purchase ($)</span>
                <span className="mt-5 block border-b border-neutral-700 pb-4 text-2xl text-neutral-400">100</span>
              </label>
            </div>
            <label className="block">
              <span className="luxe-label">Expiry Date</span>
              <span className="mt-5 flex items-center justify-between border-b border-neutral-700 pb-4 text-2xl">
                mm/dd/yyyy
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </span>
            </label>
          </div>

          <button className="mt-10 h-14 w-full bg-black text-sm font-semibold uppercase text-white">
            Generate Coupon
          </button>
        </section>

        <section>
          <div className="flex items-center justify-between border-b border-neutral-500 pb-7">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-7 w-7" aria-hidden="true" />
              <h2 className="luxe-serif text-4xl">Active Coupons</h2>
            </div>
            <p className="luxe-label hidden text-neutral-600 sm:block">Showing 6 active campaigns</p>
          </div>

          <div className="mt-9">
            <div className="grid grid-cols-[1.3fr_0.7fr_1fr_0.8fr_0.4fr] border-b border-neutral-300 px-5 pb-5 text-sm uppercase">
              <span>Code Name</span>
              <span>Discount</span>
              <span>Usage</span>
              <span>Expiry</span>
              <span>Status</span>
            </div>
            {coupons.map((coupon) => (
              <div
                key={coupon.code}
                className="grid grid-cols-[1.3fr_0.7fr_1fr_0.8fr_0.4fr] items-center border-b border-neutral-200 px-5 py-8"
              >
                <div>
                  <div className={coupon.active ? 'text-xl font-semibold' : 'text-xl font-semibold text-neutral-500'}>
                    {coupon.code}
                  </div>
                  <p className="mt-2 text-sm text-neutral-500">{coupon.note}</p>
                </div>
                <div className={coupon.active ? '' : 'text-neutral-500'}>{coupon.discount}</div>
                <div className={coupon.active ? 'flex items-center gap-3' : 'flex items-center gap-3 text-neutral-500'}>
                  <span>{coupon.usage}</span>
                  <span className="h-1.5 w-28 bg-neutral-200">
                    <span className={coupon.active ? 'block h-full w-3/4 bg-black' : 'block h-full w-1/3 bg-neutral-400'} />
                  </span>
                </div>
                <div className={coupon.active ? '' : 'text-neutral-500'}>{coupon.expiry}</div>
                <div>
                  <span className={coupon.active ? 'block h-7 w-12 rounded-full bg-black' : 'block h-7 w-12 rounded-full border border-neutral-300 bg-white'}>
                    <span className={coupon.active ? 'ml-6 mt-1 block h-5 w-5 rounded-full bg-white' : 'ml-1 mt-1 block h-5 w-5 rounded-full bg-neutral-200'} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-neutral-500 pt-6">
            <button className="inline-flex items-center gap-3 text-sm font-semibold uppercase">
              <ChevronLeft className="h-5 w-5" />
              Previous
            </button>
            <div className="flex gap-5 text-sm">
              <span className="border-b-2 border-black pb-1">01</span>
              <span className="text-neutral-500">02</span>
              <span className="text-neutral-500">03</span>
            </div>
            <button className="inline-flex items-center gap-3 text-sm font-semibold uppercase">
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </AdminPage>
  )
}
