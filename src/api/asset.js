import endpoints from "../config/endpoints";
import globals from "../config/globals";
import clientApi from "./client";
const getAssets = () =>
  // apiClient.setHeader("Authorization", "Bearer " + globals.access_token);
  clientApi.get(
    endpoints.baseUrl + endpoints.asset,
    {},
    { headers: { Authorization: "Bearer " + globals.access_token } }
  );
const getAsset = (assetId) =>
  clientApi.get(
    endpoints.baseUrl + endpoints.asset + endpoints.view + assetId,
    {},
    { headers: { Authorization: "Bearer " + globals.access_token } }
  );
//  name 	description 	status 	type 	acquired 	price 	amortization 	person_id 	location_id
const createAsset = (asset) =>
  clientApi.post(
    endpoints.baseUrl + endpoints.asset + endpoints.create,
    { asset: asset },
    { headers: { Authorization: "Bearer " + globals.access_token } }
  );
const updateAsset = (assetId, asset) =>
  clientApi.patch(
    endpoints.baseUrl + endpoints.asset + assetId,
    { asset: asset },
    { headers: { Authorization: "Bearer " + globals.access_token } }
  );
const deleteAsset = (assetId) =>
  clientApi.post(
    endpoints.baseUrl + endpoints.asset + endpoints.delete + assetId,
    {},
    { headers: { Authorization: "Bearer " + globals.access_token } }
  );
export default {
  getAssets,
  getAsset,
  createAsset,
  updateAsset,
  deleteAsset,
};
