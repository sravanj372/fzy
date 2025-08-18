import React, { useState } from 'react';
import { Typography, OutlinedInput, InputAdornment, Button, Grid, FormControl, FormHelperText } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import calendar from "../assets/uil_calender.png";
import dayjs from 'dayjs';

const Addcoupon = () => {
  const navigate = useNavigate();
  const [validTill, setValidTill] = useState(null);

  const [inputValues, setInputValues] = useState({
    couponCode: "",
    discountPercentage: "",
    discountDescription: "",
    eligibility: ""
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({
    couponCode: '',
    discountPercentage: '',
    discountDescription: '',
    validTill: '',
    eligibility: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    // Dynamic validation
    validateField(name, value);
  };

  const handleDateChange = (date) => {
    setValidTill(date);
    if (!date || date.isBefore(dayjs(), 'day')) {
      setErrors(prevErrors => ({ ...prevErrors, validTill: 'Date must be today or in the future.' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, validTill: '' }));
    }
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'couponCode':
        if (value.trim().length < 5) {
          errorMessage = 'Coupon code must be at least 5 characters.';
        }
        break;
      case 'discountPercentage':
        const percentage = parseFloat(value);
        if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
          errorMessage = 'Percentage must be between 1 and 100.';
        }
        break;
      case 'discountDescription':
        if (value.trim().length < 10) {
          errorMessage = 'Description must be at least 10 characters.';
        }
        break;
      case 'eligibility':
        if (value.trim() === '') {
          errorMessage = 'Eligibility cannot be empty.';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSave = () => {
    // Perform a final validation check before saving
    const isCouponCodeValid = inputValues.couponCode.trim().length >= 5;
    const isDiscountPercentageValid = !isNaN(parseFloat(inputValues.discountPercentage)) && parseFloat(inputValues.discountPercentage) > 0 && parseFloat(inputValues.discountPercentage) <= 100;
    const isDiscountDescriptionValid = inputValues.discountDescription.trim().length >= 10;
    const isEligibilityValid = inputValues.eligibility.trim() !== '';
    const isDateValid = validTill && validTill.isValid() && !validTill.isBefore(dayjs(), 'day');

    if (isCouponCodeValid && isDiscountPercentageValid && isDiscountDescriptionValid && isEligibilityValid && isDateValid) {
      // If no errors, proceed with saving the data
      console.log("Saving Coupon:", { ...inputValues, validTill: validTill.format('YYYY-MM-DD') });
      // navigate('/admin/configsetting/partner-commission'); // Assuming a redirect to a similar page
    } else {
      console.log("Form has validation errors.");
      // Manually set errors for the final check if they were missed
      setErrors({
        couponCode: isCouponCodeValid ? '' : 'Coupon code must be at least 5 characters.',
        discountPercentage: isDiscountPercentageValid ? '' : 'Percentage must be between 1 and 100.',
        discountDescription: isDiscountDescriptionValid ? '' : 'Description must be at least 10 characters.',
        eligibility: isEligibilityValid ? '' : 'Eligibility cannot be empty.',
        validTill: isDateValid ? '' : 'Date must be today or in the future.'
      });
    }
  };

  const isSaveButtonDisabled = 
    !inputValues.couponCode.trim() ||
    !inputValues.discountPercentage.trim() ||
    !inputValues.discountDescription.trim() ||
    !inputValues.eligibility.trim() ||
    !validTill ||
    !!errors.couponCode ||
    !!errors.discountPercentage ||
    !!errors.discountDescription ||
    !!errors.eligibility ||
    !!errors.validTill;

  const labels = [
    { name: "Coupon Code", key: "couponCode" },
    { name: "Discount Percentage", key: "discountPercentage" },
    { name: "Discount Description", key: "discountDescription" },
    { name: "Valid Till", key: "validTill" },
    { name: "Eligibility", key: "eligibility" }
  ];

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: '#F7FBF7',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'left',
      }}
    >
      <Box sx={{ maxWidth: '700px', width: '100%' }}>
        {/* Header */}
        <Box display="flex" alignItems="center" mb={4}>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: 'pointer', color: '#2F7A52', mr: 1 }}
          />
          <Typography
            color="#2F7A52"
            sx={{
              fontFamily: 'Nunito Sans',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '175%',
            }}
          >
            Add Coupon
          </Typography>
        </Box>

        {/* Two-column form using Grid */}
        <Grid container spacing={2} rowSpacing={3}>
          {/* Labels column */}
          <Grid item xs={4}>
            {labels.map((label, index) => (
              <Box
                key={index}
                height="74px" // Adjusted height to match input + helper text
                display="flex"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '100%',
                    color: '#000000'
                  }}
                >
                  {label.name}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Inputs column */}
          <Grid item xs={8}>
            <Box>
              <FormControl fullWidth error={!!errors.couponCode}>
                <OutlinedInput
                  name="couponCode"
                  value={inputValues.couponCode}
                  onChange={handleChange}
                  placeholder="Christmas sale - Save 10"
                  sx={{
                    width: 379,
                    height: 54,
                    borderRadius: '10px',
                    backgroundColor: '#F5FAF6',
                    border: '1px solid #2F7A52',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '& input::placeholder': {
                      fontFamily: 'Yu Gothic UI',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#000000',
                    }
                  }}
                />
                <FormHelperText sx={{ minHeight: '1.25em' }}>{errors.couponCode || ' '}</FormHelperText>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth error={!!errors.discountPercentage}>
                <OutlinedInput
                  name="discountPercentage"
                  type="number"
                  value={inputValues.discountPercentage}
                  onChange={handleChange}
                  placeholder="10%"
                  sx={{
                    width: 379,
                    height: 54,
                    borderRadius: '10px',
                    backgroundColor: '#F5FAF6',
                    border: '1px solid #2F7A52',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '& input::placeholder': {
                      fontFamily: 'Yu Gothic UI',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#000000',
                    }
                  }}
                />
                <FormHelperText sx={{ minHeight: '1.25em' }}>{errors.discountPercentage || ' '}</FormHelperText>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth error={!!errors.discountDescription}>
                <OutlinedInput
                  name="discountDescription"
                  value={inputValues.discountDescription}
                  onChange={handleChange}
                  placeholder="10% discount on all orders"
                  sx={{
                    width: 379,
                    height: 54,
                    borderRadius: '10px',
                    backgroundColor: '#F5FAF6',
                    border: '1px solid #2F7A52',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '& input::placeholder': {
                      fontFamily: 'Yu Gothic UI',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#000000',
                    }
                  }}
                />
                <FormHelperText sx={{ minHeight: '1.25em' }}>{errors.discountDescription || ' '}</FormHelperText>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth error={!!errors.validTill}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={validTill}
                    onChange={handleDateChange}
                    slots={{
                      openPickerIcon: () => (
                        <img src={calendar} alt="calendar icon" style={{ width: '24px', height: '24px' }} />
                      ),
                    }}
                    slotProps={{
                      textField: {
                        size: "small",
                        sx: {
                          width: 379,
                          height: 54,
                          borderRadius: '10px',
                          border: '1px solid #2F7A52',
                          backgroundColor: '#F5FAF6',
                          '& .MuiOutlinedInput-root': {
                            height: '100%',
                            '& fieldset': { borderColor: 'transparent' },
                          },
                          '& .MuiInputBase-input::placeholder': {
                            fontFamily: 'Yu Gothic UI',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#000000',
                          },
                        }
                      }
                    }}
                  />
                </LocalizationProvider>
                <FormHelperText sx={{ minHeight: '1.25em' }}>{errors.validTill || ' '}</FormHelperText>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth error={!!errors.eligibility}>
                <OutlinedInput
                  name="eligibility"
                  value={inputValues.eligibility}
                  onChange={handleChange}
                  placeholder="Orders above $30"
                  startAdornment={
                    <InputAdornment position="start" sx={{ color: '#2F7A52' }}>
                      $
                    </InputAdornment>
                  }
                  sx={{
                    width: 379,
                    height: 54,
                    borderRadius: '10px',
                    backgroundColor: '#F5FAF6',
                    border: '1px solid #2F7A52',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '& input::placeholder': {
                      fontFamily: 'Yu Gothic UI',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#000000',
                    }
                  }}
                />
                <FormHelperText sx={{ minHeight: '1.25em' }}>{errors.eligibility || ' '}</FormHelperText>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, ml: { md: 24, xs: 0 } }}>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={isSaveButtonDisabled}
            sx={{
              width: 150,
              height: 44,
              borderRadius: '10px',
              border: '1px solid #2F7A52',
              backgroundColor: '#2F7A52',
              color: '#FFFFFF',
              padding: '14px 9px',
              gap: '15px',
              fontSize: '14px',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#256340' },
              boxShadow: 'none'
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Addcoupon;
