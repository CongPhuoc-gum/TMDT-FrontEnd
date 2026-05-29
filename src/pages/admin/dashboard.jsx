import { ArrowRight, Users } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { AdminMetric, AdminPage, AdminTopbar } from '@/components/admin/admin-ui'

const favorites = [
  { name: 'Peony Paradise', sold: '428 Units Sold', image: luxeImages.ivory, tag: '#1 BEST SELLER' },
  { name: 'Midnight Tulips', sold: '312 Units Sold', image: luxeImages.magenta },
  { name: 'Orchid Silence', sold: '295 Units Sold', image: luxeImages.story },
]

export default function AdminDashboard() {
  return (
    <>
      <AdminTopbar placeholder="Search analytics..." role="ADMIN USER SENIOR ANALYST" />
      <AdminPage>
        <div className="grid gap-8 lg:grid-cols-3">
          <AdminMetric label="Total Revenue" value="$124.5k" note="Growth compared to Q3">
            <div className="mt-4 text-sm font-semibold">~12%</div>
          </AdminMetric>
          <AdminMetric label="Retention" value="70%" note="Loyalty segment">
            <div className="absolute" />
            <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black">
              <Users className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </div>
          </AdminMetric>
          <AdminMetric label="Active Orders" value="84">
            <span className="mt-4 inline-flex bg-black px-4 py-2 text-sm font-semibold text-white">LIVE</span>
            <div className="mt-6 flex -space-x-2">
              {['#ddd', '#999', '#111'].map((color) => (
                <span key={color} className="h-8 w-8 rounded-full border border-[#f6f6f4]" style={{ backgroundColor: color }} />
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-xs">+81</span>
            </div>
          </AdminMetric>
        </div>

        <section className="mt-12 border border-neutral-300 bg-[#f7f7f5] p-8 lg:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="luxe-serif text-4xl">Revenue Growth</h2>
              <p className="text-neutral-600">Year-to-date performance visualization</p>
            </div>
            <div className="hidden gap-6 text-sm uppercase sm:flex">
              <span className="border-b border-black pb-1">Monthly</span>
              <span className="text-neutral-500">Quarterly</span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-neutral-200 bg-[#fafafa]">
            <svg viewBox="0 0 900 310" className="h-[330px] w-full" role="img" aria-label="Revenue growth line chart">
              <defs>
                <pattern id="admin-chart-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#dedede" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="900" height="310" fill="url(#admin-chart-grid)" />
              <path
                d="M 0 235 C 120 215 190 190 265 178 C 350 164 420 128 508 141 C 592 153 630 205 704 170 C 772 138 790 70 880 90 C 900 94 910 105 920 116"
                fill="none"
                stroke="#050505"
                strokeWidth="3"
              />
              {[178, 128, 170, 90].map((y, index) => (
                <circle key={y} cx={[265, 508, 704, 880][index]} cy={y} r="4" fill="#050505" />
              ))}
              {['0k', '50k', '100k', '150k'].map((label, index) => (
                <text key={label} x="4" y={292 - index * 70} fill="#777" fontSize="12">
                  {label}
                </text>
              ))}
            </svg>
          </div>
          <div className="mt-6 grid grid-cols-6 text-center text-neutral-600">
            {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="border-l-4 border-black pl-8">
            <h2 className="luxe-serif text-4xl">Signature Favorites</h2>
            <p className="text-neutral-600">Top performing floral arrangements this season</p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {favorites.map((item) => (
              <article key={item.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                  <img src={item.image} alt="" className="h-full w-full object-cover grayscale" />
                  {item.tag ? (
                    <span className="absolute left-5 top-5 border border-black bg-white px-5 py-2 text-sm uppercase">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm">{item.sold}</p>
                  </div>
                  <ArrowRight className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </AdminPage>
    </>
  )
}
