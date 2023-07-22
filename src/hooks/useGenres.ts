// import { Genre } from "../interfaces/response.ts";
// import useData from "./useData.ts";
import genres from "../data/genres.ts";

// version calling the server
// const useGenres = () => useData<Genre>("/genres");

// Static version
const useGenres = () => ({ loading: false, error: null, data: genres });

export default useGenres;
