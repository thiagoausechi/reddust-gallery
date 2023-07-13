import { getClient } from '@/apollo'
import {
  FeatureComparisonsFragmentDoc,
  FeatureCreditsFragmentDoc,
  FeatureSummaryFragmentDoc,
  GetAllFeaturesSlugsDocument,
  GetFeatureDocument,
} from '@/cms'
import FeatureComparisonsSection from '@/containers/feature-comparisons-section'
import FeaturePageCredits from '@/containers/feature-page-credits'
import FeaturePageHeader from '@/containers/feature-page-header'
import { getFragmentData } from '@/graphql'
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
  const { data } = await getClient().query({
    query: GetAllFeaturesSlugsDocument,
  })

  return data.features.map((slug) => slug)
}

interface Props {
  params: { slug: string }
}

export default async function FeaturePage({ params: { slug } }: Props) {
  const { data } = await getClient().query({
    query: GetFeatureDocument,
    variables: { slug },
  })

  if (!data || !data.feature) return notFound()

  const feature = getFragmentData(FeatureSummaryFragmentDoc, data.feature)

  const { name }        = feature // prettier-ignore
  const { comparisons } = getFragmentData(FeatureComparisonsFragmentDoc, feature) // prettier-ignore
  const { credit }      = getFragmentData(FeatureCreditsFragmentDoc, feature) // prettier-ignore
  const hasCredit       = credit.length > 0 // prettier-ignore

  return (
    <Wrapper>
      <FeaturePageHeader feature={feature} />
      <Content>
        <FeatureComparisonsSection
          featureName={name}
          slug={slug}
          comparisons={comparisons}
        />
        {hasCredit && <FeaturePageCredits credit={credit} />}
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
