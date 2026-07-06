import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage'
import { Registation } from '../pages/Registration'
import { randomdatagenerator } from '../utils/randomdatagenerator'
import { TestConfig } from '../test.config'

let homepage: HomePage;
let regpage: Registation;
let config = new TestConfig();

test.beforeEach(async ({ page }) => {

    //navigate to url
    await page.goto(config.appUrl);
    //create object for homepage
    homepage = new HomePage(page);
    //create object for registration page
    regpage = new Registation(page);
})


test.afterEach(async ({ page }) => {
    await page.close();
})


test('user registration', async ({ }) => {
    await homepage.Myaccountclickmethod();
    await homepage.registerlinkclickmethod();
    await regpage.firstnamefillmethod(randomdatagenerator.getfirstname())
    await regpage.lastnamefillmethod(randomdatagenerator.getlastname())
    await regpage.emailfillmethod(randomdatagenerator.getemail())
    await regpage.phonenumbermethod(randomdatagenerator.getphone())
    await regpage.passwordmethod("Constant123")
    await regpage.confirmpasswordmethod("Constant123")
    await regpage.clickcheckbox();
    await regpage.continuebuttonclick();
    const text = await regpage.Verifytext();
    expect(text).toBe("Your Account Has Been Created!")
})

