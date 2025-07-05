import axios from '@api/axiosInstance';
import { LoginRequest, LoginResponse } from '@models/login';

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/api/login', credentials);
  return response.data;
};
