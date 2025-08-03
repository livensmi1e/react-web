// infra/api/http.ts
import axios from "axios";
import { setupInterceptors } from "./interceptor";
import { handleApiError } from "./handler";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(axiosInstance);

export const http = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.get<T>(url);
      return res.data;
    } catch (err) {
      handleApiError(err);
      throw err;
    }
  },

  post: async <T>(url: string, body: unknown): Promise<T> => {
    try {
      const res = await axiosInstance.post<T>(url, body);
      return res.data;
    } catch (err) {
      handleApiError(err);
      throw err;
    }
  },

  patch: async <T>(url: string, body: unknown): Promise<T> => {
    try {
      const res = await axiosInstance.patch<T>(url, body);
      return res.data;
    } catch (err) {
      handleApiError(err);
      throw err;
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.delete<T>(url);
      return res.data;
    } catch (err) {
      handleApiError(err);
      throw err;
    }
  },
};
