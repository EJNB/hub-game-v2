import { Genre } from "../interfaces/response.ts";
import useData from "./useData.ts";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
