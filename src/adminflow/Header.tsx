import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from '../adminstyles/Sidebar.styles';

const Header = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <Box
      component={Paper}
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: { xs: 0.5, md: 0.5 }, // Reduced vertical padding
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
        sx={{
          display: { md: 'none' },
          color: '#2F7A52',
          ml: 1,
          p: 0.5, // Reduced padding for smaller height
        }}
      >
        <MenuIcon fontSize="small" />
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
          maxWidth: { xs: 'calc(100vw - 56px)', md: '500px' },
          '& .MuiOutlinedInput-root': {
            height: '30px', // Reduced height
            '& fieldset': {
              borderColor: '#ffffffff',
            },
            '&:hover fieldset': {
              borderColor: '#f8f8f8ff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffffff',
            },
            padding: '0 8px',
            marginLeft: { md: '20px' },
          },
          mb: 0.5,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default Header;
