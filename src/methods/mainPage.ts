import puppeteer from "puppeteer";
import {URL} from '../conf/lognpage'
export class CMainPage{

    async MainPage():Promise<puppeteer.Page>
    {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 50 // slow down by 250ms
        });
        const page = await browser.newPage();
        await page.goto(URL);

        return page;
    }
}