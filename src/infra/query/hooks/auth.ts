import { useMutation } from "@tanstack/react-query";
import { authService } from "@/app/services/auth";
import type {
  LoginRequestBody,
  LoginResponseBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "@/infra/api/handlers/auth";

export function useLogin(options?: {
  onSuccess?: (data: LoginResponseBody) => void;
  onError?: (error: unknown) => void;
}) {
  return useMutation<LoginResponseBody, unknown, LoginRequestBody>({
    mutationFn: authService.login,
    ...options,
  });
}

export function useRegister(options?: {
  onSuccess?: (data: RegisterResponseBody) => void;
  onError?: (error: unknown) => void;
}) {
  return useMutation<RegisterResponseBody, unknown, RegisterRequestBody>({
    mutationFn: authService.register,
    ...options,
  });
}
