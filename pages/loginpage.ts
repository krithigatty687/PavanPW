import {test,expect,Locator,Page} from '@playwright/test'

export class LoginPage
{
//varialbs
private readonly page:Page;
private readonly emailfield:Locator;
private readonly password:Locator;
private readonly loginbutton:Locator;

//constructor
constructor(page:Page)
{
 this.page=page
 this.emailfield =page.locator('input[name="email"]')
this.password=page.locator("#input-password")
this.loginbutton=page.locator('input[value="Login"]')

}


//async methods
//This method is for typing email field value.
//@param =email 
async Typeemail(email:string): Promise<void>
{
    try{

    
await this.emailfield.fill(email)
    }catch(error)
    {
console.log(`the error is ${error}`)
throw error
    }
}

//This method is for typing password
async Typepassword(password:string): Promise<void>
{
    try{

    
await this.password.fill(password)
    }catch(error)
    {
console.log(`the error is ${error}`)
throw error
    }
}

async clicklogin():Promise<void>
{

   await this.loginbutton.click();
}



}