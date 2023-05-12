import React from 'react'
import GenericPage from '../../src/ui/commons/pageLayouts/GenericPage';
import CreateProjectForm from '../../src/ui/components/project/forms/CreateProjectForm';
import { DependencyTagConverter } from '../../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../../src/adapters/converters/ProjectConverter';
import { VersionBeanConverter } from '../../src/adapters/converters/VersionBeanConverter';
import { ProjectAdapter } from '../../src/adapters/project/ProjectAdapter';
import { MockProjectMapper } from '../../test/persistance/mapping/MockProjectMapper';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmptySpace from '../../src/ui/commons/spacing/EmptySpace';

const newProject = ({}: {}) => {

  const projectAdapter: ProjectAdapter = new ProjectAdapter(
    new MockProjectMapper(),
    new ProjectConverter(
        new DependencyTagConverter(),
        new VersionBeanConverter()
    )
);

  return (
    <GenericPage>
        <CreateProjectForm initRequest={{
        projectName: '',
        usage: '',
        tagInfo: {
          groupId: '',
          artifactId: '',
          version: ''
        }
      }} 
      projectAdapter={projectAdapter} />

      <EmptySpace height={4} />
    </GenericPage>
  )
}

export default newProject;