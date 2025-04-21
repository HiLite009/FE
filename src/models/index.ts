export interface Message {
  text: string;
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface User {
  id: string;
  username: string;
}

export interface ChatHistory {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}