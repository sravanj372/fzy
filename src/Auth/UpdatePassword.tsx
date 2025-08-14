import {
  Box,
  Button,
  IconButton, // Keep IconButton if you're using it for the lock icon
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import { useState } from "react";
import adminLogo from '../assets/adminLogo.png';
import lock from '../assets/proicons_lock.png';
import { useNavigate } from 'react-router-dom'; // Keep this for navigation

// Remove these imports if you're not using them
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const UpdatePassword = () => {
  const navigate = useNavigate();

  // State for "New Password"
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');

  // State for "Confirm Password"
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // We no longer need the showPassword states or their toggle handlers

  // Handler for "Update Password" button click
  const handleUpdatePassword = () => {
    let isValid = true;

    // Reset errors
    setNewPasswordError('');
    setConfirmPasswordError('');

    // Validate New Password
    if (newPassword.length < 6) { // Example: minimum 6 characters
      setNewPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword.length === 0) {
        setConfirmPasswordError('Confirm password is required.');
        isValid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      // Passwords are valid and matchess page
      navigate('/success'); // Make sure your route for /success is configured
    }
  };

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
      <Box>
        <Box component="img" alt="LOGO" src={adminLogo} width="200px" height="50px" />
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
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            New Password
          </Typography>
          <Typography color="#7b7d7ee5" fontSize="17.5px" margin="auto" textAlign="center">
            Set the new password for your account so you can login.
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap={3} mt={2.5}>
          {/* New Password Box */}
          <Box
            sx={{
              border: '1px solid #2F7A52',
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
                Create Password
              </Typography>
              <TextField
                type="text" // Always set to password
                placeholder="New Password"
                variant="outlined"
                fullWidth
                size="small"
                margin="none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={!!newPasswordError}
                helperText={newPasswordError}
                InputProps={{
                  // Removed endAdornment with visibility toggle
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
                      borderColor: '#ffffffff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ffffffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ffffffff',
                      borderWidth: '1px',
                    },
                  },
                }}
              />
            </Box>
          </Box>

          {/* Confirm Password Box */}
          <Box
            sx={{
              border: '1px solid #2F7A52',
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
                Confirm Password
              </Typography>
              <TextField
                type='text' // Always set to password
                placeholder="Re-enter Password"
                variant="outlined"
                fullWidth
                size="small"
                margin="none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
                InputProps={{
                  // Removed endAdornment with visibility toggle
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
                      borderColor: '#ffffffff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ffffffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ffffffff',
                      borderWidth: '1px',
                    },
                  },
                }}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#2F7A52',
              color: '#FFFFFF',
              borderRadius: '6px',
              paddingY: '7px',
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
            onClick={handleUpdatePassword}
          >
            Update Password
          </Button>
        </Box>
      </LoginBox>
    </Logincontainer>
  );
};

export default UpdatePassword;