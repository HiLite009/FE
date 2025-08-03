import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { ChatMessageList } from './ChatMessageList';
import { ChatInputBar } from './ChatInputBar';
import { Message } from '../../models';

import { postChat } from '@api/chat/chatApi';

export const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
      content: '',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      await postChat(input);
    } catch (error) {
      console.log(error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: '인터넷 연결이 원활하지 않습니다. 다시 시도해주세요.',
        sender: 'assistant',
        timestamp: new Date(),
        content: '',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '768px',
        width: '100%',
        mx: 'auto',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        채팅
      </Typography>

      <ChatMessageList messages={messages} />
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ChatInputBar input={input} setInput={setInput} handleSend={handleSend} />
      </Box>
    </Box>
  );
};
