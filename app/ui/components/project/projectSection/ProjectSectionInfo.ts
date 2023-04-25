import { ReactNode } from "react";
import { TagInfo } from "../dependencyTab/TagInfo";
import { HistorySectionInfo } from "../../historyBlockSystem/HistorySectionInfo";

export type ProjectSectionInfo = {

    title: string;
    url: string;
    usageCode: string;
    dependencyInfo: TagInfo;
    historyEntries: HistorySectionInfo[];
};