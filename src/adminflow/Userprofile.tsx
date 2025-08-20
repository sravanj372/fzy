import React from 'react'
import {
  Button,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import Userphoto from '../assets/userphoto.jpg'
import Suspendaccount from "./popups/Suspendaccount";

const UserprofileInfo = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userprofiledata = [
    { id: 1, key: 'First Name', value: 'James' },
    { id: 2, key: 'Last Name', value: 'Murphy' },
    { id: 3, key: 'Email Address', value: 'James@gmail.com' },
    { id: 4, key: 'Contact Number', value: '+61 412 345 678' },
    { id: 5, key: 'Total Orders', value: '20' },
    { id: 6, key: 'Total Co2 Emission', value: '500' },
    { id: 7, key: 'No of food Posted', value: '10' },
    { id: 8, key: 'Food Preference', value: 'Vegan' },
    { id: 9, key: 'Dietary', value: 'Organic' },
    { id: 10, key: 'Allergy to', value: 'Garlic' },
  ];

  const [suspendOpen, setsuspendOpen] = React.useState<boolean>(false);

  const suspendPopuphandler = () => {
    setsuspendOpen(true);
    handleClose(); // Close the menu when the suspend popup is opened
  };

  const handleClickClose = () => {
    setsuspendOpen(false);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <>
      {/* Back Button */}
      <Box display="flex" mb={1}>
        <IconButton onClick={handleBackClick} sx={{ color: "green", p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box padding={1} gap={2}>
        <Paper sx={{ border: "1px solid green", overflowX: 'hidden' }}>
          <Grid container p={2} >
            <Grid item md={2} xs={12}>
              <Box width="200px" height="250px" >
                <Box
                  component="img"
                  src={Userphoto}
                  sx={{ width: "65%", height: "60%", objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid item md={8} xs={12}>
              <Stack direction="column" gap={2} >
                <Typography color="#2F7A52" fontWeight="700" fontSize={25}>James Murphy</Typography>
                {userprofiledata.map((user) => (
                  <Stack direction="row" spacing={{ md: 4, xs: 3 }} key={user.id}>
                    <Typography minWidth="150px" color="black" marginBottom={3} >{user.key}</Typography>
                    <Typography minWidth="160px" color="black" marginBottom={3}>{user.value}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box display='flex' justifyContent="flex-end">
                <Button
                  sx={{ border: "1px groove green", height: "48px", width: "100px" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="inherit"
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Actions
                </Button>
              </Box>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={suspendPopuphandler}>
                  Suspend
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {suspendOpen && <Suspendaccount suspenopen={suspendOpen} suspenclose={handleClickClose} />}
    </>
  );
}

export default UserprofileInfo;