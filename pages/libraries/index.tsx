
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import DependencyTab from '../../components/DependencyTab';
import { Tab } from '../../components/symbols/Tab';
import { Cl, Cr } from '../../components/symbols/chevrons';
import { Arrow2 } from '../../components/symbols/arrows';
import { Brl, Brr } from '../../components/symbols/curlyBrackets';

export default function Libraries(){

    return(
        <main>
            
            <h3>Path generator</h3>

            <div>
                <Tab /><Tab />PathGenerator pathGenerator = new PathGenerator();<br/>
                <br/>
                <Tab /><Tab />String jarPath = pathGenerator.jarPath(PathGeneratorTest.class);<br/>
                <Tab /><Tab />String resourcePath = pathGenerator.resourcePath(PathGeneratorTest.class, "test.txt");<br/>
            </div>

            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec',
                    artifactId: 'template_info',
                    version: '1.0.0'
                }}
                />
            <br/>
            <br/>

            <h3>Papatla</h3>

                <div>
                    <Tab /><Tab />class Placeholder<br/>
                    <Tab /><Tab /><Tab /><Tab />private String name;<br/>
                    <Tab /><Tab /><Tab /><Tab />private String description;<br/>
                    <Tab /><Tab /><Tab /><Tab />public Placeholder(String name);<br/>
                    <br/>
                    <br/>
                    <Tab /><Tab />class Argument<Cl/>T<Cr/><br/>
                    <Tab /><Tab /><Tab /><Tab />private Placeholder placeholder;<br/>
                    <Tab /><Tab /><Tab /><Tab />private T value;<br/>
                    <br/>
                    <br/>
                    <Tab /><Tab />class GeneratedDocument<br/>
                    <Tab /><Tab /><Tab /><Tab />private String path;<br/>
                    <br/>
                    <br/>
                    <Tab /><Tab />interface DocumentTemplate<br/>
                    <br/>
                    <Tab /><Tab /><Tab /><Tab />public String getName();<br/>
                    <br/>
                    <Tab /><Tab /><Tab /><Tab />public void setWorkDirectory(String workDirectory);<br/>
                    <br/>
                    <Tab /><Tab /><Tab /><Tab />public Set<Cl/>Placeholder<Cr/> getPlaceholders();<br/>
                    <br/>
                    <Tab /><Tab /><Tab /><Tab />public GeneratedDocument hydrate(Set<Cl/>Argument<Cl/>?<Cr/><Cr/> arguments);<br/>
                    <br/>
                    <br/>
                    <Tab /><Tab />interface DocumentComponentFactory
                    <br/>
                    <Tab /><Tab /><Tab /><Tab />public Set<Cl/>DocumentTemplate<Cr/> getAvailableTemplates();
                    <br/>
                    <br/>
                </div>

            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec',
                    artifactId: 'papatla',
                    version: '1.2.1'
                }}
                />
            <br/>
            <br/>

            <h3>Properties Loader</h3>

            <div>
                <Tab /><Tab />Optional<Cl/>String<Cr/> loader = new PropertyLoader("test.properties");<br/>
                <Tab /><Tab />boolean isName = loader.getProperty("name").isPresent();<br/>
                <Tab /><Tab />String name = loader.getProperty("name").get()<br/>
            </div>

            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec.software',
                    artifactId: 'properties_loader',
                    version: '1.0.0'
                }}
                />
            <br/>
            <br/>

            <h3>Teplate Finder</h3>

                <div>
                    <Tab /><Tab />TemplateFinder finder = new TemplateFinder();<br/>
                    <Tab /><Tab />PathGenerator pathGenerator = new PathGenerator();<br/>
                    <Tab /><Tab />var workDirectory = pathGenerator.resourcePath(TemplateFinderTest.class, "templates");<br/>
                    <br/>
                    <br/>
                    <Tab /><Tab />finder.setWorkDirectory(workDirectory);<br/>
                    <br/>
                    <Tab /><Tab />List<Cl/>DocumentTemplate<Cr/> availableTemplates = finder.allTemplates();<br/>
                    <br/>
                    <Tab /><Tab />availableTemplates.forEach(template <Arrow2/> System.out.println(template.getName()));<br/>
                </div>

            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec.papatla',
                    artifactId: 'template_finder',
                    version: '1.0.0'
                }}
                />
            <br/>
            <br/>

            <h3>Drawing</h3>
            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec.papatla',
                    artifactId: 'drawing',
                    version: '1.0.3'
                }}
                />
            <br/>
            <br/>

            <h3>Huapali</h3>
            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec',
                    artifactId: 'huapali',
                    version: '1.0.1'
                }}
                />
            <br/>
            <br/>

            <h3>Case Generator</h3>

            <div>
            <Tab /><Tab />ScenarioGenerator<Cl/>String<Cr/> generator = new TableGenerator<Cl/><Cr/>();<br/>
            <br/>
            <Tab /><Tab />CaseOfStudy<Cl/>String<Cr/> caseOfStudy = new CaseOfStudy<Cl/><Cr/>();<br/>
            <br/>
            <Tab /><Tab />caseOfStudy.numberOfSlots = 4;<br/>
            <Tab /><Tab />caseOfStudy.posiblyValues = Arrays.asList("a", "b", "c");<br/>
            <br/>
            <Tab /><Tab />List<Cl/>Scenario<Cl/>String<Cr/><Cr/> scenarios = generator.generateMultiple(caseOfStudy);<br/>
            <br/>
            <Tab /><Tab />scenarios.stream().forEach( scenario <Arrow2/> <Brl/><br/>
                <Tab /><Tab /><Tab /><Tab />scenario.values.stream().forEach( value <Arrow2/> <Brl/><br/>
                    <Tab /><Tab /><Tab /><Tab /><Tab /><Tab />System.out.print(value + " ");<br/>
                    <Tab /><Tab /><Tab /><Tab /><Brr/>);<br/>
                <br/>
            <Tab /><Tab /><Tab /><Tab />System.out.println(" ");<br/>
            <Tab /><Tab /><Brr/>);<br/>
            <br/>
            <Tab /><Tab />System.out.println("size: " + scenarios.size());<br/>
            <br/>
            <br/>
            </div>

            <DependencyTab 
                infoDependency={{
                    groupId: 'org.makechtec',
                    artifactId: 'case_generator',
                    version: '1.0.0'
                }}
                />
            <br/>
            <br/>

        </main>
    );
}