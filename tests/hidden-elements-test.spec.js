const { test, expect } = require("@playwright/test");

test("checking hidden elements", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#show-textbox").click();
  //   await page.locator("#displayed-text").waitFor();
  await page.locator("#displayed-text").isVisible();
  await page.locator("#hide-textbox").click();
  await page.locator("#displayed-text").isHidden();
  //   await page.locator("#displayed-text").waitFor({ state: "hidden" });
});

test("handling JS popups and alerts(dialogs)", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.on("dialog", (dialog) => dialog.accept());

  await page.getByRole("button", { name: "Alert" }).click();
});
