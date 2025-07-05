import { Box, Typography, Paper, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  // Mock data for user information
  const userInfo = {
    username: 'testuser',
    createdAt: '2023-01-15',
    permissions: ['read', 'write', 'admin'],
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 3,
        bgcolor: 'background.default',
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2, textAlign: 'center', maxWidth: 500, width: '100%' }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          내 정보
        </Typography>
        <List sx={{ width: '100%', mb: 2 }}>
          <ListItem>
            <ListItemText primary="사용자 이름" secondary={userInfo.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="생성 날짜" secondary={userInfo.createdAt} />
          </ListItem>
          <ListItem>
            <ListItemText primary="권한" secondary={userInfo.permissions.join(', ')} />
          </ListItem>
        </List>
        <Button variant="contained" onClick={handleGoBack}>
          뒤로 가기
        </Button>
      </Paper>
    </Box>
  );
};

export default MyPage;
