import axios from '@api/axiosInstance';
import type { ChatMessage } from '@models/chat';

export const getChatHistory = async (): Promise<ChatMessage[]> => {
  const response = await axios.get<ChatMessage[]>(`/chat/history`);
  return response.data;
};

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  const response = await axios.post<ChatMessage>(`/chat/send`, { message });
  return response.data;
};
