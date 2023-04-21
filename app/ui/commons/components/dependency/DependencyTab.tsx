
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBTabs, MDBTabsLink, MDBTabsItem, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { useEffect, useRef, useState } from 'react';
import { InfoDependency } from './InfoDependency';
import { Tab } from '../symbols/Tab';

export default function DependencyTab({ infoDependency } : { infoDependency: InfoDependency}){

    const [activeTab, setActiveTab] = useState("tab1");
    let mavenContentRef = null;
    let gradleContentRef = null;

    if(typeof window !== "undefined"){
        mavenContentRef = useRef(window.document.createElement('div'));
        gradleContentRef = useRef(window.document.createElement('div'));
    }

    const copyMavenDependency = () => {
        window.navigator['clipboard'].writeText(mavenContentRef.current.textContent);
    };

    const copyGradleDependency = () => {
        window.navigator['clipboard'].writeText(gradleContentRef.current.textContent);
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
                <MDBTabsPane show={ activeTab == "tab1" } >
                    <p  className='maven-dependency-content' ref={mavenContentRef}  onClick={copyMavenDependency}>
                        <Tab /><Tab />&lt;dependency&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;groupId&gt;{infoDependency.groupId}&lt;/groupId&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;artifactId&gt;{infoDependency.artifactId}&lt;/artifactId&gt;<br />
                        <Tab /><Tab /><Tab /><Tab />&lt;version&gt;{infoDependency.version}&lt;/version&gt;<br />
                        <Tab /><Tab />&lt;/dependency&gt;<br />
                    </p>
                </MDBTabsPane>
                <MDBTabsPane show={ activeTab == "tab2" } >
                    <p className='gradle-dependency-content' ref={gradleContentRef} onClick={copyGradleDependency}>
                        <Tab /><Tab />implementation '{infoDependency.groupId}:{infoDependency.artifactId}:{infoDependency.version}'<br />
                    </p>
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}

