import { create } from "apisauce";

import endpoints from "../config/endpoints";

const apiClient = create({
  baseURL: endpoints.baseUrl,
});

export default apiClient;
