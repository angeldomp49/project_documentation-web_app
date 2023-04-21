import { IdGenerator } from '@makechtec/randomkey';
import React, { useState } from 'react'
import { API_BASE_URL } from '../../../app/ui/config/config';
import { GetServerSideProps } from 'next';
import NavMenu from '../../../app/ui/commons/components/menus/NavMenu';


const index = ({ data }: { data: ApiResponse }) => {

  const idGen = new IdGenerator();

  const [versionId, setVersionId] = useState("");
  const [details, setDetails] = useState("");
  const [projectName, setProjectName] = useState("");


  return (
    <div>

      <NavMenu />

      <div className="form-wrapper">
        <form>

          <div className="formGroup">
            <label htmlFor="projectName">Nombre del proyecto:</label>
            <select value={projectName} onChange={(e) => setProjectName(e.target.value)} >
              {data.data.map((projectNameListItem: string) => <option key={idGen.generate()} value={projectNameListItem}>{projectNameListItem}</option>)}
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="versionId">Version id:</label>
            <input type="text" value={versionId} onChange={(e) => setVersionId(e.target.value)} />
          </div>

          <div className="formGroup">
            <label htmlFor="details">details:</label>
            <textarea style={{
              width: "30rem",
              height: "10rem"
            }} value={details} onChange={(e) => setDetails(e.target.value)} />
          </div>

          <button onClick={ e => createVersionDetails(e, projectName, versionId, details) }>Crear detalles de versión</button>
        </form>
      </div>
    </div>
  )
}


const createVersionDetails = async (e: any, projectName: string, versionId: string, details: string) => {

  e.preventDefault();

	const response = await fetch(API_BASE_URL + "/documentation/version", {
		method: "post",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: `projectName=${projectName}&versionId=${versionId}&details=${details}`
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

  const projectNamesListCall = await fetch(API_BASE_URL + "/documentation/project");

  const data: ApiResponse = await projectNamesListCall.json();

  return {
    props: {
      data: data,
    }
  };
}

export default index