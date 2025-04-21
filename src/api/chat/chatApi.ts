import axios from "@api/axiosInstance";
import type { ChatMessage } from "@models/chat";

const BASE_URL: string = import.meta.env.VITE_APP_API_BASE_URL;

export const getChatHistory = async (): Promise<ChatMessage[]> => {
    const response = await axios.get<ChatMessage[]>(`${BASE_URL}/chat/history`);
    return response.data;
};

export const sendMessage = async (message: string): Promise<ChatMessage> => {
    const response = await axios.post<ChatMessage>(`${BASE_URL}/chat/send`, { message });
    return response.data;
};