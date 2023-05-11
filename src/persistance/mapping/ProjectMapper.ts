import { DependencyTagBean } from "../data/DependencyTagBean";
import { ExampleBean } from "../data/ExampleBean";
import { ProjectBean } from "../data/ProjectBean";
import { ProjectHydratedBean } from "../data/ProjectHydratedBean";
import { VersionBean } from "../data/VersionBean";

export class ProjectMapper{

    async all(): Promise<ProjectBean[]>{

        return [];
    }

    async allHydrated(): Promise<ProjectHydratedBean[]>{

        const projectHydrated: ProjectHydratedBean[] = [];
        
        return projectHydrated;
    }

     async hydratedByName(name: string): Promise<ProjectHydratedBean>{
        return null;
    }

    async update(hydrated: ProjectHydratedBean){
        
    }

    async removeByName(name: string){

    }

    async create(name: string){

    }

    async byId(id: number): Promise<ProjectHydratedBean> {
        return null;
    }

    async updateExampleCode(bean: ExampleBean): Promise<void> {

    }

    async updateDependencyTag(bean: DependencyTagBean): Promise<void> {
        
    }

    async updateVersionBean(bean: VersionBean): Promise<void> {
        
    }

}