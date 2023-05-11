
import { DependencyTagBean } from "../../persistance/data/DependencyTagBean";
import { ExampleBean } from "../../persistance/data/ExampleBean";
import { ProjectHydratedBean } from "../../persistance/data/ProjectHydratedBean";
import { ProjectMapper } from "../../persistance/mapping/ProjectMapper";
import { CreateProjectRequest } from "../../ui/components/project/forms/CreateProjectRequest";
import { ProjectSectionInfo } from "../../ui/components/project/projectSection/ProjectSectionInfo";
import { ProjectConverter } from "../converters/ProjectConverter";

export class ProjectAdapter{

    constructor(
        private projectPersistor: ProjectMapper, 
        private projectConverter: ProjectConverter
        ){}

    async persistNewProject(request: CreateProjectRequest): Promise<string>{

        await this.projectPersistor.create(request.projectName);
        await this.projectPersistor.updateDependencyTag({
            projectName: request.projectName,
            groupId: request.tagInfo.groupId,
            artifactId: request.tagInfo.artifactId
        });
        await this.projectPersistor.updateExampleCode({
            projectName: request.projectName,
            code: request.usage
        });

        return "finished";

    }

    async allProjectSections(): Promise<ProjectSectionInfo[]>{
 
        return (await this.projectPersistor.allHydrated())
                .map( (bean: ProjectHydratedBean) => this.projectConverter.projectHydratedBeanToSectionInfo(bean) );

    }

    async findExampleCodeForProject(id: number): Promise<ExampleBean> {
        return (await this.projectPersistor.byId(id)).exampleCode;
    }

    async findDependencyTagForProject(id: number): Promise<DependencyTagBean> {
        return (await this.projectPersistor.byId(id)).dependencyTagBean;
    }

    async saveExampleCode(bean: ExampleBean): Promise<void>{
        await this.projectPersistor.updateExampleCode(bean);
    }

    async saveDependencyTag(bean: DependencyTagBean): Promise<void>{
        await this.projectPersistor.updateDependencyTag(bean);
    }


}