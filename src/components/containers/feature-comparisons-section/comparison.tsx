'use client'
import { FeatureComparison } from '@/services/hygraph'
import Image from 'next/image'
import { ReactCompareSlider } from 'react-compare-slider'
import tw from 'tailwind-styled-components'

interface Props extends FeatureComparison {
  featureName: string
  slug: string
  index: number
}

export default function Comparison({
  featureName,
  title,
  description,
  slug,
  index,
}: Props) {
  const Before = () => (
    <Preview>
      <Image
        src={`/images/comparisons/${slug}/${index}-before.png`}
        alt={'Vanilla/original'}
        sizes='100%'
        fill
      />
    </Preview>
  )
  const After = () => (
    <Preview>
      <Image
        src={`/images/comparisons/${slug}/${index}-after.png`}
        alt={`With ${featureName}`}
        sizes='100%'
        fill
      />
    </Preview>
  )

  return (
    <Wrapper>
      {(title || description) && (
        <Header>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>
      )}

      <Slider itemOne={<Before />} itemTwo={<After />} />
    </Wrapper>
  )
}

const Wrapper = tw.article`
  mx-auto
  w-full
  lg:w-3/4
`

const Header = tw.header`
  mb-6
`

const Title = tw.h1`
  w-full
  text-2xl
  font-black
  sm:text-3xl
  2xl:text-4xl
`

const Description = tw.p`
  xl2:w-1/2
  w-full
  lg:w-2/3
  xl:text-lg
`

const Slider = tw(ReactCompareSlider)`
  aspect-[320/167]
`

const Preview = tw.div`
  absolute
  inset-0
`
