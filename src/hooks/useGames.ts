import { Game } from "../interfaces/response.ts";
import { Response } from "../interfaces/response.ts";
import useGameQueryStore from "../store.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service.ts";
import ms from "ms";

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    staleTime: ms("24h"), // 24h
    // When implement infiniteQuery we should implement this function
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
