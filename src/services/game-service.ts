import APIClient from "./api-client.ts";
import { Game } from "../interfaces/response.ts";

export default new APIClient<Game>("/games");
