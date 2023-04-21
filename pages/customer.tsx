
import { useState } from "react";
import {Translator} from "../app/ui/langs/translator/Translator";
import { Customer } from "../app/ui/commons/types/Customer";

export default function CustomersTable(){

    const customers: Customer[] = [{
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        id: 1,
        cellPhone: {
            countryCode: "+52",
            number: "55 23 08 46 89"
        }
    }];
    const translator = new Translator("es_MX");

    const [h1, setH1] = useState("");
    const [h2, setH2] = useState("");
    const [h3, setH3] = useState("");

    translator._("Nombre", setH1);
    translator._("Email", setH2);
    translator._("Cell Phone", setH3);

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>{ h1 }</th>
                        <th>{ h2 }</th>
                        <th>{ h3 }</th>
                    </tr>
                </thead>
                <tbody>
                    { customers.map( customer => <CustomerRow key={customer.id} customer={customer} /> ) }
                </tbody>
            </table>
        </>
    );
};

function CustomerRow({customer}: {customer: Customer}){
    return (
        <tr>
            <td>{customer.firstName + customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.cellPhone.countryCode + customer.cellPhone.number}</td>
        </tr>
    );
}