import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const IContentListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const ReferenceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const IElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IElementData on _IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ExperienceElementTestDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceElementTestData on ExperienceElementTest {
  title
}
    `;
export const TitleOneDataFragmentDoc = /*#__PURE__*/ gql`
    fragment TitleOneData on TitleOne {
  Text
}
    `;
export const ElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ElementData on _IElement {
  ...IElementData
  ...ExperienceElementTestData
  ...TitleOneData
}
    `;
export const CompositionDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionElementNode {
    element {
      ...ElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const DestinationPageTypeDataFragmentDoc = /*#__PURE__*/ gql`
    fragment DestinationPageTypeData on DestinationPageType {
  DestinationID
  ...ExperienceData
}
    `;
export const ExperienceOneDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceOneData on ExperienceOne {
  Title
  ...ExperienceData
}
    `;
export const LinkItemDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const PrideOfPlaceTypeDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PrideOfPlaceTypeData on PrideOfPlaceType {
  Title
  description
  ImageList {
    ...LinkItemData
  }
  ...ExperienceData
}
    `;
export const HomeSectionOneTypePropertyDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HomeSectionOneTypePropertyData on HomeSectionOneTypeProperty {
  MainTitle
  SecondaryTitle
  Description
  BannerImage {
    ...LinkData
  }
}
    `;
export const HomePageTypeDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HomePageTypeData on HomePageType {
  Block {
    ...HomeSectionOneTypePropertyData
  }
}
    `;
export const PageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageData on _IContent {
  ...IContentData
  ...BlankExperienceData
  ...DestinationPageTypeData
  ...ExperienceOneData
  ...PrideOfPlaceTypeData
  ...HomePageTypeData
}
    `;
export const HomeSectionOneTypeDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HomeSectionOneTypeData on HomeSectionOneType {
  MainTitle
  SecondaryTitle
  Description
  BannerImage {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const SimpleCardDataFragmentDoc = /*#__PURE__*/ gql`
    fragment SimpleCardData on SimpleCard {
  image {
    ...LinkData
  }
}
    `;
export const BlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockData on _IContent {
  ...IContentData
  ...HomeSectionOneTypeData
  ...PageSeoSettingsData
  ...SimpleCardData
}
    `;
export const getContentTypeDocument = /*#__PURE__*/ gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;
export const getContentByIdDocument = /*#__PURE__*/ gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${HomeSectionOneTypeDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ReferenceDataFragmentDoc}
${SimpleCardDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ExperienceElementTestDataFragmentDoc}
${TitleOneDataFragmentDoc}
${DestinationPageTypeDataFragmentDoc}
${ExperienceOneDataFragmentDoc}
${PrideOfPlaceTypeDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HomePageTypeDataFragmentDoc}
${HomeSectionOneTypePropertyDataFragmentDoc}`;
export const getContentByPathDocument = /*#__PURE__*/ gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: _Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ExperienceElementTestDataFragmentDoc}
${TitleOneDataFragmentDoc}
${DestinationPageTypeDataFragmentDoc}
${ExperienceOneDataFragmentDoc}
${PrideOfPlaceTypeDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HomePageTypeDataFragmentDoc}
${HomeSectionOneTypePropertyDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;