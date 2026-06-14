import { AxiosInstance } from "axios";
import { clearAuthSession, getAuthToken } from "@/services/store/auth";
import { showErrorToast } from "@/shared/libs/toast";

export const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use((config) => {
    const token = getAuthToken();
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
        clearAuthSession();
        showErrorToast("Session expired", {
          description: "Please sign in again to continue.",
          id: "session-expired",
        });
        window.location.href = "/login";
      }
      return Promise.reject(error);
    },
  );
};
