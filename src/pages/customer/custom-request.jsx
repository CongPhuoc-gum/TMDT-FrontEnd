import { Link } from 'react-router-dom'
import { Calendar, Check, ImagePlus, MessageSquare } from 'lucide-react'

import { EditorialHeader } from '@/components/luxe/editorial-header'
import { luxeImages } from '@/data/luxe-data'

const palette = [
  { name: 'Porcelain', value: '#e8e6e2' },
  { name: 'Warm alabaster', value: '#e2cdbb', active: true },
  { name: 'Noir', value: '#1f1f1f' },
  { name: 'Stone taupe', value: '#a59a93' },
  { name: 'Moss clay', value: '#8d8276' },
  { name: 'White', value: '#f7f7f4' },
]

const tonalImages = [
  luxeImages.ivory,
  luxeImages.dried,
  luxeImages.magenta,
  luxeImages.story,
  luxeImages.spring,
  luxeImages.autumn,
]

function UploadBox({ compact = false }) {
  return (
    <div
      className={
        compact
          ? 'flex aspect-square items-center justify-center border border-dashed border-neutral-400 bg-[#fbfaf8]'
          : 'flex min-h-[320px] items-center justify-center border border-dashed border-neutral-400 bg-[#fbfaf8]'
      }
    >
      <div className="text-center">
        <ImagePlus className="mx-auto h-7 w-7 text-neutral-500" strokeWidth={1.5} />
        <p className="luxe-label mt-5 text-neutral-700">
          {compact ? 'Upload Image' : 'Drag and drop imagery or click to browse'}
        </p>
        {!compact ? (
          <p className="mt-3 text-sm text-neutral-500">
            Supporting editorial JPG, PNG, and PDF files up to 20MB
          </p>
        ) : null}
      </div>
    </div>
  )
}

