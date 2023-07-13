import { CSSProperties } from 'react'
import tw from 'tailwind-styled-components'

interface Props {
  icon?: Icon
  label: string
  className?: string
}

type Icon = {
  iconX: number
  iconY: number
}

export default function Badge({ label, icon, className }: Props) {
  return (
    <Wrapper className={className}>
      {icon && <Icon style={getIconPosition(icon)} />}
      <Label>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  h-full
  w-fit
  select-none
  items-center
  rounded
  bg-gui-500
  p-1
  pr-3
  text-xs
  font-medium
  transition-colors
  duration-300
  ease-in-out
  hover:bg-gui-400
  sm:text-base
`

const Icon = tw.div`
  inline-block
  h-8
  w-8
  bg-[url("/images/modifications_sprite.png")]
  bg-no-repeat
  align-text-top
`

const Label = tw.p`
  ml-2
  line-clamp-1
  text-neutral-50
`

const getIconPosition = ({ iconX, iconY }: Icon): CSSProperties => ({
  backgroundPosition: `-${iconX * 32}px -${iconY * 32}px`,
  imageRendering: 'pixelated',
})
