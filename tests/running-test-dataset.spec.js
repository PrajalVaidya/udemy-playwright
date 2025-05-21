const { test, expect } = require("@playwright/test");
const dataset = JSON.parse(
  JSON.stringify(require("../utils/place-order-test-data.json"))
);
const { customTest } = require("../utils/test-base.js");

for (const data of dataset) {
  test(`testcase ${data.productName}`, async ({ page }) => {
    //js file- Login js, DashboardPage
    // const email = "anshika@gmail.com";
    // const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(data.userEmail);
    await page.locator("#userPassword").fill(data.userPassword);
    await page.locator("[value='Login']").click();
    await page.locator(".card-body b").first().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());
  });
}

// customTest.only("testcase custom", async ({ page, testData }) => {
//   //js file- Login js, DashboardPage
//   // const email = "anshika@gmail.com";
//   // const productName = 'zara coat 3';
//   const products = page.locator(".card-body");
//   await page.goto("https://rahulshettyacademy.com/client");
//   await page.locator("#userEmail").fill(testData.userEmail);
//   await page.locator("#userPassword").fill(testData.userPassword);
//   await page.locator("[value='Login']").click();
//   await page.locator(".card-body b").first().waitFor();
//   console.log(await page.locator(".card-body b").allTextContents());
// });
