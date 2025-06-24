import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
   <Box>
    <TextField 
    type="search"
    size="small"
    placeholder="Search"
    
    InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#2F7A52' }}/>
          </InputAdornment>
        )
      }}
     sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#2F7A52', // Default border: green
                },
                '&:hover fieldset': {
                  borderColor: '#1B5E20', // Hover: darker green
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1B5E20', // Focused: darker green
                },
              },
              width:{md:'500px',xs:'100%'}
            }}         
            
      />
    
   </Box>
  )
}

export default Header
