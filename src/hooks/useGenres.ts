import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import ms from "ms";
import genreService from "../services/genre-service.ts";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
