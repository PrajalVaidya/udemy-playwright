const { test, expect, request } = require("@playwright/test");

test("using route.abort method to abort the assest while requesting ", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.route("**/*.{jpg}", (route) => route.abort());
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await page.locator("#signInBtn").click();
  await expect(page.locator("[style*='block']"));
});
