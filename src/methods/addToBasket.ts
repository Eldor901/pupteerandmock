import {CMainPage} from "./mainPage";
import puppeteer from "puppeteer";

export class CAddToBasket extends CMainPage{

    async addToBasket(page: puppeteer.Page):Promise<void>
    {
        await page.setViewport({ width: 1900, height: 1200 });

        await page.waitForSelector('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');
        await page.click('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');

        await page.waitForSelector('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');
        await page.click('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');

    }
}