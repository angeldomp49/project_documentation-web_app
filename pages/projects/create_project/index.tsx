
import React, { useState } from 'react'
import { API_BASE_URL } from '../../../config/config'
import NavMenu from '../../../components/menus/NavMenu';


const index = ({}: {}) => {

	const [projectName, setProjectName] = useState("");

	return (
		<div>

			<NavMenu />

			<div className="formWrapper">

				<h4>Crear un nuevo proyecto</h4>
				<form method="post">
					<div className="formGroup">
						<label htmlFor="projectName">Nombre del proyecto:</label>
						<input type="text" name="projectName" id="projectName" value={projectName} onChange={ (e) => setProjectName(e.target.value) } />
					</div>

					<button type="button" onClick={ () => createProjectHandler(projectName)}>Crear proyecto</button>

				</form>
			</div>

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



export default index