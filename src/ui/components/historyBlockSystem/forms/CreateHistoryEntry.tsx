import React, { useState } from 'react'
import { AvailableProject } from './AvailableProject';
import { IdGenerator } from '@makechtec/randomkey';
import { MDBInput } from 'mdb-react-ui-kit';


const CreateHistoryEntry = ({availableProjects, idGen}: {availableProjects: AvailableProject[], idGen: IdGenerator}) => {

  const [projectName, setProjectName] = useState("");
  const [versionTag, setVersionTag] = useState("");

  return (
    <div className="formWrapper">

        <h3 className="mb-4" >Crear un historico de version.</h3>

        <form method="post">

            <div className="formGroup">
                <label className="mb-4">Proyecto</label>
                <br />
                <select 
                    value={projectName} 
                    onChange={ (e) => setProjectName(e.target.value) } 
                    className="mb-4"
                    >
                    {availableProjects.map( (project: AvailableProject) =>  <option key={idGen.generate()} value={project.id}>{project.name}</option> )}
                </select>
            </div>

            <div className="formGroup">
                <MDBInput 
                    type="text" 
                    value={versionTag} 
                    onChange={ (e) => setVersionTag(e.target.value) } 
                    className="mb-4"
                    label="Etiqueta de version"
                    />
            </div>

            <button type='button' className="btn btn-primary" >Crear historico</button>
            
        </form>

    </div>
  )
};

export default CreateHistoryEntry;