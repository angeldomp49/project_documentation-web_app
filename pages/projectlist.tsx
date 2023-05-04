import React, { useEffect, useState } from 'react'
import { ProjectSectionInfo } from '../src/ui/components/project/projectSection/ProjectSectionInfo';
import ProjectSectionUI from '../src/ui/components/project/projectSection/ProjectSectionUI';
import { HISTORY_BLOCK_TYPE } from '../src/ui/components/historyBlockSystem/HistorySectionInfo';
import GenericPage from '../src/ui/commons/pageLayouts/GenericPage';
import { ProjectAdapter } from '../src/adapters/project/ProjectAdapter';
import { ProjectMapper } from '../src/persistance/mapping/ProjectMapper';
import { DependencyTagMapper } from '../src/persistance/mapping/DependencyTagMapper';
import { ExampleMapper } from '../src/persistance/mapping/ExampleMapper';
import { VersionBeanConverter } from '../src/adapters/converters/VersionBeanConverter';
import { DependencyTagConverter } from '../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../src/adapters/converters/ProjectConverter';

const projectlist = ({ }: {}) => {

    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new ProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        )
    );

    const initSections: ProjectSectionInfo[] = [
        {
            title: "Property Loader",
            url: "/projectList/1/edit",
            usageCode: `
                public class App<T>{

                }
            `,
            dependencyInfo: {
                groupId: "org.makechtec.software",
                artifactId: "propertyLoader",
                version: "1.0.0"
            },
            historyEntries: [
                {
                    versionTag: "v1.0.0-lastest",
                    blocks: [
                        {
                            id: 1,
                            type: HISTORY_BLOCK_TYPE.TEXT,
                            payload: "added new features over the last version"
                        },
                        {
                            id: 2,
                            type: HISTORY_BLOCK_TYPE.CODE,
                            payload: `
                                public class App<T>{}
                            `
                        }
                    ]
                }
            ]
        }
    ];

    const [projectSections, setProjectSections] = useState(initSections);

    useEffect(() => {
        projectAdapter.allProjectSections()
            .then( (sections: ProjectSectionInfo[]) => setProjectSections(sections) );
    });

    return (
        <GenericPage>
            <main>
                {
                    projectSections.map( (section: ProjectSectionInfo) => 
                        <ProjectSectionUI projectSectionInfo={section} />)
                }
            </main>
        </GenericPage>
    )
};

export default projectlist;