import {
  CompatibilityFragmentDoc,
  FeatureStatusFragmentDoc,
  FeatureSummaryFragment,
  ModificationTypeFragmentDoc,
  TagsFragmentDoc,
} from '@/cms'
import { getFragmentData } from '@/graphql'
import Image from 'next/image'
import Link from 'next/link'
import CardBuilder from '.'
import {
  Badge,
  DescriptionLabel,
  ModificationIcon,
  ModificationLabel,
  ModificationWrapper,
  NameLabel,
  Tag,
  TagsContent,
  TagsWrapper,
  ThumbnailImage,
  getIconPosition,
} from './layout-helper'

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
      link={`/feature/${slug}`}
      thumbnail={
        <ThumbnailImage>
          <Image
            src={`/images/comparisons/${slug}/thumbnail.png`}
            alt={`${name} thumbnail`}
            className='object-cover'
            fill
          />
        </ThumbnailImage>
      }
      flag={
        featureStatus.slug === 'implemented' ? (
          <Badge color={compatibility.badgeColor}>{compatibility.name}</Badge>
        ) : (
          <Badge color={featureStatus.badgeColor}>{featureStatus.name}</Badge>
        )
      }
      tags={
        <TagsWrapper>
          <TagsContent>
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag.slug}>{tag.name}</Tag>
            ))}
          </TagsContent>
        </TagsWrapper>
      }
      details={
        <div className='mt-4'>
          <NameLabel>{name}</NameLabel>
          <DescriptionLabel>{description}</DescriptionLabel>
        </div>
      }
      footer={
        <Link href={`/modification/${modificationType.slug as string}`}>
          <ModificationWrapper>
            <ModificationIcon
              style={getIconPosition({
                x: modificationType.iconX,
                y: modificationType.iconY,
              })}
            />
            <ModificationLabel>{modificationType.name}</ModificationLabel>
          </ModificationWrapper>
        </Link>
      }
    />
  )
}
