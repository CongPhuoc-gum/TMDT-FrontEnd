import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxeLabel } from '@/components/luxe/luxe-label'
import { LuxePage } from '@/components/luxe/luxe-page'
import { luxeImages } from '@/data/luxe-data'

const pages = {
  about: {
    eyebrow: 'Our Story',
    title: 'Flowers arranged with editorial restraint and daily care.',
    summary:
      'Kyiv LuxeBouquets is a floral studio built around expressive stems, calm service, and arrangements that feel personal rather than generic.',
    image: luxeImages.story,
    sections: [
      {
        title: 'Studio point of view',
        body: 'We work with seasonal flowers, sculptural silhouettes, and a quieter palette so each bouquet has a clear mood. Every order starts with the moment it is meant to carry.',
      },
      {
        title: 'How we work',
        body: 'Our team edits stem by stem, confirms delivery details, and prepares care guidance so the arrangement arrives clean, hydrated, and ready to place.',
      },
      {
        title: 'What we value',
        body: 'Precision, freshness, and emotional clarity shape the studio. The result is a floral gift that feels considered from checkout to handoff.',
      },
    ],
    highlights: ['Seasonal sourcing', 'Same-day availability', 'Bespoke requests'],
  },
  'floral-care': {
    eyebrow: 'Floral Care',
    title: 'Keep every arrangement fresh, balanced, and expressive.',
    summary:
      'A few small habits can extend the life of your flowers and keep the original studio shape intact.',
    image: luxeImages.ivory,
    sections: [
      {
        title: 'Refresh the water',
        body: 'Replace vase water every one to two days. Trim each stem at an angle before placing flowers back into the vase.',
      },
      {
        title: 'Control the environment',
        body: 'Keep arrangements away from direct sun, heat, fruit bowls, and strong airflow. Cooler rooms help blooms open slowly.',
      },
      {
        title: 'Edit as it ages',
        body: 'Remove fading petals and leaves below the water line. This keeps the remaining flowers clean and lets the composition breathe.',
      },
    ],
    highlights: ['Trim stems', 'Change water', 'Avoid heat'],
  },
  'shipping-returns': {
    eyebrow: 'Shipping & Returns',
    title: 'Clear delivery windows, protected packaging, and careful handoff.',
    summary:
      'We prepare each order for local delivery with hydration support and confirmation steps before dispatch.',
    image: luxeImages.custom,
    sections: [
      {
        title: 'Delivery windows',
        body: 'Same-day delivery depends on stem availability and open courier capacity. Scheduled orders receive priority routing.',
      },
      {
        title: 'Protected handoff',
        body: 'Bouquets are packed upright where possible, wrapped for transit, and handed over with care notes for the recipient.',
      },
      {
        title: 'Returns and issues',
        body: 'Because flowers are perishable, returns are handled case by case. Contact us with photos within 24 hours if an order arrives damaged.',
      },
    ],
    highlights: ['Same-day options', 'Courier tracking', '24h issue window'],
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Talk to the studio about orders, custom builds, or delivery timing.',
    summary:
      'Send a note for custom arrangements, event florals, subscription changes, or support with an existing order.',
    image: luxeImages.magenta,
    sections: [
      {
        title: 'Studio',
        body: '15/4 Khreshchatyk Street, Kyiv. Open daily from 09:00 to 20:00 for pickup coordination and consultations.',
      },
      {
        title: 'Order support',
        body: 'For delivery updates, include your order number, recipient name, and preferred contact channel.',
      },
      {
        title: 'Custom requests',
        body: 'For bespoke work, share occasion, budget, palette, delivery date, and any reference images you already have.',
      },
    ],
    highlights: ['+380980099777', 'Kyiv.Florist.Studio@gmail.com', 'Daily 09:00-20:00'],
    contact: true,
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Answers for ordering, gifting, delivery, and custom arrangements.',
    summary:
      'Common questions from customers before checkout or before sending a personalized floral gift.',
    image: luxeImages.spring,
    sections: [
      {
        title: 'Can I order for today?',
        body: 'Yes, when the selected stems and courier windows are available. Checkout will show the nearest delivery option.',
      },
      {
        title: 'Can I request a custom bouquet?',
        body: 'Yes. Use the custom request page to define palette, occasion, price range, and delivery timing.',
      },
      {
        title: 'Can I add a message?',
        body: 'Yes. Add the recipient note during checkout. Our team places it with the arrangement before dispatch.',
      },
    ],
    highlights: ['Same-day delivery', 'Gift messages', 'Custom bouquets'],
  },
  'privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'How we handle customer details and order information.',
    summary:
      'We collect only the information needed to process orders, coordinate delivery, and support customer communication.',
    image: luxeImages.dried,
    sections: [
      {
        title: 'Information we use',
        body: 'Checkout details may include customer contact information, recipient delivery details, notes, and payment confirmation status.',
      },
      {
        title: 'Why we use it',
        body: 'We use this information to fulfill orders, contact customers about changes, prevent checkout errors, and improve service quality.',
      },
      {
        title: 'Data care',
        body: 'Customer information is handled with limited access and is not sold. Service providers receive only what is required for delivery or payment processing.',
      },
    ],
    highlights: ['Order fulfillment', 'Limited access', 'No data selling'],
  },
  'terms-of-service': {
    eyebrow: 'Terms of Service',
    title: 'The service terms for placing and receiving floral orders.',
    summary:
      'These terms describe order timing, substitutions, delivery requirements, and customer responsibilities.',
    image: luxeImages.autumn,
    sections: [
      {
        title: 'Orders and availability',
        body: 'Flower availability changes daily. If a stem is unavailable, we may substitute with a similar bloom while preserving the selected mood and value.',
      },
      {
        title: 'Delivery details',
        body: 'Customers are responsible for accurate recipient names, addresses, phone numbers, and access instructions.',
      },
      {
        title: 'Changes and cancellations',
        body: 'Order changes are best requested before preparation begins. Same-day cancellations may be limited once flowers have been selected or dispatched.',
      },
    ],
    highlights: ['Seasonal substitutions', 'Accurate addresses', 'Order timing'],
  },
  sustainability: {
    eyebrow: 'Sustainability',
    title: 'A practical approach to sourcing, waste, and longer-lasting design.',
    summary:
      'We reduce excess through seasonal planning, careful ordering, reusable studio materials, and care guidance that helps flowers last longer.',
    image: luxeImages.iris,
    sections: [
      {
        title: 'Seasonal choices',
        body: 'Working with seasonal stems reduces waste and supports arrangements that feel more connected to the current moment.',
      },
      {
        title: 'Responsible packing',
        body: 'We prioritize simple protective wrapping, water-conscious handling, and reusable studio tools where practical.',
      },
      {
        title: 'Longer life',
        body: 'Care notes are included to help recipients extend freshness and reduce unnecessary replacement.',
      },
    ],
    highlights: ['Seasonal stems', 'Lower waste', 'Care guidance'],
  },
}

