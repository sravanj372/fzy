import React, { useState, ChangeEvent } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const AddPartnerCommissionRule = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [commission, setCommission] = useState('');
  // State to manage validation errors
  const [restaurantNameError, setRestaurantNameError] = useState('');
  const [commissionError, setCommissionError] = useState('');
  const navigate = useNavigate();

  // Handler for Restaurant Name changes with dynamic validation
  const handleRestaurantNameChange = (e) => {
    const value = e.target.value;
    setRestaurantName(value);

    // Dynamic validation for Restaurant Name
    if (value.trim().length < 3) {
      setRestaurantNameError('Restaurant name must be at least 3 characters.');
    } else {
      setRestaurantNameError('');
    }
  };

  // Handler for Commission changes with dynamic validation
  const handleCommissionChange = (e) => {
    const value = e.target.value;
    setCommission(value);

    // Dynamic validation for Commission Rate
    const rate = parseFloat(value);
    if (isNaN(rate) || rate <= 0 || rate > 100) {
      setCommissionError('Commission rate must be a number between 0 and 100.');
    } else {
      setCommissionError('');
    }
  };

  const handleAdd = () => {
    // Perform a final check before saving
    const rate = parseFloat(commission);
    const isRestaurantNameValid = restaurantName.trim().length >= 3;
    const isCommissionValid = !isNaN(rate) && rate > 0 && rate <= 100;

    // Set errors for a final validation check
    if (!isRestaurantNameValid) {
      setRestaurantNameError('Restaurant name must be at least 3 characters.');
    }
    if (!isCommissionValid) {
      setCommissionError('Commission rate must be a number between 0 and 100.');
    }

    if (isRestaurantNameValid && isCommissionValid) {
      // If no errors, proceed with adding the rule
      console.log('Adding new rule:', { restaurantName, commission });
      navigate('/admin/configsetting/partner-commission');
    } else {
      console.log('Form has validation errors.');
    }
  };

  // Disable the Add button if there are any validation errors or empty fields
  const isAddButtonDisabled = restaurantName.trim() === '' || commission.trim() === '' || !!restaurantNameError || !!commissionError;


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
        {/* Using Stack for better vertical alignment and layout control */}
        <Stack
          direction={{ md: 'row', xs: 'column' }} 
          gap={4} 
          alignItems="center"
        >
          <Typography
            sx={{
              width: { md: '200px', xs: '100%' }, 
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
              '& .MuiOutlinedInput-root': {
                height: '54px',
                borderRadius: '10px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
                },
              },
              // This is crucial to prevent layout shifts when the helper text appears
              '& .MuiFormHelperText-root': {
                minHeight: '1.25em', 
              },
            }}
            value={restaurantName}
            onChange={handleRestaurantNameChange}
            error={!!restaurantNameError}
            helperText={restaurantNameError || ' '}
          />
        </Stack>
        
        {/* Commission Rate input field */}
        <Stack
          direction={{ md: 'row', xs: 'column' }} 
          gap={4} 
          alignItems="center"
        >
          <Typography
            sx={{
              width: { md: '200px', xs: '100%' }, 
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
              '& .MuiOutlinedInput-root': {
                height: '54px',
                borderRadius: '10px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
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
              },
              // This is crucial to prevent layout shifts when the helper text appears
              '& .MuiFormHelperText-root': {
                minHeight: '1.25em', 
              },
            }}
            value={commission}
            onChange={handleCommissionChange}
            error={!!commissionError}
            helperText={commissionError || ' '}
          />
        </Stack>
        
        {/* Add button */}
        <Box display="flex" justifyContent="flex-start" sx={{ ml: { md: '216px', xs: '0' }}}>
          <Button
            variant="contained"
            onClick={handleAdd}
            disabled={isAddButtonDisabled}
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
