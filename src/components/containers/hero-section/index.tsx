import Image from 'next/image'
import tw from 'tailwind-styled-components'
import HeroImage from '/public/images/hero.png'

export default function HeroSection() {
  return (
    <Wrapper>
      <Image
        src={HeroImage}
        alt='A screenshot from the Minecraft while using the Red Dust Resource Pack'
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover'
        priority
      />
    </Wrapper>
  )
}

const Wrapper = tw.section`
  relative
  h-screen
  w-full
  snap-start
  overflow-hidden
`
