
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBTabs, MDBTabsLink, MDBTabsItem, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { TagInfo } from './TagInfo';
import { Tab } from '../../../commons/symbols/Tab';

export default function DependencyTab({ infoDependency } : { infoDependency: TagInfo}){

    const [activeTab, setActiveTab] = useState("tab1");

    const copyDependency = (dependencyTypeId: number) => {

        let dependencyFormatedInfo = "";

        if(dependencyTypeId === 1){

            dependencyFormatedInfo =  `
            <dependency>
                <groupId>${infoDependency.groupId}</groupId>
                <artifactId>${infoDependency.artifactId}</artifactId>
                <version>${infoDependency.version}</version>
            <dependency>
            `;

        }
        else{

            dependencyFormatedInfo =  `implementation: "${infoDependency.groupId}:${infoDependency.artifactId}:${infoDependency.version}"`;
        }

        window.navigator['clipboard'].writeText(dependencyFormatedInfo);

        alert("copied to clipboard");

    };

    const handleClick = newActiveTab => {
        setActiveTab(newActiveTab);
    };

    return(
        <>
            <MDBTabs>
                <MDBTabsItem>
                    <MDBTabsLink onClick={ e => handleClick("tab1") } >
                        Maven
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={ e => handleClick("tab2") } >
                        Gradle
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane style={{cursor: "pointer"}} show={ activeTab == "tab1" } onClick={ e => copyDependency(1) } >
                    <p  className='maven-dependency-content'>
                        <Tab /><Tab />&lt;dependency&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;groupId&gt;{infoDependency.groupId}&lt;/groupId&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;artifactId&gt;{infoDependency.artifactId}&lt;/artifactId&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;version&gt;{infoDependency.version}&lt;/version&gt;<br />
                        <Tab /><Tab />&lt;/dependency&gt;<br />
                    </p>
                </MDBTabsPane>
                <MDBTabsPane style={{cursor: "pointer"}} show={ activeTab == "tab2" } onClick={ e => copyDependency(2) } >
                    <p className='gradle-dependency-content'>
                        <Tab /><Tab />implementation '{infoDependency.groupId}:{infoDependency.artifactId}:{infoDependency.version}'<br />
                    </p>
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}

