
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import Code from '../../../commons/highLighter';
import DependencyTab from '../dependencyTab/DependencyTabUI';
import HistorySectionContent from '../../historyBlockSystem/HistorySectionContent';
import { ProjectSectionInfo } from './ProjectSectionInfo';
import { HistorySectionInfo } from '../../historyBlockSystem/HistorySectionInfo';


const ProjectSectionUI = ({projectSectionInfo}: {projectSectionInfo: ProjectSectionInfo}) => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (newActiveTab: string) => setActiveTab(newActiveTab);

    return (
        <section className="projectSection">

            <h3 className="projectTitle">
                {projectSectionInfo.title} 
                <a type='button' href={projectSectionInfo.url} className="btn btn-primary">edit</a>
            </h3>

            <MDBTabs>
                <MDBTabsItem>
                    <MDBTabsLink onClick={e => handleClick("tab1")} >
                        Usage
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={e => handleClick("tab2")} >
                        Dependency Tag
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={e => handleClick("tab3")} >
                        History
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={activeTab == "tab1"} >
                    <Code text={projectSectionInfo.usageCode} />
                </MDBTabsPane>
                <MDBTabsPane show={activeTab == "tab2"} >
                    <DependencyTab infoDependency={projectSectionInfo.dependencyInfo} />
                </MDBTabsPane>
                <MDBTabsPane show={activeTab == "tab3"} >
                    {
                        projectSectionInfo.historyEntries.map( (entry: HistorySectionInfo) => 
                            <HistorySectionContent info={entry} />
                        )
                    }
                </MDBTabsPane>
            </MDBTabsContent>

        </section>
    )
}

export default ProjectSectionUI;