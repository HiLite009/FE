import axiosInstance from '@api/axiosInstance';
import { LoginRequest, LoginResponseDto } from '@models/login';

export const loginApi = async (data: LoginRequest): Promise<LoginResponseDto> => {
  const response = await axiosInstance.post<LoginResponseDto>('/api/login', data);
  return response.data;
};
