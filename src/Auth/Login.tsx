import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  Box,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import adminLogo from '../assets/adminLogo.png';
import lock from '../assets/proicons_lock.png';
import tick from "../assets/Shape.png";
import eye from '../assets/Vector pwd.png';

// Import all styled components from the dedicated style file
import {
  LoginContainer,
  LoginBox,
  TitleText,
  SubtitleText,
  StyledTextFieldContainer,
  IconAdornment,
  StyledIconButton,
  TextFieldContent,
  TextFieldLabel,
  StyledTextField,
  PasswordContainer,
  ForgotPasswordText,
  StyledButton,
  ErrorText,
  RememberPasswordText,
  TextFieldWrapper,
  PasswordWrapper,
  ForgotPasswordContainer,
  EyeIconButton,
  ErrorTextContainer,
  StyledFormControlLabel,
  StyledCheckbox,
} from "../adminstyles/LoginStyles";

// Unchecked checkbox icon
const CustomUncheckedIcon = () => (
  <Box
    sx={{
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      border: '1.5px solid #808080',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  />
);

// Checked checkbox icon
const CustomTickIcon = () => (
  <Box
    sx={{
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      border: '1.5px solid #808080',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      component="img"
      src={tick}
      alt="tick"
      sx={{
        width: '14px',
        height: '14px',
        objectFit: 'contain',
      }}
    />
  </Box>
);

const Login = () => {
  const navigate = useNavigate();
  const [rememberPassword, setRememberPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberPassword(true);
    }
  }, []);

  const handleRememberPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberPassword(event.target.checked);
  };

  const validatePassword = (pwd: string) => {
    const hasNumber = /\d/;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    return pwd.length >= 8 && hasNumber.test(pwd) && hasSpecial.test(pwd);
  };

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear the error message when the user starts typing
    if (error) setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // Clear the error message when the user starts typing
    if (error) setError("");
  };

  const handleSignIn = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    // Set touched states to true to show all errors on submit
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    // Since real-time validation is handled by onBlur, this check is for the final submit
    if (!isPasswordValid) {
        setError("Password must be at least 8 characters long and include a number & special character.");
        return;
    }

    const correctEmail = 'test@gmail.com';
    const correctPassword = 'Test@123';

    if (email === correctEmail && password === correctPassword) {
      setError("");
      if (rememberPassword) {
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('rememberedPassword', password);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }
      navigate('/admin/dashboard');
    } else {
      setError("Invalid email or password.");
    }
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  const showEmailError = emailTouched && !isEmailValid;
  const showPasswordFormatError = passwordTouched && !isPasswordValid;

  return (
    <LoginContainer>
      <Box mb={4}>
        <Box component="img" src={adminLogo} alt="FOODZY Logo" width="210px" height="60px" />
      </Box>

      <LoginBox>
        {/* Title */}
        <Box display="flex" flexDirection="column" gap={1} justifyContent="center" mb={3}>
          <TitleText variant="h5">
            Login to Account
          </TitleText>
          <SubtitleText>
            Please enter your email and password to continue
          </SubtitleText>
        </Box>

        {/* Email Field */}
        <TextFieldWrapper>
          <StyledTextFieldContainer emailvalid={showEmailError ? 'false' : 'true'}>
            <IconAdornment position="start">
              <StyledIconButton edge="start" disableRipple>
                <MailOutlineIcon sx={{ color: showEmailError ? '#F93C65' : '#2F7A52', fontSize: '20px' }} />
              </StyledIconButton>
            </IconAdornment>
            <TextFieldContent>
              <TextFieldLabel>
                Email ID
              </TextFieldLabel>
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
            </TextFieldContent>
          </StyledTextFieldContainer>
          <ErrorTextContainer>
            {showEmailError && (
              <ErrorText>
                Please enter a valid email address.
              </ErrorText>
            )}
          </ErrorTextContainer>
        </TextFieldWrapper>

        {/* Password Field */}
        <PasswordWrapper>
          <ForgotPasswordContainer>
            <ForgotPasswordText onClick={() => navigate('/login/forgot-password')}>
              Forgot Password?
            </ForgotPasswordText>
          </ForgotPasswordContainer>

          <PasswordContainer>
            {/* Lock Icon */}
            <IconAdornment position="start">
              <StyledIconButton edge="start" disableRipple>
                <Box component="img" src={lock} alt="Lock Icon" width="20px" height="20px" />
              </StyledIconButton>
            </IconAdornment>

            {/* Input Field */}
            <TextFieldContent>
              <TextFieldLabel>
                Password
              </TextFieldLabel>
              <StyledTextField
                type={showPassword ? "text" : "password"}
                placeholder="abd@123"
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => setPasswordTouched(true)}
                variant="outlined"
                fullWidth
                size="small"
                margin="none"
              />
            </TextFieldContent>

            {/* Eye Icon */}
            <EyeIconButton onClick={() => setShowPassword(!showPassword)}>
              <Box component="img" src={eye} alt="Show/Hide Password" width="20px" height="20px" />
            </EyeIconButton>
          </PasswordContainer>

          <ErrorTextContainer>
            {showPasswordFormatError && (
              <ErrorText>
                Password must be at least 8 characters long and include a number & special character.
              </ErrorText>
            )}
            {/* Display general login error here if credentials don't match */}
            {error && !showEmailError && !showPasswordFormatError && (
              <ErrorText>
                {error}
              </ErrorText>
            )}
          </ErrorTextContainer>
        </PasswordWrapper>

        {/* Remember Password */}
        <StyledFormControlLabel
          control={
            <StyledCheckbox
              checked={rememberPassword}
              onChange={handleRememberPasswordChange}
              icon={<CustomUncheckedIcon />}
              checkedIcon={<CustomTickIcon />}
            />
          }
          label={
            <RememberPasswordText>
              Remember Password
            </RememberPasswordText>
          }
        />

        {/* Sign In Button */}
        <StyledButton onClick={handleSignIn}>
          Sign In
        </StyledButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;