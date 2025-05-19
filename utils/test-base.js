const base = require("@playwright/test");

exports.customTest = base.test.extend({
  testData: async ({}, use) => {
    await use({
      userEmail: "rahulshettyacademy1",
      userPassword: "learning1",
      productName: "ZARA COAT 3",
    });
  },
});
