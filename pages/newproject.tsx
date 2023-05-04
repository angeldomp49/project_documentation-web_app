import React from 'react'
import GenericPage from '../src/ui/commons/pageLayouts/GenericPage';
import CreateProjectForm from '../src/ui/components/project/forms/CreateProjectForm';


const newproject = ({}: {}) => {
  return (
    <GenericPage>
        <CreateProjectForm />
    </GenericPage>
  )
}

export default newproject;