import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import adminLogo from '../assets/adminLogo.png';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

// Import all styled components from the dedicated style file
import {
  LoginContainer,
  LoginBox,
  LogoBox,
  TitleText,
  SubtitleText,
  FormContainer,
  EmailFieldWrapper,
  IconAdornment,
  StyledIconButton,
  EmailInputContent,
  EmailLabel,
  StyledTextField,
  ErrorTextContainer,
  ErrorText,
  StyledButton
} from "../adminstyles/forgotpassword.styles";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Regex for basic email validation
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!emailTouched) {
      setEmailTouched(true);
    }
    // Clear the error message if the user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleContinue = () => {
    const isEmailValid = validateEmail(email);

    setEmailTouched(true);

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    
    // If the email is valid, proceed to the OTP page
    setError("");
    navigate('/otp');
  };

  const isEmailValid = validateEmail(email);
  const emailIconColor = emailTouched ? (isEmailValid ? '#2F7A52' : '#F93C65') : '#808080';

  return (
    <LoginContainer>
      <LogoBox>
        <Box component="img" src={adminLogo} alt="FOODZY Logo" width="210px" height="60px" />
      </LogoBox>

      <LoginBox>
        <FormContainer>
          <TitleText variant="h5">
            Forgot Password
          </TitleText>
          <SubtitleText>
            Please enter your email address to begin the verification process. A 4-digit code will be sent to your email.
          </SubtitleText>
        </FormContainer>

        <EmailFieldWrapper emailvalid={emailTouched ? (isEmailValid ? 'true' : 'false') : 'true'}>
          <IconAdornment position="start">
            <StyledIconButton edge="start" disableRipple>
              <MailOutlineIcon sx={{ color: emailIconColor, fontSize: '20px' }} />
            </StyledIconButton>
          </IconAdornment>
          <EmailInputContent>
            <EmailLabel>
              Email ID
            </EmailLabel>
            <StyledTextField
              variant="outlined"
              placeholder="John@gmail.com"
              fullWidth
              size="small"
              margin="none"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setEmailTouched(true)}
            />
          </EmailInputContent>
        </EmailFieldWrapper>

        <ErrorTextContainer>
          {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )}
        </ErrorTextContainer>

        <StyledButton
          variant="contained"
          onClick={handleContinue}
        >
          Continue
        </StyledButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default ForgotPassword;