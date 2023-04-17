
import { GetServerSideProps } from 'next';
import React from 'react'
import { API_BASE_URL } from '../../config/config';
import { ProjectInfo } from './ProjectInfo';
import { ReleaseHistory } from './ReleaseHistory';
import { IdGenerator } from '@makechtec/randomkey';
import DependencyTab from './DependencyTab';
import NavMenu from '../../components/menus/NavMenu';


const Projects = ({data}:{data: ApiResponse}) => {

    console.log(data.data);

    const idGenerator = new IdGenerator();

    const ProjectInfoComponent = ({project}: {project: ProjectInfo}) => 
        <div>
            <h3>Proyecto: {project.name}</h3>

            <h4>Etiquetas de dependencia:</h4>
            <DependencyTab infoDependency={project.dependencyTag} />
            <ReleaseHistory releases={project.versions} />
            <br/>
            <br/>
        </div>;

  return (
    <div>

        <NavMenu />

        <h2>projects</h2>

        <div>
            {data.data.map( (project: ProjectInfo) => <ProjectInfoComponent key={idGenerator.generate()} project={project} /> )}
        </div>
    </div>
    
  )
}

type ApiResponse = {
    code: number;
    message: string;
    data: ProjectInfo[];
};

export const getServerSideProps: GetServerSideProps<{ data: ApiResponse }> = async (context) => {

    const projectNamesListCall = await fetch( API_BASE_URL + "/documentation/project/hydrated");
    
    const data: ApiResponse = await projectNamesListCall.json();
    
    return {
        props: {
            data: data,
        }
    };
}

export default Projects;