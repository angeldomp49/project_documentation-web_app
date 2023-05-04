import { DependencyTagMapper } from "../../persistance/mapping/DependencyTagMapper";
import { ProjectMapper } from "../../persistance/mapping/ProjectMapper";
import { VersionMapper } from "../../persistance/mapping/VersionMapper";
import { Translator } from "../internationalization/translator/Translator";

export class BeanProducer{

    projectMapper(): ProjectMapper{
        return new ProjectMapper();
    }

    dependencyTagMapper(): DependencyTagMapper{
        return new DependencyTagMapper();
    }

    versionMapper(): VersionMapper{
        return new VersionMapper();
    }

    translator(): Translator{
        return new Translator("es_MX");
    }

}