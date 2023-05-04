import React, { useEffect, useState } from 'react'
import { ProjectSectionInfo } from '../app/ui/components/project/projectSection/ProjectSectionInfo';
import ProjectSectionUI from '../app/ui/components/project/projectSection/ProjectSectionUI';
import { HISTORY_BLOCK_TYPE } from '../app/ui/components/historyBlockSystem/HistorySectionInfo';
import GenericPage from '../app/ui/commons/pageLayouts/GenericPage';
import { ProjectAdapter } from '../app/adapters/project/ProjectAdapter';
import { ProjectMapper } from '../app/persistance/mapping/ProjectMapper';
import { DependencyTagMapper } from '../app/persistance/mapping/DependencyTagMapper';
import { ExampleMapper } from '../app/persistance/mapping/ExampleMapper';
import { VersionBeanConverter } from '../app/adapters/converters/VersionBeanConverter';
import { DependencyTagConverter } from '../app/adapters/converters/DependencyTagConverter';

const projectlist = ({ }: {}) => {

    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new ProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new VersionBeanConverter(),
        new DependencyTagConverter()
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