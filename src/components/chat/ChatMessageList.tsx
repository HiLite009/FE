import { List, ListItem, ListItemText, Paper } from '@mui/material';
import {Message} from "../../types";


interface Props {
  messages: Message[];
}

export const ChatMessageLis = ({ messages }: Props) => {
  return (
    <List sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
      {messages.map((message, index) => (
        <ListItem
          key={index}
          sx={{
            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
          }}
        >
          <Paper
            sx={{
              p: 1,
              backgroundColor: message.sender === 'user' ? 'primary.main' : 'grey.200',
              color: message.sender === 'user' ? 'white' : 'text.primary',
              maxWidth: '70%',
            }}
          >
            <ListItemText primary={message.text} />
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};