
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
                        versionId: "1.0.0",
                        detailSections: [
                            {
                                id: 1,
                                type: "HISTORY_BLOCK_TYPE_TEXT",
                                payload: "some information"
                            }
                        ]
                    }
                ]
            },
            {
                name: "TemplateFinder",
                id: 2,
                exampleCode: `
                    public class TemplateFinder{

                    }
                `,
                dependencyTagBean: {
                    projectName: "TemplateFinder",
                    groupId: "org.makechtec.software",
                    artifactId: "template-finder"
                },
                versionBeans: [
                    {
                        project_name: "TemplateFinder",
                        versionId: "1.1.0",
                        detailSections: [
                            {
                                id: 1,
                                type: "HISTORY_BLOCK_TYPE_TEXT",
                                payload: "some information"
                            },
                            {
                                id: 2,
                                type: "HISTORY_BLOCK_TYPE_CODE",
                                payload: `
                                public class TemplateFinder{
            
                                }
                            `,
                            },
                            {
                                id: 3,
                                type: "HISTORY_BLOCK_TYPE_TEXT",
                                payload: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            }
                        ]
                    }
                ]
            }
        ];
        
        return projectHydrated;
    }


}