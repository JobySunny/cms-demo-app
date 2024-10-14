import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { DestinationPageTypeDataFragmentDoc, type DestinationPageTypeDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Destination Page Type
 * 
 */
export const DestinationPageTypeExperience : CmsComponent<DestinationPageTypeDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
DestinationPageTypeExperience.displayName = "Destination Page Type (Experience/DestinationPageType)"
DestinationPageTypeExperience.getDataFragment = () => ['DestinationPageTypeData', DestinationPageTypeDataFragmentDoc]
DestinationPageTypeExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default DestinationPageTypeExperience