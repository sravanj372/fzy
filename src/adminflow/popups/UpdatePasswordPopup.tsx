import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import lock from "../../assets/proicons_lock.png";

const UpdatePasswordPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUpdatePassword = () => {
    let isValid = true;
    setNewPasswordError('');
    setConfirmPasswordError('');

    if (newPassword.length < 6) {
      setNewPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    if (confirmPassword.length === 0) {
      setConfirmPasswordError('Confirm password is required.');
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      // handle success logic here (e.g., call API)
      onClose(); // close dialog on success
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      // Add the PaperProps prop to style the Dialog's container
      PaperProps={{
        sx: {
          borderRadius: '24px', // Increased value for a more prominent curve
        },
      }}
    >
      <DialogContent
        sx={{
          padding: { xs: '24px', sm: '40px' },
          backgroundColor: '#FFFFFF',
          // The borderRadius is now applied to PaperProps, so it's not needed here.
          // You could keep a smaller value here if you wanted an inner curve, but it's not necessary.
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h4" color="#2F7A52" textAlign="center">
            New Password
          </Typography>
          <Typography color="#7b7d7ee5" fontSize="17.5px" textAlign="center">
            Set the new password for your account so you can login.
          </Typography>

          {/* New Password */}
          <Box
            sx={{
              border: '1px solid #2F7A52',
              borderRadius: '6px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '14px',
              width: '100%',
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
                type="password"
                placeholder="New Password"
                fullWidth
                size="small"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={!!newPasswordError}
                helperText={newPasswordError}
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

          {/* Confirm Password */}
          <Box
            sx={{
              border: '1px solid #2F7A52',
              borderRadius: '6px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '14px',
              width: '100%',
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
                type="password"
                placeholder="Re-enter Password"
                fullWidth
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
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
            onClick={handleUpdatePassword}
            sx={{
              backgroundColor: '#2F7A52',
              color: '#FFFFFF',
              borderRadius: '6px',
              paddingY: '10px',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              width: '80%',
              marginTop: 2,
              '&:hover': {
                backgroundColor: '#256B45',
              },
            }}
          >
            Update Password
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePasswordPopup;