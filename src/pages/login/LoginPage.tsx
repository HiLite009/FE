import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { LoginLayout } from '../../components/layout/LoginLayout';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/chat');
  };

  return (
    <LoginLayout>
      <Typography
          component="h1"
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
      >
        채팅 앱 로그인
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary" mb={2}>
        아이디와 비밀번호를 입력해주세요
      </Typography>
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="사용자 이름"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </Box>
    </LoginLayout>
  );
};

export default LoginPage;
