import {Box, Typography} from '@mui/material';
import {useState} from 'react';
import {ChatMessageList} from './ChatMessageList';
import {ChatInputBar} from './ChatInputBar';
import {Message} from "../../models";


export const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, {text: input, sender: 'assistant', content: "", id: "0", timestamp: new Date()}]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {text: '죄송합니다. 아직 응답을 생성할 수 없습니다.', sender: 'assistant', content: "", id: "1", timestamp: new Date()},
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <Box sx={{height: '100%', p: 2, display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h6" sx={{mb: 2}}>
        채팅
      </Typography>

      <ChatMessageList messages={messages}/>
      <ChatInputBar input={input} setInput={setInput} handleSend={handleSend}/>
    </Box>
  );
};
