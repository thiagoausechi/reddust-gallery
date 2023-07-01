// TODO: JUST DEBBUG DATA. REMOVE IT!
export const FEATURES = new Map<string, Feature>()
  .set('hunger-preview', {
    status: 'added',
    name: 'Hunger Preview',
    slug: 'hunger-preview',
    description: 'Displays hunger bar icons on all food names.',
    tags: ['utility'],
    modification: 'gui',
    compability: 'vanilla',
    credits: [
      {
        author: 'Vanilla Tweaks',
        name: 'Hunger Preview',
        link: 'https://vanillatweaks.net/picker/resource-packs/',
      },
    ],
  })
  .set('age-25-kelp', {
    status: 'planned',
    name: 'Age 25 Kelp',
    slug: 'age-25-kelp',
    description:
      'Adds flowers to the top of kelp plants when they are fully grown.',
    cover: '',
    tags: ['model', 'utility', 'fix'],
    modification: 'block',
    compability: 'vanilla',
    credits: [
      {
        author: 'Vanilla Tweaks',
        name: 'Age 25 Kelp',
        link: 'https://vanillatweaks.net/picker/resource-packs/',
      },
    ],
  })
  .set('extremely-specific-case', {
    status: 'deprecated',
    name: 'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
    slug: 'extremely-specific-case',
    description: 'Just to debug the FeatureCard component',
    tags: [
      'variation',
      'model',
      'fix',
      'emissive',
      'retexture',
      'colarization',
      'utility',
    ],
    modification: 'item',
    compability: 'vanilla',
    credits: [
      {
        author:
          'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        name: 'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        link: '#',
      },
      {
        author:
          'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        name: 'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        link: '#',
      },
      {
        author:
          'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        name: 'Extremely Specific Case Extremely Specific Case Extremely Specific Case',
        link: '#',
      },
    ],
  })

export type Tag =
  | 'variation'
  | 'model'
  | 'fix'
  | 'emissive'
  | 'retexture'
  | 'colarization'
  | 'utility'

export type Feature = {
  name: string
  description: string
  status: 'added' | 'planned' | 'deprecated'
  slug: string
  cover?: string
  modification: 'item' | 'block' | 'gui' | 'sound' | 'lang' | 'entity' | 'misc'
  tags: Tag[]
  compability: 'vanilla' | 'optfine'
  credits?: {
    author: string
    name: string
    link: string
  }[]
}
