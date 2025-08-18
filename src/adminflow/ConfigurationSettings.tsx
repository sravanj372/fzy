import React, { useState } from 'react';
import {
  Paper, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Radio, RadioGroup, FormControlLabel,
  FormControl
} from "@mui/material";
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EyeIcon from '../assets/eye.png';
import { useNavigate } from 'react-router-dom';

// Custom styled button for the Export button
const ExportButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: '#2F7A52',
  '&:hover': {
    backgroundColor: '#1e5a3c',
  },
  borderRadius: '8px',
  textTransform: 'none',
  padding: '6px 12px',
}));

interface PartnerBankDetails {
  id: number;
  restaurantname: string;
  partnername: string;
  accountholdername: string;
  bankname: string;
  accountnumber: string;
  date: string;
}

const ConfigurationSettings: React.FC = () => {
  const navigate = useNavigate();

  const partnerbankheadings = [
    { id: 1, heading: 'Restaurant Name' },
    { id: 2, heading: 'Partner Name' },
    { id: 3, heading: 'Account Holder Name' },
    { id: 4, heading: 'Bank Name' },
    { id: 5, heading: 'Account Number' },
    { id: 6, heading: 'Date' },
    { id: 7, heading: 'Action' }
  ];

  const partnerbankdetails: PartnerBankDetails[] = [
    { id: 1, restaurantname: 'The Urban Pantry', partnername: 'James', accountholdername: 'James Smith', bankname: 'Common Wealth', accountnumber: '****545', date: 'May 6, 2025' },
    { id: 2, restaurantname: 'Food Harbour Fish House', partnername: 'Sarah Williom', accountholdername: 'Sarah Willioms', bankname: 'Common Wealth', accountnumber: '****545', date: 'May 6, 2025' },
    { id: 3, restaurantname: 'Marufuku Raman', partnername: 'Aditya', accountholdername: 'James Smith', bankname: 'Common Wealth', accountnumber: '****545', date: 'May 6, 2025' },
    { id: 4, restaurantname: 'Brenda French', partnername: 'Linda', accountholdername: 'Linda Nilson', bankname: 'Common Wealth', accountnumber: '****545', date: 'May 6, 2025' },
  ];

  const [selectedPaymentCycle, setSelectedPaymentCycle] = useState<string>('monthly');
  const handlePaymentCycleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentCycle(event.target.value);
  };

  // Reusable radio styles with small ring effect
  const radioStyles = {
    '&:hover': { backgroundColor: 'transparent' },
    '&.Mui-checked': {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '13px', // ring size
        height: '13px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.6)', // subtle green glow
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      {/* Payment Settings Section */}
      <Paper sx={{ padding: "10px", border: "1px solid green", borderRadius: '8px' }}>
        <Typography mb={2} color="#2F7A52" fontWeight="bold">Payment Settings</Typography>
        <Box>
          <Typography mb={2} sx={{ textDecoration: 'underline', color: '#2F7A52' }}>Commission Settings</Typography>
          <Checkbox defaultChecked size="small" />
          <Typography component="span">Use Global Comission</Typography>
          <Box display="flex" gap={2} alignItems="center" mt={1}>
            <Typography ml={5}>Global Comission Percentage</Typography>
            <TextField value="10%" size="small" sx={{ width: '100px' }} />
          </Box>
        </Box>
        <Box mt={2}>
          <Typography
            sx={{ textDecoration: 'underline', color: '#2F7A52', cursor: 'pointer' }}
            onClick={() => navigate('/admin/configsetting/paymentsettings/partner-commission')}
          >
            View Partner Commission Rule
          </Typography>
        </Box>
      </Paper>

      {/* Payment Cycle Section */}
      <Paper sx={{ padding: "10px", border: "1px solid green", borderRadius: '8px' }}>
        <Typography mb={2} color="#2F7A52" fontWeight="bold">Payment Cycle</Typography>
        <FormControl>
          <RadioGroup row value={selectedPaymentCycle} onChange={handlePaymentCycleChange}>
            <FormControlLabel
              value="weekly"
              control={
                <Radio
                  size="small"
                  icon={<RadioButtonUncheckedIcon sx={{ color: '#2F7A52' }} />}
                  checkedIcon={<FiberManualRecordIcon sx={{ color: '#2F7A52' }} />}
                  sx={radioStyles}
                />
              }
              label="Weekly"
            />
            <FormControlLabel
              value="bi-weekly"
              control={
                <Radio
                  size="small"
                  icon={<RadioButtonUncheckedIcon sx={{ color: '#2F7A52' }} />}
                  checkedIcon={<FiberManualRecordIcon sx={{ color: '#2F7A52' }} />}
                  sx={radioStyles}
                />
              }
              label="Bi-Weekly"
            />
            <FormControlLabel
              value="monthly"
              control={
                <Radio
                  size="small"
                  icon={<RadioButtonUncheckedIcon sx={{ color: '#2F7A52' }} />}
                  checkedIcon={<FiberManualRecordIcon sx={{ color: '#2F7A52' }} />}
                  sx={radioStyles}
                />
              }
              label="Monthly"
            />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Partner Bank Details Section */}
      <Paper sx={{ padding: "10px", border: "1px solid green", borderRadius: '8px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography mb={2} color="#2F7A52" sx={{ textDecoration: 'underline' }}>Partner Bank Details</Typography>
        </Box>

        <Box mt={2}>
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {partnerbankheadings.map((partnerheading) => (
                    <TableCell
                      key={partnerheading.id}
                      sx={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#2F7A52',
                        backgroundColor: '#F1F4F9'
                      }}
                    >
                      {partnerheading.heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {partnerbankdetails.map((partnerdetails) => (
                  <TableRow key={partnerdetails.id}>
                    <TableCell sx={{ color: '#2F7A52' }}>
                      <Typography
                        component="a"
                        href="#"
                        onClick={() => navigate(`/restaurant-info/${partnerdetails.id}`)}
                        sx={{ color: '#2F7A52', textDecoration: 'underline', cursor: 'pointer' }}
                      >
                        {partnerdetails.restaurantname}
                      </Typography>
                    </TableCell>
                    <TableCell>{partnerdetails.partnername}</TableCell>
                    <TableCell>{partnerdetails.accountholdername}</TableCell>
                    <TableCell>{partnerdetails.bankname}</TableCell>
                    <TableCell sx={{ color: '#2F7A52', textAlign: 'center' }}>{partnerdetails.accountnumber}</TableCell>
                    <TableCell>{partnerdetails.date}</TableCell>
                    <TableCell>
                      <Button
                        startIcon={
                          <img src={EyeIcon} alt="View" style={{ width: 16, height: 12 }} />
                        }
                        sx={{ color: "black", textTransform: 'none' }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="outlined"
              onClick={() => navigate('/admin/ConfigurationSettings/paymentsettings/partner-bank-details')}
              sx={{
                color: '#060606ff',
                borderColor: '#666b68ff',
                '&:hover': {
                  borderColor: '#1e5a3c',
                  color: '#1e5a3c'
                }
              }}
            >
              View All Bank Details
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ConfigurationSettings;
