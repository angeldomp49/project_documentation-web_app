import React, { useState } from 'react'
import { DetailSection, VersionBean } from '../../../../persistance/data/VersionBean';
import { HistoryBlockAdapter } from '../../../../adapters/blockSystem/HistoryBlockAdapter';


const EditSingleBlockForm = (
        {initialBlock, parentVersionBean, historyBlockAdapter}: 
        { initialBlock: DetailSection, parentVersionBean: VersionBean, historyBlockAdapter: HistoryBlockAdapter}
    ) => {

    const [block, setBlock] = useState(initialBlock);

  return (
    <div className="formWrapper" >
        <div className="formGroup">
            <select value={ block.type } onChange={ e => setBlock({...block, type: e.target.value}) } >
                <option value="HISTORY_BLOCK_TYPE_TEXT">Text</option>
                <option value="HISTORY_BLOCK_TYPE_CODE">Code</option>
                <option value="HISTORY_BLOCK_TYPE_IMAGE">Image</option>
            </select>
        </div>
        <div className="formGroup">
            <input type="text" value={block.payload} onChange={ e => setBlock({...block, payload: e.target.value }) } />
        </div>
        <div className="formGroup">
            <button type='button' onClick={ e => historyBlockAdapter.saveVersionBlock(block, parentVersionBean) } >Save!</button>
        </div>
    </div>
  )
}

export default EditSingleBlockForm;