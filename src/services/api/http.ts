import axios from "axios";
import { setupInterceptors } from "@/services/api/interceptor";
import { toAppError } from "@/services/api/error";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
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
      throw toAppError(err);
    }
  },

  post: async <T>(url: string, body: unknown): Promise<T> => {
    try {
      const res = await axiosInstance.post<T>(url, body);
      return res.data;
    } catch (err) {
      throw toAppError(err);
    }
  },

  patch: async <T>(url: string, body: unknown): Promise<T> => {
    try {
      const res = await axiosInstance.patch<T>(url, body);
      return res.data;
    } catch (err) {
      throw toAppError(err);
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.delete<T>(url);
      return res.data;
    } catch (err) {
      throw toAppError(err);
    }
  },
};
