import { Container, Box, Paper } from '@mui/material';
import React from 'react';
import SignUpForm from '@components/signup/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <SignUpForm />
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUpPage;
