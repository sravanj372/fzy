import { styled } from '@mui/material/styles';
import { Box, Typography, Button, TextField, Checkbox, IconButton, FormControlLabel } from '@mui/material';

export const LoginContainer = styled(Box)({
  backgroundColor: '#D3F3D2',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

export const LoginBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  width: '100%',
  maxWidth: '400px',
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
  },
}));

export const TitleText = styled(Typography)({
  color: '#2F7A52',
  textAlign: 'center',
});

export const SubtitleText = styled(Typography)({
  color: '#666666',
  fontSize: '14px',
  textAlign: 'center',
});

export const TextFieldWrapper = styled(Box)({
  marginBottom: '8px',
});

export const StyledTextFieldContainer = styled(Box)<{ emailvalid: string }>(({ emailvalid }) => ({
  border: `1px solid ${emailvalid === 'true' ? '#2F7A52' : '#F93C65'}`,
  borderRadius: '6px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '14px',
}));

export const IconAdornment = styled(Box)({
  marginRight: '8px',
});

export const StyledIconButton = styled(IconButton)({
  padding: '4px',
});

export const TextFieldContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const TextFieldLabel = styled(Typography)({
  color: '#050505ff',
  fontSize: '10px',
  marginBottom: '2px',
});

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '25px',
    padding: '0',
    '& input': {
      padding: '0',
    },
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
      borderWidth: '1px',
    },
  },
});

export const PasswordWrapper = styled(Box)({
  marginBottom: '0',
});

export const ForgotPasswordContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '0',
});

export const ForgotPasswordText = styled(Typography)({
  fontSize: '12px',
  color: '#424242ff',
  cursor: 'pointer',
  marginRight: '4px',
});

export const PasswordContainer = styled(Box)({
  border: `1px solid #2F7A52`,
  borderRadius: '6px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '14px',
  position: 'relative',
});

export const EyeIconButton = styled(IconButton)({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '4px',
});

export const ErrorTextContainer = styled(Box)({
  minHeight: '15px',
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
});

export const ErrorText = styled(Typography)({
  color: '#F93C65',
  fontFamily: 'Nunito Sans',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '8px',
  lineHeight: '12px',
  letterSpacing: '0.8px',
  verticalAlign: 'middle',
  textTransform: 'capitalize',
});

export const StyledFormControlLabel = styled(FormControlLabel)({
  marginLeft: 0,
  marginTop: '-24px',
  marginBottom: '16px',
  marginRight: '32px',
});

export const StyledCheckbox = styled(Checkbox)({
  padding: '0px',
  marginTop: '15px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const RememberPasswordText = styled(Typography)({
  fontSize: '14px',
  color: '#555353ff',
  userSelect: 'none',
  marginTop: '15px',
  marginLeft: '1px',
});

export const StyledButton = styled(Button)({
  backgroundColor: '#2F7A52',
  color: '#FFFFFF',
  borderRadius: '6px',
  padding: '10px 0',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '80%',
  margin: '0 auto',
  display: 'block',
  '&:hover': {
    backgroundColor: '#256B45',
  },
});