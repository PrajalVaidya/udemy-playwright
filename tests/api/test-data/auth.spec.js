const { test, expect } = require("@playwright/test");
const { loginData } = require("./auth.data");
const { endpoints } = require("../config/api.config");
const { testConfig } = require("../config/test.config");

test.describe("Authentication API Tests", () => {
  test("should login successfully with valid credentials", async ({
    request,
  }) => {
    const response = await request.post(endpoints.auth.login, {
      data: loginData.validUser,
      headers: testConfig.defaultHeaders,
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data).toHaveProperty("accessToken");
    expect(typeof responseBody.data.accessToken).toBe("string");
  });

  test("should fail login with invalid credentials", async ({ request }) => {
    const response = await request.post(endpoints.auth.login, {
      data: loginData.invalidUser,
      headers: testConfig.defaultHeaders,
    });

    expect(response.ok()).toBeFalsy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("error");
  });
});
