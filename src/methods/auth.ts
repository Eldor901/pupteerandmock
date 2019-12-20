import  puppeteer from 'puppeteer';
import {Login} from '../conf/auth.config'
import {CMainPage} from "./mainPage";


export class CAuth extends CMainPage{

    async goToLoginPage(page: puppeteer.Page):Promise<puppeteer.Page>
    {
        await page.setViewport({ width: 1536, height: 754 });

        await page.waitForSelector('.top-header-main > .col-md-6 > .drop > .btn-group > .dropdown-toggle');
        await page.click('.top-header-main > .col-md-6 > .drop > .btn-group > .dropdown-toggle');

        await page.waitForSelector('.drop > .btn-group > .dropdown-menu > li:nth-child(1) > a');
        await page.click('.drop > .btn-group > .dropdown-menu > li:nth-child(1) > a');
        return page;
    }

    async fillLoginColumn(page: puppeteer.Page, Auth: Login):Promise<void>
    {
        await page.waitForSelector('.register-main #login #login');
        await page.type('.register-main  input[name=login]', Auth.name);

        await page.waitForSelector('.register-main #pasword');
        await page.type('.register-main input[name=password]', Auth.password);

        await page.click('.product-one > .register-main > .col-md-6 > #login > .btn')

        await page.waitForSelector('.content > .container > .row > .col-md-12 > .alert')

    }

    async getText(page: puppeteer.Page):Promise<any>
    {
        const element = await page.$eval('.content > .container > .row > .col-md-12 > .alert', el => el.textContent)
        return element;
    }
}