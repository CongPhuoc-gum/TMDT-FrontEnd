import { Link } from 'react-router-dom'
import { ArrowRight, Menu, ShoppingBag } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'

const plans = [
  {
    number: '01. Essential Ritual',
    name: 'Classic Plan',
    copy: 'Designed for the minimalist heart. Monochromatic arrangements or single-variety stems that bring architectural clarity to any modern interior.',
    image: luxeImages.ivory,
    details: [luxeImages.story, luxeImages.custom],
    action: 'Select Classic',
  },
  {
    number: '02. Temporal Beauty',
    name: 'Seasonal Plan',
    copy: "A mirror to the outside world. This plan evolves with the earth's natural rhythm, delivering the finest blooms of the current solstice in wild, organic forms.",
    image: luxeImages.rosy,
    details: [luxeImages.dried, luxeImages.spring],
    action: 'Select Seasonal',
    flip: true,
  },
  {
    number: '03. Artisan Maximum',
    name: 'Luxe Plan',
    copy: 'The ultimate floral statement. Oversized, rare varieties sourced from exclusive growers. Designed for the collector who views flowers as transient sculptures of high art.',
    image: luxeImages.magenta,
    details: [luxeImages.autumn, luxeImages.iris],
    action: 'Select Luxe',
  },
]

function Header() {
  return (
    <header className="sticky top-0 z-30 grid h-16 grid-cols-[1fr_auto_1fr] border-b border-neutral-300 bg-[#fbfaf8] px-6">
      <nav className="hidden items-center gap-8 text-xs sm:flex">
        <Link to="/c/category/roses">Shop All</Link>
        <Link to="/c/subscription">Flower Meanings</Link>
      </nav>
      <Link to="/c" className="luxe-serif self-center text-3xl uppercase">
        Kyiv LuxeBouquets
      </Link>
      <div className="flex items-center justify-end gap-8 text-xs uppercase">
        <Link to="/c/menu">Menu</Link>
        <Menu className="h-4 w-4" aria-hidden="true" />
      </div>
    </header>
  )
}

function Plan({ plan }) {
  return (
    <section className="grid border-b border-neutral-300 lg:grid-cols-2">
      <div className={plan.flip ? 'order-2 min-h-[520px] lg:order-2' : 'min-h-[520px]'}>
        <img src={plan.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex min-h-[520px] items-center p-8 sm:p-14 lg:p-20">
        <div className="max-w-lg">
          <p className="luxe-label mb-6 text-neutral-500">{plan.number}</p>
          <h2 className="luxe-serif text-5xl">{plan.name}</h2>
          <p className="mt-6 text-neutral-700">{plan.copy}</p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {plan.details.map((image) => (
              <img key={image} src={image} alt="" className="aspect-square w-full object-cover" />
            ))}
          </div>
          <Link
            to="/c/checkout/shipping"
            className="mt-8 inline-flex h-12 items-center gap-4 bg-black px-7 text-xs font-semibold uppercase text-white"
          >
            {plan.action}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function CustomerSubscription() {
  return (
    <main className="luxe-home min-h-screen bg-[#fbfaf8] text-black">
      <Header />

      <section className="relative grid min-h-[360px] border-b border-neutral-300 lg:grid-cols-[1fr_430px]">
        <div className="flex items-center justify-center px-6 py-16 text-center">
          <div className="max-w-3xl">
            <p className="luxe-label mb-6 text-neutral-500">Curated Emotions</p>
            <h1 className="luxe-serif text-5xl leading-tight sm:text-6xl">
              Choose your floral dialogue. A ritual of recurring beauty.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-neutral-700">
              Subscriptions are more than flowers; they are milestones of time, marked by the arrival of the extraordinary. Select a plan that resonates with your space.
            </p>
          </div>
        </div>
        <aside className="hidden border-l border-neutral-300 px-12 py-16 text-center lg:block">
          <nav className="space-y-7">
            {['Home', 'Shop All', 'Flower Meanings', 'Our Story', 'Contact'].map((item) => (
              <Link key={item} to="/c" className="luxe-serif block text-4xl">
                {item}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex justify-center gap-8 text-xs text-neutral-500">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </aside>
      </section>

      {plans.map((plan) => (
        <Plan key={plan.name} plan={plan} />
      ))}

      <section className="bg-neutral-100 px-6 py-16 text-center">
        <h2 className="luxe-serif text-2xl">Unsure which dialogue to start?</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm text-neutral-600">
          Our floral concierge is available for private consultations to design a custom schedule tailored to your architecture and mood.
        </p>
        <Link to="/c/custom" className="mt-8 inline-flex h-12 items-center border border-neutral-500 px-8 text-xs uppercase">
          Request Consultation
        </Link>
      </section>

      <footer className="flex flex-col gap-6 border-t border-neutral-300 px-8 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="luxe-serif text-lg">Kyiv LuxeBouquets</div>
          <p className="mt-2 text-neutral-500">(c) 2024 Kyiv LuxeBouquets. Crafted for Elegance.</p>
        </div>
        <div className="flex gap-8">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>Facebook</span>
          <span>Shipping Policy</span>
        </div>
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      </footer>
    </main>
  )
}
