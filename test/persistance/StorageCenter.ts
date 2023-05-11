import { ProjectHydratedBean } from "../../src/persistance/data/ProjectHydratedBean";

export const StorageCenter: {data: ProjectHydratedBean[]} = {
    data: [
        {
            name: "PropertyLoader",
            id: 1,
            exampleCode: {
                projectName: "PropertyLoader",
                code: `
                public class PropertyLoader{

                }
            `
            },
            dependencyTagBean: {
                projectName: "PropertyLoader",
                groupId: "org.makechtec.software",
                artifactId: "property-loader"
            },
            versionBeans: [
                {
                    projectName: "PropertyLoader",
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
            exampleCode: {
                projectName: "TemplateFinder",
                code: `
                public class TemplateFinder{

                }
            `
            },
            dependencyTagBean: {
                projectName: "TemplateFinder",
                groupId: "org.makechtec.software",
                artifactId: "template-finder"
            },
            versionBeans: [
                {
                    projectName: "TemplateFinder",
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
    ]
};