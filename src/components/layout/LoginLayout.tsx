import { Box, Container, Paper } from '@mui/material';
import { ReactNode } from 'react';

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};
