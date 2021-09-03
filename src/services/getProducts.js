import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/products";

export function getProducts() {
  return http.get(apiEndpoint);
}

export default { getProducts };
