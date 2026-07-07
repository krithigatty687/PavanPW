import {test ,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { HomePage} from '../pages/Homepage'
import {Accountpage} from '../pages/Accountpage'
import {Logoutpage} from '../pages/Logoutpage'
import {TestConfig} from '../test.config'
import  {randomdatagenerator} from  '../utils/randomdatagenerator'

let testConfig:TestConfig
let loginpage:LoginPage
let homepage:HomePage
let accountpage:Accountpage
let logoutpage:Logoutpage

test.beforeEach(async({page})=>
{


testConfig =new TestConfig()
await page.goto(testConfig.appUrl);
loginpage =new LoginPage(page)
homepage=new HomePage(page)
accountpage=new Accountpage(page)
logoutpage=new Logoutpage(page)
})


test('logout scenario @master @logout', async({page})=>
{
await homepage.Myaccountclickmethod();
await homepage.loginclickmethod()
await loginpage.Typeemail(testConfig.email)
await loginpage.Typepassword(testConfig.password)
await loginpage.clicklogin();
await accountpage.clickonlogout()
await page.waitForTimeout(5000)
const isexits=await logoutpage.iscontinuebuttonexists()
console.log(isexits)
expect(isexits).toBeTruthy()
await logoutpage.Clickoncontinuebutton();
await page.waitForTimeout(5000)
const ishome=await homepage.ishomepageexists();
expect(ishome).toBeTruthy()
})