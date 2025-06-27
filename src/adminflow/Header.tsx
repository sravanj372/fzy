import { Box, InputAdornment, Paper, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from './Sidebar';

const Header = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <Box
      component={Paper}
      elevation={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: { xs: 0, md: 1 }, 
        width: '100%',
        maxWidth: { xs: '100vw', md: `calc(100vw - ${drawerWidth}px)` },
        boxSizing: 'border-box',
        margin: 0,
        paddingLeft: { md: 0 },
        overflowX: 'hidden',
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: 'none' }, color: '#2F7A52', ml: 1, p: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <TextField
        type="search"
        size="small"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#2F7A52' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 'calc(100vw - 56px)', md: '500px' }, // Adjusted for icon and padding
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#2F7A52',
            },
            '&:hover fieldset': {
              borderColor: '#1B5E20',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1B5E20',
            },
            padding: '0 8px',
            marginLeft:{md:'20px'}          },
          mb: 1,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default Header;