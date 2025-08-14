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
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // Corrected import

const UpdateEmailPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleUpdateEmail = () => {
    setEmailError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newEmail) {
      setEmailError("Email is required.");
      return;
    }
    if (!emailRegex.test(newEmail)) {
      setEmailError("Enter a valid email address.");
      return;
    }

    // ✅ Handle success logic here (API call, etc.)
    console.log("Updated Email:", newEmail);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
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
          <Box
            sx={{
              border: "1px solid #2F7A52",
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
                {/* Corrected usage: render the icon as a component */}
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
                onChange={(e) => setNewEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
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
                      borderColor: "#ffffffff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ffffffff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffffffff",
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleUpdateEmail}
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