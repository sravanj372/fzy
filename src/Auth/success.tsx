import {
  Box,
  Button,
 
  Typography,
} from "@mui/material";;
import { Logincontainer, LoginBox } from "../adminstyles/Adminstyles";
import adminLogo from '../assets/adminLogo.png';
import { useNavigate } from "react-router-dom";
import icon from '../assets/success.png'; // ✅ Your success icon

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
        {/* ✅ Inserted Icon */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            component="img"
            src={icon}
            alt="Success Icon"
            width="150px"
            height="150px"
          />
        </Box>

        <Box display="flex" flexDirection="column" gap={1} justifyContent="center" mb={3}>
          <Typography variant="h5" textAlign="center" color="#2F7A52">
            Sucesssfully
          </Typography>
          <Typography color="#666666" fontSize="14px" textAlign="center">
            Your password has been reset Successfully
          </Typography>
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
          onClick={() => navigate('/login')}
        >
          Continue
        </Button>
      </LoginBox>
    </Logincontainer>
  );
};

export default ForgotPassword;
