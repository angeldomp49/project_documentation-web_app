import { TagInfo } from "../dependencyTab/TagInfo";

export type CreateProjectRequest = {
    projectName: string;
    usage: string;
    tagInfo: TagInfo;
}