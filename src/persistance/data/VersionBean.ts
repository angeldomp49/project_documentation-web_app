
export type VersionBean = {
    projectName: string;
    versionId?: string;
    detailSections: DetailSection[];
};

export type DetailSection = {
    id: number;
    type: string;
    payload: string;
};