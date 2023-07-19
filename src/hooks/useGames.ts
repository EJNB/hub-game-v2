import { Game, Genre, Platform } from "../interfaces/response.ts";
import useData from "./useData.ts";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id],
  );

export default useGames;
