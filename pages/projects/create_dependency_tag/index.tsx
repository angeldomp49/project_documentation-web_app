import { GetServerSideProps } from 'next';
import React, { useState } from 'react'
import { API_BASE_URL } from '../../../app/ui/config/config';
import { IdGenerator } from '@makechtec/randomkey';
import NavMenu from '../../../app/ui/commons/components/menus/NavMenu';


const index = ({data}: {data: ApiResponse}) => {

    const idGen = new IdGenerator();

    const [projectName, setProjectName] = useState("");
    const [groupId, setGroupId] = useState("");
    const [artifactId, setArtifactId] = useState("");

	return (
		<div>

			<NavMenu />

			<div className="formWrapper">

				<h4>Crear un nuevo proyecto</h4>
				<form>

                    <div className="formGroup">
                        <label htmlFor="projectName">Nombre del proyecto:</label>
                        <select value={projectName} onChange={(e) => setProjectName(e.target.value) } >
                            {data.data.map( (projectNameListItem: string) => <option key={idGen.generate()} value={projectNameListItem}>{projectNameListItem}</option>)}
                        </select>
                    </div>

					<div className="formGroup">
						<label htmlFor="groupId">groupId:</label>
						<input type="text" value={groupId} onChange={ (e) => setGroupId(e.target.value) } />
					</div>
                    <div className="formGroup">
						<label htmlFor="artifactId">artifactId:</label>
						<input type="text" value={artifactId} onChange={ (e) => setArtifactId(e.target.value) } />
					</div>

					<button type="button" onClick={ e => createDependencyTagHandler(e, projectName, groupId, artifactId)}>Crear proyecto</button>

				</form>
			</div>

		</div>
	)
}

const createDependencyTagHandler = async (e: any, projectName: string, groupId: string, artifactId: string) => {

	e.preventDefault();

	const response = await fetch(API_BASE_URL + "/documentation/dependency-tag", {
		method: "post",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: `projectName=${projectName}&groupId=${groupId}&artifactId=${artifactId}`
	});

	const result = await response.json();

	alert(result.message);
};

type ApiResponse = {
    code: number;
    message: string;
    data: string[];
};

export const getServerSideProps: GetServerSideProps<{ data: ApiResponse }> = async (context) => {

    const projectNamesListCall = await fetch( API_BASE_URL + "/documentation/project");
    
    const data: ApiResponse = await projectNamesListCall.json();
    
    return {
        props: {
            data: data,
        }
    };
}

export default index;