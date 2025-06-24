import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { LoginBox, Logincontainer } from '../adminstyles/Adminstyles';
import OtpInput from 'react-otp-input';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600); // Start timer at 60 seconds

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when timer reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1); // Decrease time by 1 every second
    }, 1000);

    // Cleanup timer when component unmounts
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (otp.length !== 4) {
      setError('Please enter a 4-digit OTP');
      return;
    }
    if (otp !== '1234') { // Replace with actual verification logic
      setError('Invalid OTP');
    } else {
      setError(null);
      alert('OTP Verified!');
    }
  };

  return (
    <Logincontainer>
      <Box>
        <Box component="img" alt="LOGO" sx={{ width: '100px' }} /> {/* Add src="/path/to/logo.png" if needed */}
      </Box>
      <LoginBox>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            Verification
          </Typography>
          <Typography color="#202224E5" fontSize="14px">
            Enter your 6-digit code that you received on your email.
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
                  border: `1px solid ${error ? '#d32f2f' : 'gray'}`,
                }}
              />
            )}
            inputStyle={{
              width: '40px',
              height: '40px',
              margin: '5px',
              borderRadius: '5px',
              fontSize: '20px',
              textAlign: 'center',
            }}
            containerStyle={{ justifyContent: 'center' }}
            inputType="tel"
          />
          <Typography
            color={timeLeft <= 10 ? 'error' : 'text.secondary'}
            fontSize="14px"
            sx={{ mt: 1, textAlign: 'center' }}
          >
            {timeLeft > 0
              ? ` ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                  .toString()
                  .padStart(2, '0')}`
              : 'Time expired!'}
          </Typography>
          {error && (
            <Typography color="error" fontSize="12px" sx={{ mt: 1, textAlign: 'center' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={otp.length !== 4 || timeLeft <= 0}
            sx={{ mt: 2 }}
          >
            Continue
          </Button>
        </form>
        <Box>
          <Typography>If you didn't receive a code! <Typography component="a" color="#2F7A52">Resend</Typography></Typography>
        </Box>
      </LoginBox>
    </Logincontainer>
  );
};

export default OtpVerification;