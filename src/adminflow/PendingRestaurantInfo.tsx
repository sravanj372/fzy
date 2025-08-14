import {
    Button,
    Paper,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Grid,
    Box,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Import image assets correctly
import approve from '../assets/flat-color-icons_ok.png';
import cancel from '../assets/material-symbols_cancel.png';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Section component for displaying key-value pairs
const Section = ({
    title,
    data,
}: {
    title: string;
    data: { key: string; value: string }[];
}) => (
    <Paper variant="outlined" sx={{ borderColor: "#C9E7CA", p: 3, mt: 2 }}>
        <Typography
            sx={{
                fontFamily: 'Nunito Sans',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#2F7A52',
                lineHeight: '100%',
                letterSpacing: '0%',
                mb: 2,
            }}
        >
            {title}
        </Typography>
        <Box>
            {data.map((item, index) => (
                <Box display="flex" alignItems="center" gap={4} key={index} mb={2.5}>
                    <Typography
                        sx={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: "black",
                            minWidth: "290px",
                            flexShrink: 0,
                        }}
                    >
                        {item.key}:
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                    >
                        {item.value}
                    </Typography>
                </Box>
            ))}
        </Box>
    </Paper>
);

const PendingRestuarentDetails = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleApprove = () => {
        console.log('Restaurant Approved!');
        handleClose();
    };

    const handleReject = () => {
        console.log('Restaurant Rejected!');
        handleClose();
    };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const restaurantDetails = [
        { key: "Restaurant Name", value: "Green Kitchen Co." },
        { key: "Business Email", value: "Green Kitchen Co.@gmail.com" },
        { key: "Contact Person Name", value: "James" },
        { key: "Phone Number", value: "+61 412 345 678" },
        { key: "ABC/ACN Number", value: "13 99 94" },
        {
            key: "Address",
            value: "The Green plate bistro, 123 foodie lane, Sydney NSW 2000, Australia",
        },
    ];

    const restaurantInfo = [
        { key: "Cuisine Types", value: "Australian" },
        { key: "Food Categories", value: "Bakery Items" },
        { key: "Dietary & Preference Categories", value: "Bakery Items" },
        { key: "Storage requirements", value: "Bakery Items" },
        { key: "Meal Per day", value: "10 to 50" },
        {
            key: "Description",
            value: "Authentic Italian flavors with handcrafted pasta, wood-fired pizzas, and fresh ingredients. Experience the true taste of Italy!",
        },
    ];

    return (
        <Box p={2}>
            {/* Back Button */}
            <Box display="flex" mb={1}>
                <IconButton onClick={handleBackClick} sx={{ color: "black", p: 0.5 }}>
                    <ArrowBackIcon />
                </IconButton>
            </Box>

            {/* Main Section */}
            <Paper
                variant="outlined"
                sx={{ borderColor: "#C9E7CA", p: 2, mt: 1, paddingBottom: 4, position: 'relative' }}
            >
                {/* Actions Button positioned at the top right */}
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            borderColor: "#C9E7CA",
                            textTransform: "none",
                            height: "40px",
                            width: "100px",
                            color: 'black'
                        }}
                    >
                        Actions
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{ mt: 1 }}
                    >
                        <MenuItem onClick={handleApprove}>
                            <ListItemIcon>
                                <Box component="img" src={approve} alt="Approve Icon" sx={{ width: 24, height: 24 }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#2F7A52' }}>Approve</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleReject}>
                            <ListItemIcon>
                                <Box component="img" src={cancel} alt="Reject Icon" sx={{ width: 24, height: 24 }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: '#FF3326' }}>Reject</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
                
                {/* Content with Details */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Box flexGrow={1} sx={{ mt: 1 }}>
                            <Typography
                                color="#2F7A52"
                                fontWeight="400"
                                fontSize="28px"
                                mb={2}
                            >
                                Green Kitchen Co.
                            </Typography>
                            <Box>
                                {restaurantDetails.map((item, index) => (
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={2}
                                        key={index}
                                        mb={3}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: "20px",
                                                color: "black",
                                                flexShrink: 0,
                                                minWidth: "290px",
                                            }}
                                        >
                                            {item.key}:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: "20px",
                                                color: "black",
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Restaurant Information Section */}
            <Section title="Restaurant Information" data={restaurantInfo} />
        </Box>
    );
};

export default PendingRestuarentDetails;