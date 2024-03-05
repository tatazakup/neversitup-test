import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const MainAxios = Axios.create({
  baseURL: "https://candidate.neversitup.com/todo",
});

MainAxios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  return request;
});

MainAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response.data);
  },
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);
