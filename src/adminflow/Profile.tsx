import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import UpdatePasswordPopup from "./popups/UpdatePasswordPopup";
import UpdateEmailPopup from "./popups/UpdateEmailPopup";
import {
  ProfilePaper,
  ProfileTitle,
  AdminTitle,
  InfoText,
  UpdateLink,
  SaveButton,
  ChangePasswordButton,
} from "../adminstyles/ProfileStyles";

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

  const handleUpdateEmailClose = () => {
    setIsEmailDialogOpen(false);
  };

  const handleUpdatePasswordClose = () => {
    setIsPasswordDialogOpen(false);
  };

  return (
    <Box id="main-content">
      <ProfilePaper>
        <ProfileTitle variant="h6">
          Profile
        </ProfileTitle>

        <AdminTitle>
          ADMIN
        </AdminTitle>

        <Stack spacing={3} mb={3}>
          {/* Phone Number Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <InfoText style={{ width: "150px" }}>
              Phone Number
            </InfoText>
            <InfoText>
              {profileData.phoneNumber}
            </InfoText>
          </Stack>

          {/* Email Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <InfoText style={{ width: "150px" }}>
              Email
            </InfoText>
            <Stack direction="row" alignItems="center" spacing={1}>
              <InfoText>
                {profileData.email}
              </InfoText>
              <UpdateLink onClick={() => setIsEmailDialogOpen(true)}>
                Update
              </UpdateLink>
            </Stack>
          </Stack>

          {/* Password Row */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <InfoText style={{ width: "150px" }}>
              Password
            </InfoText>
            <Stack direction="row" alignItems="center" spacing={3}>
              <InfoText>
                {profileData.password}
              </InfoText>
              <ChangePasswordButton
                variant="outlined"
                onClick={() => setIsPasswordDialogOpen(true)}
              >
                Change Password
              </ChangePasswordButton>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "left" }}>
          <SaveButton
            variant="contained"
            onClick={handleSaveClick}
          >
            Save
          </SaveButton>
        </Box>
      </ProfilePaper>

      {isPasswordDialogOpen && (
        <UpdatePasswordPopup open={true} onClose={handleUpdatePasswordClose} />
      )}
      {isEmailDialogOpen && (
        <UpdateEmailPopup open={true} onClose={handleUpdateEmailClose} />
      )}
    </Box>
  );
};

export default Profile;