
import React, { useState } from 'react'
import { CreateProjectRequest } from './CreateProjectRequest';
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';


const CreateProjectForm = ({initRequest, projectAdapter}: {initRequest: CreateProjectRequest, projectAdapter: ProjectAdapter}) => {

	const [request, setRequest] = useState(initRequest);

	const createProjectHandler = async (request: CreateProjectRequest) => {
	
		projectAdapter.persistNewProject(request)
			.then((message:string) => alert(message));
		
	};

	return (
		<div className="formWrapper p-2">

			<h4 className="mb-4" >Crear un nuevo proyecto</h4>

			<h5 className="mb-4" >Información del proyecto</h5>

			<form method="post" 
				style={{
					width: "600px"
				}}
			>
				<div className="formGroup">
					<MDBInput 
						type="text"
						value={request.projectName} 
						onChange={ (e) => setRequest({ ...request, projectName: e.target.value }) }
						label="Nombre del proyecto"
						className="mb-4"
						/>
				</div>

				<div className="formGroup">
					<MDBTextArea 
						value={request.usage} 
						onChange={ (e) => setRequest({...request, usage: e.target.value}) } 
						label="Usage"
						className="mb-4"
						/>
				</div>

				<h5 className="mb-4" >Información de la dependencia</h5>

				<div className="formGroup">

					<MDBInput 
						type="text" 
						value={request.tagInfo.groupId} 
						onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, groupId: e.target.value }}) } 
						className="mb-4"
						label="GroupId"
						/>
					<br/>

					<MDBInput 
						type="text" 
						value={request.tagInfo.artifactId} 
						onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, artifactId: e.target.value }}) } 
						className="mb-4"
						label="ArtifactId"
						/>
					<br/>

					<MDBInput 
						type="text" 
						value={request.tagInfo.version} 
						onChange={ (e) => setRequest({...request, tagInfo: { ...request.tagInfo, version: e.target.value }}) } 
						className="mb-4"
						label="Release version"
						/>
					<br/>

				</div>

				<button 
					type="button" 
					onClick={ () => createProjectHandler(request)}
					className="btn btn-primary"
					>Crear proyecto</button>

			</form>
		</div>
	)
};

export default CreateProjectForm;