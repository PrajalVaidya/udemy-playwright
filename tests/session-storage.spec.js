const { test, expect } = require("@playwright/test");

let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForTimeout(2000);
  await context.storageState({ path: "Storage-1.json" });

  //Injecting the cookies file into the new browser context
  webContext = await browser.newContext({ storageState: "Storage-1.json" });
});

test("session storage test", async ({ page }) => {
  const newPage = await webContext.newPage();
  //This will land on dashboard with already logged in state
  await newPage.goto("https://rahulshettyacademy.com/client");
});
