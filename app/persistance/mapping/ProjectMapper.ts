import { ProjectBean } from "../data/ProjectBean";
import { ProjectHydratedBean } from "../data/ProjectHydratedBean";
import { HISTORY_BLOCK_TYPE } from "../../ui/components/historyBlockSystem/HistorySectionInfo";

export class ProjectMapper{

    async all(): Promise<ProjectBean[]>{

        return [];
    }

    async allHydrated(): Promise<ProjectHydratedBean[]>{

        const projectHydrated: ProjectHydratedBean[] = [
            {
                name: "Property Loader",
                id: 1,
                exampleCode: `
                    public class PropertyLoader{

                    }
                `,
                dependencyTagBean: {
                    projectName: "PropertyLoader",
                    groupId: "org.makechtec.software",
                    artifactId: "property-loader"
                },
                versionBeans: [
                    {
                        project_name: "PropertyLoader",
                        detailSections: [
                            {
                                id: 1,
                                type: HISTORY_BLOCK_TYPE.TEXT,
                                payload: "some information"
                            }
                        ]
                    }
                ]
            }
        ];
        
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

}