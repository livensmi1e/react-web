import type {
  AuthService,
  LoginRequestBody,
  LoginResponseBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "@/application/contracts/auth";
import { http } from "@/services/api/http";

export const authService: AuthService = {
  login(payload: LoginRequestBody): Promise<LoginResponseBody> {
    return http.post<LoginResponseBody>("/auth/login", payload);
  },

  register(payload: RegisterRequestBody): Promise<RegisterResponseBody> {
    return http.post<RegisterResponseBody>("/auth/register", payload);
  },
};
