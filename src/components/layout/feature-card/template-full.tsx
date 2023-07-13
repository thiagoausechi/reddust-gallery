import {
  CompatibilityFragmentDoc,
  FeatureStatusFragmentDoc,
  FeatureSummaryFragment,
  ModificationTypeFragmentDoc,
  TagsFragmentDoc,
} from '@/cms'
import { getFragmentData } from '@/graphql'
import CardBuilder from '.'
import {
  asLink,
  renderDetails,
  renderFlag,
  renderFooter,
  renderTags,
  renderThumbnail,
} from './utils'

export default function FeatureCard({
  name,
  description,
  slug,
  ...res
}: FeatureSummaryFragment) {
  const { featureStatus }    = getFragmentData(FeatureStatusFragmentDoc, res) // prettier-ignore
  const { compatibility }    = getFragmentData(CompatibilityFragmentDoc, res) // prettier-ignore
  const { modificationType } = getFragmentData(ModificationTypeFragmentDoc, res) // prettier-ignore
  const { tags }             = getFragmentData(TagsFragmentDoc, res) // prettier-ignore

  if (!featureStatus || !compatibility || !modificationType || !tags)
    return null

  return (
    <CardBuilder
      link={asLink(slug)}
      thumbnail={renderThumbnail(slug, name)}
      flag={renderFlag(featureStatus.slug, compatibility, featureStatus)}
      tags={renderTags(tags)}
      details={renderDetails(name, description)}
      footer={renderFooter(modificationType)}
    />
  )
}
