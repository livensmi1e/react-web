import { User } from "@/domain/models/user";
import {
  LoginRequestBody,
  LoginResponseBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "@/infra/api/handlers/auth";

export interface AuthService {
  login(payload: LoginRequestBody): Promise<LoginResponseBody>;
  register(payload: RegisterRequestBody): Promise<RegisterResponseBody>;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User | null) => void;
  clearAuth: () => void;
}
