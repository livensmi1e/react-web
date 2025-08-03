import type { AuthService } from "@/app/ports/auth";
import {
  login as loginApi,
  LoginRequest,
  LoginResponse,
} from "@/infra/api/auth";

export const authService: AuthService = {
  login(payload: LoginRequest): Promise<LoginResponse> {
    return loginApi(payload);
  },
};
