const { test, expect, request } = require("@playwright/test");
const { loginPayload, orderPayload } = require("./test-data/auth.data");
const { endpoints } = require("./config/api.config");
const { ApiUtils } = require("./utils/api-utils");

let authToken;
let response;

test.beforeAll(async ({}) => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

//create order is success
test("@API Place the order", async ({ page }) => {
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (response.orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  //await page.pause();
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

//Verify if order created is showing in history page
// Precondition - create order -
