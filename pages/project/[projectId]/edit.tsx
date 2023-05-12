import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EditExampleCodeForm from '../../../src/ui/components/project/forms/EditExampleCodeForm';
import { ProjectAdapter } from '../../../src/adapters/project/ProjectAdapter';
import { DependencyTagConverter } from '../../../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../../../src/adapters/converters/ProjectConverter';
import { VersionBeanConverter } from '../../../src/adapters/converters/VersionBeanConverter';
import { MockProjectMapper } from '../../../test/persistance/mapping/MockProjectMapper';
import EditDependencyTagForm from '../../../src/ui/components/project/forms/EditDependencyTagForm';
import { ExampleBean } from '../../../src/persistance/data/ExampleBean';
import { DependencyTagBean } from '../../../src/persistance/data/DependencyTagBean';
import GenericPage from '../../../src/ui/commons/pageLayouts/GenericPage';

const edit = ({data}: {data: any}) => {

    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        )
    );

    return (
        <GenericPage>
            <h3>Edit example Code</h3>
            <EditExampleCodeForm
                projectAdapter={projectAdapter}
                initialExampleCode={data.initExampleCode} />

            <br />
            <br />

            <h3>Edit dependency tag</h3>

            <EditDependencyTagForm
                projectAdapter={projectAdapter}
                initTagInfo={data.initialDependencyTag} />
        </GenericPage>
    )
}

export async function getServerSideProps(context) {


    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        )
    );

    const projectId: number = parseInt(context.params.projectId);

    const initExampleCode: ExampleBean = await projectAdapter.findExampleCodeForProject(projectId);
    const initialDependencyTag: DependencyTagBean = await projectAdapter.findDependencyTagForProject(projectId);


   
    return { props: { data: {
        initExampleCode: initExampleCode,
        initialDependencyTag: initialDependencyTag
    } } };
  }

export default edit;