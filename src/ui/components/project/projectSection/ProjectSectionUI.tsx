
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import Code from '../../../commons/highLighter';
import DependencyTab from '../dependencyTab/DependencyTabUI';
import HistorySectionContent from '../../historyBlockSystem/HistorySectionContent';
import { ProjectSectionInfo } from './ProjectSectionInfo';
import { HistorySectionInfo } from '../../historyBlockSystem/HistorySectionInfo';
import { IdGenerator } from '@makechtec/randomkey';


const ProjectSectionUI = ({projectSectionInfo, idGen}: {projectSectionInfo: ProjectSectionInfo, idGen: IdGenerator}) => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (newActiveTab: string) => setActiveTab(newActiveTab);

    const tabContainerStyle = {
        borderRadius: "10px",
        boxShadow:  "rgb(209 221 229) 8px 8px 16px, rgb(255, 255, 255) -8px -8px 16px"
    };


    return (
        <section className="projectSection">

            <h3 className="projectTitle">
                {projectSectionInfo.title} 
                <a type='button' href={projectSectionInfo.url} className="btn btn-link">edit</a>
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
                    <div 
                        className="tab-container p-2" 
                        style={tabContainerStyle}>
                        <Code text={projectSectionInfo.usageCode} />
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={activeTab == "tab2"} >
                    <div 
                        className="tab-container p-2" 
                        style={tabContainerStyle}>
                        <DependencyTab infoDependency={projectSectionInfo.dependencyInfo} />
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={activeTab == "tab3"} >
                    <div 
                        className="tab-container p-2" 
                        style={tabContainerStyle}>
                        {
                            projectSectionInfo.historyEntries.map( (entry: HistorySectionInfo) => 
                                <HistorySectionContent key={idGen.generate()} idGen={idGen} info={entry} />
                            )
                        }
                    </div>
                </MDBTabsPane>
            </MDBTabsContent>

        </section>
    )
}

export default ProjectSectionUI;