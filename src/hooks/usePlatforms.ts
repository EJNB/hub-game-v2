import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import platformService from "../services/platform-service.ts";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
