import{test,expect} from '@playwright/test'

import{HomePage} from '../pages/Homepage'
import{TestConfig} from '../test.config.ts'
import {LoginPage} from '../pages/loginpage.ts'
import{Accountpage} from '../pages/Accountpage.ts'

let testconfig:TestConfig;
let Homepage:HomePage;
let loginpage:LoginPage;
let accountpage:Accountpage;

test.beforeEach(async({page})=>
    {
testconfig=new TestConfig();
await page.goto(testconfig.appUrl);
Homepage=new HomePage(page);
accountpage=new Accountpage(page)
loginpage=new LoginPage(page);

})

test('login test @master @sanity @regression', async({})=>
{

Homepage.Myaccountclickmethod()
Homepage.loginclickmethod();
await loginpage.Typeemail(testconfig.email)
await loginpage.Typepassword(testconfig.password)
await loginpage.clicklogin();
const accounttext=accountpage.verifuaccountpage()
expect(accounttext).toBeTruthy()


})

test('login test2 @master @sanity @regression', async({})=>
{

Homepage.Myaccountclickmethod()
Homepage.loginclickmethod();
await loginpage.Typeemail(testconfig.email)
await loginpage.Typepassword(testconfig.password)
await loginpage.clicklogin();
const accounttext=accountpage.verifuaccountpage()
expect(accounttext).toBeTruthy()


})