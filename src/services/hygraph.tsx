import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { parse } from 'graphql'
import { gql, request } from 'graphql-request'

const hygraph = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export type Feature = {
  name: string
  description: string
  slug: string
  cover: {
    url: string
  }
  featureStatus: {
    slug: string
    name: string
    badgeColor: string
  }
  compatibility: {
    name: string
    slug: string
    badgeColor: string
  }
  modificationType: {
    name: string
    slug: string
    description: string
  }
  tags: {
    slug: string
    name: string
    description: string
  }[]
  comparisons: {
    description?: string
    title?: string
    before: {
      url: string
    }
    after: {
      url: string
    }
  }[]
  credit: {
    author: string
    link: string
    source: string
  }[]
}

interface FeaturesConnection {
  featuresConnection: {
    edges: {
      node: Feature
    }[]
  }
}

export const getFeatures = async (): Promise<Feature[]> => {
  const query: TypedDocumentNode<
    FeaturesConnection,
    never | Record<any, never>
  > = parse(gql`
    query GetAllFeatures {
      featuresConnection {
        edges {
          node {
            cover {
              url
            }
            description
            comparisons {
              description
              title
              before {
                url
              }
              after {
                url
              }
            }
            compatibility {
              name
              slug
              badgeColor
            }
            name
            slug
            credit {
              author
              link
              source
            }
            featureStatus {
              slug
              name
              badgeColor
            }
            modificationType {
              name
              slug
              description
            }
            tags {
              slug
              name
              description
            }
          }
        }
      }
    }
  `)

  const result = await request(hygraph, query)
  return result.featuresConnection.edges.map(({ node }) => node)
}

interface FeatureQuery {
  feature: Feature
}

export const getFeature = async (slug: string): Promise<Feature> => {
  const query: TypedDocumentNode<FeatureQuery, never | Record<any, never>> =
    parse(gql`
      query FeaturePageQuery($slug: String!) {
        feature(where: { slug: $slug }) {
          cover {
            url
          }
          description
          comparisons {
            description
            title
            before {
              url
            }
            after {
              url
            }
          }
          compatibility {
            name
            slug
            badgeColor
          }
          name
          slug
          credit {
            author
            link
            source
          }
          featureStatus {
            slug
            name
            badgeColor
          }
          modificationType {
            name
            slug
            description
          }
          tags {
            slug
            name
            description
          }
        }
      }
    `)

  const result = await request<FeatureQuery>(hygraph, query, {
    slug: slug,
  })

  return result.feature
}
