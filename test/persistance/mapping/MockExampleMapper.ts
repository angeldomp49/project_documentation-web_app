import { ExampleBean } from "../../../src/persistance/data/ExampleBean";
import { ProjectHydratedBean } from "../../../src/persistance/data/ProjectHydratedBean";
import { ExampleMapper } from "../../../src/persistance/mapping/ExampleMapper";
import { StorageCenter } from "../StorageCenter";

export class MockExampleMapper extends ExampleMapper{
    
    async create(exampleBean: ExampleBean) {
        const projectIndex = StorageCenter.data.findIndex( (bean: ProjectHydratedBean) => bean.name === exampleBean.projectName );

        StorageCenter.data[projectIndex].exampleCode = exampleBean;
    }

}