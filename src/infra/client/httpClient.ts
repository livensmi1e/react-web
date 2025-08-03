import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const http = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await httpClient.get(endpoint);
    return response.data;
  },

  post: async <T>(endpoint: string, body: unknown): Promise<T> => {
    const response = await httpClient.post(endpoint, body);
    return response.data;
  },

  patch: async <T>(endpoint: string, body: unknown): Promise<T> => {
    const response = await httpClient.patch(endpoint, body);
    return response.data;
  },

  delete: async <T>(endpoint: string): Promise<T> => {
    const response = await httpClient.delete(endpoint);
    return response.data;
  },
};
