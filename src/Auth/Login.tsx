import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import adminLogo from '../assets/adminLogo.png';
import lock from '../assets/proicons_lock.png';
import tick from "../assets/Shape.png";

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
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [error, setError] = useState("");

  const handleRememberPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberPassword(event.target.checked);
  };

  const validatePassword = (pwd: string) => {
    const hasNumber = /\d/;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    return pwd.length >= 8 && hasNumber.test(pwd) && hasSpecial.test(pwd);
  };

  const validateEmail = (email: string) => {
    // Regex for basic email validation
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!emailTouched) {
      setEmailTouched(true);
    }
    // Clear the error message related to email if the user starts typing again
    if (error && error.includes("email")) {
      setError("");
    }
  };

  const handleSignIn = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    // Set touched to true to show validation styling immediately on button click
    setEmailTouched(true);
    
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid) {
      setError("Password must be at least 8 characters long and include a number & special character.");
      return;
    } 
    
    // If both are valid, proceed to dashboard
    setError("");
    navigate('/admin/dashboard');
  };

  const isEmailValid = validateEmail(email);
  const emailBorderColor = emailTouched ? (isEmailValid ? '#2F7A52' : '#F93C65') : '#2F7A52';
  const emailIconColor = emailTouched ? (isEmailValid ? '#2F7A52' : '#F93C65') : '#2F7A52';

  return (
    <Logincontainer
      sx={{
        backgroundColor: '#D3F3D2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Box component="img" src={adminLogo} alt="FOODZY Logo" width="210px" height="60px" />
      </Box>

      <LoginBox
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: { xs: '24px', sm: '40px' },
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* Title */}
        <Box display="flex" flexDirection="column" gap={1} justifyContent="center" mb={3}>
          <Typography variant="h5" textAlign="center" color="#2F7A52">
            Login to Account
          </Typography>
          <Typography color="#666666" fontSize="14px" textAlign="center">
            Please enter your email and password to continue
          </Typography>
        </Box>

        {/* Email Field */}
        <Box
          sx={{
            border: `1px solid ${emailBorderColor}`,
            borderRadius: '6px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '14px',
            mb: 2,
          }}
        >
          <InputAdornment position="start" sx={{ marginRight: '8px' }}>
            <IconButton edge="start" disableRipple sx={{ padding: '4px' }}>
              <MailOutlineIcon sx={{ color: emailIconColor, fontSize: '20px' }} />
            </IconButton>
          </InputAdornment>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography sx={{ color: '#050505ff', fontSize: '10px', marginBottom: '2px' }}>
              Email ID
            </Typography>
            <TextField
              variant="outlined"
              placeholder="John@gmail.com"
              fullWidth
              size="small"
              margin="none"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setEmailTouched(true)}
              InputProps={{
                sx: {
                  height: '25px',
                  fontSize: '14px',
                  padding: '0',
                  '& input': {
                    padding: '0',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '25px',
                  padding: '0',
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
              }}
            />
          </Box>
        </Box>

        {/* Password Field */}
        <Box sx={{ mb: 2 }}>
          <Box display="flex" justifyContent="flex-end" mb={0.5}>
            <Typography
              sx={{
                fontSize: '12px',
                color: '#424242ff',
                cursor: 'pointer',
                marginRight: '4px',
              }}
              onClick={() => navigate('/login/forgot-password')}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Box
            sx={{
              border: `1px solid #2F7A52`,
              borderRadius: '6px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '14px',
            }}
          >
            <InputAdornment position="start" sx={{ marginRight: '8px' }}>
              <IconButton edge="start" disableRipple sx={{ padding: '4px' }}>
                <Box component="img" src={lock} alt="Lock Icon" sx={{ width: '20px', height: '20px' }} />
              </IconButton>
            </InputAdornment>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Typography sx={{ color: '#333333', fontSize: '10px', marginBottom: '2px' }}>
                Password
              </Typography>
              <TextField
                type="password"
                placeholder="abd@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                margin="none"
                InputProps={{
                  sx: {
                    height: '25px',
                    fontSize: '14px',
                    padding: '0',
                    '& input': {
                      padding: '0',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '25px',
                    padding: '0',
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
                }}
              />
            </Box>
          </Box>

          {/* Conditional Error Message */}
          {error && (
            <Typography
              sx={{
                color: '#F93C65',
                fontFamily: 'Nunito Sans',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '8px',
                lineHeight: '12px',
                letterSpacing: '0.8px',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
              }}
            >
              {error}
            </Typography>
          )}

          {/* Remember Password */}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
                icon={<CustomUncheckedIcon />}
                checkedIcon={<CustomTickIcon />}
                sx={{
                  padding: '0px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              />
            }
            label={
              <Typography
                fontSize="14px"
                color="#555353ff"
                sx={{ userSelect: 'none', ml: 1 }}
              >
                Remember Password
              </Typography>
            }
            sx={{
              ml: 0,
              mt: 1,
              mb: 2,
              mr: 4,
            }}
          />
        </Box>

        {/* Sign In Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2F7A52',
            color: '#FFFFFF',
            borderRadius: '6px',
            paddingY: '10px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            width: '80%',
            margin: '0 auto',
            display: 'block',
            '&:hover': {
              backgroundColor: '#256B45',
            },
          }}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </LoginBox>
    </Logincontainer>
  );
};

export default Login;