import tw from 'tailwind-styled-components'

export default function GuiPanel({ children }: React.PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = tw.div`
  bg-gui-500
  h-fit
  w-full
  p-3
  shadow-gui
`
