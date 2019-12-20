import {CMainPage} from "./mainPage";
import puppeteer from "puppeteer";
import {Search, SearchProduct} from '../conf/search.conf'

export class CSearchProduct extends CMainPage{

    async searchForProduct(page: puppeteer.Page, searchProduct: Search):Promise<void>
    {
        await page.waitForSelector('.col-md-3 #typeahead');
        await page.type('input[name=s]', searchProduct.search);

        await page.waitForSelector('.header > .col-md-3 > .search-bar > form > input');
        await page.click('.header > .col-md-3 > .search-bar > form > input');
    }
}