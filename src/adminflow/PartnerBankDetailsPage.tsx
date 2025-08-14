import React, { useState } from 'react';
import {
    Paper, Typography, Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Button, Menu, MenuItem, Pagination
} from "@mui/material";
import { styled } from '@mui/material/styles';
import DownloadIcon from "../assets/downloadicon.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

const PartnerBankDetailsPage: React.FC = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Updated with specific alignment properties for header and content
    const partnerbankheadings = [
        { id: 1, heading: 'Restaurant Name', headerAlign: 'left', contentAlign: 'left' },
        { id: 2, heading: 'Partner Name', headerAlign: 'left', contentAlign: 'left' },
        { id: 3, heading: 'Account Holder Name', headerAlign: 'left', contentAlign: 'left' },
        { id: 4, heading: 'Bank Name', headerAlign: 'center', contentAlign: 'center' },
        { id: 5, heading: 'Account Number', headerAlign: 'center', contentAlign: 'center' },
        { id: 6, heading: 'Date', headerAlign: 'center', contentAlign: 'center' },
        { id: 7, heading: 'Action', headerAlign: 'center', contentAlign: 'left' }
    ];

    // Hardcoded data for demonstration
    const partnerbankdetails: PartnerBankDetails[] = [
        { id: 1, restaurantname: 'The Urban Pantry', partnername: 'James', accountholdername: 'James Smith', bankname: 'Common Wealth', accountnumber: '****4508', date: 'May 6, 2025' },
        { id: 2, restaurantname: 'Fog Harbor Fish House', partnername: 'Sarah Williom', accountholdername: 'Sarah Williams', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 3, restaurantname: 'Marufuku Ramen', partnername: 'Aditya', accountholdername: 'Aditya Johnson', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 4, restaurantname: 'Brenda\'s French Soul Food', partnername: 'Linda', accountholdername: 'Linda Nelson', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 5, restaurantname: 'Gary Danko', partnername: 'Lisa', accountholdername: 'Lisa Kim', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 6, restaurantname: 'San Tung', partnername: 'Tony', accountholdername: 'Tony Williams', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 7, restaurantname: 'Tony\'s Pizza Napoletana', partnername: 'Nihal', accountholdername: 'Nihal', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
        { id: 8, restaurantname: 'San Tung', partnername: 'George', accountholdername: 'George Williams', bankname: 'ANZ', accountnumber: '014 3615', date: 'May 4, 2025' },
    ];

    return (
        <Box sx={{ p: 3, backgroundColor: '#F5FAF6', minHeight: '100vh' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box display="flex" alignItems="center">
                    <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', mr: 1, color: '#2F7A52' }} />
                    <Typography 
                        variant="h6" 
                        fontWeight="bold" 
                        color="#2F7A52"
                        sx={{ textDecoration: 'underline' }} // Added underline here
                    >
                        Partner Bank Details
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <ExportButton
                        variant="contained"
                        onClick={handleClick}
                        // Moved the icon to the right side
                        endIcon={<img src={DownloadIcon} alt="Download" style={{ width: 16, height: 16 }} />}
                    >
                        Export
                    </ExportButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Week</MenuItem>
                        <MenuItem onClick={handleClose}>Month</MenuItem>
                        <MenuItem onClick={handleClose}>Year</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Paper sx={{ padding: "10px", border: "1px solid green", borderRadius: '8px' }}>
                <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ background: "#F1F4F9" }}>
                                {partnerbankheadings.map((partnerheading) => (
                                    <TableCell
                                        key={partnerheading.id}
                                        align={partnerheading.headerAlign as 'left' | 'center' | 'right'}
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
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Restaurant Name')?.contentAlign as 'left' | 'center' | 'right'} sx={{ color: '#2F7A52' }}>
                                        <Typography
                                            component="a"
                                            href="#"
                                            onClick={() => navigate(`/restaurant-details/${partnerdetails.id}`)}
                                            sx={{ color: '#2F7A52', textDecoration: 'underline', cursor: 'pointer' }}
                                        >
                                            {partnerdetails.restaurantname}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Partner Name')?.contentAlign as 'left' | 'center' | 'right'}>{partnerdetails.partnername}</TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Account Holder Name')?.contentAlign as 'left' | 'center' | 'right'}>{partnerdetails.accountholdername}</TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Bank Name')?.contentAlign as 'left' | 'center' | 'right'}>{partnerdetails.bankname}</TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Account Number')?.contentAlign as 'left' | 'center' | 'right'} sx={{ color: '#2F7A52' }}>{partnerdetails.accountnumber}</TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Date')?.contentAlign as 'left' | 'center' | 'right'}>{partnerdetails.date}</TableCell>
                                    <TableCell align={partnerbankheadings.find(h => h.heading === 'Action')?.contentAlign as 'left' | 'center' | 'right'}>
                                        <Button
                                            startIcon={<img src={EyeIcon} alt="View" style={{ width: 16, height: 12 }} />}
                                            sx={{ color: '#060606ff', textTransform: 'none' }}
                                            onClick={() => { }}
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box display="flex" justifyContent="center" mt={3}>
                    <Pagination count={8} color="primary" />
                </Box>
            </Paper>
        </Box>
    );
};

export default PartnerBankDetailsPage;