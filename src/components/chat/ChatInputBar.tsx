import {Paper, IconButton, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

interface Props {
  input: string;
  setInput: (value: string) => void;
  handleSend: (e: React.FormEvent) => void;
}

export const ChatInputBar = ({ input, setInput, handleSend }: Props) => {
  return (
    <Paper
      component="form"
      elevation={3}
      onSubmit={handleSend}
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        p: 1,
        borderRadius: '999px',
        width: '100%',
      }}
    >
      <IconButton>
        <AddIcon />
      </IconButton>

      <TextField
        multiline
        maxRows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="무엇이든 물어보세요"
        variant="standard"
        InputProps={{
          disableUnderline: true,
          sx: {
            ml: 1,
            flex: 1,
            maxHeight: '100px',
            overflow: 'auto',
          },
        }}
        sx={{
          flex: 1,
          '& .MuiInputBase-root': {
            fontSize: '0.95rem',
          },
        }}
      />

      <IconButton>
        <MicIcon />
      </IconButton>
      <IconButton>
        <GraphicEqIcon />
      </IconButton>
    </Paper>
  );
};
