import axios from '@api/axiosInstance';
import type { ChatMessage } from '@models/chat';

export const getChatHistory = async (): Promise<ChatMessage[]> => {
  const response = await axios.get<ChatMessage[]>('/chat/history');
  return response.data;
};

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  const response = await axios.post<ChatMessage>('/chat/send', { message });
  return response.data;
};

export const postChat = async (message: string): Promise<ChatMessage> => {
  console.log(message);
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('인터넷 연결이 원활하지 않습니다. 다시 시도해주세요.'));
    }, 1000);
  });
};
