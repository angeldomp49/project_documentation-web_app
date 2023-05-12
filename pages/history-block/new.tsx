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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmptySpace from '../../src/ui/commons/spacing/EmptySpace';


const newhistoricentry = ({ data }: { data: any }) => {

	const IdGen: IdGenerator = new IdGenerator();

	return (
		<GenericPage>

			<EmptySpace height={4} />
			<main className="col-6">
				<CreateHistoryEntry 
					availableProjects={data.projects}
					idGen={IdGen}
					/>
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

	const projects: ProjectBean[] = await projectAdapter.allProjectNames();

	return { props: { data: {
        projects: projects
    } } };

}

export default newhistoricentry;