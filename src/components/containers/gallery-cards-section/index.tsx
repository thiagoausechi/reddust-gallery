import FeatureCard from '@/layout/feature-card'
import SectionContent from '@/layout/section-content'
import { FEATURES } from '@/lib/debug'
import tw from 'tailwind-styled-components'
import TilesBackground from '/public/images/tiles_background.png'

/**
 * TODO: Implement the GraphQL query here
 */

export default function GalleryCardsSection() {
  return (
    <Wrapper style={{ background }}>
      <CardsList>
        <FeatureCard {...FEATURES.get('extremely-specific-case')!} />
      </CardsList>
    </Wrapper>
  )
}

/*
const generateCards = () => {
  const cards: Feature[] = []
  FEATURES.forEach((feature) => cards.push(feature))

  return cards.map((feature) => <FeatureCard key={feature.name} {...feature} />)
}*/

/**
 * I'd love to this with Tailwind, but I couldn't find any good way.
 * This is a workaround.
 */
const DarkenMask = 'linear-gradient(0deg, #000000cc 0%, #000000cc 100%)'
const ImageURL = `url(${TilesBackground.src}) fixed`
const background = `${DarkenMask}, ${ImageURL}`

const Wrapper = tw.section`
  relative
  min-h-screen
  w-full
  snap-start
  overflow-hidden
  bg-repeat
`

const CardsList = tw(SectionContent)`
  grid
  grid-cols-1
  gap-6
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
`
