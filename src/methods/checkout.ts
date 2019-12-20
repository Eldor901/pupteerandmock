import {CMainPage} from "./mainPage";
import puppeteer from "puppeteer";
import {withOutRegistration} from '../conf/checkout'
import {CAddToBasket} from "./addToBasket";

export class CCheckout extends CAddToBasket{
    async  CheckOutWithOutRegistration(page: puppeteer.Page, withOutAuth: withOutRegistration)
    {
        await page.setViewport({ width: 1536, height: 754 });

        await page.waitForSelector('.product-one #login');
        await page.type('.register-main input[name=login]', withOutAuth.Login);

        await page.waitForSelector('.product-one #pasword');
        await page.type('.register-main input[name=password]', withOutAuth.Password);

        await page.waitForSelector('.col-md-12 > .product-one > .col-md-6 > form > .form-group:nth-child(3)');
        await page.type('.col-md-12 > .product-one > .col-md-6 > form > input[name=password]', withOutAuth.Name);

        await page.waitForSelector('.product-one #email');
        await page.type('.product-one input[name=email]', withOutAuth.Email);

        await page.waitForSelector('.product-one #address');
        await page.type('.product-one input[name=address]', withOutAuth.AddRess);

        await page.waitForSelector('.product-one > .col-md-6 > form > .form-group:nth-child(6) > .form-control');
        await page.type('.product-one input[name=note]', withOutAuth.Note);

        await page.waitForSelector('.col-md-12 > .product-one > .col-md-6 > form > .btn');
        await page.click('.col-md-12 > .product-one > .col-md-6 > form > .btn');

    }
}