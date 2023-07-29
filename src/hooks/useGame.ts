import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gameService from "../services/game-service.ts";
import { Game } from "../interfaces/response.ts";

const useGame = (id: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => gameService.get(id),
    staleTime: ms("24h"),
  });

export default useGame;
