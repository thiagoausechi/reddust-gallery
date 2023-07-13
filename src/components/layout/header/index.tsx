'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import LogoImage from '/public/images/gallery_logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => setScrolled(window.scrollY > 0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Wrapper data-scrolled={scrolled}>
      <Logo data-scrolled={scrolled} href={'/'}>
        <Image
          src={LogoImage}
          className='transition-all'
          sizes='100%'
          alt='Gallery Logo'
          fill
          priority
        />
      </Logo>
    </Wrapper>
  )
}

// prettier-ignore
const Wrapper = tw.header`
  fixed
  z-50
  flex
  w-full
  bg-black/50
  backdrop-blur-lg
  transition-all

  h-12
  data-[scrolled=true]:h-8
  sm:h-16
  data-[scrolled=true]:sm:h-10
  md:h-20
  data-[scrolled=true]:md:h-14
`

// prettier-ignore
const Logo = tw(Link)`
  absolute
  left-1/2
  -translate-x-1/2
  transform
  cursor-pointer
  transition-all
  aspect-[998/191]

  h-full
  sm:h-20
  data-[scrolled=true]:sm:h-14
  md:h-28
  data-[scrolled=true]:md:h-16
  
  top-8
  data-[scrolled=true]:top-4
`
