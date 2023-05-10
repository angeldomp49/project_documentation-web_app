import React, { useEffect, useState } from 'react';
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
import { ExampleBean } from '../../../src/persistance/data/ExampleBean';
import { DependencyTagBean } from '../../../src/persistance/data/DependencyTagBean';

const edit = ({ }: {}) => {

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

    const initialExampleCode: ExampleBean = {
        projectName: "",
        code: ""
    };
    const initialDependencyTag: DependencyTagBean = {
        groupId: "",
        artifactId: "",
        projectName: ""
    };

    const [exampleCode, setExampleCode] = useState(initialExampleCode);
    const [dependencyTag, setDependencyTag] = useState(initialDependencyTag);

    useEffect(() => {
        const projectId: number = parseInt("1");

        projectAdapter.findExampleCodeForProject(projectId)
            .then((exampleCodeNew: ExampleBean) => {
                setExampleCode(exampleCodeNew);
            });

        projectAdapter.findDependencyTagForProject(projectId)
            .then((dependencyTagNew: DependencyTagBean) => setDependencyTag(dependencyTagNew));
    }, []);

    return (
        <div>
            <h3>Edit example Code</h3>
            <EditExampleCodeForm
                projectAdapter={projectAdapter}
                initialExampleCode={exampleCode} />

            <br />
            <br />

            <h3>Edit dependency tag</h3>

            <EditDependencyTagForm
                projectAdapter={projectAdapter}
                initTagInfo={dependencyTag} />
        </div>
    )
}

export default edit