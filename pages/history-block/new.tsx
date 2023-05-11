import React from 'react'
import GenericPage from '../../src/ui/commons/pageLayouts/GenericPage';
import CreateHistoryEntry from '../../src/ui/components/historyBlockSystem/forms/CreateHistoryEntry';


const newhistoricentry = ({}: {}) => {
  return (
    <GenericPage>
        <CreateHistoryEntry availableProjects={[]} />
    </GenericPage>
  )
}

export default newhistoricentry;