import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import { useState } from "react";
import adminLogo from '../assets/adminLogo.png'


const UpdatePassword = () => {

const [pwdopen,setPwdopen]=useState(false)
 const [pwdValue,setPwdValue]=useState("password")


 function passwordOpenhandler(){
    setPwdopen(true)
    setPwdValue("text")
}

function passwordClosehandler(){
  setPwdopen(false)
  setPwdValue("password")
}

const [confirmpwdopen,setconfirmPwdopen]=useState(false)
 const [confirmpwdValue,setconfirmPwdValue]=useState("password")

function confirmpasswordOpenhandler(){
  setconfirmPwdopen(true)
  setconfirmPwdValue("text")
}

function confirmpasswordClosehandler(){
  setconfirmPwdopen(false)
  setconfirmPwdValue("password")
}

  return (
   <Logincontainer>
       <Box>
        <Box component="img" alt="LOGO" src={adminLogo}  width="200px" height="50px" />
      </Box>
      <LoginBox>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            New Password
          </Typography>
          <Typography color="#202224E5" fontSize="19px">
            Set the new password for your account so you can login.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={4}>
          {/* password */}
         <FormControl fullWidth variant="outlined">
          <TextField
          type={pwdValue}
            placeholder="Password"
            /* size="small" */
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    {pwdopen&& <LockOpenIcon sx={{ color: "#2F7A52" }} onClick={passwordClosehandler} />}
                    {!pwdopen&& <LockOutlineIcon sx={{ color: "#2F7A52" }} onClick={passwordOpenhandler} />}
                    
                    
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
                 "& input::placeholder":{
                  fontSize:'13px',
                  color:'#000',
                  fontWeight:'600',
                  position:'absolute',
                  top:"5px"
                },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#2F7A52" },
              },
            }}
          />
        </FormControl>
        {/* confirm password */}
        <FormControl fullWidth variant="outlined">
        
          <TextField
          type={confirmpwdValue}
            placeholder="Confirm Password"
            /* size="small" */
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    {confirmpwdopen&& <LockOpenIcon sx={{ color: "#2F7A52" }} onClick={confirmpasswordClosehandler} />}
                    {!confirmpwdopen&& <LockOutlineIcon sx={{ color: "#2F7A52" }} onClick={confirmpasswordOpenhandler} />}
                    
                    
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
                 "& input::placeholder":{
                  fontSize:'13px',
                  color:'#000',
                  fontWeight:'600',
                  position:'absolute',
                  top:"5px"
                },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#2F7A52" },
              },
            }}
          />
        </FormControl> 
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
          >
            Update Password
        </Button>
        </Box>
        </LoginBox>
   </Logincontainer>
  )
}

export default UpdatePassword
