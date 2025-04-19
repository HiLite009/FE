import {useState} from 'react';
import {ChatLayout} from '../../components/layout/ChatLayout';
import {ChatHistory} from '../../components/history/ChatHistory';
import {ChatArea} from '../../components/chat/ChatArea';

const ChatPage = () => {
  const [, setSelectedChat] = useState<string | null>(null);

  // Mock data for chat history
  const mockHistory = [
    {
      id: '1',
      title: '첫 번째 대화',
      date: '2024-01-20',
    },
    {
      id: '2',
      title: '두 번째 대화',
      date: '2024-01-21',
    },
    {
      id: '3',
      title: '세 번째 대화',
      date: '2024-01-22',
    },
  ];

  const handleSelectChat = (chatId: string) => {
    setSelectedChat(chatId);
  };

  return (
    <ChatLayout
      history={
        <ChatHistory
          history={mockHistory}
          onSelectChat={handleSelectChat}/>}
      chat={<ChatArea/>}
    />
  );
};

export default ChatPage;
