import { Page, expect, Locator } from '@playwright/test'

export class Registation {
    //variables    
    private readonly page: Page
    private readonly firstname: Locator
    private readonly lastname: Locator
    private readonly email: Locator
    private readonly phone: Locator
    private readonly password: Locator
    private readonly confirmpassword: Locator
    private readonly checkbox: Locator
    private readonly continuebutton: Locator
    private readonly textverify: Locator

    //constructor

    constructor(page: Page) {
        this.page = page
        this.firstname = page.locator("#input-firstname")
        this.lastname = page.locator("#input-lastname")
        this.email = page.locator("#input-email")
        this.phone = page.locator("#input-telephone")
        this.password = page.locator("#input-password")
        this.confirmpassword = page.locator("#input-confirm")
        this.checkbox = page.locator('input[name="agree"]')
        this.continuebutton = page.locator("input[value='Continue']")
        this.textverify = page.locator("div h1")
    }

    //methods 

    async firstnamefillmethod(fname: string) : Promise<void>{
         await this.firstname.click();
    
            await this.firstname.fill(fname)
    }



    async lastnamefillmethod(lname: string) : Promise<void> {
        try {
             await this.lastname.click();
            await this.lastname.fill(lname)
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }

    async emailfillmethod(email: string) : Promise<void>{
        try {
            await this.email.fill(email)
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }

    async phonenumbermethod(phone: string) : Promise<void>{
        try {
            await this.phone.fill(phone)
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }

    async passwordmethod(password: string) : Promise<void>{
        try {
            await this.password.fill(password)
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }


    async confirmpasswordmethod(cpassword: string): Promise<void> {
        try {
            await this.confirmpassword.fill(cpassword)
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }


    async clickcheckbox() : Promise<void>{
        try {
            await this.checkbox.check()
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }


    async continuebuttonclick(): Promise<void> {
        try {
            await this.continuebutton.click()
        } catch (error) {
            console.log(`error occured: ${error}`)
        }
    }

    async Verifytext(): Promise<string> {

        return await this.textverify.innerText();

    }


}

