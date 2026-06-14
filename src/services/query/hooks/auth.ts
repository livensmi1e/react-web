import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/api/auth";
import type {
  LoginRequestBody,
  LoginResponseBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "@/application/contracts/auth";

export function useLogin(options?: {
  onSuccess?: (data: LoginResponseBody) => void;
  onError?: (error: unknown) => void;
}) {
  return useMutation<LoginResponseBody, unknown, LoginRequestBody>({
    mutationFn: authService.login,
    retry: false,
    ...options,
  });
}

export function useRegister(options?: {
  onSuccess?: (data: RegisterResponseBody) => void;
  onError?: (error: unknown) => void;
}) {
  return useMutation<RegisterResponseBody, unknown, RegisterRequestBody>({
    mutationFn: authService.register,
    retry: false,
    ...options,
  });
}
