import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Red Dust Gallery',
  description: 'A gallery to showcase the Red Dust Resource Pack features.',
  category: 'gallery',
  keywords: [
    'minecraft',
    'resourcepack',
    'minecraft-resourcepack',
    'texture-pack',
    'optifine',
    'resource-pack',
    'minecraft-texturepack',
    'texturepack',
    'minecraft-java-edition',
    'minecraft-texture-pack',
    'minecraft-resource-pack',
    'minecraft-texture',
    'stash',
    'stashes',
    'gallery',
  ],
  colorScheme: 'dark',
  themeColor: '#0b0b0b',
  creator: 'Thiago Ausechi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
