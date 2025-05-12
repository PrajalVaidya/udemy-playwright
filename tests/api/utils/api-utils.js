const { test, expect } = require("@playwright/test");
const { loginPayload, orderPayload } = require("../test-data/auth.data");
const { endpoints } = require("../config/api.config");

class ApiUtils {
  /**
   *
   */
  constructor(apiContext, loginPayload) {
    this.apiContext = apiContext;
    this.loginPayload = loginPayload;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: this.loginPayload,
      }
    );
    const loginResponseBody = await loginResponse.json();
    console.log(await loginResponseBody);
    return loginResponseBody.token;
  }
  async createOrder(orderPayload) {
    let response = {};
    response.token = this.getToken();
    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayload,
        headers: { Authorization: response.token },
      }
    );
    const orderResponseBody = await orderResponse.json();
    console.log(orderResponseBody);
    const orderId = orderResponseBody.orders[0];
    response.orderId = orderId;
    return response;
  }
}

module.exports = {
  ApiUtils,
};
