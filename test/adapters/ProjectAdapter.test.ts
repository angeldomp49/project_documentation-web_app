import { it } from "node:test";
import { ProjectAdapter } from "../../src/adapters/project/ProjectAdapter";
import { ProjectMapper } from "../../src/persistance/mapping/ProjectMapper";
import { DependencyTagMapper } from "../../src/persistance/mapping/DependencyTagMapper";
import { ExampleMapper } from "../../src/persistance/mapping/ExampleMapper";
import { VersionBeanConverter } from "../../src/adapters/converters/VersionBeanConverter";
import { DependencyTagConverter } from "../../src/adapters/converters/DependencyTagConverter";
import { MockProjectMapper } from "../persistance/mapping/MockProjectMapper";
import { ProjectConverter } from "../../src/adapters/converters/ProjectConverter";

it( "ProjectAdapter", async () => {
    const projectAdapter: ProjectAdapter = new ProjectAdapter(
        new MockProjectMapper(),
        new DependencyTagMapper(),
        new ExampleMapper(),
        new ProjectConverter(
            new DependencyTagConverter(),
            new VersionBeanConverter()
        ),
        
    );


});