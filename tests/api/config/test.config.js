const testConfig = {
  apiTimeout: 30000,
  retries: 2,
  baseURL: "https://ats-be.vedastudios.com.np/api/v1",
  defaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

module.exports = {
  testConfig,
};
