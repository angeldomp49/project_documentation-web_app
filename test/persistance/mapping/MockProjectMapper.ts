
import { DependencyTagBean } from "../../../src/persistance/data/DependencyTagBean";
import { ExampleBean } from "../../../src/persistance/data/ExampleBean";
import { ProjectBean } from "../../../src/persistance/data/ProjectBean";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { VersionBean } from "../../../src/persistance/data/VersionBean";
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

     async hydratedByName(name: string): Promise<ProjectHydratedBean>{
        return StorageCenter.data.find(bean => bean.name === name);
    }

    async update(hydrated: ProjectHydratedBean){
        const index: number = StorageCenter.data.findIndex( (bean:ProjectHydratedBean) => bean.id === hydrated.id);

        StorageCenter.data.splice(index, 1, hydrated);
    }

    async removeByName(name: string){
        const index: number = StorageCenter.data.findIndex( (bean:ProjectHydratedBean) => bean.name === name);
        StorageCenter.data.splice(index, 1);
    }

    async create(name: string){
        StorageCenter.data.push({
            name: name,
            exampleCode: {
                projectName: name,
                code: ""
            },
            dependencyTagBean: {
                groupId: "",
                artifactId: "",
                projectName: name
            },
            versionBeans: [

            ]
        });
    }

    async updateExampleCode(bean: ExampleBean): Promise<void> {
        const index: number = StorageCenter.data.findIndex( (projectBean:ProjectHydratedBean) => projectBean.name === bean.projectName);
        StorageCenter.data[index].exampleCode = bean;
    }

    async updateDependencyTag(bean: DependencyTagBean): Promise<void> {
        const index: number = StorageCenter.data.findIndex( (projectBean:ProjectHydratedBean) => projectBean.name === bean.projectName);
        StorageCenter.data[index].dependencyTagBean = bean;
    }

    async updateVersionBean(bean: VersionBean): Promise<void> {
        const index: number = StorageCenter.data.findIndex( (projectBean:ProjectHydratedBean) => projectBean.name === bean.projectName);
        const versionIndex = StorageCenter.data[index].versionBeans.findIndex( (versionBean: VersionBean) => versionBean.versionId === bean.versionId);

        StorageCenter.data[index].versionBeans[versionIndex] = bean;
    }


}