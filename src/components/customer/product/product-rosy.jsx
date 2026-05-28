import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { formatVnd } from '@/data/luxe-data'

const addOns = [
  {
    title: 'Glass Vase',
    price: '$15',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6UWuSuLRSLxnkpDCuYmQaB-OYOWXaC3pLleqOEuQ7xm-_zLrjTqyQMZITQjsFjBAgFR5_nhaziAFbIPDXXo0ZgdkI82CCASXECF4JKUKNLFdPgrisu_c-HtObkZoLwfUac3-QC1eviW--KXeLD6a6fi8nnK6U4BJDiIMUVyHXGQGKFoMb2XjMbHN676-S4oEDobZSHmIS--2mLvhplHbe6CNDBjqL6VtbT51KWBhlioaLGiVTBYlTTuQdzFFyfBE3WMUCrm3Frw',
  },
  {
    title: 'Ceramic White',
    price: '$35',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_kQe_oL-DBZA1p2h6rE0pbB5Yc2uCFgOfekT8YfVEaPBSyI-jN1pjOzGkOwa771zFqy9nE4BoMpZ0AsLOjMi42uysQq7k0zqwoKmWY8grsAp5BKWZGxGoIe1Fovnco2l96nphDeSGuLnTOqcPZ2pVIiNxr9Lppi-htVenCZYLCXhHTlaK-s7QkR-cEJdZVaxllH1sTlFcgM0Vs0aeWYFXtIXgnV3jOZigdA4idGAud8EFaAY5735ysFibMLqKZZ0V4m2HitX_Yw',
  },
  {
    title: 'Steel Cylinder',
    price: '$25',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBD_wxWqR6pxLNzPn39qwF7cXTDTGmaG7eeE31G2yFu-gEAP8FLRUzVlAmGkFUTgEjjcu_dsPN79fEVGbjmDhFTf9i5GwOFBgPVDaOJt-bMJ4DTV0T9sso503yqxd8TDIgdB1q3RP_hgj_rcbVAzmvo6ANA2m50U788QZzZ7oDs43fBjIDElxuio19ASDN1Un2Pi6VuZZ0_YEJhDHNaY2xQubhLLpbJ-cLxXehOZXfbnT5DLEtP5gVD4aVo5N7dL559JLyLuHHvig',
  },
]

const related = [
  {
    title: 'Rattan Grapefruit',
    price: '48$',
    to: '/c/product/p-tulip-01',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD04ehoQPg-vdF8lWm4BhUeVEVqMQa_xm59vaud5OeBo1o-46yC3mzVr6X3tHqBSC1b3pkwa0TiB-N3ZBueu9Tao2Kt3Z0GDh05YRge9mBJoK6mRcAQhewuyGkjaJsgpctAvV8Gb9QH4zU7xnWNkyQ-AJrwgjompGwEeqGZP88793lplNNTR6axZ9BkcCvWqi1TWCLye7Df-taPtRQOwFJOD5zNzr8fA_Wqh_bK6404Jf2jMNjsWM6RjmsulaX1JzVIRwrEsFC0g',
  },
  {
    title: 'Lime & Matcha',
    price: '46$',
    to: '/c/product/p-season-02',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQNe46qvAMGgvHOXil3WZ6X_7AvHAcHlchYtNLwWhelmXrBWy9neQpO61o3FUTnhlVXn908tmkGpCHOQlSrym5fHMKywpmIuZC_zmA9LKKzBX7teDZebgAd_Ua_IfivvvkBM6rJkcmPW7dpoHYc-dLHQn3RFhL8JTwa4MADMTkRKFOJjwvqDdapFSL56nNzXgGG2-s5TzvmZrWUcInmRbEvduFh_gKlOWun55wbGsTa2GYmiEZqQYe-As_SjTgiCrQxhcXxGQOw',
  },
  {
    title: 'Cedar & Lavender',
    price: '64$',
    to: '/c/product/p-orchid-01',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9YKc0EgmR1YnM1OvlE3t_8o85PLJ2ySIzfTrVUhpvfhV-uqKwGPbejhBIncngoSJBMJPbIxdArwUOJ__jFJi-lqVVJnuvgRl6bl24PGXdDesMr6gB88uyrwOGjJFTRl0L--Ck7c68vT_ox8TBnCXjQspI2lwraNgmHEEINan5HjCWDgNS8XIrBvmvSynIj79HSvXa_PFm5cDj5vwu2ANdoS3XecNh_MVHEilQomLIwaDWRHrivf3qScG52lPBw5j7ssEzFvBGg',
  },
  {
    title: 'Ocean Mist',
    price: '58$',
    to: '/c/product/p-season-01',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkELDdFjutOmqtPFMvEdLALSXUaMtVRXdZOlEaDAaUHIqUM6Buum1InM3rcsHdL67BI0HMLuz_gm_FGhafIajVmS2NEpHIHSBiwVeM2VM7o3uRzj-fqKLH76oKR4iwextxpJTZCwUwaor5JGP4djV2LkpHctIop8W5Snyl_vgvd0PGNKHVmHGZWgGdjKXk4rcExbzmirRpwu41bD4DPI7f7uPm1Lcx1Bzco27Ad9aM0eDyFpkqC2bF6Q9-3A-oF6T1xsfbHOTerA',
  },
]

