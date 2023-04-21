import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tab } from "../app/ui/commons/components/symbols/Tab";
import { Cl, Cr } from "../app/ui/commons/components/symbols/chevrons";

export const Templates = () => {
    return(
        <main>
            <h3>PurchaseReceiptTemplate</h3>

            <p>name: purchase_receipt_template</p>
            <p>
                placeholders:<br/>
                <br/>
                <br/>
                <Tab /><Tab />name:"client_name" <br/>
                <Tab /><Tab />description: "(String)"<br/>
                <br/>
                <Tab /><Tab />name:"items_list" <br/>
                <Tab /><Tab />description: "(List<Cl/>List<Cl/>String<Cr/><Cr/>)"<br/>
                <br/>
                <Tab /><Tab />name:"purchase_date" <br/>
                <Tab /><Tab />description: "(String)"<br/>
                <br/>
                <Tab /><Tab />name:"subtotal" <br/>
                <Tab /><Tab />description: "(String)"<br/>
                <br/>
                <Tab /><Tab />name:"tax" <br/>
                <Tab /><Tab />description: "(String)"<br/>
                <br/>
                <Tab /><Tab />name:"total" <br/>
                <Tab /><Tab />description: "(String)"<br/>
                <br/>
            </p>

            <p>use case:</p>

            <p>
                <Tab /><Tab />PurchaseReceiptTemplate template = new PurchaseReceiptTemplate();<br/>
                <br/>
                <Tab /><Tab />var jarPath = BillTemplateTest.class<br/>
                        <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />.getProtectionDomain()<br/>
                        <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />.getCodeSource()<br/>
                        <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />.getLocation()<br/>
                        <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />.toURI()<br/>
                        <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />.getPath();<br/>
                        <br/>
                        <Tab /><Tab />template.setWorkDirectory(jarPath);<br/>
                        <br/>
                        <br/>
                        <Tab /><Tab />var args = new HashSet<Cl/>Argument<Cl/>?<Cr/><Cr/>();<br/>
                        <br/>
                        <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("client_name", ""), "Angel Domínguez Plata"));<br/>
                        <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("purchase_date", ""), "" + Calendar.getInstance().getTime()));<br/>
                        <br/>
                        <Tab /><Tab />var itemsList = Arrays.asList(<br/>
                            <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />Arrays.asList("Consultant in Java Proyect", "$600", "1", "$600"),<br/>
                            <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />Arrays.asList("Consultant in Angular Proyect", "$600", "1", "$600"),<br/>
                            <Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab /><Tab />Arrays.asList("Consultant in SQL Proyect", "$600", "1", "$600")<br/>
                            <Tab /><Tab />);<br/>
                            <br/>
                <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("items_list", ""), itemsList));<br/>
                <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("subtotal", ""), "$1800"));<br/>
                <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("tax", ""), "$0.00"));<br/>
                <Tab /><Tab />args.add(new Argument<Cl/><Cr/>(new Placeholder("total", ""), "$1800"));<br/>
                <br/>
                <Tab /><Tab />GeneratedDocument generatedDocument = template.hydrate(args);<br/>
                <br/>
                <Tab /><Tab />assertTrue(Files.exists(Paths.get(generatedDocument.getPath())));<br/>
                <br/>
                <Tab /><Tab />Files.delete(Paths.get(generatedDocument.getPath()));<br/>
            </p>
        </main>
    );
};

export default Templates;