import React from 'react'
import { HistoryBlockAdapter } from '../../../../src/adapters/blockSystem/HistoryBlockAdapter';
import EditSingleBlockForm from '../../../../src/ui/components/historyBlockSystem/forms/EditSingleBlockForm';
import { VersionBean } from '../../../../src/persistance/data/VersionBean';
import GenericPage from '../../../../src/ui/commons/pageLayouts/GenericPage';


const edit = ({}:{}) => {

  const historyBlockAdapter: HistoryBlockAdapter = new HistoryBlockAdapter();

  const versionId: VersionBean = {
    projectName: "TemplateFinder",
    versionId: "1.0.0",
    detailSections: [
      {
        id: 1,
        type: "HISTORY_BLOCK_TYPE_TEXT",
        payload: "some text"
      },
      {
        id: 2,
        type: "HISTORY_BLOCK_TYPE_CODE",
        payload: "public class App{}"
      },
      {
        id: 3,
        type: "HISTORY_BLOCK_TYPE_IMAGE",
        payload: "image.png"
      }
    ]
  };

  return (
    <GenericPage>
        <h3>Edit version blocks</h3>

        {
          versionId.detailSections.map( 
            section => <EditSingleBlockForm 
                          initialBlock={section} 
                          parentVersionBean={versionId} 
                          historyBlockAdapter={historyBlockAdapter} />
          )
        }

    </GenericPage>
  )
}

export default edit;