import { VersionBean } from "../../persistance/data/VersionBean";
import { HistorySectionInfo } from "../../ui/components/historyBlockSystem/HistorySectionInfo";

export class VersionBeanConverter{
    toHistorySectionInfo( bean:VersionBean ): HistorySectionInfo{
        return {
            versionTag: bean.project_name,
            blocks: bean.detailSections
        };
    }
}