import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import adminLogo from '../assets/adminLogo.png';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Logincontainer
      sx={{
        backgroundColor: '#D3F3D2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Box component="img" src={adminLogo} alt="FOODZY Logo" width="210px" height="60px" />
      </Box>

      <LoginBox
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: { xs: '24px', sm: '40px' },
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Box display="flex" flexDirection="column" gap={1} justifyContent="center" mb={3}>
          <Typography variant="h5" textAlign="center" color="#2F7A52">
            Forgot Password
          </Typography>
          <Typography color="#666666" fontSize="12px" textAlign="center">
            Please enter your email address to begin the verification process. A 4 digit code will be sent to your email.
          </Typography>
        </Box>

        <Box
          sx={{
            border: '1px solid #2F7A52',
            borderRadius: '6px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '14px',
            mb: 2,
          }}
        >
          <InputAdornment position="start" sx={{ marginRight: '8px' }}>
            <IconButton edge="start" disableRipple sx={{ padding: '4px' }}>
              <MailOutlineIcon sx={{ color: "#2F7A52", fontSize: '20px' }} />
            </IconButton>
          </InputAdornment>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography sx={{ color: '#050505ff', fontSize: '10px', marginBottom: '2px' }}>
              Email ID
            </Typography>
            <TextField
              variant="outlined"
              placeholder="John@gmail.com"
              fullWidth
              size="small"
              margin="none"
              InputProps={{
                sx: {
                  height: '25px',
                  fontSize: '14px',
                  padding: '0',
                  '& input': {
                    padding: '0',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '25px',
                  padding: '0',
                  '& fieldset': {
                    borderColor: '#ffffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffffff',
                    borderWidth: '1px',
                  },
                },
              }}
            />
          </Box>
        </Box>



        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2F7A52',
            color: '#FFFFFF',
            borderRadius: '6px',
            paddingY: '5px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            width: '80%',
            margin: '0 auto',
            display: 'block',
            '&:hover': {
              backgroundColor: '#256B45',
            },
          }}
          onClick={() => navigate('/otp')}
        >
          Continue
        </Button>
      </LoginBox>
    </Logincontainer>
  );
};

export default ForgotPassword;
