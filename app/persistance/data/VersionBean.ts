
export type VersionBean = {
    project_name: string;
    versionId?: string;
    detailSections: DetailSection[];
};

export type DetailSection = {
    id: number;
    type: string;
    payload: string;
};