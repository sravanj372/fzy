import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { LoginBox, Logincontainer } from '../adminstyles/Adminstyles';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import adminLogo from '../assets/adminLogo.png';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);
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
      setError('Invalid OTP'); // This still sets the state, which is what we need for the border change
    } else {
      setError(null);
      navigate('/update-password');
    }
  };

  const handleResendOtp = () => {
    setTimeLeft(30);
    setOtp('');
    setError(null);
    console.log("Resending OTP...");
  };

  return (
    <Logincontainer>
      <Box>
        <Box
          component="img"
          alt="Admin Logo"
          src={adminLogo}
          height="50px"
          sx={{
            display: 'block',
            margin: '0 auto',
            width: 'auto',
            maxWidth: '100%',
          }}
        />
      </Box>
      <LoginBox>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            Verification
          </Typography>
          <Typography color="#202224E5" fontSize="14px">
            Enter your 4-digit code that you received on your email.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input
                {...props}
                style={{
                  ...props.style,
                  background: '#d8d8d83d',
                  border: error ? '1px solid #F93C65' : '1px solid black',
                }}
              />
            )}
            inputStyle={{
              width: '70px',
              height: '70px',
              margin: '10px',
              borderRadius: '5px',
              fontSize: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
            }}
            containerStyle={{ justifyContent: 'center' }}
            inputType="tel"
          />
          <Typography
            color="error"
            fontSize="14px"
            sx={{ mt: 1, textAlign: 'center' }}
          >
            {timeLeft > 0 ? formatTime(timeLeft) : 'Time expired!'}
          </Typography>
          {/* The `error` text has been removed from here */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={otp.length !== 4 || timeLeft <= 0}
            sx={{
              backgroundColor: '#2F7A52',
              color: '#FFFFFF',
              mt: 2,
              mb: 0,
              borderRadius: '6px',
              paddingY: '5px',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              width: '80%',
              marginLeft: '40px',
              display: 'block',
              '&:hover': {
                backgroundColor: '#256B45',
              },
            }}
          >
            Verify
          </Button>
        </form>
        <Box mt={-2}>
          <Typography fontSize="14px" textAlign="center">
            If you didn't receive a code,{' '}
            <Typography
              component="a"
              color="#2F7A52"
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={handleResendOtp}
            >
              Resend
            </Typography>
          </Typography>
        </Box>
      </LoginBox>
    </Logincontainer>
  );
};

export default OtpVerification;