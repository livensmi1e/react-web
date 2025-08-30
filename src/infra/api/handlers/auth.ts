import { http } from "@/infra/api/http";
import { User } from "@/domain/models/user";

export type LoginRequestBody = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: User;
  token: string;
};

export type LoginResponseBody = {
  data: LoginResponse;
  statusCode: number;
};

export async function login(
  payload: LoginRequestBody,
): Promise<LoginResponseBody> {
  return http.post<LoginResponseBody>("/auth/login", payload);
}

export type RegisterRequestBody = {
  email: string;
  password: string;
};

type RegisterResponse = {
  id: string;
  email: string;
};

export type RegisterResponseBody = {
  data: RegisterResponse;
  statusCode: number;
};

export async function register(
  payload: RegisterRequestBody,
): Promise<RegisterResponseBody> {
  return http.post<RegisterResponseBody>("/auth/register", payload);
}
