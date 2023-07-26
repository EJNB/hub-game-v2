import APIClient from "./api-client.ts";
import { Platform } from "../interfaces/response.ts";

export default new APIClient<Platform>("/platforms/lists/parents");
