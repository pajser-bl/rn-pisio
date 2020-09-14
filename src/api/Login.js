import ApiClient from "./ApiClient";

import endpoints from "../config/endpoints";

const getAuth = () => client.get(endpoints.auth);

export default {
  getAuth,
};
