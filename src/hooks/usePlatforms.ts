import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import platformService from "../services/platform-service.ts";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24H"),
    initialData: platforms,
  });

export default usePlatforms;
