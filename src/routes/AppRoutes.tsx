import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/login/LoginPage.tsx';
import ChatPage from '@pages/chat/ChatPage.tsx';
import SignUpPage from '@pages/signup/SignUpPage.tsx';
import MyPage from '@pages/mypage/MyPage.tsx';
import PrivateRoute from '@components/permission/PrivateRoute.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<PrivateRoute />}>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
