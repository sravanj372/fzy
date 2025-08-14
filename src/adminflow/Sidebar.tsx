import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { Box, Stack, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import Adminlogo from '../assets/adminLogo.png';
import Avatar from '@mui/material/Avatar';
import Userphoto from '../assets/av1.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';

// Custom image imports for menu icons
import RestaurantMenuImage from "../assets/famicons_restaurant.png";
import ShoppingBagImage from "../assets/solar_bag-3-bold.png";
import PersonImage from "../assets/tdesign_user-filled.png";
import SellImage from "../assets/ic_baseline-discount.png";
import SettingsImage from "../assets/eos-icons_configuration-file.png";

export const drawerWidth = 281;

interface SidebarProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
    const [isConfigOpen, setIsConfigOpen] = useState(false);
    const [logoutOpen, setLogoutOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Type definition for menu items
    interface MenuItem {
        id: string;
        text: string;
        icon: React.ReactElement;
        link: string;
        subItems?: { id: string; text: string; link: string }[];
    }

    const menuitems: MenuItem[] = [
        { id: '1', text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 22 }} />, link: '/admin/dashboard' },
        { id: '2', text: 'Restaurant Management', icon: <Box component="img" src={RestaurantMenuImage} sx={{ width: 22, height: 22 }} />, link: '/admin/restaurant-management' },
        { id: '3', text: 'Order Management', icon: <Box component="img" src={ShoppingBagImage} sx={{ width: 22, height: 22 }} />, link: '/admin/order-management' },
        { id: '4', text: 'User Management', icon: <Box component="img" src={PersonImage} sx={{ width: 22, height: 22 }} />, link: '/admin/user-management' },
        { id: '5', text: 'Discount & Promo Reimbursements', icon: <Box component="img" src={SellImage} sx={{ width: 22, height: 22 }} />, link: '/admin/discountpromo' },
        {
            id: '6',
            text: 'Configuration Settings',
            icon: <Box component="img" src={SettingsImage} sx={{ width: 22, height: 22 }} />,
            link: '/admin/configsetting/paymentsettings',
            subItems: [
                { id: '6-1', text: 'Payment Settings', link: '/admin/configsetting/paymentsettings' },
                { id: '6-2', text: 'Tax Settings', link: '/admin/configsetting/taxsettings' },
            ],
        },
    ];

    // Updated function to check if a menu item (or its sub-items) is currently active.
    const isItemOrSubItemSelected = (item: MenuItem) => {
        if (item.link && location.pathname.startsWith(item.link)) {
            return true;
        }
        if (item.subItems) {
            return item.subItems.some((sub) => location.pathname.includes(sub.link));
        }
        return false;
    };

    // Effect to automatically open 'Configuration Settings' if one of its sub-items is active
    useEffect(() => {
        const configSettingsItem = menuitems.find(item => item.id === '6');
        if (configSettingsItem && configSettingsItem.subItems) {
            const isAnyConfigSubItemSelected = configSettingsItem.subItems.some(sub => location.pathname.includes(sub.link));
            setIsConfigOpen(isAnyConfigSubItemSelected);
        }
    }, [location.pathname]);

    const handleMenuToggle = (item: MenuItem) => {
        if (item.id === '6') {
            setIsConfigOpen((prev) => !prev);
            // If we are opening and not already on a sub-item, navigate to the first sub-item
            if (!isConfigOpen && item.subItems && !isItemOrSubItemSelected(item)) {
                navigate(item.subItems[0].link);
                if (mobileOpen) handleDrawerToggle();
            } else if (!isConfigOpen && item.subItems && isItemOrSubItemSelected(item)) {
                // If we're opening and are already on a sub-item, just close drawer on mobile
                if (mobileOpen) handleDrawerToggle();
            } else if (isConfigOpen && item.subItems && !isItemOrSubItemSelected(item)) {
                // If we're closing, and not on a sub-item, navigate to the parent link
                navigate(item.link);
                if (mobileOpen) handleDrawerToggle();
            } else {
                // Default case for closing
                if (mobileOpen) handleDrawerToggle();
            }
        } else {
            navigate(item.link || '');
            if (mobileOpen) handleDrawerToggle();
        }
    };

    const handleSubItemClick = (subItemLink: string) => {
        navigate(subItemLink);
        if (mobileOpen) handleDrawerToggle();
    };

    const drawerContent = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                height: '100vh',
                backgroundColor: '#F1F4F9',
            }}
        >
            {/* FOODZY Logo Section */}
            <Stack
                direction="column"
                gap={1}
                sx={{ padding: '20px 20px 10px 20px' }}
            >
                <Box
                    component="img"
                    src={Adminlogo}
                    height="32px"
                    alt="Admin Logo"
                    sx={{
                        display: 'block',
                        width: '120px',
                        objectFit: 'contain',
                        mb: '10px',
                    }}
                />

                {/* Ramesh Admin Profile Section */}
                <Stack
                    direction="row"
                    gap={1}
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        backgroundColor: '#EDF5ED',
                        padding: '12px 15px',
                        borderRadius: '10px',
                        width: '100%',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        navigate('profile');
                        if (mobileOpen) handleDrawerToggle();
                    }}
                >
                    <Avatar src={Userphoto} sx={{ width: 40, height: 40 }} />
                    <Box>
                        <Typography sx={{ fontSize: '15px', fontWeight: 600, color: '#2C2F31' }}>
                            Ramesh
                        </Typography>
                        <Typography sx={{ fontSize: '12px', color: '#2F7A52' }}>
                            Admin
                        </Typography>
                    </Box>
                </Stack>
            </Stack>

            {/* Main Navigation List */}
            <List sx={{ flexGrow: 1, pt: 1 }}>
                {menuitems.map((item) => {
                    const isActiveSection = isItemOrSubItemSelected(item);
                    const shouldHighlightParent = isActiveSection;

                    return (
                        <Box key={item.id}>
                            <ListItemButton
                                onClick={() => handleMenuToggle(item)}
                                selected={shouldHighlightParent}
                                sx={{
                                    margin: '0 15px 5px 15px',
                                    width: `calc(100% - ${15 * 2}px)`,
                                    borderRadius: '8px',
                                    position: 'relative',
                                    minHeight: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '8px 15px',
                                    backgroundColor: 'transparent',
                                    '& .MuiListItemIcon-root': {
                                        color: '#2F7A52',
                                        minWidth: '40px',
                                    },
                                    '& .MuiListItemIcon-root img': {
                                        filter: 'none',
                                    },
                                    '& .MuiListItemText-primary': {
                                        color: '#2F7A52',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                    },
                                    '&:not(.Mui-selected):hover': {
                                        backgroundColor: '#2F7A52',
                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                        '& .MuiListItemIcon-root img': {
                                            filter: 'brightness(0) invert(1)',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: 'white',
                                        },
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#2F7A52',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: -15,
                                            top: 0,
                                            width: '4px',
                                            height: '100%',
                                            backgroundColor: '#2F7A52',
                                            borderRadius: '0 4px 4px 0',
                                        },
                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                        '& .MuiListItemIcon-root img': {
                                            filter: 'brightness(0) invert(1)',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: 'white',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#2F7A52 !important',
                                            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                color: 'white',
                                            },
                                            '& .MuiListItemIcon-root img': {
                                                filter: 'brightness(0) invert(1)',
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                            {item.subItems && (
                                <Collapse in={isConfigOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.subItems.map((subItem) => (
                                            <ListItemButton
                                                key={subItem.id}
                                                onClick={() => handleSubItemClick(subItem.link)}
                                                selected={location.pathname.includes(subItem.link)}
                                                sx={{
                                                    pl: 8,
                                                    margin: '0 15px 5px 30px',
                                                    width: `calc(100% - 45px)`,
                                                    borderRadius: '8px',
                                                    position: 'relative',
                                                    padding: '10px 15px',
                                                    minHeight: 40,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    backgroundColor: 'transparent',
                                                    '& .MuiListItemText-primary': {
                                                        color: '#2C2F31',
                                                        fontSize: '13px',
                                                        fontWeight: 500,
                                                        textDecoration: 'none',
                                                    },
                                                    '&:not(.Mui-selected):hover': {
                                                        backgroundColor: '#EDF5ED',
                                                        '& .MuiListItemText-primary': {
                                                            color: '#2F7A52',
                                                            textDecoration: 'none',
                                                        },
                                                    },
                                                    '&.Mui-selected': {
                                                        backgroundColor: 'transparent',
                                                        '&::before': {
                                                            content: 'none',
                                                        },
                                                        '& .MuiListItemText-primary': {
                                                            color: '#2C2F31',
                                                            textDecoration: 'underline',
                                                        },
                                                        '&:hover': {
                                                            backgroundColor: '#EDF5ED',
                                                            '& .MuiListItemText-primary': {
                                                                color: '#2F7A52',
                                                                textDecoration: 'underline',
                                                            },
                                                        }
                                                    },
                                                }}
                                            >
                                                <ListItemText primary={subItem.text} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    );
                })}
            </List>

            {/* Logout Section */}
            <Box sx={{ p: '15px 15px 20px 15px' }}>
                <Divider sx={{ mb: '10px', borderColor: '#E0E0E0' }} />
                <List>
                    <ListItemButton
                        onClick={() => setLogoutOpen(true)}
                        sx={{
                            margin: '0',
                            width: '100%',
                            borderRadius: '8px',
                            padding: '10px 15px',
                            minHeight: 48,
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#FF4D4D',
                                '& .MuiListItemIcon-root': {
                                    color: 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: 'white',
                                },
                            },
                            '& .MuiListItemIcon-root': {
                                color: '#FF4D4D',
                                minWidth: '40px',
                                fontSize: 22,
                            },
                            '& .MuiListItemText-primary': {
                                color: '#FF4D4D',
                                fontSize: '14px',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );

    return (
        <>
            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        height: '100vh',
                        zIndex: 1201,
                        boxShadow: '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
            {/* Permanent Drawer for larger screens */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        height: '100vh',
                        zIndex: 1200,
                        position: 'fixed',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Logout Confirmation Dialog with blur backdrop */}
<Dialog
    open={logoutOpen}
    onClose={() => setLogoutOpen(false)}
    PaperProps={{
        sx: {
            borderRadius: 3,
            p: 3, // Increase padding to make the box bigger
            width: '100%',
            maxWidth: '400px' // Set a max-width to control the overall size
        }
    }}
    BackdropProps={{
        sx: { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0.2)' }
    }}
>
    <DialogContent sx={{ textAlign: 'left' }}>
        <Typography sx={{ color: '#FF3326', mb: 4, fontSize: '20px', fontWeight: 400,mt: 2 }}>
            Are you sure you want to log out?
        </Typography>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center', p: 0 ,mb: 2}}>
        <Button
            variant="outlined"
            onClick={() => setLogoutOpen(false)}
            sx={{ color: '#FF3326', borderColor: '#FF3326', width: '130px', mr: 2 }}
        >
            Cancel
        </Button>
        <Button
            variant="contained"
            color="error"
            onClick={() => {
                setLogoutOpen(false);
                navigate('/login');
                if (mobileOpen) handleDrawerToggle();
            }}
            sx={{ width: '130px' }} // Give the button a specific width
        >
            Log Out
        </Button>
    </DialogActions>
</Dialog>
        </>
    );
};

export default Sidebar;