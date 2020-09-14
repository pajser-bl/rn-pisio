import ApiClient from "./ApiClient";
import endpoints from "../config/endpoints";

const getAuth = (username, password) =>
  ApiClient.post(endpoints.auth, {
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

export default {
  getAuth,
};
