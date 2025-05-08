const BASE_URL = "https://ats-be.vedastudios.com.np/api/v1";

const endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
  },
  jobs: {
    published: `${BASE_URL}/job/published`,
    create: `${BASE_URL}/job`,
  },
};

module.exports = {
  endpoints,
};
