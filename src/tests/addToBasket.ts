import puppeteer from "puppeteer";
import {CAddToBasket} from "../methods/addToBasket";
import {URL} from "../conf/lognpage";

async function main():Promise<void> {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50 // slow down by 250ms
    });
    const page = await browser.newPage();
    await page.goto(URL);

    await page.setViewport({ width: 1536, height: 754 });

    await page.waitForSelector('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');
    await page.click('.col-md-3:nth-child(1) > .product-main > .product-bottom > h4 > .add-to-cart-link > i');

    await page.waitForSelector('.modal-footer > .btn-primary:hover');
    await page.click('.modal-footer > .btn-primary:hover');
}

main();