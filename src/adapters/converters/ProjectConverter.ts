import { ProjectBean } from "../../persistance/data/ProjectBean";
import { ProjectHydratedBean } from "../../persistance/data/ProjectHydratedBean";
import { VersionBean } from "../../persistance/data/VersionBean";
import { ProjectSectionInfo } from "../../ui/components/project/projectSection/ProjectSectionInfo";
import { DependencyTagConverter } from "./DependencyTagConverter";
import { VersionBeanConverter } from "./VersionBeanConverter";

export class ProjectConverter{

    public constructor(
        private dependencyTagConverter: DependencyTagConverter,
        private versionBeanConverter: VersionBeanConverter
    ){}

    projectHydratedBeanToSectionInfo( bean: ProjectHydratedBean ): ProjectSectionInfo{
        return {
            title: bean.name,
            url: `/${bean.id}`,
            dependencyInfo: this.dependencyTagConverter.toTagInfo(bean.dependencyTagBean, bean.versionBeans[0].versionId),
            usageCode: bean.exampleCode,
            historyEntries: bean.versionBeans.map( (versionBean: VersionBean) => this.versionBeanConverter.toHistorySectionInfo(versionBean))
        }
    }

}