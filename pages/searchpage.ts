import { test, Locator, Page } from '@playwright/test'

export class Searchpage {
    //variables
    private readonly searchtag: Locator
    private readonly productlink: Locator


    //constructor
    constructor(page: Page) {
        this.searchtag = page.locator("div h1")
        this.productlink = page.locator("h4 a")
    }


    //methods
//TO verify search product name

async productnameverify(prodname:string):Promise<string | undefined>
{
const prodcutname  = await this.productlink.allInnerTexts();
for (let i=0;i<prodcutname.length;i++)
{
if(prodcutname[i]===prodname)
{
  return this.productlink.nth(i).innerText()
}
else
{
    return ("Product not found")
}

}
}


//click on product
async clickonproduct(prodname:string): Promise<void>
{
const products=await this.productlink.allInnerTexts()
for(let i=0;i< products.length;i++)
{
if(products[i]===prodname)
{
await this.productlink.nth(i).click()
break;
}

}

}


}
