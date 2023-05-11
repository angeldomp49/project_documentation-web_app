
import { DependencyTagBean } from "../../../src/persistance/data/DependencyTagBean";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { DependencyTagMapper } from "../../../src/persistance/mapping/DependencyTagMapper";
import { StorageCenter } from "../StorageCenter";

export class MockDependencyTagMapper extends DependencyTagMapper{

    async create(dependencyTagBean: DependencyTagBean){
        const projectIndex = StorageCenter.data.findIndex( (bean: ProjectHydratedBean) => bean.name === dependencyTagBean.projectName);

        StorageCenter.data[projectIndex].dependencyTagBean = dependencyTagBean;
    }

    async update(dependencyTagBean: DependencyTagBean){
        const index = StorageCenter.data.findIndex( (bean: ProjectHydratedBean) => bean.name === dependencyTagBean.projectName);

        StorageCenter.data.splice(index, 1, { ...StorageCenter.data[index], dependencyTagBean: dependencyTagBean });
        
    }

    async remove(projectName: string){

        const index = StorageCenter.data.findIndex( (bean: ProjectHydratedBean) => bean.name === projectName);

        StorageCenter.data.splice(index , 1, null);
    }
}