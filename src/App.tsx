import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AppRoutes from './routes/AppRoutes.tsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
