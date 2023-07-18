import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "6a30866e7e8846ea8c9b568df317741f" },
});
