import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) { content: _Content( where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}} locale: $locale ) { total items { ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlankExperienceData ...ExperienceOneData ...PageOneData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment ExperienceOneData on ExperienceOne { Title ...ExperienceData } fragment PageOneData on PageOne { Block { ...BlockOnePropertyData } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription SharingImage { ...ReferenceData } GraphType } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionElementNode { element { ...ElementData } } } fragment ElementData on _IElement { ...IElementData ...TitleOneData } fragment IElementData on _IElement { _metadata { ...IContentInfo } _type: __typename } fragment TitleOneData on TitleOne { Text } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment BlockOnePropertyData on BlockOneProperty { Title }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData } } } fragment PageData on _IContent { ...IContentData ...BlankExperienceData ...ExperienceOneData ...PageOneData } fragment BlockData on _IContent { ...IContentData ...BlockOneData ...PageSeoSettingsData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment ExperienceOneData on ExperienceOne { Title ...ExperienceData } fragment PageOneData on PageOne { Block { ...BlockOnePropertyData } } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription SharingImage { ...ReferenceData } GraphType } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionElementNode { element { ...ElementData } } } fragment ElementData on _IElement { ...IElementData ...TitleOneData } fragment IElementData on _IElement { _metadata { ...IContentInfo } _type: __typename } fragment TitleOneData on TitleOne { Text } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment BlockOnePropertyData on BlockOneProperty { Title } fragment BlockOneData on BlockOne { Title } fragment PageSeoSettingsData on PageSeoSettings { MetaTitle MetaDescription SharingImage { ...ReferenceData } GraphType }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

