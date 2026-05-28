import { HomeCollections } from '@/components/customer/home/home-collections'
import { HomeHero } from '@/components/customer/home/home-hero'
import { HomeServiceStrip } from '@/components/customer/home/home-service-strip'
import { HomeSplitCategories } from '@/components/customer/home/home-split-categories'
import { HomeStory } from '@/components/customer/home/home-story'
import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { FloatingChat } from '@/components/luxe/floating-chat'
import { LuxePage } from '@/components/luxe/luxe-page'
import { NewsletterBlock } from '@/components/luxe/newsletter-block'

export default function CustomerHome() {
  return (
    <LuxePage>
      <EditorialHeader variant="home" />

      <main>
        <HomeHero />
        <HomeSplitCategories />
        <HomeStory />
        <HomeServiceStrip />
        <HomeCollections />
        <NewsletterBlock />
      </main>

      <EditorialFooter variant="home" />
      <FloatingChat />
    </LuxePage>
  )
}
