# Test info

- Name: testcase custom
- Location: C:\Projects\udemy-playwright\tests\running-test-dataset.spec.js:20:12

# Error details

```
TimeoutError: locator.waitFor: Timeout 4000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

    at C:\Projects\udemy-playwright\tests\running-test-dataset.spec.js:29:47
```

# Page snapshot

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: /client/auth/register
- paragraph: Register to sign in with your personal account
- heading "Log in" [level=1]
- text: Email
- textbox "email@example.com"
- text: "*Email is required Password"
- textbox "enter your passsword"
- text: "*Password is required"
- button "Login"
- link "Forgot password?":
  - /url: /client/auth/password-new
- paragraph: Don't have an account? Register here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 | const dataset = JSON.parse(JSON.stringify(require('../utils/place-order-test-data.json')));
   3 | const {customTest} =require('../utils/test-base.js');
   4 |
   5 | for (const data of dataset){
   6 | test(`testcase ${data.productName}`, async ({ page }) => {
   7 |    //js file- Login js, DashboardPage
   8 |    // const email = "anshika@gmail.com";
   9 |    // const productName = 'zara coat 3';
  10 |    const products = page.locator(".card-body");
  11 |    await page.goto("https://rahulshettyacademy.com/client");
  12 |    await page.locator("#userEmail").fill(data.userEmail);
  13 |    await page.locator("#userPassword").fill(data.userPassword);
  14 |    await page.locator("[value='Login']").click();
  15 |    await page.locator(".card-body b").first().waitFor();
  16 |    console.log( await page.locator(".card-body b").allTextContents());
  17 | })
  18 | }
  19 |
  20 | customTest.only(`testcase custom`, async ({ page} ) => {
  21 |    //js file- Login js, DashboardPage
  22 |    // const email = "anshika@gmail.com";
  23 |    // const productName = 'zara coat 3';
  24 |    const products = page.locator(".card-body");
  25 |    await page.goto("https://rahulshettyacademy.com/client");
  26 |    await page.locator("#userEmail").fill("");
  27 |    await page.locator("#userPassword").fill("");
  28 |    await page.locator("[value='Login']").click();
> 29 |    await page.locator(".card-body b").first().waitFor();
     |                                               ^ TimeoutError: locator.waitFor: Timeout 4000ms exceeded.
  30 |    console.log( await page.locator(".card-body b").allTextContents());
  31 | })
  32 |
  33 |
  34 |
```