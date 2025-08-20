import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import {
  LoginBox,
  LoginContainer,
  updatePasswordStyles,
} from "../adminstyles/UpdatePassword.styles";


import adminLogo from "../assets/adminLogo.png";
import lock from "../assets/proicons_lock.png";

const UpdatePassword = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]:;"'<,>.?/|\-`~])(?=.{6,})/;

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    let isValid = true;

    setNewPasswordError("");
    setConfirmPasswordError("");

    if (!passwordRegex.test(newPassword)) {
      setNewPasswordError(
        "Min 6 characters, one capital, one number, one symbol."
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
    <LoginContainer sx={updatePasswordStyles.loginContainer}>
      <Box sx={updatePasswordStyles.logoWrapper}>
        <Box
          component="img"
          alt="LOGO"
          src={adminLogo}
          sx={updatePasswordStyles.logo}
        />
      </Box>

      <LoginBox sx={updatePasswordStyles.loginBox}>
        <form onSubmit={handleUpdatePassword}>
          <Box sx={updatePasswordStyles.formContent}>
            <Typography variant="h4" sx={updatePasswordStyles.title}>
              New Password
            </Typography>
            <Typography sx={updatePasswordStyles.subtitle}>
              Set the new password for your account so you can login.
            </Typography>

            {/* Create Password */}
            <Box>
              <Box
                sx={updatePasswordStyles.createPasswordInputWrapper({
                  newPassword,
                  newPasswordError,
                  passwordRegex,
                })}
              >
                <InputAdornment position="start" sx={updatePasswordStyles.iconAdornment}>
                  <IconButton edge="start" disableRipple sx={updatePasswordStyles.iconButton}>
                    <Box
                      component="img"
                      src={lock}
                      alt="Lock Icon"
                      sx={updatePasswordStyles.lockIcon}
                    />
                  </IconButton>
                </InputAdornment>
                <Box sx={updatePasswordStyles.inputFieldWrapper}>
                  <Typography sx={updatePasswordStyles.inputLabel}>
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
                        <InputAdornment position="end" sx={updatePasswordStyles.visibilityAdornment}>
                          <IconButton
                            onClick={() =>
                              setShowNewPassword((prev) => !prev)
                            }
                            edge="end"
                          >
                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: updatePasswordStyles.textFieldInput,
                    }}
                    sx={updatePasswordStyles.textFieldBase}
                  />
                </Box>
              </Box>
              <Box sx={updatePasswordStyles.errorWrapper}>
                {newPasswordError && (
                  <Typography sx={updatePasswordStyles.errorText}>
                    {newPasswordError}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Confirm Password */}
            <Box sx={updatePasswordStyles.confirmPasswordWrapper}>
              <Box
                sx={updatePasswordStyles.confirmPasswordInputWrapper({
                  newPassword,
                  confirmPassword,
                  confirmPasswordError,
                })}
              >
                <InputAdornment position="start" sx={updatePasswordStyles.iconAdornment}>
                  <IconButton edge="start" disableRipple sx={updatePasswordStyles.iconButton}>
                    <Box
                      component="img"
                      src={lock}
                      alt="Lock Icon"
                      sx={updatePasswordStyles.lockIcon}
                    />
                  </IconButton>
                </InputAdornment>
                <Box sx={updatePasswordStyles.inputFieldWrapper}>
                  <Typography sx={updatePasswordStyles.inputLabel}>
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
                        <InputAdornment position="end" sx={updatePasswordStyles.visibilityAdornment}>
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: updatePasswordStyles.textFieldInput,
                    }}
                    sx={updatePasswordStyles.textFieldBase}
                  />
                </Box>
              </Box>
              <Box sx={updatePasswordStyles.errorWrapper}>
                {confirmPasswordError && (
                  <Typography sx={updatePasswordStyles.errorText}>
                    {confirmPasswordError}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Submit button */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={updatePasswordStyles.submitButton}
            >
              Update Password
            </Button>
          </Box>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default UpdatePassword;
