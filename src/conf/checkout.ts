export interface withOutRegistration{
    Login: string;
    Password: string;
    Name: string;
    Email: string;
    AddRess: string;
    Note: string;
}


export const withOutAuth: withOutRegistration[] = [
    {
        Login: "someLogin", Password: "somePassword", Name: "someName",
        Email: "someEmail@gmail.com", AddRess: "someStreet", Note: "Colling idea",
    }
];