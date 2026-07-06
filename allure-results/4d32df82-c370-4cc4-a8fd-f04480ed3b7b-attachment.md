# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Accountregistration.spec.ts >> user registration
- Location: tests\Accountregistration.spec.ts:7:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { HomePage } from '../pages/Homepage'
  3  | import { Registation } from '../pages/Registration'
  4  | import { randomdatagenerator } from '../utils/randomdatagenerator'
  5  | import { TestConfig } from '../test.config'
  6  | 
  7  | test('user registration', async ({ page }) => {
  8  | 
  9  |     const config = new TestConfig();
> 10 |     await page.goto(config.appUrl); //Navigate to the url;
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  11 |     const homepage = new HomePage(page);
  12 |     await homepage.Myaccountclickmethod();
  13 |     await homepage.registerlinkclickmethod();
  14 |     const regpage = new Registation(page);
  15 |     await regpage.firstnamefillmethod(randomdatagenerator.getfirstname())
  16 |     await regpage.lastnamefillmethod(randomdatagenerator.getlastname())
  17 |     await regpage.emailfillmethod(randomdatagenerator.getemail())
  18 |     await regpage.phonenumbermethod(randomdatagenerator.getphone())
  19 |     await regpage.passwordmethod("Constant123")
  20 |     await regpage.confirmpasswordmethod("Constant123")
  21 |     await regpage.clickcheckbox();
  22 |     await regpage.continuebuttonclick();
  23 |    const text= await regpage.Verifytext();
  24 |    expect(text).toBe("Your Account Has Been Created!")
  25 |    await page.waitForTimeout(2000)
  26 | })
```