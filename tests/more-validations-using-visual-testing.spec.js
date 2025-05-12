const { test, expect } = require("@playwright/test");

test.only("Screenshot and visual comaparison", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/", {
    waitUntil: "networkidle",
  });
  await page.mouse.wheel(0, 200);
  await page.waitForTimeout(500);
  await page.screenshot({ path: "./tests/screenshots/FullScreenshot1.png" });
  await page.locator("#show-textbox").click();
  await page.screenshot({ path: "./tests/screenshots/FullScreenshot2.png" });
  await page.locator("#displayed-text").waitFor();
  await page.locator("#hide-textbox").click();
  await page.screenshot({ path: "./tests/screenshots/FullScreenshot3.png" });
});

test("Visual validation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/", {
    waitUntil: "networkidle",
  });
  await expect(await page.screenshot()).toMatchSnapshot("FullScreenshot1.png");
});
