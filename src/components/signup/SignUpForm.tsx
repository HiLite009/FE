import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import SignUpField from './SignUpField';
import { SignUpFormData } from '@models/signup';

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        회원가입
      </Typography>
      <SignUpField
        label="사용자 이름"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <SignUpField label="이메일" name="email" value={formData.email} onChange={handleChange} />
      <SignUpField
        label="비밀번호"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <SignUpField
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        value={formData.passwordConfirm}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Create Account
      </Button>
    </Box>
  );
};

export default SignUpForm;
