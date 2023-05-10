
import { ProjectConverter } from "../../../src/adapters/converters/ProjectConverter";
import { DependencyTagConverter } from "../../../src/adapters/converters/DependencyTagConverter";
import { VersionBeanConverter } from "../../../src/adapters/converters/VersionBeanConverter";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { ProjectSectionInfo } from "../../../src/ui/components/project/projectSection/ProjectSectionInfo";

test("projectConverter",async () => {
    const converter: ProjectConverter = new ProjectConverter( new DependencyTagConverter(), new VersionBeanConverter() );

    const bean: ProjectHydratedBean = {
        id: 1,
        name: "ExampleProject",
        dependencyTagBean: {
            projectName: "ExampleProject",
            groupId: "org.makechtec.software",
            artifactId: "example_project"
        },
        exampleCode: "public class App{",
        versionBeans: [
            {
                projectName: "ExampleProject",
                versionId: "1.0.0",
                detailSections: [
                    {
                        id: 1,
                        type: "HISTORY_BLOCK_TYPE_TEXT",
                        payload: "some information"
                    },
                    {
                        id: 1,
                        type: "HISTORY_BLOCK_TYPE_CODE",
                        payload: "public class SomeClass{"
                    }
                ]
            }
        ]
    };

    const sectionInfo: ProjectSectionInfo = converter.projectHydratedBeanToSectionInfo(bean);

    const expectedValue: ProjectSectionInfo = {
        title: "ExampleProject",
        url: "/1",
        dependencyInfo: {
            groupId: "org.makechtec.software",
            artifactId: "example_project",
            version: "1.0.0"
        },
        usageCode: "public class App{",
        historyEntries: [
            {
                versionTag: "1.0.0",
                blocks: [
                    {
                        id: 1,
                        type: "HISTORY_BLOCK_TYPE_TEXT",
                        payload: "some information"
                    },
                    {
                        id: 1,
                        type: "HISTORY_BLOCK_TYPE_CODE",
                        payload: "public class SomeClass{"
                    }
                ]
            }
        ]
    };

    expect(sectionInfo).toStrictEqual(expectedValue);

})