import puppeteer from "puppeteer";
import {CSearchProduct} from "../methods/SearchProduct";
import {SearchProduct} from "../conf/search.conf";


async function main():Promise<void> {
    let searchProduct: CSearchProduct = new CSearchProduct();

    let mainPage: puppeteer.Page = await searchProduct.MainPage();

    for (let i:number = 0; i< SearchProduct.length; i++)
    {
        await searchProduct.searchForProduct(mainPage, SearchProduct[i]);
    }
}

main();