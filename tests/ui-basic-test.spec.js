// @ts-check
const { test, expect } = require("@playwright/test");
const { createDiffieHellmanGroup } = require("node:crypto");
const { CLIENT_RENEG_LIMIT } = require("node:tls");

test("Browser context test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await page.locator("#signInBtn").click();

  await page.locator(".card-body a").click();
});

test("handling UI elements test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("select.form-control").selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).not.toBeChecked();

  await expect(
    page.locator('[href="https://rahulshettyacademy.com/documents-request"]')
  ).toHaveAttribute("class", "blinkingText");
  // await page.pause();
});

test("@Child windows hadl", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");

  //This is for asynchronous execution of these two steps
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), //listen for any new page pending,rejected,fulfilled
    documentLink.click(),
  ]); //new page is opened

  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  console.log(await page.locator("#username").textContent());
});

test.only("handling child windows and new pages", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator(
    '[href="https://rahulshettyacademy.com/documents-request"]'
  );

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentLink.click(),
  ]);

  // console.log(await newPage.locator('.red').textContent());
  console.dir(await newPage.locator(".red").textContent());
});
