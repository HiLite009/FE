import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

interface ChatHistoryProps {
  history: Array<{
    id: string;
    title: string;
    date: string;
  }>;
  onSelectChat: (id: string) => void;
}

export const ChatHistory = ({ history, onSelectChat }: ChatHistoryProps) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        대화 기록
      </Typography>
      <List>
        {history.map((chat) => (
          <ListItem
            key={chat.id}
            button
            onClick={() => onSelectChat(chat.id)}
            sx={{
              mb: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText
              primary={chat.title}
              secondary={chat.date}
              primaryTypographyProps={{
                noWrap: true,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};