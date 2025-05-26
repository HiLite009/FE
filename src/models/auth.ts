export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  token: string;
  userId: number;
  username: string;
}
