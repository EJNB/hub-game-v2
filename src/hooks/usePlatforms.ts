import useData from "./useData.ts";
import { Platform } from "../interfaces/response.ts";

const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatforms;
