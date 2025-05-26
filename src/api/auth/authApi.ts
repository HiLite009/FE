import axios from 'axios';
import { LoginRequest, SignupRequest, AuthResponse } from '@models/auth';


export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`/auth/login`, data);
  return response.data;
};

export const signup = async (data: SignupRequest): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`/auth/signup`, data);
  return response.data;
};
