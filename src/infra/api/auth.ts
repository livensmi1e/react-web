import { http } from "@/infra/api/http";
import { User } from "@/domain/models/user";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  return http.post<LoginResponse>("/auth/login", payload);
}
