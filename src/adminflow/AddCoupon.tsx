import React, { useState } from 'react';
import { Typography, OutlinedInput, InputAdornment, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import calendar from "../assets/uil_calender.png";
import dayjs from 'dayjs';

const Addcoupon: React.FC = () => {
  const navigate = useNavigate();
  const [validTill, setValidTill] = useState<dayjs.Dayjs | null>(dayjs('2025-05-30'));

  const [inputValues, setInputValues] = useState({
    couponCode: "",
    discountPercentage: "",
    discountDescription: "",
    eligibility: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const labels = [
    "Coupon Code",
    "Discount Percentage",
    "Discount Description",
    "Valid Till",
    "Eligibility"
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

        {/* Two-column form */}
        <Grid container spacing={2}>
          {/* Labels column */}
          <Grid item xs={4}>
            {labels.map((label, index) => (
              <Box
                key={index}
                height="54px"
                display="flex"
                alignItems="center"
                mb={2}
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
                  {label}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Inputs column */}
          <Grid item xs={8}>
            <Box mb={2}>
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
            </Box>

            <Box mb={2}>
              <OutlinedInput
                name="discountPercentage"
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
            </Box>

            <Box mb={2}>
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
            </Box>

            <Box mb={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={validTill}
                  onChange={(newValue) => setValidTill(newValue)}
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
                        backgroundColor: '#F5FAF6',
                        border: '1px solid #2F7A52',
                        '& .MuiOutlinedInput-root': {
                            height: '100%',
                            '& fieldset': {
                                borderColor: 'transparent',
                            }
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
            </Box>

            <Box mb={2}>
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
            </Box>
          </Grid>
        </Grid>

        {/* Save Button */}
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 3, ml: 40 }}>
            <Button
              variant="contained"
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Addcoupon;