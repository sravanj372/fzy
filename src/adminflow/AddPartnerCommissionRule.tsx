import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const AddPartnerCommissionRule: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [commission, setCommission] = useState<string>('');
  const navigate = useNavigate();

  const handleAdd = () => {
    // Logic to handle adding the new rule (e.g., API call, state update)
    console.log('Adding new rule:', { restaurantName, commission });
    // After adding, navigate back to the list of rules
    navigate('/admin/configsetting/partner-commission');
  };

  return (
    // Main container with the requested background color
    <Box p={2} sx={{ backgroundColor: '#F5FAF6', minHeight: '100vh' }}>
      {/* Header section with back button and title */}
      <Box display="flex" alignItems="center" gap={1}>
        <ArrowBackIcon
          onClick={() => navigate('/admin/configsetting/paymentsettings/partner-commission')}
          sx={{ cursor: 'pointer', color: '#2F7A52', fontSize: '20px' }}
        />
        <Typography color="#2F7A52" variant="h6" component="h1">Add Partner Commission Rule</Typography>
      </Box>
      
      {/* Form section for adding commission details */}
      <Box
        maxWidth="800px"
        display="flex"
        flexDirection="column"
        gap={3}
        mt={2}
        p={2}
      >
        {/* Restaurant Name input field */}
        <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={4} alignItems={{ md: 'center', xs: 'flex-start' }}>
          <Typography
            sx={{
              width: { md: '200px', xs: '100%' }, // Increased width to prevent wrapping
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '100%',
            }}
          >
            Restaurant Name
          </Typography>
          <TextField
            sx={{
              width: { md: '379px', xs: '100%' },
              height: '54px',
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
            
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
        </Box>
        
        {/* Commission Rate input field */}
        <Box display="flex" flexDirection={{ md: 'row', xs: 'column' }} gap={4} alignItems={{ md: 'center', xs: 'flex-start' }}>
          <Typography
            sx={{
              width: { md: '200px', xs: '100%' }, // Increased width to prevent wrapping
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '100%',
            }}
          >
            Commission %
          </Typography>
          <TextField
            type="number"
            sx={{
              width: { md: '379px', xs: '100%' },
              height: '54px',
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
            
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
          />
        </Box>
        
        {/* Add button */}
        <Box display="flex" justifyContent="flex-start" sx={{ mt:5,ml: 45, mr: { md: 33, xs: 0 } }}>
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              width: '123px',
              height: '40px',
              borderRadius: '8px',
              padding: '11px 16px',
              backgroundColor: '#2F7A52',
              '&:hover': {
                backgroundColor: '#2A6A4A'
              }
            }}
          >
            ADD
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPartnerCommissionRule;