import { Game } from "../interfaces/response.ts";
import { Response } from "../interfaces/response.ts";
import { GameQuery } from "../App.tsx";
import apiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) =>
  useQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<Response<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });

export default useGames;
