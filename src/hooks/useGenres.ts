import { useQuery } from "@tanstack/react-query";
import { Genre } from "../interfaces/response.ts";
import apiClient from "../services/api-client.ts";
import { Response } from "../interfaces/response.ts";
import genres from "../data/genres.ts";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<Response<Genre>>("/genres").then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
