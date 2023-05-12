import React, { useEffect, useState } from 'react'
import EditSingleBlockForm from '../../../../src/ui/components/historyBlockSystem/forms/EditSingleBlockForm';
import { VersionBean } from '../../../../src/persistance/data/VersionBean';
import GenericPage from '../../../../src/ui/commons/pageLayouts/GenericPage';
import { IdGenerator } from '@makechtec/randomkey';
import { ProjectAdapter } from '../../../../src/adapters/project/ProjectAdapter';
import { MockProjectMapper } from '../../../../test/persistance/mapping/MockProjectMapper';
import { ProjectConverter } from '../../../../src/adapters/converters/ProjectConverter';
import { DependencyTagConverter } from '../../../../src/adapters/converters/DependencyTagConverter';
import { VersionBeanConverter } from '../../../../src/adapters/converters/VersionBeanConverter';
import { ProjectHydratedBean } from '../../../../src/persistance/data/ProjectHydratedBean';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmptySpace from '../../../../src/ui/commons/spacing/EmptySpace';
import { useRouter } from 'next/router';


const edit = ({ data }: { data: any }) => {

	const projectAdapter: ProjectAdapter = new ProjectAdapter(
		new MockProjectMapper(),
		new ProjectConverter(
			new DependencyTagConverter(),
			new VersionBeanConverter()
		)
	);

	const idGen: IdGenerator = new IdGenerator();
	const router = useRouter();
	const [projectName, setProjectName] = useState("");

	useEffect( () => {
		projectAdapter.byId(parseInt(router.query.projectId))
			.then(project => setProjectName(project.name));
	});

	return (
		<GenericPage>

			<EmptySpace height={4} />
			<main className="col-6 p-2">
				<h3>Editar historico</h3>
				
				<br />
				<br />

				<h5>Proyecto: {projectName}</h5>
				<br />
				<h5>Version: {router.query.versionId}</h5>
				<br />

				{
					data.detailSections.map(
						section => {
							return(
								<>
									<EditSingleBlockForm
										key={idGen.generate()}
										initialBlock={section}
										parentVersionBean={data}
										projectAdapter={projectAdapter} />
									<EmptySpace height={4} />
								</>
							);
						}
					)
				}
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

	const project: ProjectHydratedBean = await projectAdapter.byId(parseInt(context.params.projectId));

	return {
		props: {
			data: project.versionBeans.find((versionBean: VersionBean) => versionBean.versionId === context.params.versionId)
		}
	}
}

export default edit;