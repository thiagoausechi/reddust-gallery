import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  documents: 'src/**/*.{gql,graphql}',
  config: {
    useTypeImports: true,
    skipTypename: true,
    enumsAsTypes: true,
    dedupeFragments: true,
  },
  generates: {
    'src/services/graphql/cms/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
}

export default config