function ContactPanel() {
  return (
    <div className="grid gap-4 border-t border-black/15 pt-8 text-sm text-[#444748] sm:grid-cols-3">
      <span className="flex items-center gap-3">
        <MapPin className="h-4 w-4 text-black" aria-hidden="true" />
        15/4 Khreshchatyk Street
      </span>
      <span className="flex items-center gap-3">
        <Phone className="h-4 w-4 text-black" aria-hidden="true" />
        +380980099777
      </span>
      <span className="flex items-center gap-3">
        <Mail className="h-4 w-4 text-black" aria-hidden="true" />
        Kyiv.Florist.Studio@gmail.com
      </span>
    </div>
  )
}

export default function CustomerInfoPage() {
  const { slug } = useParams()
  const page = pages[slug]

  if (!page) {
    return <Navigate to="/c" replace />
  }

  return (
    <LuxePage bg="#fbfaf8">
      <EditorialHeader variant="editorial" />

      <main>
        <section className="grid border-b border-black/15 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex min-h-[420px] items-center px-6 py-16 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <LuxeLabel className="text-[#747878]">{page.eyebrow}</LuxeLabel>
              <h1 className="luxe-serif mt-7 text-5xl leading-tight text-black sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#444748]">
                {page.summary}
              </p>
            </div>
          </div>
          <div className="min-h-[360px] border-t border-black/15 lg:border-l lg:border-t-0">
            <img src={page.image} alt="" className="h-full w-full object-cover" />
          </div>
        </section>

        <section className="grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[320px_1fr] lg:px-16 lg:py-24">
          <aside>
            <Link
              to="/c"
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#444748] transition-colors hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back home
            </Link>
            <div className="mt-10 grid gap-3">
              {page.highlights.map((item) => (
                <span key={item} className="border border-black/15 px-4 py-3 text-sm text-[#444748]">
                  {item}
                </span>
              ))}
            </div>
          </aside>

          <div className="grid gap-10">
            {page.sections.map((section, index) => (
              <article key={section.title} className="grid gap-5 border-t border-black/15 pt-8 md:grid-cols-[120px_1fr]">
                <span className="luxe-label text-[#747878]">0{index + 1}</span>
                <div>
                  <h2 className="luxe-serif text-3xl text-black">{section.title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#444748]">
                    {section.body}
                  </p>
                </div>
              </article>
            ))}

            {page.contact ? <ContactPanel /> : null}

            <Link
              to={page.contact ? '/c/custom' : '/c/contact'}
              className="inline-flex h-12 w-fit items-center gap-4 bg-black px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-black/80"
            >
              {page.contact ? 'Start custom request' : 'Contact studio'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <EditorialFooter variant="compact" />
    </LuxePage>
  )
}
