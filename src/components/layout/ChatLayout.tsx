import { Box, Paper, Menu, MenuItem } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ChatLayoutProps {
  history: ReactNode;
  chat: ReactNode;
}

export const ChatLayout = ({ history, chat }: ChatLayoutProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyInfo = () => {
    navigate('/mypage');
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    // If you have a refresh token, remove it here as well
    // localStorage.removeItem('refreshToken');
    navigate('/login');
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Paper
        elevation={3}
        sx={{
          width: '280px',
          flexShrink: 0,
          overflowY: 'auto',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        {history}
      </Paper>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {chat}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          cursor: 'pointer',
          zIndex: 1000,
        }}
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{ fontSize: 32, color: 'primary.main' }} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-button',
        }}
      >
        <MenuItem onClick={handleMyInfo}>내 정보</MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </Menu>
    </Box>
  );
};
