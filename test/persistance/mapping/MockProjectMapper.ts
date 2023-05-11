
import { ProjectBean } from "../../../src/persistance/data/ProjectBean";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { ProjectMapper } from "../../../src/persistance/mapping/ProjectMapper";
import { StorageCenter } from "../StorageCenter";

export class MockProjectMapper extends ProjectMapper {


    async all(): Promise<ProjectBean[]> {

        return StorageCenter.data.map((bean: ProjectHydratedBean) => ({
            name: bean.name,
            id: bean.id
        }));
    }

    async allHydrated(): Promise<ProjectHydratedBean[]>{
        
        return StorageCenter.data;
    }

    async byId(id: number): Promise<ProjectHydratedBean> {
        return StorageCenter.data.find(bean => bean.id === id);
    }


}