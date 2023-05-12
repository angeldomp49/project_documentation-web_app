import { ProjectHydratedBean } from "../../src/persistance/data/ProjectHydratedBean";

export const StorageCenter: {data: ProjectHydratedBean[]} = {
    data: [
        {
            name: "Property Loader",
            id: 1,
            exampleCode: {
                projectName: "Property Loader",
                code: `
                public class App{

                    // first we create a property loader
                    // then we search the property in the filename

                    public static void main(String[] args){

                        var loader = new PropertyLoader("filename.properties");

                        var property = loader.load("property_name");

                        System.out.println(property);

                    }

                }
            `
            },
            dependencyTagBean: {
                projectName: "Property Loader",
                groupId: "org.makechtec.software",
                versionId: "1.0.0",
                artifactId: "property-loader"
            },
            versionBeans: [
                {
                    projectId: 1,
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
                artifactId: "template-finder",
                versionId: "1.0.0"
            },
            versionBeans: [
                {
                    projectId: 2,
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