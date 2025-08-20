import React, { useState } from 'react';
import {
  Paper, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl
} from "@mui/material";
import EyeIcon from '../assets/eye.png';
import { useNavigate } from 'react-router-dom';
import {
  ExportButton,
  UncheckedRadioIconWithShadow,
  CheckedRadioIconSolidGreen,
  StyledTableContainer,
  StyledTableHeadRow,
  StyledTableCell,
  StyledTypographyLink,
  StyledPaper,
  StyledTypographyLinkHeader,
  StyledTypographyBold,
  StyledViewAllButton
} from '../adminstyles/ConfigurationSettings.styles';

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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      {/* Payment Settings Section */}
      <StyledPaper>
        <StyledTypographyBold variant="h6">Payment Settings</StyledTypographyBold>
        <Box>
          <StyledTypographyLinkHeader>Commission Settings</StyledTypographyLinkHeader>
          <Checkbox defaultChecked size="small" />
          <Typography component="span">Use Global Comission</Typography>
          <Box display="flex" gap={2} alignItems="center" mt={1}>
            <Typography ml={5}>Global Comission Percentage</Typography>
            <TextField value="10%" size="small" sx={{ width: '100px' }} />
          </Box>
        </Box>
        <Box mt={2}>
          <StyledTypographyLink
            onClick={() => navigate('/admin/configsetting/paymentsettings/partner-commission')}
          >
            View Partner Commission Rule
          </StyledTypographyLink>
        </Box>
      </StyledPaper>

      {/* Payment Cycle Section */}
      <StyledPaper>
        <StyledTypographyBold variant="h6">Payment Cycle</StyledTypographyBold>
        <FormControl>
          <RadioGroup row value={selectedPaymentCycle} onChange={handlePaymentCycleChange}>
            <FormControlLabel
              value="weekly"
              control={<Radio size="small" icon={<UncheckedRadioIconWithShadow />} checkedIcon={<CheckedRadioIconSolidGreen />} />}
              label="Weekly"
            />
            <FormControlLabel
              value="bi-weekly"
              control={<Radio size="small" icon={<UncheckedRadioIconWithShadow />} checkedIcon={<CheckedRadioIconSolidGreen />} />}
              label="Bi-Weekly"
            />
            <FormControlLabel
              value="monthly"
              control={<Radio size="small" icon={<UncheckedRadioIconWithShadow />} checkedIcon={<CheckedRadioIconSolidGreen />} />}
              label="Monthly"
            />
          </RadioGroup>
        </FormControl>
      </StyledPaper>

      {/* Partner Bank Details Section */}
      <StyledPaper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <StyledTypographyLinkHeader>Partner Bank Details</StyledTypographyLinkHeader>
        </Box>

        <Box mt={2}>
          <StyledTableContainer component={Paper}>
            <Table>
              <TableHead>
                <StyledTableHeadRow>
                  {partnerbankheadings.map((partnerheading) => (
                    <StyledTableCell key={partnerheading.id}>
                      {partnerheading.heading}
                    </StyledTableCell>
                  ))}
                </StyledTableHeadRow>
              </TableHead>
              <TableBody>
                {partnerbankdetails.map((partnerdetails) => (
                  <TableRow key={partnerdetails.id}>
                    <TableCell>
                      <StyledTypographyLink
                        component="a"
                        href="#"
                        onClick={() => navigate(`/restaurant-info/${partnerdetails.id}`)}
                      >
                        {partnerdetails.restaurantname}
                      </StyledTypographyLink>
                    </TableCell>
                    <TableCell>{partnerdetails.partnername}</TableCell>
                    <TableCell>{partnerdetails.accountholdername}</TableCell>
                    <TableCell>{partnerdetails.bankname}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{partnerdetails.accountnumber}</TableCell>
                    <TableCell>{partnerdetails.date}</TableCell>
                    <TableCell>
                      <Button
                        startIcon={<img src={EyeIcon} alt="View" style={{ width: 16, height: 12 }} />}
                        sx={{ color: "black", textTransform: 'none' }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <StyledViewAllButton
              variant="outlined"
              onClick={() => navigate('/admin/ConfigurationSettings/paymentsettings/partner-bank-details')}
            >
              View All Bank Details
            </StyledViewAllButton>
          </Box>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default ConfigurationSettings;