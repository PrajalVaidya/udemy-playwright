const { test, expect } = require("@playwright/test");
const { loginData, jobData } = require("./auth.data");
const { endpoints } = require("../config/api.config");
const { testConfig } = require("../config/test.config");

let authToken;

test.describe("Jobs API Tests", () => {
  test.beforeAll(async ({ request }) => {
    // Login and get token before all tests
    const loginResponse = await request.post(endpoints.auth.login, {
      data: loginData.validUser,
      headers: testConfig.defaultHeaders,
    });

    expect(loginResponse.ok()).toBeTruthy();
    const responseBody = await loginResponse.json();
    expect(responseBody.data).toHaveProperty("accessToken");

    authToken = responseBody.data.accessToken;
  });

  test("should get published jobs", async ({ request }) => {
    const response = await request.get(endpoints.jobs.published, {
      headers: {
        ...testConfig.defaultHeaders,
      },
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(Array.isArray(responseBody.data)).toBeTruthy();
  });

  test("should create a new job", async ({ request }) => {
    const response = await request.post(endpoints.jobs.create, {
      data: jobData.validJob,
      headers: {
        ...testConfig.defaultHeaders,
        Authorization: `Bearer ${authToken}`,
      },
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data).toHaveProperty("title", jobData.validJob.title);
    expect(responseBody.data).toHaveProperty(
      "description",
      jobData.validJob.description
    );
  });
});
