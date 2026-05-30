import { Link } from 'react-router-dom'
import { Camera, Globe2 } from 'lucide-react'

import { LuxeLabel } from '@/components/luxe/luxe-label'
import { homeFooterGroups } from '@/data/luxe-data'

const compactLinks = [
  { label: 'Privacy Policy', to: '/c/privacy-policy' },
  { label: 'Terms of Service', to: '/c/terms-of-service' },
  { label: 'Shipping & Returns', to: '/c/shipping-returns' },
  { label: 'Sustainability', to: '/c/sustainability' },
]

export function EditorialFooter({ variant = 'home' }) {
  if (variant === 'compact') {
    return (
      <footer className="border-t border-black/15 bg-[#efeded] px-6 py-20 lg:px-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <LuxeLabel>LuxeBouquets</LuxeLabel>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#444748]">
              Kyiv&apos;s premier floral studio. We believe in the power of botanical poetry to transform spaces and moods.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-[#444748] md:col-span-2">
            {compactLinks.map((item) => (
              <Link key={item.label} className="underline" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="self-end text-xs text-[#747878]">© 2024 Kyiv LuxeBouquets Floral Studio.</p>
        </div>
      </footer>
    )
  }

  if (variant === 'editorial') {
    return (
      <footer className="border-t border-black/15 bg-[#f9f8f5] px-5 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <h3 className="luxe-serif text-3xl">Kyiv LuxeBouquets</h3>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#444748]">
              Crafted for elegance. Every bloom tells a story of intentional design and poetic beauty.
            </p>
          </div>
          <div>
            <LuxeLabel>Explore</LuxeLabel>
            <div className="mt-6 grid gap-3 text-base">
              <Link to="/c">Instagram</Link>
              <Link to="/c">Pinterest</Link>
              <Link to="/c">Facebook</Link>
            </div>
          </div>
          <div>
            <LuxeLabel>Policies</LuxeLabel>
            <div className="mt-6 grid gap-3 text-base">
              <Link to="/c/shipping-returns">Shipping Policy</Link>
              <Link to="/c/terms-of-service">Terms of Service</Link>
              <Link to="/c/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <p className="text-base">© 2024 Kyiv LuxeBouquets. Crafted for Elegance.</p>
        </div>
      </footer>
    )
  }

  if (variant === 'product') {
    return (
      <footer className="border-t border-black/15 bg-[#efeded] px-6 py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <LuxeLabel>LuxeBouquets</LuxeLabel>
            <p className="mt-6 max-w-sm text-base leading-8 text-[#444748]">
              Crafting editorial floral experiences from the heart of Kyiv since 2014.
            </p>
          </div>
          <div className="grid gap-4 text-base">
            {compactLinks.slice(0, 2).map((item) => (
              <Link key={item.label} className="underline" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-4 text-base">
            {compactLinks.slice(2).map((item) => (
              <Link key={item.label} className="underline" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#747878]">© 2024 Kyiv LuxeBouquets. All rights reserved.</p>
        </div>
        <p className="mt-16 border-t border-black/10 pt-10 text-center text-sm text-[#747878]">
          © 2024 Kyiv LuxeBouquets Floral Studio. Crafted for Elegance.
        </p>
      </footer>
    )
  }

  return (
    <footer className="border-t border-black bg-[#f9f8f5] px-5 py-20 sm:px-10 lg:px-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <div className="luxe-serif text-2xl">Kyiv LuxeBouquets</div>
          <p className="mt-6 max-w-xs text-sm leading-7 text-[#5d5f5f]">
            Elevating moments through the art of floral design. Based in the heart of Kyiv.
          </p>
        </div>

        {homeFooterGroups.map((group) => (
          <div key={group.title}>
            <LuxeLabel>{group.title}</LuxeLabel>
            <ul className="mt-8 space-y-4 text-sm text-[#5d5f5f]">
              {group.links.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-black" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <LuxeLabel>Connect</LuxeLabel>
          <div className="mt-8 flex gap-3">
            {[Globe2, Camera].map((Icon, index) => (
              <Link
                key={Icon.displayName ?? index}
                to={index === 0 ? '/c' : '/c/contact'}
                className="flex h-10 w-10 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white"
                aria-label={index === 0 ? 'Website' : 'Instagram'}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="luxe-label mt-8 text-[#747878]">© 2024 Kyiv LuxeBouquets</p>
        </div>
      </div>
    </footer>
  )
}

export function CategoryDetailFooter() {
  const columns = [
    ['Contact Us', ['15/4 Khreshchatyk Street, Kyiv', '+380980099777', 'Kyiv.Florist.Studio@gmail.com']],
    ['Shop', ['All Products', 'Fresh Flowers', 'Dried Flowers', 'Live Plants', 'Aroma Candles']],
    ['Service', ['Flower Subscription', 'Wedding & Event Decor']],
    ['About Us', ['Our story', 'Blog', 'Shipping & Returns', 'Terms & Service', 'Privacy Policy']],
  ]

  return (
    <footer className="bg-[#fbf9f9] px-8 py-20 lg:px-16">
      <div className="grid gap-12 border-b border-black/15 pb-16 md:grid-cols-4">
        {columns.map(([title, links]) => (
          <div key={title}>
            <h3 className="luxe-serif text-3xl">{title}</h3>
            <div className="mt-6 grid gap-2 text-xs uppercase leading-5 text-[#444748]">
              {links.map((item) => (
                <Link key={item} to="/c">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-[#747878]">© 2024 Kyiv LuxeBouquets. All rights reserved.</p>
    </footer>
  )
}
