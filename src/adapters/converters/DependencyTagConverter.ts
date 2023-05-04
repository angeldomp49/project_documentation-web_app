import { DependencyTagBean } from "../../persistance/data/DependencyTagBean";
import { TagInfo } from "../../ui/components/project/dependencyTab/TagInfo";

export class DependencyTagConverter{
    
    toTagInfo( bean: DependencyTagBean, version: string ): TagInfo{

        return{
            groupId: bean.groupId,
            artifactId: bean.artifactId,
            version: version
        };
    }

}