import {
  CompatibilityFragmentDoc,
  FeatureStatusFragmentDoc,
  FeatureSummaryFragment,
  ModificationTypeFragmentDoc,
  TagsFragmentDoc,
} from '@/cms'
import { getFragmentData } from '@/graphql'
import Badge from '@/layout/badge'
import { BadgesColors } from '@/layout/feature-card/layout-helper'
import { asLink } from '@/layout/feature-card/utils'
import SectionContent from '@/layout/section-content'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

interface Props {
  feature: FeatureSummaryFragment
}

export default function FeaturePageHeader({ feature }: Props) {
  const { name, description } = feature
  const { featureStatus     } = getFragmentData(FeatureStatusFragmentDoc, feature) // prettier-ignore
  const { compatibility     } = getFragmentData(CompatibilityFragmentDoc, feature) // prettier-ignore
  const { modificationType  } = getFragmentData(ModificationTypeFragmentDoc, feature) // prettier-ignore
  const { tags              } = getFragmentData(TagsFragmentDoc, feature) // prettier-ignore

  if (!featureStatus || !compatibility || !modificationType || !tags)
    return null

  return (
    <Wrapper>
      <Content>
        <SectionContent className='flex flex-col gap-4 pt-0 mt-0'>
          <BadgesList>
            {featureStatus.name !== 'Deprecated' ? null : (
              <Link href={`/${featureStatus.slug}`}>
                <Badge
                  label={featureStatus.name}
                  className={BadgesColors[featureStatus.slug]}
                />
              </Link>
            )}
            <Link href={asLink(modificationType.slug!, 'modification')}>
              <Badge
                label={modificationType.name}
                icon={{
                  iconX: modificationType.iconX,
                  iconY: modificationType.iconY,
                }}
              />
            </Link>

            <Link href={asLink(compatibility.slug, 'compatibility')}>
              <Badge label={compatibility.name} />
            </Link>
          </BadgesList>
          <Title>{name}</Title>
          <Subtitle>{description}</Subtitle>
          <TagsList>
            {tags.map(({ slug, name }) => (
              <Link href={`/tag/${slug}`} key={slug}>
                <Tag>{name}</Tag>
              </Link>
            ))}
          </TagsList>
        </SectionContent>
        <Transition />
      </Content>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  w-full
  bg-[url("/images/feature_header.png")]
  bg-fixed
  bg-top
  bg-no-repeat
  lg:bg-center
`

const Content = tw.header`
  w-full
  bg-gradient-to-t
  from-black
  to-transparent
  bg-fixed
  pt-24
  sm:pt-32
  md:pt-40
`

const BadgesList = tw.div`
  flex
  gap-2
`

const Title = tw.h1`
  w-full
  text-2xl
  font-black
  sm:text-4xl
  xl:text-5xl
  2xl:w-2/3
  2xl:text-6xl
`

const Subtitle = tw.p`
  xl2:w-1/2
  w-full
  font-medium
  lg:w-2/3
  xl:text-lg
`

const TagsList = tw.ul`
  flex
  flex-wrap
  gap-2
`

const Tag = tw.li`
  w-fit
  select-none
  items-center
  rounded
  bg-gui-400/30
  p-1
  px-3
  text-sm
  font-medium
  backdrop-blur-lg
  transition-colors
  duration-300
  ease-in-out
  hover:bg-gui-400/50
`

const Transition = tw.div`
  mt-4
  h-[100px]
  w-full
  bg-[url("/images/transition_bottom_tiles.png")]
  bg-repeat
  lg:mt-10
`
