import { it } from "node:test";
import { ProjectAdapter } from "../../app/adapters/project/ProjectAdapter";
import { ProjectMapper } from "../../app/persistance/mapping/ProjectMapper";
import { DependencyTagMapper } from "../../app/persistance/mapping/DependencyTagMapper";
import { ExampleMapper } from "../../app/persistance/mapping/ExampleMapper";
import { VersionBeanConverter } from "../../app/adapters/converters/VersionBeanConverter";
import { DependencyTagConverter } from "../../app/adapters/converters/DependencyTagConverter";
import { MockProjectMapper } from "../persistance/mapping/MockProjectMapper";

it( "ProjectAdapter", async () => {
    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new VersionBeanConverter(),
        new DependencyTagConverter()
    );

    projectAdapter.allProjectSections

});