import {test,Locator, Page} from '@playwright/test'
import { HomePage } from '../pages/Homepage';

export class Logoutpage{
//variabls
private readonly logoutverify;
private readonly page;
private readonly continuebutton;

//constructor
constructor(page:Page)
{
this.page=page;
this.logoutverify=page.locator("//h1[text()='Account Logout']")
this.continuebutton=page.locator("//a[text()='Continue']")
}

//methods
async Logoutverifymethod(): Promise<string>
{
  const logouttext=await this.logoutverify.innerText();  
  return logouttext;
}

async iscontinuebuttonexists(): Promise<boolean>
{

return this.continuebutton.isVisible();
}

//click on continue button
async Clickoncontinuebutton(): Promise<HomePage>
{
await this.continuebutton.click()
return new HomePage(this.page)

}



}