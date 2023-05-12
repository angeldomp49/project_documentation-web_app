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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmptySpace from '../../../src/ui/commons/spacing/EmptySpace';

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

            <EmptySpace height={4} />
            <main className="col-6 p-2">

                <h3 className="mb-4">Editar código de ejemplo</h3>

                <EditExampleCodeForm
                    projectAdapter={projectAdapter}
                    initialExampleCode={data.initExampleCode} />

                <br />
                <br />

                <h3 className="mb-4">Editar etiqueta de dependencia</h3>

                <EditDependencyTagForm
                    projectAdapter={projectAdapter}
                    initTagInfo={data.initialDependencyTag} />
            </main>
            <EmptySpace height={4} />
            
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