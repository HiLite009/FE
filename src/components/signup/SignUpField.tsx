import { TextField } from '@mui/material';
import React from 'react';

interface SignUpFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpField: React.FC<SignUpFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default SignUpField;
