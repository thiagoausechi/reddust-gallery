import Image from 'next/image'
import Link from 'next/link'
import {
  Badge,
  BadgesColors,
  DescriptionLabel,
  DetailsWrapper,
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

export const asLink = (slug: string, path = 'feature') => `/${path}/${slug}`

export const renderThumbnail = (slug: string, name: string) => (
  <ThumbnailImage>
    <Image
      src={`/images/comparisons/${slug}/thumbnail.png`}
      alt={`${name} thumbnail`}
      className='object-cover'
      fill
    />
  </ThumbnailImage>
)

export const renderFlag = (
  status: string,
  compatibility: Badge,
  featureStatus: Badge,
) =>
  status === 'implemented' ? (
    <Link href={asLink(compatibility.slug, 'compatibility')}>
      <Badge className={BadgesColors[compatibility.slug]}>
        {compatibility.name}
      </Badge>
    </Link>
  ) : (
    <Link href={`/${featureStatus.slug}`}>
      <Badge className={BadgesColors[featureStatus.slug]}>
        {featureStatus.name}
      </Badge>
    </Link>
  )

export const renderTags = (tags: Tags) => (
  <TagsWrapper>
    <TagsContent>
      {tags.slice(0, 3).map((tag) => (
        <Tag key={tag.slug}>{tag.name}</Tag>
      ))}
    </TagsContent>
  </TagsWrapper>
)

export const renderDetails = (name: string, description: string) => (
  <DetailsWrapper>
    <NameLabel>{name}</NameLabel>
    <DescriptionLabel>{description}</DescriptionLabel>
  </DetailsWrapper>
)

export const renderFooter = ({ slug, name, iconX, iconY }: Modification) => (
  <Link href={asLink(slug!, 'modification')}>
    <ModificationWrapper>
      <ModificationIcon style={getIconPosition({ iconX, iconY })} />
      <ModificationLabel>{name}</ModificationLabel>
    </ModificationWrapper>
  </Link>
)

/**
 * TYPES
 */
type Badge = {
  name: string
  slug: string
  badgeColor: string
}

type Tags = Array<{
  slug: string
  name: string
  description: string
}>

type Modification = {
  name: string
  slug?: string | null | undefined
  iconX: number
  iconY: number
}
