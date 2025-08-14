import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const AddTax = () => {
  // Hook from react-router-dom to handle navigation
  const navigate = useNavigate();

  // State to manage the form inputs
  const [taxName, setTaxName] = useState('');
  const [taxRate, setTaxRate] = useState('');

  // Function to handle form submission
  const handleSave = () => {
    // Here you would implement the logic to save the tax data.
    // This could involve an API call to a backend.
    console.log("Saving Tax:", { taxName, taxRate });
    // After saving, you could navigate back or show a success message.
    // For now, let's just navigate back.
    navigate('/admin/configsetting/taxsettings');
  };

  return (
    // Main container with the requested background color
    <Box p={2} sx={{ backgroundColor: '#F5FAF6', minHeight: '100vh' }}>
      {/* Header section with back button and title */}
      <Box display="flex" alignItems="center" gap={1}>
        <ArrowBackIcon 
          onClick={() => navigate('/admin/configsetting/taxsettings')} 
          sx={{ cursor: 'pointer', color: '#2F7A52', fontSize: '20px' }}
        />
        <Typography color="#2F7A52" variant="h6" component="h1">Add Tax</Typography>
      </Box>
      
      {/* Form section for adding tax details */}
      <Box 
        maxWidth="800px" 
        display="flex" 
        flexDirection="column" 
        gap={3} 
        mt={2}
        p={2}
      >
        {/* Tax Name input field */}
        <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={2} alignItems={{ md: 'center', xs: 'flex-start' }}>
          <Typography 
            sx={{ 
              width: { md: '100px', xs: '100%' },
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
            }}
          >
            Tax Name
          </Typography>
          <TextField 
            // Removed size="small" to achieve the desired height
            sx={{ 
              width: { md: '379px', xs: '100%' }, 
              height: '54px',
              // Custom styling for the TextField border and border-radius
              '& .MuiOutlinedInput-root': {
                height: '100%',
                borderRadius: '10px',
                '& fieldset': {
                  borderColor: '#2F7A52',
                },
                '&:hover fieldset': {
                  borderColor: '#2F7A52',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2F7A52',
                },
              }
            }}
            placeholder="Service Tax"
            value={taxName}
            onChange={(e) => setTaxName(e.target.value)}
          />
        </Box>
        
        {/* Tax Rate input field */}
        <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={2} alignItems={{ md: 'center', xs: 'flex-start' }}>
          <Typography 
            sx={{ 
              width: { md: '100px', xs: '100%' },
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
            }}
          >
            Tax Rate
          </Typography>
          <TextField 
            // Removed size="small" to achieve the desired height
            type="number"
            sx={{ 
              width: { md: '379px', xs: '100%' }, 
              height: '54px',
              // Custom styling for the TextField border and border-radius
              '& .MuiOutlinedInput-root': {
                height: '100%',
                borderRadius: '10px',
                '& fieldset': {
                  borderColor: '#2F7A52',
                },
                '&:hover fieldset': {
                  borderColor: '#2F7A52',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2F7A52',
                },
              },
              // CSS to hide the scroll buttons for number input fields
              '& input[type=number]': {
                '-moz-appearance': 'textfield',
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
              '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              }
            }}
            placeholder="5%"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </Box>
        
        {/* Save button */}
        <Box display="flex" justifyContent="flex-start" sx={{ ml: 45, mr: { md: 33, xs: 0 } }}>
          <Button 
            variant="contained" 
            onClick={handleSave} 
            sx={{ 
              width: '123px',
              height: '50px',
              borderRadius: '8px',
              padding: '11px 16px',
              backgroundColor: '#2F7A52', 
              '&:hover': { 
                backgroundColor: '#2A6A4A' 
              } 
            }}
          >
            Save
          </Button>
        </Box>
      </Box> 
    </Box>
  );
};

export default AddTax;