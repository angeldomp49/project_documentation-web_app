import { DependencyTagBean } from "./DependencyTagBean";
import { ExampleBean } from "./ExampleBean";
import { VersionBean } from "./VersionBean";

export type ProjectHydratedBean = {
    name: string;
    id?: number;
    exampleCode: ExampleBean;
    dependencyTagBean: DependencyTagBean;
    versionBeans: VersionBean[];
}