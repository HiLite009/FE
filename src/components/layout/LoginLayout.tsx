import {Container, Paper} from '@mui/material';
import {ReactNode} from 'react';

export const LoginLayout = ({children}: { children: ReactNode }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: '100%',
          borderRadius: 2,
        }}
      >
        {children}
      </Paper>
    </Container>
  );
};
