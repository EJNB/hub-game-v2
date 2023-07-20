import { Game } from "../interfaces/response.ts";
import useData from "./useData.ts";
import { GameQuery } from "../App.tsx";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );

export default useGames;
