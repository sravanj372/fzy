import React, { useState } from 'react';
import {
    Paper, Typography, Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Button, Menu, MenuItem, Pagination
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '../assets/downloadicon.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
    PageContainer,
    HeaderBox,
    TitleTypography,
    ExportButton,
    TablePaper,
    StyledTableHeadRow,
    StyledHeaderTableCell,
    StyledTableCell,
    ViewButton,
    PaginationBox
} from '../adminstyles/PartnerBankDetailsPage.styles';

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

    const partnerbankheadings = [
        { id: 1, heading: 'Restaurant Name', headerAlign: 'left', contentAlign: 'left', width: '20%' },
        { id: 2, heading: 'Partner Name', headerAlign: 'left', contentAlign: 'left', width: '15%' },
        { id: 3, heading: 'Account Holder Name', headerAlign: 'left', contentAlign: 'left', width: '15%' },
        { id: 4, heading: 'Bank Name', headerAlign: 'center', contentAlign: 'center', width: '10%' },
        { id: 5, heading: 'Account Number', headerAlign: 'center', contentAlign: 'center', width: '15%' },
        { id: 6, heading: 'Date', headerAlign: 'center', contentAlign: 'center', width: '15%' },
        { id: 7, heading: 'Action', headerAlign: 'center', contentAlign: 'center', width: '10%' }
    ];

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
        <PageContainer>
            <HeaderBox>
                <Box display="flex" alignItems="center">
                    <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', mr: 1, color: '#2F7A52' }} />
                    <TitleTypography>
                        Partner Bank Details
                    </TitleTypography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <ExportButton
                        variant="contained"
                        onClick={handleClick}
                        
                    >
                        Export
                        {<img src={DownloadIcon} alt="Download Icon" style={{ width: 20, height: 20, marginLeft: 9 }} />}
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
            </HeaderBox>
            <TablePaper>
                <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                    <Table sx={{ tableLayout: 'fixed' }}>
                        <TableHead>
                            <StyledTableHeadRow>
                                {partnerbankheadings.map((partnerheading) => (
                                    <StyledHeaderTableCell
                                        key={partnerheading.id}
                                        align={partnerheading.headerAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: partnerheading.width }}
                                    >
                                        {partnerheading.heading}
                                    </StyledHeaderTableCell>
                                ))}
                            </StyledTableHeadRow>
                        </TableHead>
                        <TableBody>
                            {partnerbankdetails.map((partnerdetails) => (
                                <TableRow key={partnerdetails.id}>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Restaurant Name')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '20%' }}
                                    >
                                        <Typography
                                            component="a"
                                            href="#"
                                            onClick={() => navigate(`/restaurant-details/${partnerdetails.id}`)}
                                            sx={{ color: '#2F7A52', textDecoration: 'underline', cursor: 'pointer' }}
                                        >
                                            {partnerdetails.restaurantname}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Partner Name')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '15%' }}
                                    >
                                        {partnerdetails.partnername}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Account Holder Name')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '15%' }}
                                    >
                                        {partnerdetails.accountholdername}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Bank Name')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '10%' }}
                                    >
                                        {partnerdetails.bankname}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Account Number')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ color: '#2F7A52', width: '15%' }}
                                    >
                                        {partnerdetails.accountnumber}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Date')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '15%' }}
                                    >
                                        {partnerdetails.date}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align={partnerbankheadings.find(h => h.heading === 'Action')?.contentAlign as 'left' | 'center' | 'right'}
                                        sx={{ width: '10%' }}
                                    >
                                        <ViewButton
                                            startIcon={<VisibilityOutlinedIcon />}
                                            onClick={() => { }}
                                        >
                                            View
                                        </ViewButton>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <PaginationBox>
                    <Pagination count={8} color="primary" />
                </PaginationBox>
            </TablePaper>
        </PageContainer>
    );
};

export default PartnerBankDetailsPage;