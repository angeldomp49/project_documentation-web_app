
export type VersionBean = {
    projectId: number;
    versionId?: string;
    detailSections: DetailSection[];
};

export type DetailSection = {
    id: number;
    type: string;
    payload: string;
};