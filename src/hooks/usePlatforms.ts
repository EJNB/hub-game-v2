// import useData from "./useData.ts";
import { Platform, Response } from "../interfaces/response.ts";
import apiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms.ts";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
