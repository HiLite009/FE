import { Box, Paper } from '@mui/material';
import { ReactNode } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ChatLayoutProps {
  history: ReactNode;
  chat: ReactNode;
}

export const ChatLayout = ({ history, chat }: ChatLayoutProps) => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', position: 'relative' }}>
      {/* My Page Icon */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 16, 
          right: 16, 
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 32, color: 'primary.main' }} />
      </Box>

      {/* History Panel */}
      <Paper 
        elevation={3} 
        sx={{ 
          width: 280, 
          height: '100%', 
          overflow: 'auto',
          borderRadius: 0
        }}
      >
        {history}
      </Paper>

      {/* Chat Area */}
      <Box sx={{ flex: 0.5, height: '100%', margin: 'auto' }}>
        {chat}
      </Box>
    </Box>
  );
};