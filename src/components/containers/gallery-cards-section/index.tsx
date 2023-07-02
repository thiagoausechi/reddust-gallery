import FeatureCard from '@/layout/feature-card'
import SectionContent from '@/layout/section-content'
import { getFeatures } from '@/services/hygraph'
import tw from 'tailwind-styled-components'

export default async function GalleryCardsSection() {
  const features = await getFeatures()

  return (
    <Wrapper>
      <CardsList>
        {features.map((feature) => (
          <FeatureCard key={feature.slug} {...feature} />
        ))}
      </CardsList>
    </Wrapper>
  )
}

const Wrapper = tw.section`
  relative
  min-h-screen
  w-full
  snap-start
  overflow-hidden
  bg-tiles
`

const CardsList = tw(SectionContent)`
  grid
  grid-cols-1
  gap-6
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
`
