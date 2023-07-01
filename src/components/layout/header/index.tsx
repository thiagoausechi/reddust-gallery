'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import LogoImage from '/public/images/gallery_logo.png'

export default function Header() {
  const router = useRouter()
  const path = usePathname()

  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => setScrolled(window.scrollY > 0)
  const handleLogoClick = () =>
    path === '/' ? router.push('/') : router.back()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Wrapper scrolled={scrolled.toString()}>
      <Logo scrolled={scrolled.toString()} onClick={handleLogoClick}>
        <Image
          src={LogoImage}
          height={scrolled ? '60' : '100'}
          className='transition-all'
          alt='Gallery Logo'
          priority
        />
      </Logo>
    </Wrapper>
  )
}

interface Scrolled {
  scrolled: string
}

const Wrapper = tw.header<Scrolled>`
  fixed
  z-50
  flex
  w-full
  cursor-pointer
  bg-black/50
  backdrop-blur-lg
  transition-all
  ${(p) => (p.scrolled == 'true' ? 'h-14' : 'h-20')}
`

const Logo = tw.div<Scrolled>`
  absolute
  left-1/2
  -translate-x-1/2
  transform
  transition-all
  ${(p) => (p.scrolled == 'true' ? 'top-5' : 'top-8')}
`
