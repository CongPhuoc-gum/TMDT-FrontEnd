import { Image, Mail, MapPin, MoreVertical, Phone, PlusCircle, Send, Video } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { Label, StaffTopbar } from '@/components/staff/staff-ui'

const chats = [
  ['Elena Voloshyna', 'Sent a photo of her living room...', '2m ago', true],
  ['Marko Sydorenko', 'Checking on delivery status for #8821', '14m ago', false],
  ['Svitlana K.', 'Can we add white peonies?', '1h ago', true],
  ['Alexei Moroz', 'The bouquet was stunning, thank you!', '3h ago', false],
]

export default function StaffChat() {
  return (
    <div className="overflow-hidden">
      <StaffTopbar placeholder="Search conversations..." />

      <div className="grid min-h-[calc(100svh-5rem)] grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[360px_minmax(0,1fr)_320px]">
        <aside className="min-w-0 border-b border-black/20 lg:border-b-0 lg:border-r">
          <div className="flex h-20 items-center justify-between border-b border-black/20 px-4 sm:px-6">
            <Label>Active Chats</Label>
            <Label>[ 12 ]</Label>
          </div>
          <div className="max-h-[calc(100svh-10rem)] overflow-y-auto">
            {chats.map(([name, text, time, unread], index) => (
              <button
                key={name}
                type="button"
                className={`grid w-full min-w-0 grid-cols-[1fr_auto] gap-4 border-b border-black/20 px-4 py-6 text-left sm:px-6 ${
                  index === 0 ? 'border-l-4 border-l-black bg-[#efeded]' : ''
                }`}
              >
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold sm:text-xl">{name}</div>
                  <p className="mt-2 truncate text-base text-[#303031] sm:text-lg">{text}</p>
                  <p className="mt-4 text-sm text-[#747878]">{time}</p>
                </div>
                <span className={`mt-2 h-2.5 w-2.5 rounded-full ${unread ? 'bg-black' : 'border border-black'}`} />
              </button>
            ))}
          </div>
        </aside>

        <section className="grid min-w-0 min-h-0 grid-rows-[auto_minmax(0,1fr)_auto]">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-black/20 px-4 py-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e4e2e2] text-lg font-semibold">EV</span>
              <div className="min-w-0">
                <h1 className="truncate text-xl font-semibold sm:text-2xl">Elena Voloshyna</h1>
                <Label className="mt-1 block truncate">Consultation: Interior Floral Styling</Label>
              </div>
            </div>
            <div className="flex shrink-0 gap-2 text-[#444748] sm:gap-3">
              <button type="button" className="flex h-10 w-10 items-center justify-center" aria-label="Start video call">
                <Video className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center" aria-label="Start voice call">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center" aria-label="More options">
                <MoreVertical className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </header>

          <div className="min-h-0 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 w-max bg-[#efeded] px-4 py-2 text-xs uppercase sm:px-5 sm:py-3">October 24, 2023</div>
            <div className="mx-auto max-w-[42rem] bg-[#f5f3f3] p-5 text-lg leading-8 sm:p-8 sm:text-xl sm:leading-9">
              Hello! I'm looking for a custom arrangement for my entryway. I've attached a photo of the space. I'd love
              something that feels architectural and modern.
            </div>
            <p className="mx-auto mt-6 max-w-[42rem] text-sm text-[#747878]">10:14 AM</p>
            <div className="mx-auto mt-10 max-w-[42rem] border border-black/20 p-2">
              <img src={luxeImages.story} alt="Living room reference" className="h-auto max-h-[420px] w-full object-cover grayscale" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-[#747878]">10:15 AM</p>
          </div>

          <form className="border-t border-black/20 p-4 sm:p-6" onSubmit={(event) => event.preventDefault()}>
            <div className="flex h-14 items-center gap-3 border border-black/20 bg-white/50 px-4 sm:h-16 sm:gap-5 sm:px-6">
              <button type="button" className="flex h-9 w-9 shrink-0 items-center justify-center" aria-label="Add attachment">
                <PlusCircle className="h-6 w-6" />
              </button>
              <button type="button" className="flex h-9 w-9 shrink-0 items-center justify-center" aria-label="Add image">
                <Image className="h-6 w-6" />
              </button>
              <input
                className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#6f7280] sm:text-xl"
                placeholder="Type your message here..."
              />
              <button className="flex h-10 w-12 shrink-0 items-center justify-center bg-black text-white sm:h-12 sm:w-16" type="submit" aria-label="Send">
                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </form>
        </section>

        <aside className="hidden min-w-0 border-l border-black/20 bg-[#f5f3f3] 2xl:block">
          <div className="h-full overflow-y-auto">
            <div className="border-b border-black/20 px-6 py-10 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-black/20 bg-[#e4e2e2] luxe-serif text-4xl">
                EV
              </div>
              <h2 className="luxe-serif mt-8 text-4xl leading-none">Elena Voloshyna</h2>
              <p className="mt-4 text-lg">Platinum Member</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="bg-[#f2dfd1] px-4 py-2 text-xs uppercase">Luxury Residential</span>
                <span className="bg-[#e4e2e2] px-4 py-2 text-xs uppercase">VIP</span>
              </div>
            </div>

            <div className="space-y-8 px-6 py-8">
              <Label>Contact Details</Label>
              <div className="grid gap-5 text-base">
                <div className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 shrink-0" /> e.volosh@gmail.com</div>
                <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 shrink-0" /> +380 67 123 4567</div>
                <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0" /> Pechersk District, Kyiv</div>
              </div>

              <Label className="block pt-2">Recent Shared Media</Label>
              <div className="grid grid-cols-2 gap-3">
                {[luxeImages.ivory, luxeImages.spring].map((image) => (
                  <img key={image} src={image} alt="Shared media" className="h-24 w-full object-cover grayscale" />
                ))}
                <div className="flex h-24 items-center justify-center border border-black/20 bg-[#efeded]">+8</div>
              </div>

              <Label className="block pt-2">Purchase History</Label>
              <div className="space-y-4 text-base">
                <div><strong>The Obsidian Orchid</strong><br /><span className="text-[#747878]">Sept 12, 2023</span></div>
                <div><strong>Midnight Peony Set</strong><br /><span className="text-[#747878]">Aug 05, 2023</span></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
