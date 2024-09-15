import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";

export const DefaultGrid : CmsLayoutComponent<{}> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:undefined vb:undefined:DefaultGrid">{ children }</div>);
}

export default DefaultGrid;