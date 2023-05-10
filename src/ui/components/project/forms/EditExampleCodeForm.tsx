import React, { useState } from 'react'
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';
import { ExampleBean } from '../../../../persistance/data/ExampleBean';


const EditExampleCodeForm = ({projectAdapter, initialExampleCode}: { projectAdapter: ProjectAdapter, initialExampleCode: ExampleBean }) => {

    const [exampleCode, setExampleCode] = useState(initialExampleCode);

  return (
    <div className="formWrapper">
      <div className="formGroup">
        <label htmlFor="">Example Code:</label>
        <textarea value={exampleCode.code} onChange={ e => setExampleCode({ ...exampleCode, code: e.target.value }) } />
      </div>
      <div className="formGroup">
        <button type='button' onClick={ e => projectAdapter.saveExampleCode(exampleCode) } >Save!</button>
      </div>

    </div>
  );

};



export default EditExampleCodeForm