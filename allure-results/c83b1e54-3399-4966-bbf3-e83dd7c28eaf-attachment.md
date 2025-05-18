# Test info

- Name: WebClient app test
- Location: C:\Projects\udemy-playwright\tests\client-app.spec.js:3:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 4000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

    at C:\Projects\udemy-playwright\tests\client-app.spec.js:12:47
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
   2 |
   3 | test(`WebClient app test`, async ({ page }) => {
   4 |    //js file- Login js, DashboardPage
   5 |    // const email = "anshika@gmail.com";
   6 |    // const productName = 'zara coat 3';
   7 |    const products = page.locator(".card-body");
   8 |    await page.goto("https://rahulshettyacademy.com/client");
   9 |    await page.locator("#userEmail").fill("");
  10 |    await page.locator("#userPassword").fill("");
  11 |    await page.locator("[value='Login']").click();
> 12 |    await page.locator(".card-body b").first().waitFor();
     |                                               ^ TimeoutError: locator.waitFor: Timeout 4000ms exceeded.
  13 |    console.log( await page.locator(".card-body b").allTextContents());
  14 | })
  15 |
  16 |
```