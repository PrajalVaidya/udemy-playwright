const { test, expect } = require('@playwright/test');
 
test('Check test data', async ({ page }) => {
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   console.log( await page.locator(".card-body b").allTextContents());
   await page.getByLabel('password');
   await page.locator('//input[@id="userEmail" and @type="email"]')
 
})