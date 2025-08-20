import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { 
  PageContainer, 
  FormContainer, 
  InputStack, 
  InputLabel, 
  StyledTextField, 
  SaveButton 
} from '../adminstyles/AddTax.styles';

const AddTax = () => {
  const navigate = useNavigate();

  // State to manage the form inputs
  const [taxName, setTaxName] = useState('');
  const [taxRate, setTaxRate] = useState('');

  // State to manage validation errors
  const [taxNameError, setTaxNameError] = useState('');
  const [taxRateError, setTaxRateError] = useState('');

  // Handler for Tax Name changes with dynamic validation
  const handleTaxNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleTaxRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <PageContainer>
      <Box display="flex" alignItems="center" gap={1}>
        <ArrowBackIcon 
          onClick={() => navigate('/admin/configsetting/taxsettings')} 
          sx={{ cursor: 'pointer', color: '#2F7A52', fontSize: '20px' }}
        />
        <Typography color="#2F7A52" variant="h6" component="h1">Add Tax</Typography>
      </Box>
      
      <FormContainer>
        {/* Tax Name input field */}
        <InputStack>
          <InputLabel>Tax Name</InputLabel>
          <StyledTextField 
            placeholder="Service Tax"
            value={taxName}
            onChange={handleTaxNameChange}
            error={!!taxNameError}
            helperText={taxNameError || ' '}
          />
        </InputStack>
        
        {/* Tax Rate input field */}
        <InputStack>
          <InputLabel>Tax Rate</InputLabel>
          <StyledTextField 
            type="number"
            placeholder="5%"
            value={taxRate}
            onChange={handleTaxRateChange}
            error={!!taxRateError}
            helperText={taxRateError || ' '}
          />
        </InputStack>
        
        {/* Save button */}
        <Box display="flex" justifyContent="flex-start" sx={{ ml: { md: '210px', xs: '0' }}}>
          <SaveButton 
            variant="contained" 
            onClick={handleSave} 
            disabled={isSaveButtonDisabled}
          >
            Save
          </SaveButton>
        </Box>
      </FormContainer> 
    </PageContainer>
  );
};

export default AddTax;