export function ProductRosy({ product }) {
  return (
    <LuxePage bg="#fbf9f9" className="text-[#1b1c1c]">
      <EditorialHeader variant="product" />

      <main>
        <section className="grid border-b border-black/15 lg:grid-cols-[58%_42%]">
          <div className="min-h-[640px] overflow-hidden bg-[#e4e2e2] lg:min-h-[900px]">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="px-6 py-16 lg:px-12 xl:px-16">
            <LuxeLabel className="text-[#444748]">Fresh Flowers / {product.name}</LuxeLabel>
            <div className="mt-5 flex items-start justify-between gap-8">
              <h1 className="luxe-serif text-5xl leading-tight lg:text-6xl">{product.name}</h1>
              <p className="luxe-serif whitespace-nowrap text-4xl">— {formatVnd(product.price)}</p>
            </div>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#444748]">{product.description}</p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div className="grid h-12 w-36 grid-cols-3 border border-black/35 text-sm">
                <button type="button" aria-label="Decrease quantity">
                  <Minus className="mx-auto h-4 w-4" aria-hidden="true" />
                </button>
                <span className="flex items-center justify-center">1</span>
                <button type="button" aria-label="Increase quantity">
                  <Plus className="mx-auto h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <Link
                to="/c/checkout/shipping"
                className="luxe-label flex h-12 min-w-52 items-center justify-center gap-4 bg-black px-8 text-white"
              >
                Add to Basket <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-12 border-t border-black/15 pt-10">
              <div className="flex justify-between gap-4">
                <LuxeLabel>Excellent Combination with:</LuxeLabel>
                <span className="text-xs italic text-[#747878]">Vase not included</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {addOns.map((item) => (
                  <button key={item.title} className="group text-left" type="button">
                    <div className="aspect-square overflow-hidden bg-[#efeded]">
                      <img src={item.image} alt={item.title} className="luxe-image h-full w-full object-cover" />
                    </div>
                    <LuxeLabel className="mt-3 block text-[0.58rem]">{item.title}</LuxeLabel>
                    <p className="mt-1 text-xs text-[#747878]">{item.price}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-16">
          <h2 className="luxe-serif text-center text-5xl">You may also like...</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link key={item.title} to={item.to} className="group text-center">
                <div className="aspect-[4/5] overflow-hidden bg-[#e4e2e2]">
                  <img src={item.image} alt={item.title} className="luxe-image h-full w-full object-cover" />
                </div>
                <LuxeLabel className="mt-6 block">{item.title}</LuxeLabel>
                <p className="mt-1 text-sm text-[#444748]">price {item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <EditorialFooter variant="product" />
    </LuxePage>
  )
}
