import GuiPanel from '@/layout/gui-panel'
import Link from 'next/link'
import type { ReactNode } from 'react'
import tw from 'tailwind-styled-components'

interface Props {
  link: string
  thumbnail?: ReactNode
  flag?: ReactNode
  tags?: ReactNode
  details?: ReactNode
  footer?: ReactNode
}

export default function CardBuilder({
  link,
  thumbnail,
  flag,
  tags,
  details,
  footer,
}: Props) {
  return (
    <Wrapper>
      <LinkWrapper href={link}>
        <Content>
          <div>
            <ThumbnailWrapper>
              {thumbnail}
              {tags}
              {flag}
            </ThumbnailWrapper>

            {details}
          </div>

          {footer}
        </Content>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper             = tw.article`relative mx-auto w-full` // prettier-ignore
const LinkWrapper         = tw(Link)`relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full h-full` // prettier-ignore
const Content             = tw(GuiPanel)`flex h-full flex-col justify-between` // prettier-ignore

const ThumbnailWrapper    = tw.div`flex justify-center rounded-md relative overflow-hidden h-52` // prettier-ignore
