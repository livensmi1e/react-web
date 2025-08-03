const TOKEN_KEY = "access_token";

export const TokenStorage = {
  get: (): string | null => localStorage.getItem(TOKEN_KEY),

  save: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  clear: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
