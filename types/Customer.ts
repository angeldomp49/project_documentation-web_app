
export type Customer = {
    firstName: string;
    lastName: string;
    email: string;
    cellPhone: CellPhone;
    id: number;
};

export type CellPhone = {
    countryCode: string;
    number: string;
};