import { AxiosInstance } from "axios";
import { TokenStorage } from "@/infra/web-storage/token";
import { showError } from "@/shared/libs/toast";

export const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use((config) => {
    const token = TokenStorage.get();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error?.response?.status;
      if (status === 401) {
        TokenStorage.clear();
        showError("Session expired. Please log in again.");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    },
  );
};
