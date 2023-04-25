

export type HistorySectionInfo = {
    versionTag: string;
    blocks: HistoryBlock[];
}

export type HistoryBlock = {
    id: number;
    type: string;
    payload: string;
}

export const HISTORY_BLOCK_TYPE = {
    TEXT: "HISTORY_BLOCK_TYPE_TEXT",
    CODE: "HISTORY_BLOCK_TYPE_CODE",
    IMAGE: "HISTORY_BLOCK_TYPE_IMAGE"
}
