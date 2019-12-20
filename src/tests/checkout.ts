import {CCheckout} from "../methods/checkout";
import puppeteer from "puppeteer";
import {withOutAuth} from "../conf/checkout";
import {URL} from "../conf/lognpage";


async function main():Promise<void> {
  let  checkOut: CCheckout = new CCheckout();

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50 // slow down by 250ms
    });
    const page = await browser.newPage();

    await page.goto('http://52.136.215.164:9000/cart/view');

    await checkOut.CheckOutWithOutRegistration(page, withOutAuth[0]);
}

main();