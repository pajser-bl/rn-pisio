import clientApi from "./client";
import endpoints from "../config/endpoints";

const postAuth = (username, password) =>
  clientApi.post(endpoints.auth, {
    username: username,
    password: password,
  });

export default {
  postAuth,
};
