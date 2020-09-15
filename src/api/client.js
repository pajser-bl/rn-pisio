import { create } from "apisauce";
import endpoints from "../config/endpoints";

const clientApi = create({
  baseURL: endpoints.baseUrl,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Orignin": "*",
    "Content-Type": "application/json",
  },
});
export default clientApi;
