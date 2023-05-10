import React from 'react';
import { useRouter } from 'next/router';
import EditExampleCodeForm from '../../../src/ui/components/project/forms/EditExampleCodeForm';
import { ProjectAdapter } from '../../../src/adapters/project/ProjectAdapter';
import { DependencyTagConverter } from '../../../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../../../src/adapters/converters/ProjectConverter';
import { VersionBeanConverter } from '../../../src/adapters/converters/VersionBeanConverter';
import { DependencyTagMapper } from '../../../src/persistance/mapping/DependencyTagMapper';
import { ExampleMapper } from '../../../src/persistance/mapping/ExampleMapper';
import { MockProjectMapper } from '../../../test/persistance/mapping/MockProjectMapper';
import EditDependencyTagForm from '../../../src/ui/components/project/forms/EditDependencyTagForm';

const edit = ({}: {}) => {

    const router = useRouter();
    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        )
    );

  return (
    <div>
        <h3>Edit example Code</h3>
        <EditExampleCodeForm 
            projectAdapter={projectAdapter} 
            initialExampleCode={{
              projectName: 'TemplateFinder',
              id: 1,
              code: 'public class App{}'
          }} />

        <br />
        <br />

        <h3>Edit dependency tag</h3>

          <EditDependencyTagForm 
            projectAdapter={projectAdapter} 
            initTagInfo={{
              id: 1,
              projectName: 'TemplateFinder',
              groupId: 'org.makechtec.software',
              artifactId: 'template-finder',
              versionId: '1.0.0'
          }} />
    </div>
  )
}

export default edit