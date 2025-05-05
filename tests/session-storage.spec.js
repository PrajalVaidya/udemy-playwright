const { test, expect } = require("@playwright/test");
const path = require("path");

test("session storage test", async ({ browser }) => {
  const email = "anshika@gmail.com";
  const productName = "ZARA COAT 3";
  //   const products = page.locator(".card-body");
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  const storage = await context.storageState({ path: "Storage-state.json" });
});
