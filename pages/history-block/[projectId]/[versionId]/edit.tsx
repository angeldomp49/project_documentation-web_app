import React from 'react'
import { HistoryBlockAdapter } from '../../../../src/adapters/blockSystem/HistoryBlockAdapter';
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


const edit = ({ data }: { data: any }) => {

	const historyBlockAdapter: HistoryBlockAdapter = new HistoryBlockAdapter();
	const idGen: IdGenerator = new IdGenerator();


	return (
		<GenericPage>
			<h3>Edit version blocks</h3>

			{
				data.detailSections.map(
					section => <EditSingleBlockForm
						key={ idGen.generate() }
						initialBlock={section}
						parentVersionBean={data}
						historyBlockAdapter={historyBlockAdapter} />
				)
			}

		</GenericPage>
	)
}

export async function getServerSideProps(context){

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
			data: project.versionBeans.find( (versionBean: VersionBean) => versionBean.versionId === context.params.versionId)
		}
	}
}

export default edit;