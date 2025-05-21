const { test, expect } = require("@playwright/test");

test("check Open multiple tabs", async ({ browser, page }) => {
  // Create a new browser context
  const context = await browser.newContext();

  // Open multiple tabs
  const tabs = [];
  for (let i = 0; i < 100; i++) {
    const newPage = await context.newPage();
    await newPage.goto("https://example.com/");
    tabs.push(newPage);
  }
});
