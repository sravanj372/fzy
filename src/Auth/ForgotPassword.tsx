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
import { Logincontainer,LoginBox } from "../adminstyles/Adminstyles";
import adminLogo from '../assets/adminLogo.png'

const ForgotPassword = () => {
  return (
   <Logincontainer>
       <Box>
        <Box component="img" src={adminLogo} alt="LOGO" width="200px" height="50px" />
      </Box>
    <LoginBox>
        <Box>
          <Typography variant="h4" textAlign="center" color="#2F7A52">
            Forgot Password
          </Typography>
          <Typography color="#202224E5" fontSize="14px">
            Please enter your email address to begin the verification process. A 4-digit code will be sent to your email.
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
          />
        </FormControl>
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
          >
            Continue
          </Button>
        </Box>
    
    </LoginBox>
   </Logincontainer>
  )
}

export default ForgotPassword