function EditorialRequest() {
  return (
    <main className="luxe-home min-h-screen bg-[#fbfaf8] text-black">
      <EditorialHeader variant="editorial" />

      <section className="px-8 pb-20 pt-8 sm:px-20">
        <div className="max-w-3xl">
          <h1 className="luxe-serif text-5xl leading-tight sm:text-6xl">
            Editorial Artistry
            <br />
            <em>Custom Designed for You</em>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-600">
            Crafting ephemeral beauty through bespoke floral arrangements. Use our studio canvas to define your vision, from tonal palettes to architectural particulars.
          </p>
        </div>
      </section>

      <section className="px-8 pb-28 sm:px-20">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="luxe-label text-neutral-500">Section 01</p>
            <h2 className="luxe-serif mt-2 text-3xl">Visual Inspiration</h2>
          </div>
          <p className="max-w-xs text-right text-sm text-neutral-500">
            Upload reference images or drag editorial shots from your desktop to anchor your aesthetic.
          </p>
        </div>
        <UploadBox />
      </section>

      <section className="grid gap-12 px-8 pb-28 sm:px-20 lg:grid-cols-[0.55fr_1fr] lg:items-start">
        <div>
          <p className="luxe-label text-neutral-500">Section 02</p>
          <h2 className="luxe-serif mt-2 text-3xl">The Tonal Palette</h2>
          <p className="mt-6 max-w-md text-sm leading-6 text-neutral-600">
            Select the foundational tones that will define the mood of your arrangement. Our studio works exclusively with premium seasonal flora.
          </p>
          <span className="mt-8 inline-flex bg-[#ead6c4] px-4 py-2 text-xs uppercase">Warm Alabaster x</span>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {tonalImages.map((image) => (
            <img key={image} src={image} alt="" className="aspect-square w-full object-cover grayscale" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-neutral-400 px-8 py-24 text-center sm:px-20">
        <p className="luxe-label text-neutral-500">Section 03</p>
        <h2 className="luxe-serif mt-3 text-3xl">The Particulars</h2>

        <div className="mt-14 text-left">
          <div className="flex items-end justify-between">
            <p className="luxe-label">Investment Range</p>
            <span className="luxe-serif text-2xl">$1,200</span>
          </div>
          <div className="mt-6 h-px bg-neutral-500">
            <span className="block h-2 w-2 translate-y-[-3px] bg-black" />
          </div>
          <div className="mt-8 flex justify-between text-[0.65rem] uppercase text-neutral-400">
            <span>Entry $500</span>
            <span>Scale $10,000+</span>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="luxe-label text-neutral-600">Installation Date</span>
              <span className="mt-3 flex h-12 items-center justify-between border border-neutral-400 px-4 text-sm text-neutral-500">
                mm/dd/yyyy
                <Calendar className="h-4 w-4" aria-hidden="true" />
              </span>
            </label>
            <label className="block">
              <span className="luxe-label text-neutral-600">Service Type</span>
              <span className="mt-3 flex h-12 items-center justify-between border border-neutral-400 px-4 text-sm">
                Residential Curation
                <span>v</span>
              </span>
            </label>
          </div>
        </div>

        <Link to="/c/custom/studio" className="mt-20 inline-flex h-14 min-w-72 items-center justify-center bg-black text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Submit Vision
        </Link>
        <p className="mx-auto mt-6 max-w-sm text-sm italic text-neutral-500">
          A lead designer will review your particulars and contact you within 24 editorial hours.
        </p>
      </section>

      <BespokeFooter />
      <FloatingChat />
    </main>
  )
}

function StudioRequest() {
  return (
    <main className="luxe-home min-h-screen bg-[#fbfaf8] text-black">
      <EditorialHeader variant="editorial" />

      <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
        <div className="relative order-2 min-h-[560px] overflow-hidden bg-neutral-200 lg:order-1">
          <img src={luxeImages.story} alt="" className="h-full w-full object-cover grayscale opacity-55" />
          <div className="absolute inset-0 bg-white/35" />
          <div className="absolute inset-x-12 bottom-28 text-center">
            <p className="luxe-label mb-6">Curating Your Vision</p>
            <h1 className="luxe-serif text-6xl leading-none">The Bespoke Studio</h1>
            <p className="mx-auto mt-8 max-w-sm italic">
              "Flowers are the music of the ground. From earth's lips spoken without sound."
            </p>
          </div>
        </div>

        <div className="order-1 border-l border-neutral-300 px-8 py-14 sm:px-16 lg:order-2">
          <div className="flex items-end justify-between border-b border-neutral-300 pb-5">
            <div>
              <p className="luxe-label">Step 02 / 04</p>
              <div className="mt-4 h-0.5 w-64 bg-black" />
            </div>
            <p className="luxe-label text-neutral-500">Aesthetic Definition</p>
          </div>

          <section className="mt-16">
            <h2 className="luxe-serif text-3xl">Tonal Palette</h2>
            <p className="mt-4 text-lg">Select the core emotional tones for your arrangement.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              {palette.map((color) => (
                <button
                  key={color.name}
                  className="flex h-16 w-16 items-center justify-center border border-neutral-300 p-1"
                  title={color.name}
                  type="button"
                >
                  <span className="flex h-full w-full items-center justify-center" style={{ backgroundColor: color.value }}>
                    {color.value === '#1f1f1f' ? <Check className="h-4 w-4 text-white" aria-hidden="true" /> : null}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h2 className="luxe-serif text-3xl">Visual Inspiration</h2>
            <p className="mt-4 text-lg">Upload images that capture the mood, texture, or form you desire.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <UploadBox compact />
              <img src={luxeImages.magenta} alt="" className="aspect-square w-full object-cover grayscale" />
            </div>
          </section>

          <section className="mt-20">
            <h2 className="luxe-serif text-3xl">The Narrative</h2>
            <p className="mt-4 text-lg">
              Describe the occasion, the recipient's personality, or specific floral preferences.
            </p>
            <label className="mt-8 block">
              <span className="luxe-label text-neutral-500">Editorial Notes</span>
              <textarea
                className="mt-2 min-h-48 w-full resize-none border border-neutral-400 bg-transparent p-6 text-lg outline-none"
                placeholder="Begin typing your story here..."
              />
            </label>
          </section>

          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            <button className="h-16 bg-black text-sm font-semibold uppercase tracking-[0.18em] text-white" type="button">
              Continue to Details
            </button>
            <button className="h-16 border border-neutral-500 text-sm uppercase tracking-[0.18em]" type="button">
              Save Draft
            </button>
          </div>
        </div>
      </section>

      <BespokeFooter compact />
      <FloatingChat light />
    </main>
  )
}

function BespokeFooter({ compact = false }) {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-100 px-8 py-12 sm:px-20">
      <div className={compact ? 'flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between' : 'grid gap-10 md:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]'}>
        <div>
          <h3 className="luxe-serif text-2xl uppercase">{compact ? 'Kyiv LuxeBouquets' : 'LuxeBouquets'}</h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
            Elevating the everyday through architectural floral design and seasonal curation.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="luxe-label text-neutral-500">Studio</p>
          <Link to="/c" className="block underline">About</Link>
          <Link to="/c/subscription" className="block underline">Sustainability</Link>
          <Link to="/c/custom" className="block underline">Careers</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="luxe-label text-neutral-500">Service</p>
          <Link to="/c/checkout/shipping" className="block underline">Shipping</Link>
          <Link to="/c" className="block underline">Returns</Link>
          <Link to="/c" className="block underline">Terms</Link>
        </div>
        <div className="text-sm uppercase tracking-[0.12em]">
          (c) 2024 Kyiv LuxeBouquets
          <p className="mt-2 text-[0.65rem] text-neutral-500">Crafted for Elegance</p>
        </div>
      </div>
    </footer>
  )
}

function FloatingChat({ light = false }) {
  return (
    <button
      className={
        light
          ? 'fixed bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300 bg-[#fbfaf8] shadow-xl'
          : 'fixed bottom-24 right-8 flex h-14 w-14 items-center justify-center bg-black text-white shadow-xl'
      }
      type="button"
      aria-label="Open concierge chat"
    >
      <MessageSquare className="h-6 w-6" strokeWidth={1.8} />
    </button>
  )
}

export function CustomerBespokeStudio() {
  return <StudioRequest />
}

export default function CustomerCustomRequest() {
  return <EditorialRequest />
}
