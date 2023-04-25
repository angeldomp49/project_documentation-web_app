import React from 'react'
import GenericPage from '../app/ui/commons/pageLayouts/GenericPage';
import CreateHistoryEntry from '../app/ui/components/historyBlockSystem/forms/CreateHistoryEntry';


const newhistoricentry = ({}: {}) => {
  return (
    <GenericPage>
        <CreateHistoryEntry availableProjects={[]} />
    </GenericPage>
  )
}

export default newhistoricentry;