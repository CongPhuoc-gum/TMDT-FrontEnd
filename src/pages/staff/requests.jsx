import { Bell, Image, Printer, Search, Share2, UserCircle } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label } from '@/components/staff/staff-ui'

const queue = [
  ['Eleanor Vance', 'New Request', '2h ago', luxeImages.dried],
  ['Julian Hoffman', 'Quote Sent', '1d ago', luxeImages.ivory],
  ['TechNexus Global', 'In Production', '3d ago', null],
]

export default function StaffRequests() {
  return (
    <div className="grid min-h-screen xl:grid-cols-[420px_1fr_420px]">
      <section className="border-r border-black/20">
        <header className="flex h-20 items-center border-b border-black/20 px-10">
          <h1 className="luxe-serif text-3xl">Bespoke Studio</h1>
        </header>

        <div className="border-b border-black/20 p-8">
          <div className="flex h-12 items-center gap-4 bg-[#f5f3f3] px-5">
            <Search className="h-5 w-5" />
            <input className="h-full flex-1 bg-transparent outline-none" placeholder="Search queue..." />
          </div>
        </div>

        {queue.map(([name, status, time, image], index) => (
          <button
            key={name}
            className={`grid w-full grid-cols-[72px_1fr_auto] items-center gap-5 border-b border-black/20 p-6 text-left ${
              index === 0 ? 'border-l-4 border-l-black bg-[#efeded]' : ''
            }`}
            type="button"
          >
            {image ? (
              <img src={image} alt={name} className="h-14 w-14 object-cover grayscale" />
            ) : (
              <span className="flex h-14 w-14 items-center justify-center bg-[#dadada]">
                <Image className="h-6 w-6 text-[#747878]" />
              </span>
            )}
            <div>
              <div className="text-xl font-semibold">{name}</div>
              <Label className="mt-3 block">{status}</Label>
            </div>
            <span className="text-sm text-[#747878]">{time}</span>
          </button>
        ))}
      </section>

      <section className="px-10 py-14">
        <div className="flex justify-end gap-4">
          {[Printer, Share2].map((Icon) => (
            <button key={Icon.name} className="flex h-16 w-16 items-center justify-center border border-black/20" type="button">
              <Icon className="h-6 w-6" />
            </button>
          ))}
        </div>

        <h2 className="luxe-serif mt-2 max-w-lg text-6xl leading-none">"Velvet Midnight" Concept</h2>
        <Label className="mt-5 block text-xl tracking-[0.2em]">Inquiry ID: #774-293</Label>

        <img src={luxeImages.dried} alt="Velvet Midnight concept" className="mt-14 h-72 w-full object-cover grayscale" />

        <div className="mt-12 grid gap-10 border-y border-black/20 py-10 md:grid-cols-3">
          <div>
            <Label>Budget Target</Label>
            <p className="luxe-serif mt-6 text-3xl">$1,200 - $1,500</p>
          </div>
          <div>
            <Label>Required By</Label>
            <p className="mt-6 text-2xl">October 24, 2024</p>
          </div>
          <div>
            <Label>Color Palette</Label>
            <div className="mt-7 flex gap-3">
              {['#111', '#4d4740', '#878278', '#d5cbbd'].map((color) => (
                <span key={color} className="h-8 w-8 rounded-full border border-black/20" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Label>Customer Requirements</Label>
          <blockquote className="mt-8 border border-black/20 bg-[#f5f3f3] p-10 luxe-serif text-2xl italic leading-10 text-[#303031]">
            "Seeking a moody, sculptural centerpiece for a gallery opening. Focus on dark textures - black calla lilies,
            deep burgundy ranunculus, and perhaps some iridescent accents."
          </blockquote>
        </div>
      </section>

      <aside className="border-l border-black/20 bg-[#f5f3f3]">
        <header className="flex h-20 items-center justify-end gap-8 border-b border-black/20 px-10">
          <button className="relative" type="button" aria-label="Notifications">
            <Bell className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-700" />
          </button>
          <div className="text-right">
            <div className="text-lg uppercase">Designer_04</div>
            <div className="text-xs uppercase text-[#747878]">Lead Florist</div>
          </div>
          <UserCircle className="h-8 w-8" />
        </header>

        <div className="p-10">
          <h3 className="luxe-label text-xl tracking-[0.18em]">Designer Workspace</h3>
          <div className="mt-8 border-t border-black/20 pt-10">
            <Label>Proposed Price ($)</Label>
            <input className="mt-5 h-24 w-full border border-black/20 bg-transparent px-6 luxe-serif text-3xl outline-none" placeholder="0.00" />
          </div>

          <div className="mt-10">
            <Label>Design Response & Notes</Label>
            <textarea
              className="mt-5 h-64 w-full resize-none border border-black/20 bg-transparent p-6 text-xl leading-8 outline-none"
              placeholder="Detail the floral varieties, structural approach, and any substitutions..."
            />
          </div>

          <div className="mt-10">
            <Label>Workflow Status</Label>
            <button className="luxe-label mt-5 flex h-20 w-full items-center justify-between border border-black/20 px-6" type="button">
              Pending Review <span>⌄</span>
            </button>
          </div>

          <button className="luxe-label mt-14 h-28 w-full bg-black px-8 text-xl leading-8 text-white" type="button">
            Send Quote / Update Request
          </button>
          <button className="luxe-label mt-8 w-full text-center text-xl tracking-[0.18em]" type="button">
            Archive Request
          </button>
        </div>
      </aside>
    </div>
  )
}
