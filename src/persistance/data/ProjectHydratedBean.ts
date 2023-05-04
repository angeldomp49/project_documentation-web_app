import { DependencyTagBean } from "./DependencyTagBean";
import { VersionBean } from "./VersionBean";

export type ProjectHydratedBean = {
    name: string;
    id?: number;
    exampleCode: string;
    dependencyTagBean: DependencyTagBean;
    versionBeans: VersionBean[];
}