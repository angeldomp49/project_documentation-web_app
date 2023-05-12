import React, { useState } from 'react'
import { DetailSection, VersionBean } from '../../../../persistance/data/VersionBean';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';


const EditSingleBlockForm = (
        {initialBlock, parentVersionBean, projectAdapter}: 
        { initialBlock: DetailSection, parentVersionBean: VersionBean, projectAdapter: ProjectAdapter}
    ) => {

    const [block, setBlock] = useState(initialBlock);

  return (
    <div className="formWrapper" >

        <h5 className="mb-4" >ID de bloque: {initialBlock.id}</h5>

        <div className="formGroup">


            <label className="mb-4">Tipo de bloque</label>
            <br />
            <select 
                value={ block.type } 
                onChange={ e => setBlock({...block, type: e.target.value}) } >

                <option value="HISTORY_BLOCK_TYPE_TEXT">Text</option>
                <option value="HISTORY_BLOCK_TYPE_CODE">Code</option>
                <option value="HISTORY_BLOCK_TYPE_IMAGE">Image</option>

            </select>
        </div>
        <br />
        <br />
        <div className="formGroup">
            <MDBTextArea 
                value={block.payload} 
                onChange={ e => setBlock({...block, payload: e.target.value }) } 
                className="mb-4"
                label="Contenido"
                style={{
                    height: "20rem"
                }}
                />
        </div>

        <div className="formGroup">
            <button 
                type='button' 
                onClick={ e => projectAdapter.saveVersionHistory(block, parentVersionBean) } 
                className="btn btn-primary"
                >Save!</button>
        </div>

    </div>
  )
}

export default EditSingleBlockForm;