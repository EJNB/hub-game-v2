import { Game } from "../interfaces/response.ts";
import useData from "./useData.ts";

const useGames = () => useData<Game>("/games");
export default useGames;
