import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    IconButton,
    Pagination,
    Stack,
    CssBaseline,
    ThemeProvider,
    createTheme,
    TextField
} from '@mui/material';
import {
    FilterList,
} from '@mui/icons-material';
import FileDownload from '../assets/downloadicon.png'
import { styled } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2F7A52',
        },
        success: {
            main: '#4caf50',
            light: '#e8f5e9',
            dark: '#2e7d32',
        },
        warning: {
            main: '#ff9800',
            light: '#fff3e0',
            dark: '#ef6c00',
        },
        error: {
            main: '#f44336',
            light: '#ffebee',
            dark: '#d32f2f',
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    },
});

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e0e0e0',
    height: '100%',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: '16px',
    border: '1px solid #e0e0e0',
}));

const getStatusColor = (status, theme) => {
    switch (status) {
        case 'Paid':
            return theme.palette.success.main;
        case 'Pending':
            return theme.palette.warning.main;
        case 'Error':
            return theme.palette.error.main;
        default:
            return 'gray';
    }
};

const PaginationBox = ({ page, totalPages, onPageChange }) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2
    }}>
        <Pagination
            count={totalPages}
            page={page}
            onChange={onPageChange}
            color="primary"
        />
    </Box>
);

const ProfitLayout = () => {
    const summaryData = [
        { title: 'Total Revenue', value: '$40,000', unit: 'AUS', period: 'This Month', color: 'success.dark' },
        { title: 'Total Payouts', value: '$30,000', unit: 'AUS', period: 'This Month', color: 'success.dark' },
        { title: 'Admin Profit', value: '$10,000', unit: 'AUS', period: 'This Month', color: 'success.dark' },
        { title: 'Pending Transfers', value: '$1,000', unit: 'AUS', period: 'This Month', color: 'error.dark' },
    ];

    const restaurantData = [
        { name: 'The Urban Pantry', revenue: '$2,100', commission: '10%', profit: '$315', payout: '$1,785', cycleDate: 'Aug 5', status: 'Paid' },
        { name: 'Marufuku Ramen', revenue: '$3,100', commission: '15%', profit: '$415', payout: '$1,385', cycleDate: 'Aug 4', status: 'Paid' },
        { name: 'Gary Danko', revenue: '$2,600', commission: '5%', profit: '$115', payout: '$1,985', cycleDate: 'Aug 4', status: 'Pending' },
        { name: 'San Tung', revenue: '$2,590', commission: '10%', profit: '$815', payout: '$1,185', cycleDate: 'Aug 4', status: 'Paid' },
        { name: 'Hog Island Oyster', revenue: '$2,000', commission: '15%', profit: '$305', payout: '$1,585', cycleDate: 'Aug 3', status: 'Error' },
    ];

    const [page, setPage] = useState(1);
    const totalPages = 8;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const tableHeaders = [
        { label: 'Restaurant Name', align: 'left' },
        { label: 'Total Revenue', align: 'right' },
        { label: 'Commission %', align: 'right' },
        { label: 'Admin Profit', align: 'right' },
        { label: 'Payout Amount', align: 'right' },
        { label: 'Payout Cycle Date', align: 'center' },
        { label: 'Transfer Status', align: 'center' },
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 4, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
            <Typography
                sx={{
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '19px',
                    lineHeight: '175%',
                    letterSpacing: '0%',
                    color: theme.palette.primary.main
                }}
                gutterBottom
            >
                Profit Layout
            </Typography>

            {/* Summary Cards Section */}
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                {summaryData.map((item, index) => (
                    <Box key={index} sx={{ flex: '1 1 25%', minWidth: '150px' }}>
                        <StyledCard>
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    sx={{
                                        fontFamily: 'Nunito Sans, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        lineHeight: '175%',
                                        letterSpacing: '0%',
                                        color: '#000000'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Nunito Sans, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '28px',
                                            lineHeight: '130%',
                                            color: item.color,
                                            mr: 1
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Nunito Sans, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '130%',
                                            mb: '4px',
                                            color: '#2F7A52',
                                        }}
                                    >
                                        {item.unit}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="#2F7A52">
                                    {item.period}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Box>
                ))}
            </Box>

            {/* Restaurant List Section */}
            <StyledTableContainer component={Paper}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Nunito Sans, sans-serif',
                            fontWeight: 400,
                            fontSize: '19px',
                            lineHeight: '175%',
                            letterSpacing: '0%',
                            color: '#2F7A52',
                        }}
                    >
                        Restaurant List
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {/* Updated Button for Export */}
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '8px',
                                bgcolor: theme.palette.primary.main, // Green background
                                color: 'white', // White text
                                '&:hover': {
                                    bgcolor: theme.palette.primary.dark, // Darker green on hover
                                }
                            }}
                        >
                            Export
                            <img src={FileDownload} alt="Download icon" style={{ marginLeft: '8px', width: '16px', height: '16px' }} />
                        </Button>
                        <Button variant="outlined" startIcon={<FilterList />} sx={{ borderRadius: '8px' }}>
                            Filters
                        </Button>
                    </Box>
                </Box>

                {/* Table */}
                <Table sx={{ minWidth: 650 }} aria-label="restaurant table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#fafafa' }}>
                            {tableHeaders.map((header) => (
                                <TableCell
                                    key={header.label}
                                    align={header.align}
                                    sx={{
                                        fontFamily: 'Nunito Sans, sans-serif',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '0px',
                                        color: '#2F7A52',
                                    }}
                                >
                                    {header.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    <Typography variant="body2" color="primary.main">
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">{item.revenue} AUS</TableCell>
                                <TableCell align="right">{item.commission}</TableCell>
                                <TableCell align="right">{item.profit} AUS</TableCell>
                                <TableCell align="right">{item.payout} AUS</TableCell>
                                <TableCell align="center">
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {item.cycleDate}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                mr: 1,
                                                bgcolor: getStatusColor(item.status, theme),
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ color: getStatusColor(item.status, theme), fontWeight: 'bold' }}
                                        >
                                            {item.status}
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>

            <Box sx={{ mt: 3 }}>
                <PaginationBox
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Box>
        </Box>
    );
};
export default ProfitLayout;