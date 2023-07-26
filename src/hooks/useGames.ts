import { Game } from "../interfaces/response.ts";
import { Response } from "../interfaces/response.ts";
import { GameQuery } from "../App.tsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service.ts";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    // When implement infiniteQuery we should implement this function
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
