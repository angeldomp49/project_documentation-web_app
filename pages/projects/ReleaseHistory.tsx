
import React from 'react'
import { VersionInfo } from './ProjectInfo'
import { IdGenerator } from '@makechtec/randomkey';

export const ReleaseHistory = ({releases}: {releases: VersionInfo[]}) => {

    const idGenerator = new IdGenerator();

    const Section = ({ releaseInfo }: { releaseInfo: VersionInfo }) =>
        <div>
            <h4>Version: {releaseInfo.id}</h4>

            <p>Details:</p>
            <p>{releaseInfo.details}</p>

        </div>

  return (
    <div>
        <h3>ReleaseHistory</h3>

        <section>
            {releases.map( (release: VersionInfo) => <Section key={idGenerator.generate()} releaseInfo={release} /> )}
        </section>
    </div>
  )
}