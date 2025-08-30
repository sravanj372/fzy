import React from 'react';
import {
    Button,
    Paper,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    DialogActions, // Added this import
} from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
import Userphoto from '../assets/userphoto.jpg';
import { styled } from '@mui/material/styles';

const ModalOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
});

const ModalContent = styled(Paper)({
    padding: '24px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    zIndex: 2,
});

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
    
    const handleConfirmSuspend = () => {
        // Here you would add the logic to suspend the user account
        console.log("User account has been suspended.");
        setsuspendOpen(false); // Close the dialog after action
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
                <Paper sx={{ border: "1px solid green", overflowX: 'hidden', position: "relative" }}>
                    {/* Actions button - fixed at top-right */}
                    <Button
                        sx={{
                            border: "1px groove green",
                            height: "48px",
                            width: "100px",
                            position: "absolute",
                            top: 16,
                            right: 16,
                        }}
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

                    {/* User info */}
                    <Grid container p={2}>
                        {/* Column 1: Photo */}
                        <Grid item md={2} xs={12}>
                            <Box width="200px" height="250px">
                                <Box
                                    component="img"
                                    src={Userphoto}
                                    sx={{ width: "65%", height: "60%", objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>

                        {/* Column 2: User details */}
                        <Grid item md={10} xs={12}>
                            <Stack direction="column" gap={2}>
                                <Typography color="#2F7A52" fontWeight="700" fontSize={25}>
                                    James Murphy
                                </Typography>
                                {userprofiledata.map((user) => (
                                    <Stack direction="row" spacing={{ md: 4, xs: 3 }} key={user.id}>
                                        <Typography minWidth="150px" color="black" marginBottom={3}>
                                            {user.key}
                                        </Typography>
                                        <Typography minWidth="160px" color="black" marginBottom={3}>
                                            {user.value}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            {/* Suspension Confirmation Modal */}
            {suspendOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <Typography color="#FF3326" fontWeight="600" variant="h6">
                            Are you sure you want to Suspend the account?
                        </Typography>
                        <DialogActions sx={{ justifyContent: 'center', gap: '16px', padding: '16px' }}>
                            <Button onClick={handleClickClose} variant="outlined" sx={{ color: '#FF3326', borderColor: '#FF3326' }}>
                                Cancel
                            </Button>
                            <Button onClick={handleConfirmSuspend} variant="contained" sx={{ backgroundColor: '#FF3326', '&:hover': { backgroundColor: '#D32F2F' } }}>
                                Suspend
                            </Button>
                        </DialogActions>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}

export default UserprofileInfo;