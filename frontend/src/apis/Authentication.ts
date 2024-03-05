import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { MainAxios } from "@/configs/api/MainAxios";
import { AxiosRequestConfig } from "axios";

export const useSignIn = (
  options?: UseMutationOptions<
    {
      token: string;
    },
    unknown,
    {
      username: string;
      password: string;
    },
    unknown
  >
) => {
  return useMutation({
    mutationFn: async ({ username, password }) => {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "users/auth",
        data: {
          username: username,
          password: password,
        },
      };
      return await MainAxios(config);
    },
    ...options,
  });
};
