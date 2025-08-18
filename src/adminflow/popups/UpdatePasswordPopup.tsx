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
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // ✅ Dynamic validation
  const validateNewPassword = (value: string) => {
    if (value.length < 6) {
      setNewPasswordError("Password must be at least 6 characters long.");
    } else {
      setNewPasswordError("");
    }
  };

  const validateConfirmPassword = (value: string) => {
    if (value.length === 0) {
      setConfirmPasswordError("Confirm password is required.");
    } else if (value !== newPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleUpdatePassword = () => {
    validateNewPassword(newPassword);
    validateConfirmPassword(confirmPassword);

    if (!newPasswordError && !confirmPasswordError) {
      // handle success logic (e.g., call API)
      onClose();
    }
  };

  const newPasswordBorderColor = newPasswordError ? "#F93C65" : "#2F7A52";
  const confirmPasswordBorderColor = confirmPasswordError ? "#F93C65" : "#2F7A52";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
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
            New Password
          </Typography>
          <Typography color="#7b7d7ee5" fontSize="17.5px" textAlign="center">
            Set the new password for your account so you can login.
          </Typography>

          {/* New Password */}
          <Box width="100%">
            <Box
              sx={{
                border: `1px solid ${newPasswordBorderColor}`,
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
                  <Box
                    component="img"
                    src={lock}
                    alt="Lock Icon"
                    sx={{ width: "20px", height: "20px" }}
                  />
                </IconButton>
              </InputAdornment>
              <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography sx={{ color: "#333333", fontSize: "10px", marginBottom: "2px" }}>
                  Create Password
                </Typography>
                <TextField
                  type="password"
                  placeholder="New Password"
                  fullWidth
                  size="small"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    validateNewPassword(e.target.value); // ✅ live validation
                    if (confirmPassword) validateConfirmPassword(confirmPassword); // re-check confirm field
                  }}
                  InputProps={{
                    disableUnderline: true,
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
            {newPasswordError && (
              <Typography sx={{ color: "#F93C65", fontSize: "12px", mt: 1, textAlign: "left" }}>
                {newPasswordError}
              </Typography>
            )}
          </Box>

          {/* Confirm Password */}
          <Box width="100%">
            <Box
              sx={{
                border: `1px solid ${confirmPasswordBorderColor}`,
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
                  <Box
                    component="img"
                    src={lock}
                    alt="Lock Icon"
                    sx={{ width: "20px", height: "20px" }}
                  />
                </IconButton>
              </InputAdornment>
              <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography sx={{ color: "#333333", fontSize: "10px", marginBottom: "2px" }}>
                  Confirm Password
                </Typography>
                <TextField
                  type="password"
                  placeholder="Re-enter Password"
                  fullWidth
                  size="small"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value); // ✅ live validation
                  }}
                  InputProps={{
                    disableUnderline: true,
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
            {confirmPasswordError && (
              <Typography sx={{ color: "#F93C65", fontSize: "12px", mt: 1, textAlign: "left" }}>
                {confirmPasswordError}
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleUpdatePassword}
            sx={{
              backgroundColor: "#2F7A52",
              color: "#FFFFFF",
              borderRadius: "6px",
              paddingY: "10px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              width: "80%",
              marginTop: 2,
              "&:hover": {
                backgroundColor: "#256B45",
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
