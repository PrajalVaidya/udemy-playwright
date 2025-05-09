const BASE_URL = "https://rahulshettyacademy.com/api/ecom";

const endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
  },
  order: {
    create: `${BASE_URL}/order/create-order`,
  },
};

module.exports = {
  endpoints,
};
