import { AuthState } from "@/application/contracts/auth";
import { User } from "@/domain/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);

export function getAuthToken(): string | null {
  return useAuthStore.getState().token;
}

export function setAuthSession(token: string, user: User | null): void {
  useAuthStore.getState().setAuth(token, user);
}

export function clearAuthSession(): void {
  useAuthStore.getState().clearAuth();
}
