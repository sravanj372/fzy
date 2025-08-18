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
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const UpdateEmailPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // This function now handles real-time, dynamic validation
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setNewEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      // Clear the error if the input is valid
      setEmailError("");
    }
  };

  const handleUpdateEmail = () => {
    // Only proceed with the update logic if there are no errors
    if (!emailError && newEmail) {
      // ✅ Handle success logic here (API call, etc.)
      console.log("Updated Email:", newEmail);
      onClose();
    }
  };

  // Define dynamic border color based on validation state
  const emailBorderColor = emailError ? '#F93C65' : '#2F7A52';

  // Conditionally disable the button if there is an error or no email
  const isButtonDisabled = !newEmail || !!emailError;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      // Added transparent backdrop to remove dimming effect
      BackdropProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      disableBackdropClick
      PaperProps={{
        sx: {
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent
        sx={{
          padding: { xs: "24px", sm: "40px" },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h4" color="#2F7A52" textAlign="center">
            Update Email
          </Typography>
          <Typography color="#7b7d7ee5" fontSize="17.5px" textAlign="center" mb={3}>
            Enter your new email.
          </Typography>

          {/* Email Field */}
          <Box width="100%">
            <Box
              sx={{
                // Use dynamic border color here
                border: `1px solid ${emailBorderColor}`,
                borderRadius: "6px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "14px",
                width: "100%",
              }}
            >
              <InputAdornment position="start" sx={{ marginRight: "8px" }}>
                <IconButton edge="start" disableRipple sx={{ padding: "4px" }}>
                  <MailOutlineIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
              </InputAdornment>
              <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography sx={{ color: "#333333", fontSize: "10px", marginBottom: "2px" }}>
                  Email
                </Typography>
                <TextField
                  type="email"
                  placeholder="Enter New Email"
                  fullWidth
                  size="small"
                  value={newEmail}
                  // Changed onChange to use the new handleEmailChange function
                  onChange={handleEmailChange}
                  // The helper text prop from Material-UI is already used for error messaging
                  InputProps={{
                    sx: {
                      height: "25px",
                      fontSize: "14px",
                      padding: "0",
                      "& input": {
                        padding: "0",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "25px",
                      padding: "0",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                        borderWidth: "1px",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
            {/* Display the error message */}
            {emailError && (
              <Typography
                sx={{
                  color: '#F93C65',
                  fontSize: '12px',
                  mt: 1,
                  textAlign: 'left'
                }}
              >
                {emailError}
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleUpdateEmail}
            disabled={isButtonDisabled}
            sx={{
              backgroundColor: "#2F7A52",
              color: "#FFFFFF",
              borderRadius: "6px",
              paddingY: "5px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              width: "80%",
              marginTop: 3,
              "&:hover": {
                backgroundColor: "#256B45",
              },
            }}
          >
            Update
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={onClose} size="small" disableRipple>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography component="span" sx={{
                  color: '#7b7d7ee5',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '16px'
                }}>
                  Back to&nbsp;
                </Typography>
                <Typography component="span" sx={{
                  textDecoration: 'underline',
                  color: '#2F7A52',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '16px'
                }}>
                  Profile
                </Typography>
              </Box>
            </IconButton>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEmailPopup;
