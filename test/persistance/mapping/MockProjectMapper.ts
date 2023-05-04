
import { ProjectBean } from "../../../src/persistance/data/ProjectBean";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { ProjectMapper } from "../../../src/persistance/mapping/ProjectMapper";

export class MockProjectMapper extends ProjectMapper {


    async all(): Promise<ProjectBean[]> {
        return [
            {
                name: "PropertyLoader",
                id: 1
            },
            {
                name: "TemplateFinder",
                id: 2
            }
        ];
    }

    async allHydrated(): Promise<ProjectHydratedBean[]>{

        const projectHydrated: ProjectHydratedBean[] = [
            {
                name: "PropertyLoader",
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
                                type: "HISTORY_BLOCK_TYPE_TEXT",
                                payload: "some information"
                            }
                        ]
                    }
                ]
            }
        ];
        
        return projectHydrated;
    }


}