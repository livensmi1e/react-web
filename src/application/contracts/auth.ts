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
