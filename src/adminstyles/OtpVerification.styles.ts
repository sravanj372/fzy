import { styled } from '@mui/material/styles';
import { Typography, Button, Box } from '@mui/material';

// Styled Admin Logo - matches original Box component styling
export const StyledAdminLogo = styled(Box)({
  display: 'block',
  margin: '0 auto',
  width: 'auto',
  maxWidth: '100%',
});

// Styled Main Box - replaces sx={{ mb: 2 }}
export const StyledMainBox = styled(Box)({
  marginBottom: '16px', // mb: 2 = 16px
});

// Styled Heading - keeps original Typography props
export const StyledHeading = styled(Typography)({
  // All styling comes from props: variant="h4" textAlign="center" color="#2F7A52"
});

// Styled Description - keeps original Typography props  
export const StyledDescription = styled(Typography)({
  // All styling comes from props: color="#202224E5" fontSize="14px"
});

// Styled OTP Input - matches original renderInput styling
export const StyledOtpInput = styled('input')<{ error: string | null }>(({ error }) => ({
  background: '#d8d8d83d',
  border: error ? '1px solid #F93C65' : '1px solid black',
}));

// OTP Input Style object - matches original inputStyle prop
export const otpInputStyle: React.CSSProperties = {
  width: '70px',
  height: '70px',
  margin: '10px',
  borderRadius: '5px',
  fontSize: '20px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
};

// OTP Container Style object - matches original containerStyle prop
export const otpContainerStyle: React.CSSProperties = {
  justifyContent: 'center',
};

// Styled Timer Text - replaces Typography with sx={{ mt: 1, textAlign: 'center' }}
export const StyledTimerText = styled(Typography)({
  marginTop: '8px', // mt: 1 = 8px
  textAlign: 'center',
});

// Styled Verify Button - matches original Button with all sx styling
export const StyledVerifyButton = styled(Button)({
  backgroundColor: '#2F7A52',
  color: '#FFFFFF',
  marginTop: '16px', // mt: 2 = 16px
  marginBottom: '0px', // mb: 0
  borderRadius: '6px',
  paddingTop: '5px',
  paddingBottom: '5px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '80%',
  marginLeft: '40px',
  display: 'block',
  '&:hover': {
    backgroundColor: '#256B45',
  },
  '&:disabled': {
    backgroundColor: '#cccccc', // Default disabled state
    color: '#666666',
  },
});

// Styled Resend Container - replaces Box mt={-2}
export const StyledResendContainer = styled(Box)({
  marginTop: '-16px', // mt: -2 = -16px
});

// Styled Resend Link - matches original Typography with sx styling
export const StyledResendLink = styled(Typography)({
  cursor: 'pointer',
  textDecoration: 'underline',
});