import ApiClient from "./ApiClient";
import endpoints from "../config/endpoints";

const postAuth = (username, password) =>
  ApiClient.post(endpoints.auth, {
    username: username,
    password: password,
  });

export default {
  postAuth,
};
