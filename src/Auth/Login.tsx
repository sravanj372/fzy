import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminLogo from '../assets/adminLogo.png'
const Login = () => {

const navigate=useNavigate()
  const [pwdopen, setPwdopen] = useState(false);
  const [pwdValue, setPwdValue] = useState("password");

  function passwordOpenhandler() {
    setPwdopen(true);
    setPwdValue("text");
  }

  function passwordClosehandler() {
    setPwdopen(false);
    setPwdValue("password");
  }

  const [email, setEmail] = useState("");
  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const [password, setPassword] = useState("");

  const passwordInputHandler = (event: any) => {
    setPassword(event.target.value);
    console.log(password);
  };

  function emaiValidation(email: any) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function passwordValidation(password: any) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const formsubmitHandler = () => {
     let isValid=true
    if (emaiValidation(email)) {
       setEmailerror("");
                                          
      } else {
        setEmailerror("Enter valid email address");
        isValid=false
     }
     if(passwordValidation(password)) {
      setpassworderror("");
     } else {
      setpassworderror(
        "Password must be at least 8 characterslong and include a number & special character");
        isValid=false
     }
       
     if(isValid==true){
      navigate('/admin/dashboard')
     }

  }  

return (
    <Logincontainer>
      <Box>
        <Box component="img" src={adminLogo} alt="LOGO" width="200px" height="50px" />
      </Box>
      <LoginBox>
        <Box>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            Login to Account
          </Typography>
          <Typography color="#202224E5" fontSize="14px">
            Please enter your email and password to continue
          </Typography>
        </Box>

        <FormControl fullWidth variant="outlined">
          <TextField
            label="Email ID"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <MailOutlineIcon sx={{ color: "#2F7A52" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#2F7A52" },
              },
            }}
            onChange={emailChangeHandler}
          />
        </FormControl>
        {email && (
          <Typography color="red" fontSize="14px">
            {emailerror}
          </Typography>
        )}
        {/* password */}
        <FormControl fullWidth variant="outlined">
          <Box display="flex" justifyContent="flex-end">
            <Typography color="#202224" fontSize="14px" sx={{cursor:'pointer'}}
            onClick={()=>navigate('forgot-password')}>
              Forget Password?
            </Typography>
          </Box>
          <TextField
            type={pwdValue}
            label="Password"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    {pwdopen && (
                      <LockOpenIcon
                        sx={{ color: "#2F7A52" }}
                        onClick={passwordClosehandler}
                      />
                    )}
                    {!pwdopen && (
                      <LockOutlineIcon
                        sx={{ color: "#2F7A52" }}
                        onClick={passwordOpenhandler}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#2F7A52" },
              },
            }}
            onChange={passwordInputHandler}
          />
        </FormControl>
        {password && (
          <Typography color="red" fontSize="14px">
            {passworderror}
          </Typography>
        )}
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Checkbox defaultChecked />
          <Typography fontSize="14px">Remember Me</Typography>
        </Box>
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
            onClick={formsubmitHandler}
          >
            Sign In
          </Button>
        </Box>
      </LoginBox>
    </Logincontainer>
  );
};

export default Login;
