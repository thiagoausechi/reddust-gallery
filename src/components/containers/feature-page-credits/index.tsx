import { FeatureCreditsFragment } from '@/cms'
import GuiPanel from '@/layout/gui-panel'
import SectionContent from '@/layout/section-content'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

export default function FeaturePageCredits({ credit }: FeatureCreditsFragment) {
  return (
    <Wrapper>
      <Title>Credits</Title>
      <GuiPanel>
        <Content>
          {credit.map(({ source, author, link }) => (
            <Credit key={link}>
              <Source href={link} target='_blank'>
                {source}
              </Source>
              <Author>by {author}</Author>
            </Credit>
          ))}
        </Content>
      </GuiPanel>
    </Wrapper>
  )
}

const Wrapper = tw(SectionContent)`
  mt-0
  flex
  flex-col
  gap-5
  pt-0
`

const Title = tw.h1`
  w-full
  text-2xl
  font-black
  sm:text-3xl
  2xl:text-4xl
`

const Content = tw.ul`
  list-inside
  list-disc
`

const Credit = tw.li`
  mb-5
`

const Source = tw(Link)`
  font-bold
  hover:underline
`

const Author = tw.p`
  font-normal
  italic
`
