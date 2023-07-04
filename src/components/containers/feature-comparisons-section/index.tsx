import SectionContent from '@/layout/section-content'
import type { FeatureComparison } from '@/services/hygraph'
import tw from 'tailwind-styled-components'
import Comparison from './comparison'

interface Props {
  featureName: string
  slug: string
  comparisons: FeatureComparison[]
}

export default function FeatureComparisonsSection({
  featureName,
  slug,
  comparisons,
}: Props) {
  return (
    <ComparisonsContent>
      {comparisons.map((comparison, i) => (
        <Comparison
          key={i}
          featureName={featureName}
          slug={slug}
          index={i}
          {...comparison}
        />
      ))}
    </ComparisonsContent>
  )
}

const ComparisonsContent = tw(SectionContent)`
  my-0
  flex
  flex-col
  gap-10
  py-0
  lg:gap-14
`
