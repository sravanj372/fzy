import { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar, { drawerWidth } from './Sidebar';
import Header from './Header';

const AdminLayout = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}> {/* Global overflow fix */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          maxWidth: '100vw',
          marginLeft: { md: `${drawerWidth}px` },
          marginRight: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: '#F8FCFD',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            maxWidth: '100vw',
            background: 'inherit',
            overflowX: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2, width: '100%', maxWidth: '100vw', overflowX: 'hidden', boxSizing: 'border-box' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;