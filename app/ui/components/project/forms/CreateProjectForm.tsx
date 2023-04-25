
import React, { useState } from 'react'
import NavMenu from '../../menus/NavMenu';
import { API_BASE_URL } from '../../../config/config';


const CreateProjectForm = ({}: {}) => {

	const [projectName, setProjectName] = useState("");
	const [usage, setUsage] = useState("");

	const [groupId, setGroupId] = useState("");
	const [artifactId, setArtifactId] = useState("");
	const [lastVersion, setLastVersion] = useState("");

	return (
		<div className="formWrapper">

			<h4>Crear un nuevo proyecto</h4>
			<form method="post">
				<div className="formGroup">
					<label htmlFor="projectName">Nombre del proyecto:</label>
					<input type="text" name="projectName" id="projectName" value={projectName} onChange={ (e) => setProjectName(e.target.value) } />
				</div>

				<div className="formGroup">
					<label htmlFor="">Usage:</label>
					<textarea value={usage} onChange={ (e) => setUsage(e.target.value) } />
				</div>

				<div className="formGroup">
					<label htmlFor="">groupId:</label>
					<input type="text" value={groupId} onChange={ (e) => setGroupId(e.target.value) } />
					<br/>

					<label htmlFor="">artifactId:</label>
					<input type="text" value={artifactId} onChange={ (e) => setArtifactId(e.target.value) } />
					<br/>

					<label htmlFor="">last version:</label>
					<input type="text" value={lastVersion} onChange={ (e) => setLastVersion(e.target.value) } />
					<br/>
				</div>

				<button type="button" onClick={ () => createProjectHandler(projectName)}>Crear proyecto</button>

			</form>
		</div>
	)
}

const createProjectHandler = async (projectName: string) => {
	const response = await fetch(API_BASE_URL + "/documentation/project", {
		method: "post",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: `projectName=${projectName}`
	});

	const result = await response.json();

	alert(result.message);
};



export default CreateProjectForm;