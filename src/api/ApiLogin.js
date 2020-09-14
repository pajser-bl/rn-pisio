import ApiClient from "./ApiClient";
import endpoints from "../config/endpoints";

const getAuth = () => ApiClient.get(endpoints.auth);

export default {
  getAuth,
};
