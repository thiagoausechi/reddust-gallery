import FeatureComparisonsSection from '@/containers/feature-comparisons-section'
import FeaturePageCredits from '@/containers/feature-page-credits'
import FeaturePageHeader from '@/containers/feature-page-header'
import { getFeature, getFeaturesSlugs } from '@/services/hygraph'
import { notFound } from 'next/navigation'
import tw from 'tailwind-styled-components'

/**
 * Rout Segment Config
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
 */
export const dynamic = 'error'
export const dynamicParams = false
export const revalidate = false

export async function generateStaticParams() {
  const slugs = await getFeaturesSlugs()

  return slugs
}

interface Props {
  params: { slug: string }
}

export default async function FeaturePage({ params: { slug } }: Props) {
  const feature = await getFeature(slug)
  if (!feature) return notFound()

  const { name, comparisons, credit } = feature
  const hasCredit = credit.length > 0

  return (
    <Wrapper>
      <FeaturePageHeader feature={feature} />
      <Content>
        <FeatureComparisonsSection
          featureName={name}
          slug={slug}
          comparisons={comparisons}
        />
        {hasCredit && <FeaturePageCredits credits={credit} />}
      </Content>
    </Wrapper>
  )
}

const Wrapper = tw.main`
  relative
  min-h-screen
  w-full
  overflow-hidden
`

const Content = tw.div`
  flex
  h-full
  min-h-[100vmin]
  w-full
  flex-col
  gap-10
  bg-tiles
  py-8
  sm:py-10
  lg:py-20
`
