import { Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { homeServiceValues } from '@/data/luxe-data'

const iconMap = {
  sparkles: Sparkles,
  truck: Truck,
  leaf: Leaf,
  shield: ShieldCheck,
}

export function HomeServiceStrip() {
  return (
    <section className="bg-black px-5 py-14 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-4">
        {homeServiceValues.map((item) => {
          const Icon = iconMap[item.icon] ?? Sparkles
          return (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <LuxeLabel className="mt-5 text-white">{item.label}</LuxeLabel>
            </div>
          )
        })}
      </div>
    </section>
  )
}
