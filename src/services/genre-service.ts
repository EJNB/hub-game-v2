import APIClient from "./api-client.ts";
import { Genre } from "../interfaces/response.ts";

export default new APIClient<Genre>("/genres");
