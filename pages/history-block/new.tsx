import React from 'react'
import GenericPage from '../../src/ui/commons/pageLayouts/GenericPage';
import CreateHistoryEntry from '../../src/ui/components/historyBlockSystem/forms/CreateHistoryEntry';
import { DependencyTagConverter } from '../../src/adapters/converters/DependencyTagConverter';
import { ProjectConverter } from '../../src/adapters/converters/ProjectConverter';
import { VersionBeanConverter } from '../../src/adapters/converters/VersionBeanConverter';
import { ProjectAdapter } from '../../src/adapters/project/ProjectAdapter';
import { MockProjectMapper } from '../../test/persistance/mapping/MockProjectMapper';
import { ProjectBean } from '../../src/persistance/data/ProjectBean';
import { IdGenerator } from '@makechtec/randomkey';


const newhistoricentry = ({ data }: { data: any }) => {

	const IdGen: IdGenerator = new IdGenerator();

	return (
		<GenericPage>
			<CreateHistoryEntry 
				availableProjects={data.projects}
				idGen={IdGen}
				/>
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

	const projects: ProjectBean[] = await projectAdapter.allProjectNames();

	return { props: { data: {
        projects: projects
    } } };

}

export default newhistoricentry;