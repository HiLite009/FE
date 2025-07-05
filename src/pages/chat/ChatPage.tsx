import { useState } from 'react';
import { ChatLayout } from '@components/layout/ChatLayout.tsx';
import { ChatHistory } from '@components/history/ChatHistory.tsx';
import { ChatArea } from '@components/chat/ChatArea.tsx';

const ChatPage = () => {
  const [, setSelectedChat] = useState<string | null>(null);

  // Mock data for chat history
  const mockHistory = Array.from({ length: 20 }, (_, i) => ({
    id: `${i + 1}`,
    title: `대화 ${i + 1}`,
    date: `2024-01-${20 + i}`,
  }));

  const handleSelectChat = (chatId: string) => {
    setSelectedChat(chatId);
  };

  return (
    <ChatLayout
      history={<ChatHistory history={mockHistory} onSelectChat={handleSelectChat} />}
      chat={<ChatArea />}
    />
  );
};

export default ChatPage;
