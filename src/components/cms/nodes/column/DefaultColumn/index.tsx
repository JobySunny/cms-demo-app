import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";

export const DefaultColumn : CmsLayoutComponent<{}> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:DefaultColumn">{ children }</div>);
}

export default DefaultColumn;