import { useAuthStore } from "@/infra/store/auth";

export const TokenStorage = {
  get: (): string | null => {
    return useAuthStore.getState().token;
  },

  save: (token: string): void => {
    useAuthStore.setState({ token });
  },

  clear: (): void => {
    useAuthStore.getState().clearAuth();
  },
};
