import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ExperienceOneDataFragmentDoc, type ExperienceOneDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Experience One
 * Experience Item
 */
export const ExperienceOneExperience : CmsComponent<ExperienceOneDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExperienceOneExperience.displayName = "Experience One (Experience/ExperienceOne)"
ExperienceOneExperience.getDataFragment = () => ['ExperienceOneData', ExperienceOneDataFragmentDoc]
ExperienceOneExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExperienceOneExperience