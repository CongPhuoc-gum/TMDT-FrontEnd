import { Calendar, CheckCircle2, ClipboardList, Truck } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label, StaffTopbar } from '@/pages/staff/staff-ui'

const tasks = [
  {
    title: 'Restock Peonies for Order #8821',
    text: 'Inventory low. Supplier delivery expected at 11:00 AM.',
    time: '9:00 AM',
    urgent: true,
  },
  {
    title: 'Approve Wedding Moodboard',
    text: 'Client: Elena V. Needs approval before flower procurement.',
    time: '10:30 AM',
  },
  {
    title: 'Check Hydration Station',
    text: 'Morning maintenance completed by Sarah.',
    time: 'Done',
    done: true,
  },
]

const messages = [
  ['Mila Kuznetsova', 'Can we add a handwritten note to the Midnight Rose box for tomorrow...', '14m ago'],
  ['Andriy Melnyk', 'Confirming delivery at the Opera House at 19:00. Please text the...', '1h ago'],
  ['Sofia G.', 'The birthday bouquet was absolutely stunning! Thank you so much!', '3h ago'],
]

export default function StaffDashboard() {
  return (
    <div>
      <StaffTopbar />

      <div className="px-6 py-12 lg:px-16">
        <h1 className="luxe-serif text-6xl leading-none lg:text-7xl">Studio Operations</h1>
        <p className="mt-4 text-xl text-[#444748]">Monday, 24 May 2024 - Kyiv Studio</p>

        <section className="mt-14 grid gap-8 xl:grid-cols-[1.4fr_0.65fr_0.65fr]">
          <div className="relative overflow-hidden bg-black p-12 text-white">
            <Label className="text-white/80">Active Deliveries</Label>
            <div className="luxe-serif mt-14 text-7xl">12</div>
            <p className="mt-10 max-w-xs text-xl leading-8 text-white/80">
              8 out for delivery, 4 being prepared by floral designers.
            </p>
            <Truck className="absolute bottom-0 right-0 h-44 w-44 stroke-[1] text-white/10" aria-hidden="true" />
            <button className="luxe-label absolute bottom-10 right-10 flex items-center gap-3" type="button">
              Details →
            </button>
          </div>

          <div className="border border-black/20 bg-[#efeded] p-10">
            <ClipboardList className="h-9 w-9 stroke-[1.7]" aria-hidden="true" />
            <Label className="mt-8 block">Today's Orders</Label>
            <div className="luxe-serif mt-24 text-5xl">24</div>
            <p className="mt-3 text-[#444748]">+15% from yesterday</p>
          </div>

          <div className="border border-black/20 bg-[#f2dfd1] p-10">
            <Calendar className="h-9 w-9 stroke-[1.7]" aria-hidden="true" />
            <Label className="mt-8 block">Consultations</Label>
            <div className="luxe-serif mt-24 text-5xl">06</div>
            <p className="mt-3 text-[#6f6257]">3 booked for afternoon.</p>
          </div>
        </section>

        <section className="mt-28 grid gap-14 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-end justify-between border-b border-black/20 pb-6">
              <h2 className="luxe-serif text-5xl">Urgent Tasks</h2>
              <Label className="text-red-700">[ 04 Critical ]</Label>
            </div>

            <div className="mt-10 grid gap-5">
              {tasks.map((task) => (
                <div key={task.title} className="grid grid-cols-[44px_1fr_90px] gap-5 border border-black/20 bg-[#fbf9f9] p-7">
                  <div className={task.urgent ? 'text-red-700' : ''}>
                    {task.done ? <CheckCircle2 className="h-6 w-6" /> : task.urgent ? '!' : <ClipboardList className="h-6 w-6" />}
                  </div>
                  <div className={task.done ? 'text-[#8a8a8a] line-through' : ''}>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    <p className="mt-2 text-lg leading-7 text-[#444748]">{task.text}</p>
                  </div>
                  <span className="bg-[#efeded] px-4 py-3 text-center text-sm">{task.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between border-b border-black/20 pb-6">
              <h2 className="luxe-serif text-5xl">Messages</h2>
              <Label>View All →</Label>
            </div>
            <div className="mt-10 border border-black/20 p-1">
              {messages.map(([name, text, time]) => (
                <div key={name} className="border-b border-black/10 bg-[#fbf9f9] p-7 last:border-b-0">
                  <div className="flex justify-between">
                    <Label>{name}</Label>
                    <span className="text-xs uppercase text-[#444748]">{time}</span>
                  </div>
                  <p className="mt-4 text-lg italic leading-7 text-[#444748]">"{text}"</p>
                </div>
              ))}
            </div>

            <div className="mt-14 overflow-hidden bg-black">
              <img src={luxeImages.magenta} alt="Kyiv Dusk signature collection" className="h-72 w-full object-cover opacity-55 grayscale" />
              <div className="p-8 text-white">
                <Label className="text-white">Signature Collection</Label>
                <h3 className="luxe-serif mt-3 text-4xl">Kyiv Dusk</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
