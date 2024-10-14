import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { PrideOfPlaceTypeDataFragmentDoc, type PrideOfPlaceTypeDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Pride Of Place Type
 * type for pride of place
 */
export const PrideOfPlaceTypeExperience : CmsComponent<PrideOfPlaceTypeDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
PrideOfPlaceTypeExperience.displayName = "Pride Of Place Type (Experience/PrideOfPlaceType)"
PrideOfPlaceTypeExperience.getDataFragment = () => ['PrideOfPlaceTypeData', PrideOfPlaceTypeDataFragmentDoc]
PrideOfPlaceTypeExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default PrideOfPlaceTypeExperience