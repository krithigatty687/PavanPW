
import {test,Locator,Page} from '@playwright/test'
import{Logoutpage} from '../pages/Logoutpage'
export class Accountpage
{
//variables
private readonly page:Page;
private readonly Accountpage:Locator;
private readonly Logoutlink:Locator;

//constructor
constructor(page:Page)
{
    this.page=page;
this.Accountpage=page.locator("//h2[text()='My Account']")
this.Logoutlink=page.locator("//a[text()='Logout']").last();
}
//methods
async verifuaccountpage(): Promise<boolean>
{
return await this.Accountpage.isVisible();

}


//clicking on logoutlink from account page
async clickonlogout(): Promise<Logoutpage>

{
    
await this.Logoutlink.click();
return new Logoutpage(this.page)

}


}