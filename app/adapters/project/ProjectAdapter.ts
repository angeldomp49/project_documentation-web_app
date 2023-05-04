import { resolve } from "path";
import { ProjectBean } from "../../persistance/data/ProjectBean";
import { ProjectHydratedBean } from "../../persistance/data/ProjectHydratedBean";
import { DependencyTagMapper } from "../../persistance/mapping/DependencyTagMapper";
import { ExampleMapper } from "../../persistance/mapping/ExampleMapper";
import { ProjectMapper } from "../../persistance/mapping/ProjectMapper";
import { CreateProjectRequest } from "../../ui/components/project/forms/CreateProjectRequest";
import { ProjectSectionInfo } from "../../ui/components/project/projectSection/ProjectSectionInfo";
import { rejects } from "assert";
import { VersionBeanConverter } from "../converters/VersionBeanConverter";
import { VersionBean } from "../../persistance/data/VersionBean";
import { DependencyTagConverter } from "../converters/DependencyTagConverter";

export class ProjectAdapter{

    constructor(
        private projectPersistor: ProjectMapper, 
        private dependencyTagPersistor: DependencyTagMapper, 
        private examplePersistor: ExampleMapper,
        private versionBeanConverter: VersionBeanConverter,
        private dependencyTagConverter: DependencyTagConverter
        ){}

    async persistNewProject(request: CreateProjectRequest): Promise<string>{


        this.projectPersistor.create(request.projectName);
        this.dependencyTagPersistor.create({
            projectName: request.projectName,
            groupId: request.tagInfo.groupId,
            artifactId: request.tagInfo.artifactId
        });

        this.examplePersistor.create({
            projectName: request.projectName,
            code: request.usage
        });

        return new Promise((resolve, reject) => {
            resolve("finished");
        });

    }

    async allProjectSections(): Promise<ProjectSectionInfo[]>{
        const beans = await this.projectPersistor.all();

        const sections: ProjectSectionInfo[] = 
        beans.map( (bean: ProjectHydratedBean) => ({
            title: bean.name,
            url: `/${bean.id}`,
            dependencyInfo: this.dependencyTagConverter.toTagInfo(bean.dependencyTagBean, bean.versionBeans[0].versionId),
            usageCode: bean.exampleCode,
            historyEntries: bean.versionBeans.map( (versionBean: VersionBean) => this.versionBeanConverter.toHistorySectionInfo(versionBean))
        }));

        return sections;

    }
}