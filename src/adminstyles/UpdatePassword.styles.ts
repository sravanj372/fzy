import { styled, Box } from "@mui/material";

// Placeholder styled components for the main layout containers
export const LoginContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#D3F3D2",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

export const LoginBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "2.5rem",
  width: "100%",
  maxWidth: "400px",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

// Main styles object for the component
export const updatePasswordStyles = {
  loginContainer: {
    backgroundColor: "#D3F3D2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  logoWrapper: {
    mb: { xs: 2, sm: 4 },
  },
  logo: {
    width: { xs: "150px", sm: "210px" },
    height: "auto",
  },
  loginBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: { xs: "1.5rem", sm: "2.5rem" },
    width: "100%",
    maxWidth: "400px",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  title: {
    textAlign: "center",
    color: "#2F7A52",
  },
  subtitle: {
    color: "#7b7d7ee5",
    fontSize: "17.5px",
    margin: "auto",
    textAlign: "center",
    mb: 2,
  },
  createPasswordInputWrapper: ({ newPassword, newPasswordError, passwordRegex }) => ({
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
  }),
  confirmPasswordWrapper: {
    mt: 2,
  },
  confirmPasswordInputWrapper: ({ newPassword, confirmPassword, confirmPasswordError }) => ({
    border: `1px solid ${
      confirmPasswordError
        ? "red"
        : confirmPassword.length > 0 && newPassword === confirmPassword
        ? "#2F7A52"
        : "#2F7A52"
    }`,
    borderRadius: "6px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "14px",
  }),
  iconAdornment: {
    marginRight: "8px",
  },
  iconButton: {
    padding: "4px",
  },
  lockIcon: {
    width: "20px",
    height: "20px",
  },
  inputFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  inputLabel: {
    color: "#333333",
    fontSize: "10px",
    marginBottom: "2px",
  },
  textFieldBase: {
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
  },
  textFieldInput: {
    height: "25px",
    fontSize: "14px",
    padding: "0",
    "& input": {
      padding: "0",
    },
  },
  visibilityAdornment: {
    mr: 1,
    height: "45px",
    display: "flex",
    alignItems: "center",
  },
  errorWrapper: {
    minHeight: "15px",
    mt: 0.5,
  },
  errorText: {
    color: "red",
    fontSize: "11px",
    lineHeight: "1",
    ml: "4px",
  },
  submitButton: {
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
    mt: 1,
    "&:hover": {
      backgroundColor: "#256B45",
    },
  },
};
