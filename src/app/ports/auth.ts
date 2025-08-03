import { User } from "@/domain/models/user";
import { LoginRequest, LoginResponse } from "@/infra/api/auth";

export interface AuthService {
  login(payload: LoginRequest): Promise<LoginResponse>;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
}
