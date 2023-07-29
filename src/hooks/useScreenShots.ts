import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import { Screenshot } from "../entities/Screenshot.ts";

const useScreenShots = (gameId: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
