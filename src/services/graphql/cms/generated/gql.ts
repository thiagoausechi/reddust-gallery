/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment FeatureSummary on Feature {\n  id\n  slug\n  name\n  description\n  ...FeatureStatus\n  ...Compatibility\n  ...ModificationType\n  ...Tags\n  ...FeatureComparisons\n  ...FeatureCredits\n}\n\nfragment FeatureStatus on Feature {\n  featureStatus {\n    slug\n    name\n    badgeColor\n  }\n}\n\nfragment Compatibility on Feature {\n  compatibility {\n    name\n    slug\n    badgeColor\n  }\n}\n\nfragment ModificationType on Feature {\n  modificationType {\n    name\n    slug\n    description\n    iconX\n    iconY\n  }\n}\n\nfragment Tags on Feature {\n  tags {\n    slug\n    name\n    description\n  }\n}\n\nfragment FeatureComparisons on Feature {\n  comparisons {\n    description\n    title\n  }\n}\n\nfragment FeatureCredits on Feature {\n  credit {\n    author\n    link\n    source\n  }\n}": types.FeatureSummaryFragmentDoc,
    "query getAllFeatures {\n  features {\n    ...FeatureSummary\n  }\n}\n\nquery getFeature($slug: String!) {\n  feature(where: {slug: $slug}) {\n    ...FeatureSummary\n  }\n}\n\nquery getAllFeaturesSlugs {\n  features {\n    slug\n  }\n}": types.GetAllFeaturesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FeatureSummary on Feature {\n  id\n  slug\n  name\n  description\n  ...FeatureStatus\n  ...Compatibility\n  ...ModificationType\n  ...Tags\n  ...FeatureComparisons\n  ...FeatureCredits\n}\n\nfragment FeatureStatus on Feature {\n  featureStatus {\n    slug\n    name\n    badgeColor\n  }\n}\n\nfragment Compatibility on Feature {\n  compatibility {\n    name\n    slug\n    badgeColor\n  }\n}\n\nfragment ModificationType on Feature {\n  modificationType {\n    name\n    slug\n    description\n    iconX\n    iconY\n  }\n}\n\nfragment Tags on Feature {\n  tags {\n    slug\n    name\n    description\n  }\n}\n\nfragment FeatureComparisons on Feature {\n  comparisons {\n    description\n    title\n  }\n}\n\nfragment FeatureCredits on Feature {\n  credit {\n    author\n    link\n    source\n  }\n}"): (typeof documents)["fragment FeatureSummary on Feature {\n  id\n  slug\n  name\n  description\n  ...FeatureStatus\n  ...Compatibility\n  ...ModificationType\n  ...Tags\n  ...FeatureComparisons\n  ...FeatureCredits\n}\n\nfragment FeatureStatus on Feature {\n  featureStatus {\n    slug\n    name\n    badgeColor\n  }\n}\n\nfragment Compatibility on Feature {\n  compatibility {\n    name\n    slug\n    badgeColor\n  }\n}\n\nfragment ModificationType on Feature {\n  modificationType {\n    name\n    slug\n    description\n    iconX\n    iconY\n  }\n}\n\nfragment Tags on Feature {\n  tags {\n    slug\n    name\n    description\n  }\n}\n\nfragment FeatureComparisons on Feature {\n  comparisons {\n    description\n    title\n  }\n}\n\nfragment FeatureCredits on Feature {\n  credit {\n    author\n    link\n    source\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAllFeatures {\n  features {\n    ...FeatureSummary\n  }\n}\n\nquery getFeature($slug: String!) {\n  feature(where: {slug: $slug}) {\n    ...FeatureSummary\n  }\n}\n\nquery getAllFeaturesSlugs {\n  features {\n    slug\n  }\n}"): (typeof documents)["query getAllFeatures {\n  features {\n    ...FeatureSummary\n  }\n}\n\nquery getFeature($slug: String!) {\n  feature(where: {slug: $slug}) {\n    ...FeatureSummary\n  }\n}\n\nquery getAllFeaturesSlugs {\n  features {\n    slug\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;