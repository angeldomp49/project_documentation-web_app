import { DependencyTagMapper } from "../../persistance/mapping/DependencyTagMapper";
import { ExampleMapper } from "../../persistance/mapping/ExampleMapper";
import { ProjectMapper } from "../../persistance/mapping/ProjectMapper";
import { CreateProjectRequest } from "../../ui/components/project/forms/CreateProjectRequest";

export class ProjectAdapter{
    async persistNewProject(request: CreateProjectRequest): Promise<string>{
        const projectPersistor: ProjectMapper = new ProjectMapper();
        const dependencyTagPersistor: DependencyTagMapper = new DependencyTagMapper();
        const examplePersistor: ExampleMapper = new ExampleMapper();

        projectPersistor.create(request.projectName);
        dependencyTagPersistor.create({
            projectName: request.projectName,
            groupId: request.tagInfo.groupId,
            artifactId: request.tagInfo.artifactId
        });

        examplePersistor.create({
            projectName: request.projectName,
            code: request.usage
        });

        return new Promise((resolve, reject) => {
            resolve("finished");
        });

    }
}