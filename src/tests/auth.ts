import  puppeteer from 'puppeteer';
import {CAuth} from '../methods/auth'
import {LoginForbitSignIn, LoginSignedIn} from '../conf/auth.config'


async function main():Promise<void> {

    let auth: CAuth = new CAuth();

    let mainPage: puppeteer.Page = await auth.MainPage();
    let LoginPage: puppeteer.Page = await auth.goToLoginPage(mainPage);

    for (let i:number = 0; i<LoginForbitSignIn.length; i++)
    {
        await auth.fillLoginColumn(LoginPage, LoginForbitSignIn[i]);
        let text = await auth.getText(LoginPage);
        console.log(text);
    }

    for (let i:number = 0; i<LoginSignedIn.length; i++)
    {
        await auth.fillLoginColumn(LoginPage, LoginSignedIn[i]);
        let text = await auth.getText(LoginPage);
        console.log(text);
    }
}

main();
