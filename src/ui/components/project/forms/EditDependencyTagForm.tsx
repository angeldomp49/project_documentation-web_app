import React, { useState } from 'react';
import {TagInfo} from '../dependencyTab/TagInfo';
import { ProjectAdapter } from '../../../../adapters/project/ProjectAdapter';
import { DependencyTagBean } from '../../../../persistance/data/DependencyTagBean';


const EditDependencyTagForm = ({ projectAdapter, initTagInfo}: {projectAdapter: ProjectAdapter, initTagInfo: DependencyTagBean}) => {


    const [tagInfo, setTagInfo] = useState(initTagInfo);


  return (
    <div className="formWrapper" >
            <div className="formGroup">
                <label htmlFor="">groupId:</label>
                <input type="text" value={tagInfo.groupId} onChange={ (e) => setTagInfo({...tagInfo, groupId: e.target.value}) } />
                <br/>

                <label htmlFor="">artifactId:</label>
                <input type="text" value={tagInfo.artifactId} onChange={ (e) => setTagInfo({...tagInfo, artifactId: e.target.value}) } />
                <br/>

                <label htmlFor="">last version:</label>
                <input type="text" value={tagInfo.versionId} onChange={ (e) => setTagInfo({...tagInfo, versionId: e.target.value}) } />
                <br/>
            </div>

            <div className="formGroup">
                <button type='button' onClick={ e => projectAdapter.saveDependencyTag(tagInfo)} >Save!</button>
            </div>
    </div>
  )
}

export default EditDependencyTagForm;