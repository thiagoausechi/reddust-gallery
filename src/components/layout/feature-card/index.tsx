import { Feature } from '@/services/hygraph'
import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import tw from 'tailwind-styled-components'
import GuiPanel from '../gui-panel'

export default function FeatureCard({
  name,
  description,
  slug,
  featureStatus,
  compatibility,
  modificationType,
  tags,
}: Feature) {
  return (
    <Wrapper>
      {/* TODO: Not implemented yet resulting in a 404 page. */}
      <LinkWrapper href={`/feature/${slug}`}>
        <GuiPanel>
          <ThumbnailWrapper>
            <ThumbnailImage>
              <Image
                src={`/images/comparisons/${slug}/thumbnail.png`}
                alt={`${name} thumbnail`}
                className='object-cover'
                fill
              />
            </ThumbnailImage>

            <TagsWrapper>
              <TagsContent>
                {tags.slice(0, 3).map((tag) => (
                  <Tag key={tag.slug}>{tag.name}</Tag>
                ))}
              </TagsContent>
            </TagsWrapper>

            {featureStatus.slug === 'implemented' ? (
              <Badge color={compatibility.badgeColor}>
                {compatibility.name}
              </Badge>
            ) : (
              <Badge color={featureStatus.badgeColor}>
                {featureStatus.name}
              </Badge>
            )}
          </ThumbnailWrapper>

          <div className='mt-4'>
            <NameLabel>{name}</NameLabel>
            <DescriptionLabel>{description}</DescriptionLabel>
          </div>

          <ModificationWrapper>
            <ModificationIcon style={getIconPosition(modificationType)} />
            <ModificationLabel>{modificationType.name}</ModificationLabel>
          </ModificationWrapper>
        </GuiPanel>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper             = tw.article`relative mx-auto w-full` // prettier-ignore
const LinkWrapper         = tw(Link)`relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full` // prettier-ignore

const ThumbnailWrapper    = tw.div`flex justify-center rounded-md relative overflow-hidden h-52` // prettier-ignore
const ThumbnailImage      = tw.div`transition-transform duration-500 transform ease-in-out hover:scale-110 w-full` // prettier-ignore

const TagsWrapper         = tw.div`absolute flex justify-center bottom-0 mb-3` // prettier-ignore
const TagsContent         = tw.div`flex bg-gui-500 white px-4 py-1 space-x-5 rounded-lg overflow-hidden` // prettier-ignore
const Tag                 = tw.p`flex items-center font-medium text-neutral-50` // prettier-ignore

const NameLabel           = tw.h2`font-medium text-base md:text-lg text-neutral-50 line-clamp-1` // prettier-ignore
const DescriptionLabel    = tw.h2`mt-2 text-sm text-neutral-50 line-clamp-1` // prettier-ignore

const ModificationWrapper = tw.footer`relative mt-8 flex w-fit items-center rounded pr-2 transition-colors duration-300 ease-in-out hover:bg-gui-400` // prettier-ignore
const ModificationIcon    = tw.div`w-8 h-8 inline-block align-text-top bg-no-repeat bg-[url("/images/modifications_sprite.png")]` // prettier-ignore
const ModificationLabel   = tw.p`ml-2 text-neutral-50 line-clamp-1` // prettier-ignore

const Badge               = tw.span<{ color?: string }>` absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg px-3 py-2 text-sm font-medium text-white ${(p) => `bg-${p.color}` || 'bg-red-500'}` // prettier-ignore

const getIconPosition = ({
  iconX,
  iconY,
}: {
  iconX: number
  iconY: number
}): CSSProperties => ({
  backgroundPosition: `-${iconX * 32}px -${iconY * 32}px`,
  imageRendering: 'pixelated',
})
