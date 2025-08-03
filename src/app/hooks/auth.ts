import { useMutation } from "@tanstack/react-query";
import { authService } from "@/app/services/auth";
import type { LoginRequest, LoginResponse } from "@/infra/api/auth";

export function useLogin(options?: {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: unknown) => void;
}) {
  return useMutation<LoginResponse, unknown, LoginRequest>({
    mutationFn: authService.login,
    ...options,
  });
}
