import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';

// Styled component for the main page container
export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#F5FAF6',
  minHeight: '100vh',
}));

// Styled component for the form wrapper
export const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
}));

// Styled component for the input field stack
export const InputStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

// Styled component for the input field labels
export const InputLabel = styled(Typography)(({ theme }) => ({
  width: '100px',
  fontFamily: 'Nunito Sans',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '100%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

// Styled component for the TextField with custom overrides
export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '379px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  '& .MuiOutlinedInput-root': {
    height: '54px',
    borderRadius: '10px',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
    '& input': {
      color: '#000000',
    },
  },
  '& .MuiFormHelperText-root': {
    minHeight: '1.25em',
  },
  // Specific styling for number input type
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
}));

// Styled component for the save button
export const SaveButton = styled(Button)(({ theme }) => ({
  width: '123px',
  height: '50px',
  borderRadius: '8px',
  padding: '11px 16px',
  backgroundColor: '#2F7A52',
  '&:hover': {
    backgroundColor: '#2A6A4A',
  },
}));
