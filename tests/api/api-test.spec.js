const { test, expect, request } = require("@playwright/test");
const { url } = require("inspector");
let loginPayload = {
  email: "admin@admin.com",
  password: "Password@123",
};

let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.post(
    "https://ats-be.vedastudios.com.np/api/v1/auth/login",
    { data: loginPayload }
  );
  console.log(await response.json());
  var tokenForBeforeAll = (await response.json()).data.accessToken;
  console.log("tokenForBeforeAll=>", tokenForBeforeAll);
});

test("API", async ({}) => {
  const apiContext = await request.newContext();
  const response = await apiContext.get(
    "https://ats-be.vedastudios.com.np/api/v1/job/published"
  );
  console.dir(await response.json(), { depth: null });
  const responseBody = await response.json();
  //   console.log(responseBody);
});

test("Check Login", async ({}) => {
  const apiContext = await request.newContext();
  const response = await apiContext.post(
    "https://ats-be.vedastudios.com.np/api/v1/auth/login",
    { data: loginPayload }
  );
  token = (await response.json()).data.accessToken;
  console.log("token=>", token);
});
