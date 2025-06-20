import { VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { PasswordupdateBox } from "../adminstyles/Adminstyles";

const ProfilePasswordupdate = () => {
  const [pwdflag, setPwdflag] = useState(false);
  const [pwdtype, setPwdType] = useState("password");

  const [confirmpwdflag, setConfirmpwdFlag] = useState(false);
  const [confirmPwdtype, setConfirmPwdType] = useState("password");

  const showPasswordHandler = () => {
    setPwdflag((prev) => !prev);
    setPwdType("text");
  };

  const hidePasswordHandler = () => {
    setPwdflag((prev) => !prev);
    setPwdType("password");
  };

  const showConfirmPasswordHandler = () => {
    setConfirmpwdFlag((prev) => !prev);
    setConfirmPwdType("text");
  };

  const hideConfirmPasswordHandler = () => {
    setConfirmpwdFlag((prev) => !prev);
    setConfirmPwdType("password");
  };

const passwordRef=useRef<any>('');
const confirmPasswordRef=useRef<any>('')

console.log(passwordRef.current.value)


const[error,setError]=useState(false)
function updatePasswordHandler(){
  
  if((passwordRef.current.value===confirmPasswordRef.current.value)
    &&((passwordRef.current.value.length>0)&&(confirmPasswordRef.current.value.length>0))){
    console.log("equal")
    setError(false)
  }else{
    console.log("not equal")
    setError(true)
  } 
}  

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <PasswordupdateBox>
        <Typography variant="h5" textAlign="center" color="#2F7A52">
          New Password Update
        </Typography>
        <Typography>
          Set the new password for your account so you can login.
        </Typography>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">New Password</InputLabel>
          <OutlinedInput
            inputRef={passwordRef}
            label="Password"
            type={pwdtype}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  {pwdflag ? (
                    <VisibilityIcon onClick={hidePasswordHandler} />
                  ) : (
                    <VisibilityOff onClick={showPasswordHandler} />
                  )}
                </IconButton>
              </InputAdornment>
              
            }
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
              },
              // Hover state
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
              },
              // Focus state
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
                borderWidth: "2px",
              },
            }}
          />
        </FormControl>
        {/* confirm Password */}
        <FormControl variant="outlined">
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <OutlinedInput
            inputRef={confirmPasswordRef}
            label="confirm-password"
            type={confirmPwdtype}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  {confirmpwdflag ? (
                    <VisibilityIcon onClick={hideConfirmPasswordHandler} />
                  ) : (
                    <VisibilityOff onClick={showConfirmPasswordHandler} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
              },
              // Hover state
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
              },
              // Focus state
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F7A52",
                borderWidth: "2px",
              },
            }}
          />
        </FormControl>
        <Box><Typography color="red">{error&&"Both Passwords should match"}</Typography></Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{
              backgroundColor: "#2F7A52",
              color: "white",
              "&: hover": {
                backgroundColor: "#2F7A52",
                color: "white",
              },
            }}
         onClick={updatePasswordHandler} >
            Update Password
          </Button>
        </Box>
      </PasswordupdateBox>
    </Box>
  );
};

export default ProfilePasswordupdate;
