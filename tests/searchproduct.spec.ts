import {test, expect} from '@playwright/test'
import {TestConfig} from '../test.config'
import {HomePage} from '../pages/Homepage'
import {Searchpage} from '../pages/searchpage'

let testconfig:TestConfig;
let homepage:HomePage;
let searchpage:Searchpage;

test.beforeEach(async({page})=>
{
testconfig=new TestConfig();
await page.goto(testconfig.appUrl);
homepage=new HomePage(page)
searchpage =new Searchpage(page)

})

test("Search the product", async({page})=>{
await homepage.searchmenumethod(testconfig.productName)
await homepage.searchboxmethod();
await page.waitForTimeout(5000)
const prodname=await searchpage.productnameverify(testconfig.productName)
expect(prodname).toBe("MacBook")
await searchpage.clickonproduct(testconfig.productName)
await page.waitForTimeout(5000)
})