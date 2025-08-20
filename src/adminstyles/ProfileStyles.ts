import { styled } from '@mui/material/styles';
import { Paper, Typography, Button } from '@mui/material';

export const ProfilePaper = styled(Paper)({
  border: "1px solid #2F7A52",
  borderRadius: "8px",
  padding: 24, // Converted to number for consistency with theme spacing
  '@media (min-width: 600px)': {
    padding: 24, // You can adjust padding for different screen sizes
  },
});

export const ProfileTitle = styled(Typography)({
  fontFamily: "Nunito Sans",
  fontWeight: 400,
  fontSize: "19px",
  lineHeight: "175%",
  color: "#2F7A52",
  marginBottom: 8, // Converted to number for consistency with theme spacing
});

export const AdminTitle = styled(Typography)({
  fontWeight: 700,
  color: "#2F7A52",
  marginTop: 16,
  marginBottom: 40,
  fontSize: "24px",
  fontFamily: "Nunito Sans",
  lineHeight: "100%",
});

export const InfoText = styled(Typography)({
  color: "#090909ff",
  fontSize: "20px",
  fontFamily: "Nunito Sans",
  fontWeight: 400,
  lineHeight: "100%",
});

export const UpdateLink = styled(Typography)({
  textDecoration: "underline",
  color: "#2F7A52",
  cursor: "pointer",
});

export const ChangePasswordButton = styled(Button)({
  color: "#2F7A52",
  borderColor: "#2F7A52",
  textTransform: "none",
  borderRadius: "8px",
  marginLeft: "20px",
});

export const SaveButton = styled(Button)({
  backgroundColor: "#2F7A52",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#2F7A52",
  },
  fontFamily: "Nunito Sans",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "100%",
  textTransform: "none",
  borderRadius: "8px",
  padding: "11px 40px",
  marginLeft: "500px",
});