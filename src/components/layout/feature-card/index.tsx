import { Feature } from '@/lib/debug'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import CoverPlaceholder from '/public/images/feature_cover_placeholder.png'

export default function FeatureCard({
  status,
  name,
  slug,
  description,
  cover,
  modification,
  tags,
  compability,
}: Feature) {
  return (
    <Wrapper>
      {/* TODO: Not implemented yet resulting in a 404 page. */}
      <LinkWrapper href={`/feature/${slug}`}>
        <Content>
          <CoverWrapper>
            <CoverImage>
              <Image
                src={cover || CoverPlaceholder}
                alt={`${name} cover`}
                className='object-cover'
                fill
              />
            </CoverImage>

            <TagsWrapper>
              <TagsContent>
                {tags.slice(0, 3).map((tag) => (
                  <Tag key={tag}>
                    <TagIcon />
                    {tag}
                  </Tag>
                ))}
              </TagsContent>
            </TagsWrapper>

            {status === 'added' ? (
              <Badge color={BadgeColor[compability]}>{compability}</Badge>
            ) : (
              <Badge color={BadgeColor[status]}>{status}</Badge>
            )}
          </CoverWrapper>

          <div className='mt-4'>
            <NameLabel>{name}</NameLabel>
            <DescriptionLabel>{description}</DescriptionLabel>
          </div>

          <Footer>
            <ModificationIcon />
            <ModificationLabel>{modification}</ModificationLabel>
          </Footer>
        </Content>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper           = tw.article`relative mx-auto w-full` // prettier-ignore
const LinkWrapper       = tw(Link)`relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full` // prettier-ignore
const Content           = tw.div`shadow p-4 rounded-lg bg-neutral-800` // prettier-ignore

const CoverWrapper      = tw.div`flex justify-center relative rounded-lg overflow-hidden h-52` // prettier-ignore
const CoverImage        = tw.div`transition-transform duration-500 transform ease-in-out hover:scale-110 w-full` // prettier-ignore

const TagsWrapper       = tw.div`absolute flex justify-center bottom-0 mb-3` // prettier-ignore
const TagsContent       = tw.div`flex bg-neutral-800 white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow` // prettier-ignore
const Tag               = tw.p`flex items-center font-medium text-neutral-50` // prettier-ignore
const TagIcon           = tw.div`w-5 h-5 fill-current rounded-full mr-2 bg-neutral-200` // prettier-ignore

const NameLabel         = tw.h2`font-medium text-base md:text-lg text-neutral-50 line-clamp-1` // prettier-ignore
const DescriptionLabel  = tw.h2`mt-2 text-sm text-neutral-50 line-clamp-1` // prettier-ignore

const Footer            = tw.footer`relative mt-8 flex items-center` // prettier-ignore
const ModificationIcon  = tw.div`rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200` // prettier-ignore
const ModificationLabel = tw.p`ml-2 text-neutral-50 line-clamp-1` // prettier-ignore

const Badge = tw.span<{ color?: string }>` absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg px-3 py-2 text-sm font-medium text-white ${(p) => p.color || 'bg-red-500'}` // prettier-ignore

// TODO: Temporary
const BadgeColor = {
  vanilla: 'bg-green-500',
  optfine: 'bg-yellow-500',
  planned: 'bg-neutral-500',
  deprecated: 'bg-red-500',
}
