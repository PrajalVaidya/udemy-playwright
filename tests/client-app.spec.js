const { test, expect } = require('@playwright/test');

test(`WebClient app test`, async ({ page }) => {
   //js file- Login js, DashboardPage
   // const email = "anshika@gmail.com";
   // const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("");
   await page.locator("#userPassword").fill("");
   await page.locator("[value='Login']").click();
   await page.locator(".card-body b").first().waitFor();
   console.log( await page.locator(".card-body b").allTextContents());
})

