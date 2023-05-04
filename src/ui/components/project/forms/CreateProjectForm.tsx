
import React, { useState } from 'react'
import { CreateProjectRequest } from './CreateProjectRequest';
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';


const CreateProjectForm = ({}: {}) => {

	const initRequest: CreateProjectRequest = {
		projectName: "",
		usage: "",
		tagInfo: {
			groupId: "",
			artifactId: "",
			version: ""
		}
	};

	const [request, setRequest] = useState(initRequest);

	return (
		<div className="formWrapper">

			<h4>Crear un nuevo proyecto</h4>
			<form method="post">
				<div className="formGroup">
					<label htmlFor="projectName">Nombre del proyecto:</label>
					<input type="text" name="projectName" id="projectName" value={request.projectName} onChange={ (e) => setRequest({ ...request, projectName: e.target.value }) } />
				</div>

				<div className="formGroup">
					<label htmlFor="">Usage:</label>
					<textarea value={request.usage} onChange={ (e) => setRequest({...request, usage: e.target.value}) } />
				</div>

				<div className="formGroup">
					<label htmlFor="">groupId:</label>
					<input type="text" value={request.tagInfo.groupId} onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, groupId: e.target.value }}) } />
					<br/>

					<label htmlFor="">artifactId:</label>
					<input type="text" value={request.tagInfo.artifactId} onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, artifactId: e.target.value }}) } />
					<br/>

					<label htmlFor="">last version:</label>
					<input type="text" value={request.tagInfo.version} onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, version: e.target.value }}) } />
					<br/>
				</div>

				<button type="button" onClick={ () => createProjectHandler(request)}>Crear proyecto</button>

			</form>
		</div>
	)
};

const createProjectHandler = async (request: CreateProjectRequest) => {
	const adapter: ProjectAdapter = new ProjectAdapter();

	adapter.persistNewProject(request)
		.then((message:string) => alert(message));
	
};



export default CreateProjectForm;