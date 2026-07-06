import { Page, expect, Locator } from '@playwright/test'

export class HomePage {

    //variabls
    private readonly page: Page;
    private readonly Myaccountlink: Locator;
    private readonly Registerlink: Locator;
    private readonly Loginlink: Locator;
    private readonly searchmenu: Locator;
    private readonly searchbox: Locator;
    //constructor
    constructor(page: Page) {
        this.page = page;
        this.Myaccountlink = page.locator('a[title="My Account"]')
        this.Registerlink = page.locator('ul.dropdown-menu-right li a').first();
        this.Loginlink = page.locator('ul.dropdown-menu-right li a').last();
        this.searchbox = page.locator('input[placeholder="Search"]')
        this.searchmenu = page.locator("i.fa-search")
    }

    //methods


    //to click on myaccount link

async ishomepageexists(): Promise<boolean>
{
   
let title:string =await this.page.title()
if(title)
{
    return true;
}
return false;

}


    async Myaccountclickmethod(): Promise<void> {
       
            await this.Myaccountlink.click();
       
        }
    

    //to click on register link
    async registerlinkclickmethod(): Promise<void> {
        try {
            await this.Registerlink.click();
        } catch (error) {
            console.log(`the exception is : ${error}`)
            throw error
        } 

    }


    //to click on loginlink
    async loginclickmethod(): Promise<void> {

        await this.Loginlink.click();
    }


    //to search an item
    async searchmenumethod(Searchitem: string): Promise<void> {

        await this.searchbox.fill(Searchitem)
    }

    //to click searchbox
    async searchboxmethod(): Promise<void> {

        await this.searchmenu.click()
    }


}

