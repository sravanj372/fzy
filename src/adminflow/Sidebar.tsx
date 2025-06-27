import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Stack, Typography } from '@mui/material';
import Adminlogo from '../assets/adminLogo.png';
import Avatar from '@mui/material/Avatar';
import Userphoto from '../assets/av1.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const drawerWidth = 250;

const Sidebar = ({ mobileOpen, handleDrawerToggle }:any) => {

  // State for Configuration Settings dropdown
const [isConfigOpen, setIsConfigOpen] = useState(false);

  const menuitems = [
    { id: '1', text: 'Dashboard', icon: <DashboardIcon />, link: '/admin/dashboard' },
    { id: '2', text: 'Restaurant Management', icon: <RestaurantMenuIcon />, link: '/admin/restaurant-management' },
    { id: '3', text: 'Order Managements', icon: <ShoppingBagIcon />, link: '/admin/order-management' },
    { id: '4', text: 'User Management', icon: <PersonIcon />, link: '/admin/user-management' },
    { id: '5', text: 'Discount & Promo Reimbursements', icon: <SellIcon />, link: '/admin/discountpromo' },
    {
      id: '6',
      text: 'Configuration Settings',
      icon: <SettingsIcon />,
      link: '/admin/configsetting/paymentsettings',
      subItems: [
        { id: '6-1', text: 'Payment Settings', link: '/admin/configsetting/paymentsettings' },
        { id: '6-2', text: 'Tax Settings', link: '/admin/configsetting/taxsettings' },
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuToggle = (id:any) => {
    if (id === '6') {
      setIsConfigOpen((prev) => !prev); // Toggle Configuration Settings dropdown
    }
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100vh', justifyContent: 'space-between' }}>
      <Box>
        <Stack direction="column" gap={1} sx={{ padding: '10px 15px' }}>
          <Box component="img" src={Adminlogo} height="30px" width="60%" alt="Admin Logo" />
          <Stack
            direction="row"
            gap={2}
            justifyContent="flex-start"
            alignItems="center"
            sx={{ backgroundColor: '#DEF6DB', padding: '10px', borderRadius: '10px', width: '100%' }}
          >
            <Avatar src={Userphoto} />
            <Box>
              <Typography>Ramesh</Typography>
              <Typography fontSize="12px" color="#2F7A52">Admin</Typography>
            </Box>
          </Stack>
        </Stack>
        <List>
          {menuitems.map((item) => (
            <Box key={item.id}>
              <ListItem
                button
                selected={location.pathname === item.link}
                onClick={() => {
                  if (item.subItems) {
                    handleMenuToggle(item.id); // Toggle dropdown on click
                  } else {
                    navigate(item.link);
                    if (mobileOpen) handleDrawerToggle();
                  }
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: '#2F7A52',
                    width: '95%',
                    margin: '0 auto',
                    borderRadius: '4px',
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                    '& .MuiListItemText-primary': {
                      color: 'white',
                    },
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#2F7A52',
                    width: '95%',
                    margin: '0 auto',
                    borderRadius: '4px',
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                    '& .MuiListItemText-primary': {
                      color: 'white',
                    },
                    '&:hover': {
                      backgroundColor: '#2F7A52',
                    },
                  },
                  '& .MuiListItemIcon-root': {
                    color: '#2F7A52',
                    minWidth: '40px',
                  },
                  '& .MuiListItemText-primary': {
                    color: '#2F7A52',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '14px',
                    },
                  }}
                />
                {item.subItems && (
                  <ListItemIcon>
                    {isConfigOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItemIcon>
                )}
              </ListItem>
              {item.subItems && (
                <Collapse in={isConfigOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.id}
                        button
                        sx={{
                          pl: 4, // Indent sub-items
                          '&:hover': {
                            backgroundColor: '#2F7A52',
                            '& .MuiListItemText-primary': {
                              color: 'white',
                            },
                          },
                          '& .MuiListItemText-primary': {
                            color: '#2F7A52',
                            fontSize: '13px',
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#2F7A52',
                            '& .MuiListItemText-primary': {
                              color: 'white',
                            },
                          },
                        }}
                        selected={location.pathname === subItem.link}
                        onClick={() => {
                          navigate(subItem.link);
                          if (mobileOpen) handleDrawerToggle();
                        }}
                      >
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Box>
      <Box>
        <Divider sx={{ margin: '10px 0' }} />
        <List>
          <ListItem
            button
            onClick={() => {
              navigate('admin/logout');
              if (mobileOpen) handleDrawerToggle();
            }}
          >
            <ListItemIcon sx={{ color: 'red', minWidth: '40px' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{
                '& .MuiTypography-root': {
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  color: 'red',
                },
              
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
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
          },
        }}
      >
        {drawerContent}
      </Drawer>
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
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;