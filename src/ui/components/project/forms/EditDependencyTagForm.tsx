import React, { useState } from 'react';
import { TagInfo } from '../dependencyTab/TagInfo';
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';
import { DependencyTagBean } from '../../../../persistance/data/DependencyTagBean';
import { MDBInput } from 'mdb-react-ui-kit';


const EditDependencyTagForm = ({ projectAdapter, initTagInfo }: { projectAdapter: ProjectAdapter, initTagInfo: DependencyTagBean }) => {


	const [tagInfo, setTagInfo] = useState(initTagInfo);


	return (
		<div className="formWrapper" >
			<div className="formGroup">

				<MDBInput 
					type="text" 
					value={tagInfo.groupId} 
					onChange={(e) => setTagInfo({ ...tagInfo, groupId: e.target.value })} 
					className="mb-4"
					label="GroupId"
					/>
				<br />

				<MDBInput 
					type="text" 
					value={tagInfo.artifactId} 
					onChange={(e) => setTagInfo({ ...tagInfo, artifactId: e.target.value })} 
					className="mb-4"
					label="ArtifactId"
					/>
				<br />

				<MDBInput 
					type="text" 
					value={tagInfo.versionId} 
					onChange={(e) => setTagInfo({ ...tagInfo, versionId: e.target.value })} 
					className="mb-4"
					label="Release version"
					/>
				<br />
			</div>

			<div className="formGroup">
				<button 
					type='button' 
					onClick={e => projectAdapter.saveDependencyTag(tagInfo)} 
					className="btn btn-primary"
					>Save!</button>
			</div>
		</div>
	)
}

export default EditDependencyTagForm;