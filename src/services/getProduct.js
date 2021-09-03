import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/products";

export function getProduct(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
