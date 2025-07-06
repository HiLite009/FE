export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
  username: string;
  message: string;
}

export interface ApiErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  code: string;
  message: string;
  path: string;
  fieldErrors: Record<string, string>;
}
