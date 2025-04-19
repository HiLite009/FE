import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import LoginPage from "./pages/login/LoginPage.tsx";
import ChatPage from "./pages/chat/ChatPage.tsx";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1b75ce',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
