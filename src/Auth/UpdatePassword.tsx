import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import adminLogo from "../assets/adminLogo.png";
import lock from "../assets/proicons_lock.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordError, setNewPasswordError] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]:;"'<,>.?/|\-`~])(?=.{6,})/;

  const handleUpdatePassword = (e: React.FormEvent): void => {
    e.preventDefault();
    let isValid = true;

    setNewPasswordError("");
    setConfirmPasswordError("");

    if (!passwordRegex.test(newPassword)) {
      setNewPasswordError(
        "Password must be at least 6 characters and include one uppercase letter, one number, and one symbol."
      );
      isValid = false;
    }

    if (confirmPassword.length === 0) {
      setConfirmPasswordError("Confirm password is required.");
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      console.log("Password update successful!");
      navigate("/success");
    }
  };

  return (
    <Logincontainer
      sx={{
        backgroundColor: "#D3F3D2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box>
        <Box
          component="img"
          alt="LOGO"
          src={adminLogo}
          width="200px"
          height="50px"
        />
      </Box>

      <LoginBox
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: { xs: "24px", sm: "40px" },
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <form onSubmit={handleUpdatePassword}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Typography variant="h4" textAlign="center" color="#2F7A52">
              New Password
            </Typography>
            <Typography color="#7b7d7ee5" fontSize="17.5px" margin="auto" textAlign="center">
              Set the new password for your account so you can login.
            </Typography>
            {/* Create Password */}
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  border: `1px solid ${
                    newPasswordError
                      ? "red"
                      : newPassword.length > 0 && passwordRegex.test(newPassword)
                      ? "#2F7A52"
                      : "#2F7A52"
                  }`,
                  borderRadius: "6px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "14px",
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
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: "10px",
                      marginBottom: "2px",
                    }}
                  >
                    Create Password
                  </Typography>
                  <TextField
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="none"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (e.target.value.length > 0) {
                        if (!passwordRegex.test(e.target.value)) {
                          setNewPasswordError("Min 6 characters, one capital, one number, one symbol.");
                        } else {
                          setNewPasswordError("");
                        }
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{mr:1}}>
                          <IconButton
                            onClick={() =>
                              setShowNewPassword((prev) => !prev)
                            }
                            edge="end"
                          >
                            {showNewPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
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
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              {newPasswordError && (
                <Typography
                  sx={{
                    color: "red",
                    fontSize: "11px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "4px",
                    lineHeight: "1",
                  }}
                >
                  {newPasswordError}
                </Typography>
              )}
            </Box>

            {/* Confirm Password */}
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  border: `1px solid ${
                    confirmPasswordError
                      ? "red"
                      : confirmPassword.length > 0 &&
                        newPassword === confirmPassword
                      ? "#2F7A52"
                      : "#2F7A52"
                  }`,
                  borderRadius: "6px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "14px",
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
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: "10px",
                      marginBottom: "2px",
                    }}
                  >
                    Confirm Password
                  </Typography>
                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="none"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (newPassword !== e.target.value) {
                        setConfirmPasswordError("Passwords do not match.");
                      } else {
                        setConfirmPasswordError("");
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{mr:1}}>
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
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
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              {confirmPasswordError && (
                <Typography
                  sx={{
                    color: "red",
                    fontSize: "11px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "4px",
                    lineHeight: "1",
                  }}
                >
                  {confirmPasswordError}
                </Typography>
              )}
            </Box>

            {/* Submit button */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#2F7A52",
                color: "#FFFFFF",
                borderRadius: "6px",
                paddingY: "7px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "16px",
                width: "80%",
                margin: "0 auto",
                display: "block",
                "&:hover": {
                  backgroundColor: "#256B45",
                },
              }}
            >
              Update Password
            </Button>
          </Box>
        </form>
      </LoginBox>
    </Logincontainer>
  );
};

export default UpdatePassword;