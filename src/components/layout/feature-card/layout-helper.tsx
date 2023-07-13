import type { CSSProperties, ComponentProps } from 'react'
import tw from 'tailwind-styled-components'

export const ThumbnailImage      = tw.div`transition-transform duration-500 transform ease-in-out hover:scale-110 w-full` // prettier-ignore

export const TagsWrapper         = tw.div`absolute flex justify-center bottom-0 mb-3` // prettier-ignore
export const TagsContent         = tw.div`flex bg-gui-500 white px-4 py-1 space-x-5 rounded-lg overflow-hidden` // prettier-ignore
export const Tag                 = tw.p`flex items-center font-medium text-neutral-50` // prettier-ignore

export const DetailsWrapper      = tw.div`mt-4` // prettier-ignore
export const NameLabel           = tw.h2`font-medium text-base md:text-lg text-neutral-50 line-clamp-1` // prettier-ignore
export const DescriptionLabel    = tw.h2`mt-2 text-sm text-neutral-50 line-clamp-1` // prettier-ignore

export const ModificationWrapper = tw.footer`relative mt-8 flex w-fit items-center rounded pr-2 transition-colors duration-300 ease-in-out hover:bg-gui-400` // prettier-ignore
export const ModificationIcon    = tw.div`w-8 h-8 inline-block align-text-top bg-no-repeat bg-[url("/images/modifications_sprite.png")]` // prettier-ignore
export const ModificationLabel   = tw.p`ml-2 text-neutral-50 line-clamp-1` // prettier-ignore

export const Badge               = tw.span` absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg px-3 py-2 text-sm font-medium text-white bg-neutral-500 hover:bg-neutral-400` // prettier-ignore

type IconPosition = {
  iconX: number
  iconY: number
}

export const getIconPosition = ({
  iconX,
  iconY,
}: IconPosition): CSSProperties => ({
  backgroundPosition: `-${iconX * 32}px -${iconY * 32}px`,
  imageRendering: 'pixelated',
})

export const BadgesColors: Record<string, ComponentProps<'div'>['className']> =
  {
    DEFAULT: 'bg-neutral-500 hover:bg-neutral-400',

    // Compatibility
    vanilla: 'bg-green-500 hover:bg-green-400',
    optifine: 'bg-yellow-500 hover:bg-yellow-300',

    //Status
    implemented: 'bg-green-500 hover:bg-green-400',
    planned: 'bg-neutral-500 hover:bg-neutral-400',
    deprecated: 'bg-red-500 hover:bg-red-400',
  }
