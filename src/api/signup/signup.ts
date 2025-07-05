// src/api/signup.ts
import axiosInstance from '../axiosInstance';
import { SignUpFormData } from '@models/signup';

/**
 * 이메일 중복 확인 API
 * @param email 확인할 이메일
 * @returns 사용 가능 여부를 반환하는 Promise
 */
export const checkEmail = async (email: string): Promise<boolean> => {
  const { data } = await axiosInstance.get<{ available: boolean }>('/api/signup/check-email', {
    params: { email },
  });
  return data.available;
};

/**
 * 회원가입 API
 * @param formData 회원가입 폼 데이터
 */
export const signup = async (formData: SignUpFormData): Promise<void> => {
  await axiosInstance.post('/api/signup', formData);
};
