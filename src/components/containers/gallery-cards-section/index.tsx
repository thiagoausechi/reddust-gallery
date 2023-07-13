import { getClient } from '@/apollo'
import { FeatureSummaryFragmentDoc, GetAllFeaturesDocument } from '@/cms'
import { getFragmentData } from '@/graphql'
import FeatureCard from '@/layout/feature-card/template-full'
import SectionContent from '@/layout/section-content'
import { filterSlugs } from '@/lib/utils'
import tw from 'tailwind-styled-components'

export default async function GalleryCardsSection() {
  const { data } = await getClient().query({
    query: GetAllFeaturesDocument,
    variables: {
      filterArray: filterSlugs([]),
    },
  })

  if (!data) return null
  let mapped = data.features.map((feature) =>
    getFragmentData(FeatureSummaryFragmentDoc, feature),
  )

  return (
    <Wrapper>
      <CardsList>
        {mapped.map((feature) => (
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
