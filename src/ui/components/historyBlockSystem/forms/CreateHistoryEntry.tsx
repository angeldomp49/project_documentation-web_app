import React, { useState } from 'react'
import { AvailableProject } from './AvailableProject';
import { IdGenerator } from '@makechtec/randomkey';


const CreateHistoryEntry = ({availableProjects, idGen}: {availableProjects: AvailableProject[], idGen: IdGenerator}) => {

  const [projectName, setProjectName] = useState("");
  const [versionTag, setVersionTag] = useState("");

  return (
    <div className="formWrapper">

        <h3>Crear un historico de version.</h3>

        <form method="post">

            <div className="formGroup">
                <label htmlFor="">Proyecto:</label>
                <select value={projectName} onChange={ (e) => setProjectName(e.target.value) } >
                    {availableProjects.map( (project: AvailableProject) =>  <option key={idGen.generate()} value={project.id}>{project.name}</option> )}
                </select>
            </div>

            <div className="formGroup">
                <label htmlFor="">etiqueta de version:</label>
                <input type="text" value={versionTag} onChange={ (e) => setVersionTag(e.target.value) } />
            </div>



            <button type='button' >Crear historico</button>
        </form>

    </div>
  )
};

export default CreateHistoryEntry;