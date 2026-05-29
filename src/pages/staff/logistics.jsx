import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  User,
} from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label, StaffTopbar, StatusPill } from '@/components/staff/staff-ui'

const schedule = [
  ['09:00 AM', 'Peony Elegance', '#ORD-7721', 'Elena V. | Pechersk District', 'Assembling', 'dark', luxeImages.ivory],
  ['11:30 AM', 'Midnight Noir', '#ORD-7728', 'InterContinental Lobby | Downtown', 'Awaiting Prep', 'light', luxeImages.dried],
  ['02:00 PM', 'Arctic Bloom', '#ORD-7734', 'Private Residence | Obolon', 'Out for Delivery', 'light', luxeImages.spring],
]

const prep = [
  ['Urgent', '#7721', 'Sands of Gobi', 'Dried Palms, Orchids, Custom Ceramic Base', '80% Assembled', luxeImages.dried],
  ['Standard', '#7725', 'Summer Ember', 'Dutch Tulips, Eucalyptus', 'Pending Flower Prep', luxeImages.spring],
  ['Custom', '#7730', 'Velvet Night', 'Midnight Calla Lilies, Black Tissue', 'Awaiting Stock', luxeImages.story],
]

export default function StaffLogistics() {
  return (
    <div>
      <StaffTopbar placeholder="Search orders, routes, or drivers..." />

      <div className="px-6 py-12 lg:px-16">
        <section className="flex flex-col justify-between gap-8 xl:flex-row xl:items-start">
          <div>
            <Label>Operations Center</Label>
            <h1 className="luxe-serif mt-6 text-6xl leading-none lg:text-7xl">Logistics & Delivery</h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[#444748]">
              Coordinating real-time floral deliveries and studio preparation across Kyiv. Efficient routes, exquisite
              execution.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <Label>Out for Delivery</Label>
              <div className="luxe-serif mt-4 text-5xl">12</div>
            </div>
            <div className="h-20 w-px bg-black/20" />
            <div className="text-center text-red-700">
              <Label>Urgent Prep</Label>
              <div className="luxe-serif mt-4 text-5xl">04</div>
            </div>
          </div>
        </section>

        <section className="mt-28 grid gap-12 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="border border-black/30 p-10">
              <div className="flex items-center justify-between">
                <h2 className="luxe-serif text-5xl">Daily Delivery Schedule</h2>
                <div className="flex gap-3">
                  {[ChevronLeft, ChevronRight].map((Icon) => (
                    <button key={Icon.name} className="flex h-14 w-14 items-center justify-center border border-black/20" type="button">
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-9">
                {schedule.map(([time, name, id, recipient, status, tone, image]) => (
                  <div key={id} className="grid grid-cols-[110px_1fr] gap-8">
                    <div className="text-sm tracking-[0.16em] text-[#747878]">{time}</div>
                    <div className="grid grid-cols-[80px_1fr_auto] gap-5 border-b border-black/15 pb-8">
                      <img src={image} alt={name} className="h-20 w-20 object-cover grayscale" />
                      <div>
                        <h3 className="text-xl font-semibold">
                          {name} · {id}
                        </h3>
                        <p className="mt-2 text-lg leading-7 text-[#303031]">Recipient: {recipient}</p>
                        <div className="mt-5 flex flex-wrap gap-8 text-[#747878]">
                          <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> Due in 45m</span>
                          <span className="flex items-center gap-2"><User className="h-4 w-4" /> Florist: Anna K.</span>
                        </div>
                      </div>
                      <StatusPill tone={tone}>{status}</StatusPill>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-black/20 p-8">
                <Label>Route Optimizer</Label>
                <div className="mt-6 h-72 bg-[#dadada] p-8">
                  <div className="relative h-full border border-white/25 bg-[#747878]/40">
                    <span className="absolute left-16 top-20 h-4 w-4 rounded-full bg-black" />
                    <span className="absolute bottom-14 right-16 h-4 w-4 rounded-full bg-black" />
                    <span className="absolute left-1/2 top-1/2 text-white"><MapPin className="h-5 w-5" /></span>
                    <div className="absolute left-20 top-24 h-px w-48 origin-left rotate-35 border-t border-dashed border-black" />
                  </div>
                </div>
                <div className="mt-6 flex justify-between text-lg">
                  <span>3 Active Drivers</span>
                  <button className="luxe-label border-b border-black pb-1" type="button">Manage Fleet →</button>
                </div>
              </div>

              <div className="border border-black/20 p-8">
                <Label>Urgent Notifications</Label>
                <div className="mt-8 space-y-8">
                  <div className="flex gap-5">
                    <AlertTriangle className="h-6 w-6 text-red-700" />
                    <p><strong className="text-red-700">Traffic Alert: Downtown</strong><br />Route B delayed by 25 mins due to roadworks on Khreshchatyk St.</p>
                  </div>
                  <div className="flex gap-5">
                    <CheckCircle2 className="h-6 w-6" />
                    <p><strong>Inventory Replenished</strong><br />White Ranunculus shipment arrived and verified.</p>
                  </div>
                </div>
                <button className="luxe-label mt-16 h-16 w-full bg-[#e4e2e2]" type="button">Clear All</button>
              </div>
            </div>
          </div>

          <aside className="border-l border-black/15 pl-8">
            <h2 className="luxe-serif text-5xl">Studio Prep List</h2>
            <div className="mt-10 grid gap-8">
              {prep.map(([priority, id, title, needs, progress, image], index) => (
                <div key={id}>
                  <div className="flex justify-between">
                    <Label className={index === 0 ? 'text-red-700' : ''}>{priority}</Label>
                    <span className="text-sm text-[#747878]">{id}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-[96px_1fr] gap-5">
                    <img src={image} alt={title} className="h-24 w-24 object-cover grayscale" />
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-2 leading-7">Requires: {needs}</p>
                      <div className="mt-4 h-1 bg-[#e4e2e2]">
                        <div className={`h-1 bg-black ${index === 0 ? 'w-4/5' : 'w-1/6'}`} />
                      </div>
                      <p className="mt-2 text-xs italic text-[#747878]">{progress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-black p-8 text-white">
              <p className="text-xl leading-8">Shift ends in 2 hours. 8 orders remaining for dispatch.</p>
              <button className="luxe-label mt-8 h-16 w-full border border-white text-white" type="button">
                Update All Statuses
              </button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
