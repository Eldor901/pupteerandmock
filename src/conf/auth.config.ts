
export interface Login{
    name: string;
    password: string;
}


export const LoginForbitSignIn: Login[] = [
    {
      name: "eldor", password: "12345678"
    },
    {
        name: " ", password: "12345678"
    },
    {

        name: "12345678", password: " "
    }
];

export const LoginSignedIn: Login[]= [
    {
        name: "12345678", password: "12345678"
    }
];



