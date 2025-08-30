import { styled } from '@mui/material/styles';
import { Box, Button, Typography, TextField, IconButton, InputAdornment } from '@mui/material';

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

export const LogoBox = styled(Box)({
  marginBottom: '32px',
});

export const TitleText = styled(Typography)({
  textAlign: 'center',
  color: '#2F7A52',
});

export const SubtitleText = styled(Typography)({
  color: '#666666',
  fontSize: '12px',
  textAlign: 'center',
});

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  justifyContent: 'center',
  marginBottom: '24px',
});

export const EmailFieldWrapper = styled(Box)<{ emailvalid: string }>(({ emailvalid }) => ({
  border: `1px solid ${emailvalid === 'true' ? '#2F7A52' : '#F93C65'}`,
  borderRadius: '6px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '14px',
  marginBottom: '0',
}));

export const IconAdornment = styled(InputAdornment)({
  marginRight: '8px',
});

export const StyledIconButton = styled(IconButton)({
  padding: '4px',
});

export const EmailInputContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const EmailLabel = styled(Typography)({
  color: '#050505ff',
  fontSize: '10px',
  marginBottom: '0px',
});

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '25px',
    fontSize: '14px',
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

export const ErrorTextContainer = styled(Box)({
  minHeight: '25px',
  display: 'flex',
  alignItems: 'center',
});

export const ErrorText = styled(Typography)({
  color: '#F93C65',
  fontFamily: 'Nunito Sans',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '10px',
  
  lineHeight: '12px',
  letterSpacing: '0.8px',
  verticalAlign: 'middle',
  textTransform: 'capitalize',
});

export const StyledButton = styled(Button)({
  backgroundColor: '#2F7A52',
  color: '#FFFFFF',
  borderRadius: '6px',
  padding: '5px 0',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '80%',
  margin: '0 auto',
  display: 'block',
  marginTop: '8px',
  '&:hover': {
    backgroundColor: '#256B45',
  },
});