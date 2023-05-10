import React, { useEffect, useState } from 'react'
import { ProjectSectionInfo } from '../src/ui/components/project/projectSection/ProjectSectionInfo';
import ProjectSectionUI from '../src/ui/components/project/projectSection/ProjectSectionUI';
import GenericPage from '../src/ui/commons/pageLayouts/GenericPage';
import { ProjectAdapter } from '../src/adapters/project/ProjectAdapter';
import { DependencyTagMapper } from '../src/persistance/mapping/DependencyTagMapper';
import { ExampleMapper } from '../src/persistance/mapping/ExampleMapper';
import { VersionBeanConverter } from '../src/adapters/converters/VersionBeanConverter';
import { DependencyTagConverter } from '../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../src/adapters/converters/ProjectConverter';
import { MockProjectMapper } from '../test/persistance/mapping/MockProjectMapper';
import { IdGenerator } from '@makechtec/randomkey';

const projectlist = ({}: {}) => {

    const idGen: IdGenerator = new IdGenerator();

    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        )
    );

    const [projectSections, setProjectSections] = useState([]);

    useEffect(() => {
        projectAdapter.allProjectSections()
            .then( (sections: ProjectSectionInfo[]) => setProjectSections(sections) );
    }, []);

    return (
        <GenericPage>
            <main>
                {
                    projectSections.map( (section: ProjectSectionInfo) => 
                        <ProjectSectionUI 
                            key={idGen.generate()} 
                            projectSectionInfo={section} 
                            idGen={idGen}
                            />)
                }
            </main>
        </GenericPage>
    )
};

export default projectlist;