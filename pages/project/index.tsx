import React, { useEffect, useState } from 'react'
import { ProjectSectionInfo } from '../../src/ui/components/project/projectSection/ProjectSectionInfo';
import ProjectSectionUI from '../../src/ui/components/project/projectSection/ProjectSectionUI';
import GenericPage from '../../src/ui/commons/pageLayouts/GenericPage';
import { ProjectAdapter } from '../../src/adapters/project/ProjectAdapter';
import { VersionBeanConverter } from '../../src/adapters/converters/VersionBeanConverter';
import { DependencyTagConverter } from '../../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../../src/adapters/converters/ProjectConverter';
import { MockProjectMapper } from '../../test/persistance/mapping/MockProjectMapper';
import { IdGenerator } from '@makechtec/randomkey';
import EmptySpace from '../../src/ui/commons/spacing/EmptySpace';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const projectlist = ({}: {}) => {

    const idGen: IdGenerator = new IdGenerator();

    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
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
            <EmptySpace height={4} />
            <main className="col-6">
                {
                    projectSections.map( (section: ProjectSectionInfo) => 
                        {
                            return (<>
                                <ProjectSectionUI 
                                key={idGen.generate()} 
                                projectSectionInfo={section} 
                                idGen={idGen}
                                />
                                <EmptySpace height={2} />
                            </>)
                        })
                }
            </main>
        </GenericPage>
    )
};

export default projectlist;