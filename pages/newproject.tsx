import React from 'react'
import GenericPage from '../app/ui/commons/pageLayouts/GenericPage';
import CreateProjectForm from '../app/ui/components/project/forms/CreateProjectForm';


const newproject = ({}: {}) => {
  return (
    <GenericPage>
        <CreateProjectForm />
    </GenericPage>
  )
}

export default newproject;