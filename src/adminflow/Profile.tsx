import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import UpdatePasswordPopup from "./popups/UpdatePasswordPopup";
import UpdateEmailPopup from "./popups/UpdateEmailPopup";

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    phoneNumber: "+61 234 456 92",
    email: "Ramesh@gmail.com",
    password: "*******",
  });

  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);

  const handleSaveClick = () => {
    // Save logic here
  };

  return (
    <Box id="main-content">
      <Paper
        sx={{
          border: "1px solid #2F7A52", // Changed border color to green
          borderRadius: "8px",
          padding: 3,
        }}
      >
        <Typography
          variant="h6"
          color="#2F7A52"
          mb={1}
          sx={{
            fontFamily: "Nunito Sans",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "175%",
          }}
        >
          Profile
        </Typography>

        <Typography
          fontWeight={700}
          color="#2F7A52"
          mt={2}
          mb={5}
          fontSize="24px"
          fontFamily="Nunito Sans"
          lineHeight="100%"
        >
          ADMIN
        </Typography>

        <Stack spacing={3} mb={3}>
          {/* Phone Number Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              sx={{
                color: "#090909ff",
                fontSize: "20px",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                lineHeight: "100%",
                width: "150px",
              }}
            >
              Phone Number
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
              }}
            >
              {profileData.phoneNumber}
            </Typography>
          </Stack>

          {/* Email Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              sx={{
                color: "#060606ff",
                fontSize: "20px",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                lineHeight: "100%",
                width: "150px",
              }}
            >
              Email
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                }}
              >
                {profileData.email}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "#2F7A52",
                  cursor: "pointer",
                }}
                onClick={() => setIsEmailDialogOpen(true)}
              >
                Update
              </Typography>
            </Stack>
          </Stack>

          {/* Password Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              sx={{
                color: "#000000ff",
                fontSize: "20px",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                lineHeight: "100%",
                width: "150px",
              }}
            >
              Password
            </Typography>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                }}
              >
                {profileData.password}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "#2F7A52",
                  borderColor: "#2F7A52",
                  textTransform: "none",
                  borderRadius: "8px",
                  marginLeft: "20px",
                }}
                onClick={() => setIsPasswordDialogOpen(true)}
              >
                Change Password
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "left " }}>
          <Button
            variant="contained"
            sx={{
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
            }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Box>
      </Paper>

      <UpdateEmailPopup
        open={isEmailDialogOpen}
        onClose={() => setIsEmailDialogOpen(false)}
        target="#main-content"
      />

      <UpdatePasswordPopup
        open={isPasswordDialogOpen}
        onClose={() => setIsPasswordDialogOpen(false)}
        target="#main-content"
      />
    </Box>
  );
};

export default Profile;