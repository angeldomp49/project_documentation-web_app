import { ProjectBean } from "../data/ProjectBean";
import { ProjectHydratedBean } from "../data/ProjectHydratedBean";

export class ProjectMapper{

    async all(): Promise<ProjectBean[]>{
        return [];
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

}