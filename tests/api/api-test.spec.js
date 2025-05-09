const { test, expect } = require("@playwright/test");
const { loginPayload, orderPayload } = require("./test-data/auth.data");
const { endpoints } = require("./config/api.config");

let authToken;

test.describe("API Tests", () => {
  test.beforeAll(async ({ request }) => {
    // Login and get token before all tests
    const loginResponse = await request.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: loginPayload,
      }
    );

    // expect(loginResponse.ok()).toBeTruthy();
    const responseBody = await loginResponse.json();

    authToken = responseBody.token;
    console.log(responseBody);
  });

  test("create Order", async ({ request }) => {
    const response = await request.post(endpoints.jobs.create, {
      data: orderPayload,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
  });
});
