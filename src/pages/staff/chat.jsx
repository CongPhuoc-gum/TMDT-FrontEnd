import { Image, Mail, MapPin, MoreVertical, Phone, PlusCircle, Send, Video } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label, StaffTopbar } from '@/pages/staff/staff-ui'

const chats = [
  ['Elena Voloshyna', 'Sent a photo of her living room...', '2m ago', true],
  ['Marko Sydorenko', 'Checking on delivery status for #8821', '14m ago', false],
  ['Svitlana K.', 'Can we add white peonies?', '1h ago', true],
  ['Alexei Moroz', 'The bouquet was stunning, thank you!', '3h ago', false],
]

export default function StaffChat() {
  return (
    <div>
      <StaffTopbar placeholder="Search conversations..." />

      <div className="grid min-h-[calc(100vh-5rem)] xl:grid-cols-[440px_1fr_300px]">
        <aside className="border-r border-black/20">
          <div className="flex h-24 items-center justify-between border-b border-black/20 px-8">
            <Label>Active Chats</Label>
            <Label>[ 12 ]</Label>
          </div>
          {chats.map(([name, text, time, unread], index) => (
            <button
              key={name}
              type="button"
              className={`grid w-full grid-cols-[1fr_auto] gap-4 border-b border-black/20 px-8 py-8 text-left ${
                index === 0 ? 'border-l-4 border-l-black bg-[#efeded]' : ''
              }`}
            >
              <div>
                <div className="text-xl font-semibold">{name}</div>
                <p className="mt-4 text-lg text-[#303031]">{text}</p>
                <p className="mt-5 text-sm text-[#747878]">{time}</p>
              </div>
              <span className={`mt-2 h-2.5 w-2.5 rounded-full ${unread ? 'bg-black' : 'border border-black'}`} />
            </button>
          ))}
        </aside>

        <section className="grid grid-rows-[120px_1fr_112px]">
          <header className="flex items-center justify-between border-b border-black/20 px-8">
            <div className="flex items-center gap-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4e2e2] text-xl font-semibold">EV</span>
              <div>
                <h1 className="text-2xl font-semibold">Elena Voloshyna</h1>
                <Label className="mt-2 block">Consultation: Interior Floral Styling</Label>
              </div>
            </div>
            <div className="flex gap-8 text-[#444748]">
              <Video className="h-6 w-6" />
              <Phone className="h-6 w-6" />
              <MoreVertical className="h-6 w-6" />
            </div>
          </header>

          <div className="overflow-auto px-8 py-10">
            <div className="mx-auto mb-10 w-max bg-[#efeded] px-5 py-3 text-xs uppercase">October 24, 2023</div>
            <div className="mx-auto max-w-2xl bg-[#f5f3f3] p-8 text-xl leading-9">
              Hello! I'm looking for a custom arrangement for my entryway. I've attached a photo of the space. I'd love
              something that feels architectural and modern.
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm text-[#747878]">10:14 AM</p>
            <div className="mx-auto mt-12 max-w-2xl border border-black/20 p-2">
              <img src={luxeImages.story} alt="Living room reference" className="h-[520px] w-full object-cover grayscale" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-[#747878]">10:15 AM</p>
          </div>

          <form className="border-t border-black/20 p-6" onSubmit={(event) => event.preventDefault()}>
            <div className="flex h-16 items-center gap-8 border border-black/20 px-8">
              <PlusCircle className="h-7 w-7" />
              <Image className="h-7 w-7" />
              <input
                className="h-full flex-1 bg-transparent text-xl outline-none placeholder:text-[#6f7280]"
                placeholder="Type your message here..."
              />
              <button className="flex h-12 w-16 items-center justify-center bg-black text-white" type="submit" aria-label="Send">
                <Send className="h-6 w-6" />
              </button>
            </div>
          </form>
        </section>

        <aside className="border-l border-black/20 bg-[#f5f3f3]">
          <div className="border-b border-black/20 px-8 py-12 text-center">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-black/20 bg-[#e4e2e2] luxe-serif text-5xl">
              EV
            </div>
            <h2 className="luxe-serif mt-10 text-5xl leading-none">Elena Voloshyna</h2>
            <p className="mt-5 text-xl">Platinum Member</p>
            <div className="mt-8 flex justify-center gap-2">
              <span className="bg-[#f2dfd1] px-5 py-3 text-xs uppercase">Luxury Residential</span>
              <span className="bg-[#e4e2e2] px-5 py-3 text-xs uppercase">VIP</span>
            </div>
          </div>

          <div className="space-y-8 px-8 py-10">
            <Label>Contact Details</Label>
            <div className="grid gap-6 text-lg">
              <div className="flex gap-4"><Mail className="h-5 w-5" /> e.volosh@gmail.com</div>
              <div className="flex gap-4"><Phone className="h-5 w-5" /> +380 67 123 4567</div>
              <div className="flex gap-4"><MapPin className="h-5 w-5" /> Pechersk District, Kyiv</div>
            </div>

            <Label className="block pt-4">Recent Shared Media</Label>
            <div className="grid grid-cols-2 gap-3">
              {[luxeImages.ivory, luxeImages.spring].map((image) => (
                <img key={image} src={image} alt="Shared media" className="h-24 w-full object-cover grayscale" />
              ))}
              <div className="flex h-24 items-center justify-center border border-black/20 bg-[#efeded]">+8</div>
            </div>

            <Label className="block pt-4">Purchase History</Label>
            <div className="space-y-5 text-lg">
              <div><strong>The Obsidian Orchid</strong><br /><span className="text-[#747878]">Sept 12, 2023</span></div>
              <div><strong>Midnight Peony Set</strong><br /><span className="text-[#747878]">Aug 05, 2023</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
