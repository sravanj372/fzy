import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { LoginBox, Logincontainer } from '../adminstyles/Adminstyles';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import adminLogo from '../assets/adminLogo.png';

// Import the styled components
import {
  StyledAdminLogo,
  StyledMainBox,
  StyledHeading,
  StyledDescription,
  StyledOtpInput,
  StyledTimerText,
  StyledVerifyButton,
  StyledResendContainer,
  StyledResendLink,
  otpInputStyle,
  otpContainerStyle
} from '../adminstyles/OtpVerification.styles';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (otp.length !== 4) {
      setError('Please enter a 4-digit OTP');
      return;
    }

    if (otp !== '1234') {
      setError('Invalid OTP');
    } else {
      setError(null);
      navigate('/update-password');
    }
  };

  const handleResendOtp = () => {
    setTimeLeft(600);
    setOtp('');
    setError(null);
    console.log("Resending OTP...");
  };

  return (
    <Logincontainer>
      <Box>
        <StyledAdminLogo
          component="img"
          alt="Admin Logo"
          src={adminLogo}
          height="50px"
        />
      </Box>
      <LoginBox>
        <StyledMainBox>
          <StyledHeading variant="h4" textAlign="center" color="#2F7A52">
            Verification
          </StyledHeading>
          <StyledDescription color="#202224E5" fontSize="14px">
            Enter your 4-digit code that you received on your email.
          </StyledDescription>
        </StyledMainBox>
        <form onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props: React.InputHTMLAttributes<HTMLInputElement>) => (
              <StyledOtpInput
                {...props}
                error={error}
              />
            )}
            inputStyle={otpInputStyle}
            containerStyle={otpContainerStyle}
            inputType="tel"
          />
          <StyledTimerText
            color="error"
            fontSize="14px"
          >
            {timeLeft > 0 ? formatTime(timeLeft) : 'Time expired!'}
          </StyledTimerText>
          <StyledVerifyButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={otp.length !== 4 || timeLeft <= 0}
          >
            Verify
          </StyledVerifyButton>
        </form>
        <StyledResendContainer>
          <Typography fontSize="14px" textAlign="center">
            If you didn't receive a code,{' '}
            <StyledResendLink
              component="a"
              color="#2F7A52"
              fontWeight="bold"
              onClick={handleResendOtp}
            >
              Resend
            </StyledResendLink>
          </Typography>
        </StyledResendContainer>
      </LoginBox>
    </Logincontainer>
  );
};

export default OtpVerification;