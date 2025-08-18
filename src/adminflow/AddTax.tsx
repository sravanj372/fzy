import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, ChangeEvent } from 'react';

const AddTax = () => {
  const navigate = useNavigate();

  // State to manage the form inputs
  const [taxName, setTaxName] = useState('');
  const [taxRate, setTaxRate] = useState('');

  // State to manage validation errors
  const [taxNameError, setTaxNameError] = useState('');
  const [taxRateError, setTaxRateError] = useState('');

  // Handler for Tax Name changes with dynamic validation
  const handleTaxNameChange = (e) => {
    const value = e.target.value;
    setTaxName(value);

    // Dynamic validation for Tax Name
    if (value.trim().length < 5) {
      setTaxNameError('Tax name must be at least 5 letters.');
    } else {
      setTaxNameError('');
    }
  };

  // Handler for Tax Rate changes with dynamic validation
  const handleTaxRateChange = (e) => {
    const value = e.target.value;
    setTaxRate(value);

    // Dynamic validation for Tax Rate
    const rate = parseFloat(value);
    if (isNaN(rate) || rate <= 0) {
      setTaxRateError('Tax rate must be a number greater than 0.');
    } else {
      setTaxRateError('');
    }
  };

  // The function to handle the Save action
  const handleSave = () => {
    // Perform a final check before saving
    const rate = parseFloat(taxRate);
    const isTaxNameValid = taxName.trim().length >= 5;
    const isTaxRateValid = !isNaN(rate) && rate > 0;

    // Set errors for a final validation check
    if (!isTaxNameValid) {
      setTaxNameError('Tax name must be at least 5 letters.');
    }
    if (!isTaxRateValid) {
      setTaxRateError('Tax rate must be a number greater than 0.');
    }

    if (isTaxNameValid && isTaxRateValid) {
      // If no errors, proceed with saving the data
      console.log("Saving Tax:", { taxName, taxRate });
      // This is where you would make an API call to your backend
      // navigate('/admin/configsetting/taxsettings');
    } else {
      console.log("Form has validation errors.");
    }
  };

  // Disable the save button if there are any validation errors or empty fields
  const isSaveButtonDisabled = taxName.trim() === '' || taxRate.trim() === '' || !!taxNameError || !!taxRateError;

  return (
    <Box p={2} sx={{ backgroundColor: '#F5FAF6', minHeight: '100vh' }}>
      <Box display="flex" alignItems="center" gap={1}>
        <ArrowBackIcon 
          onClick={() => navigate('/admin/configsetting/taxsettings')} 
          sx={{ cursor: 'pointer', color: '#2F7A52', fontSize: '20px' }}
        />
        <Typography color="#2F7A52" variant="h6" component="h1">Add Tax</Typography>
      </Box>
      
      <Box 
        maxWidth="800px" 
        display="flex" 
        flexDirection="column" 
        gap={3} 
        mt={2}
        p={2}
      >
        {/* Tax Name input field */}
        {/* The alignItems="center" on the Stack is what vertically centers the label and input. */}
        <Stack
          direction={{ md: 'row', xs: 'column' }} 
          gap={2} 
          alignItems="center"
        >
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
            sx={{ 
              width: { md: '379px', xs: '100%' }, 
              // Styling for the input box
              '& .MuiOutlinedInput-root': {
                height: '54px',
                borderRadius: '10px',
                // Set the default border color
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52',
                },
                // Set border color on hover to be the same
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important', // Use !important to override Material-UI's default hover styles
                },
                // Set border color when focused to be the same
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important', // Use !important to override Material-UI's default focused styles
                },
                // Set the input text color
                '& input': {
                  color: '#2F7A52',
                },
              },
              // This style is key to preventing the layout shift
              '& .MuiFormHelperText-root': {
                minHeight: '1.25em', 
              },
            }}
            placeholder="Service Tax"
            value={taxName}
            onChange={handleTaxNameChange}
            error={!!taxNameError}
            helperText={taxNameError || ' '}
          />
        </Stack>
        
        {/* Tax Rate input field */}
        {/* The alignItems="center" on the Stack is what vertically centers the label and input. */}
        <Stack
          direction={{ md: 'row', xs: 'column' }} 
          gap={2} 
          alignItems="center"
        >
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
            type="number"
            sx={{ 
              width: { md: '379px', xs: '100%' }, 
              // Styling for the input box
              '& .MuiOutlinedInput-root': {
                height: '54px',
                borderRadius: '10px',
                // Set the default border color
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52',
                },
                // Set border color on hover to be the same
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
                },
                // Set border color when focused to be the same
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2F7A52 !important',
                },
                // Set the input text color
                '& input': {
                  color: '#2F7A52',
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
              // This style is key to preventing the layout shift
              '& .MuiFormHelperText-root': {
                minHeight: '1.25em', 
              },
            }}
            placeholder="5%"
            value={taxRate}
            onChange={handleTaxRateChange}
            error={!!taxRateError}
            helperText={taxRateError || ' '}
          />
        </Stack>
        
        {/* Save button */}
        <Box display="flex" justifyContent="flex-start" sx={{ ml: { md: '210px', xs: '0' }}}>
          <Button 
            variant="contained" 
            onClick={handleSave} 
            disabled={isSaveButtonDisabled}
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