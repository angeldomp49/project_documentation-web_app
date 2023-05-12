import React, { useState } from 'react'
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';
import { ExampleBean } from '../../../../persistance/data/ExampleBean';
import { MDBTextArea } from 'mdb-react-ui-kit';


const EditExampleCodeForm = ({projectAdapter, initialExampleCode}: { projectAdapter: ProjectAdapter, initialExampleCode: ExampleBean }) => {

    const [exampleCode, setExampleCode] = useState(initialExampleCode);

  return (
    <div className="formWrapper">
      <div className="formGroup">
        <MDBTextArea 
          value={exampleCode.code} 
          onChange={ e => setExampleCode({ ...exampleCode, code: e.target.value }) } 
          label="Código de ejemplo"
          className="mb-4"
          style={{
            height: "20rem"
          }}
          />
      </div>
      <div className="formGroup">
        <button 
          type='button' 
          onClick={ e => projectAdapter.saveExampleCode(exampleCode) } 
          className="btn btn-primary"
          >Save!</button>
      </div>

    </div>
  );

};



export default EditExampleCodeForm