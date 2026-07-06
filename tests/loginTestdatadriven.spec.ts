import {test,expect} from '@playwright/test'
import {TestConfig} from '../test.config'
import {HomePage} from '../pages/Homepage'
import {Accountpage} from '../pages/Accountpage'
import {DataProvider} from '../utils/dataprovider'
import {LoginPage} from '../pages/loginpage'


let testconfig:TestConfig
let Homepage:HomePage
let Loginpage:LoginPage
let accountpage:Accountpage
const datafile="data/logindata.json"
const jsontodata=DataProvider.getTestDataFromJson(datafile)
for(const data of jsontodata)
{

test(` Test case : ${data.testName} @datadriven` ,async({page})=>
{
 testconfig=new TestConfig()
 await page.goto(testconfig.appUrl);
 Homepage=new HomePage(page)
await Homepage.Myaccountclickmethod();
await Homepage.loginclickmethod();
Loginpage=new LoginPage(page)
await Loginpage.Typeemail(data.email);
await Loginpage.Typepassword(data.password)
await Loginpage.clicklogin();
accountpage=new Accountpage(page)
accountpage.verifuaccountpage()

})

}

//reading data from csv
const csvfile="data/logindata.csv"
const csvtodata=DataProvider.getTestDataFromCsv(csvfile)
for(const data of csvtodata)
{

test(` Test case : ${data.testName} @datadriven` ,async({page})=>
{
 testconfig=new TestConfig()
 await page.goto(testconfig.appUrl);
 Homepage=new HomePage(page)
await Homepage.Myaccountclickmethod();
await Homepage.loginclickmethod();
Loginpage=new LoginPage(page)
await Loginpage.Typeemail(data.email);
await Loginpage.Typepassword(data.password)
await Loginpage.clicklogin();
accountpage=new Accountpage(page)
accountpage.verifuaccountpage()

})

}