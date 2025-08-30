import type { AuthService } from "@/app/ports/auth";
import {
  login as loginApi,
  LoginRequestBody,
  LoginResponseBody,
  register as callRegisterApi,
  RegisterRequestBody,
  RegisterResponseBody,
} from "@/infra/api/handlers/auth";

export const authService: AuthService = {
  login(payload: LoginRequestBody): Promise<LoginResponseBody> {
    return loginApi(payload);
  },

  register(payload: RegisterRequestBody): Promise<RegisterResponseBody> {
    return callRegisterApi(payload);
  },
};
