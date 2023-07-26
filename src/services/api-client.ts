import axios, { AxiosRequestConfig } from "axios";
import { Response } from "../interfaces/response.ts";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "6a30866e7e8846ea8c9b568df317741f" },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
