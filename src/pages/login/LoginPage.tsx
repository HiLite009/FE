import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  InputAdornment,
} from '@mui/material';
import { LoginLayout } from '@components/layout/LoginLayout.tsx';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { loginApi } from '@api/login/loginApi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { ApiErrorResponse } from '@models/login';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await loginApi({ username, password });
      localStorage.setItem('accessToken', token);
      navigate('/chat');
    } catch (error: any) {
      console.error('Login failed:', error);
      if (error.response && error.response.data) {
        const apiError = error.response.data as ApiErrorResponse;
        alert(`로그인 실패: ${apiError.message}`);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <LoginLayout>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 3, width: '100%' }}>
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5 }}>
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              비밀번호를 잊으셨나요?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              계정이 없으신가요? 회원가입
            </Link>
          </Grid>
        </Grid>
      </Box>
    </LoginLayout>
  );
};

export default LoginPage;
