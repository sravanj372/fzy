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

const Sidebar = () => {
  const menuitems = [
    { id: '1', text: 'Dashboard', icon: <DashboardIcon />, link: '/admin/dashboard' },
    { id: '2', text: 'Restaurant Management', icon: <RestaurantMenuIcon />, link: '/admin/restaurant-management' },
    { id: '3', text: 'Order Managements', icon: <ShoppingBagIcon />, link: '/admin/order-management' },
    { id: '4', text: 'User Management', icon: <PersonIcon />, link: '/admin/user-management' },
    { id: '5', text: 'Discount & Promo Reimbursements', icon: <SellIcon />, link: '/admin/discountpromo' },
    { id: '6', text: 'Configuration Settings', icon: <SettingsIcon />, link: '/admin/configsetting' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: '250px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '250px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
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
                <Typography fontSize="12px" color="green">Admin</Typography>
              </Box>
            </Stack>
          </Stack>
          <List>
            {menuitems.map((item) => (
              <ListItem
                key={item.id}
                button
                selected={item.text === 'Dashboard'}
                sx={{
                  backgroundColor: item.text === 'Dashboard' ? '#2e7d32' : 'inherit',
                  '&:hover': {
                    backgroundColor: '#2e7d32',
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
                    backgroundColor: '#2e7d32',
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
                      backgroundColor: '#2e7d32',
                    },
                  },
                  '& .MuiListItemIcon-root': {
                    color: item.text === 'Dashboard' ? 'white' : 'green',
                    minWidth: '40px',
                  },
                  '& .MuiListItemText-primary': {
                    color: item.text === 'Dashboard' ? 'white' : 'green',
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
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Divider sx={{ margin: '10px 0' }} />
          <List>
            <ListItem button>
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
    </Drawer>
  );
};

export default Sidebar;