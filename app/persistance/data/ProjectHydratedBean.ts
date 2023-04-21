import { DependencyTagBean } from "./DependencyTagBean";
import { VersionBean } from "./VersionBean";

export type ProjectHydratedBean = {
    name: string;
    dependencyTagBean: DependencyTagBean;
    versionBeans: VersionBean[];
}