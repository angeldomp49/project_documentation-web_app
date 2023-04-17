
export type ProjectInfo = {
    name: string;
    dependencyTag: DependencyTagInfo;
    versions: VersionInfo[];
}

export type VersionInfo = {
    id: string;
    details: string;
}

export type DependencyTagInfo = {
    groupId: string;
    artifactId: string;
}