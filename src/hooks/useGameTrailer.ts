import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import { Trailer } from "../entities/Trailer.ts";

const useGameTrailer = (idGame: string) => {
  const api = new APIClient<Trailer>(`/games/${idGame}/movies`);

  return useQuery({
    queryKey: ["trailers", idGame],
    queryFn: api.getAll,
  });
};

export default useGameTrailer;
