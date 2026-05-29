import { EditorialHeader } from '@/components/luxe/editorial-header'
import { luxeImages } from '@/data/luxe-data'

export default function CustomerVisualMenu() {
  return (
    <main className="luxe-home relative min-h-screen overflow-hidden bg-[#fbfaf8] text-black">
      <div className="absolute inset-x-0 top-0 h-[52vh] overflow-hidden">
        <img src={luxeImages.freshHero} alt="" className="h-full w-full object-cover opacity-20 blur-[1px]" />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10">
        <EditorialHeader variant="editorial" />
      </div>

      <section className="relative z-10 flex min-h-[58vh] items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="luxe-serif text-5xl leading-tight sm:text-7xl">
            Elevated Floral Design for
            <br className="hidden sm:block" />
            Modern Living.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-700">
            Experience the intersection of haute couture and nature. Based in Kyiv, we craft emotional botanical experiences for discerning tastes worldwide.
          </p>
          <div className="mx-auto mt-12 h-px w-24 bg-neutral-500" />
        </div>
      </section>
    </main>
  )
}
