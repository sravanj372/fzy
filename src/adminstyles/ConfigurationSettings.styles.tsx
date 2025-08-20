import { styled } from '@mui/material/styles';
import { Button, Box, TableContainer, TableRow, TableCell, Typography, Paper } from "@mui/material";

// Custom styled button for the Export button
export const ExportButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    backgroundColor: '#2F7A52',
    '&:hover': {
        backgroundColor: '#1e5a3c',
    },
    borderRadius: '8px',
    textTransform: 'none',
    padding: '6px 12px',
}));

// Custom component for the unchecked radio button (white circle with grey shadow)
export const UncheckedRadioIconWithShadow = styled(Box)(({ theme }) => ({
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '1px solid #d1d8d5',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
}));

// Custom component for the checked radio button (solid green with grey shadow)
export const CheckedRadioIconSolidGreen = styled(Box)(({ theme }) => ({
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#2F7A52',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
}));

// Styled Table components
export const StyledTableContainer = styled(TableContainer)({
    boxShadow: 'none',
});

export const StyledTableHeadRow = styled(TableRow)({
    background: "#F1F4F9",
});

export const StyledTableCell = styled(TableCell)({
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    fontSize: '14px',
    color: '#2F7A52',
    backgroundColor: '#F1F4F9',
});

// Styled link component
export const StyledTypographyLink = styled(Typography)({
    textDecoration: 'underline',
    color: '#2F7A52',
    cursor: 'pointer',
});

// New styled components extracted from the provided code
export const StyledPaper = styled(Paper)({
    padding: "10px",
    border: "1px solid green",
    borderRadius: '8px',
});

export const StyledTypographyBold = styled(Typography)({
    color: "#2F7A52",
    fontWeight: "bold",
    marginBottom: "16px",
});

export const StyledTypographyLinkHeader = styled(Typography)({
    textDecoration: 'underline',
    color: '#2F7A52',
    marginBottom: "16px",
});

export const StyledViewAllButton = styled(Button)({
    color: '#060606ff',
    borderColor: '#666b68ff',
    '&:hover': {
        borderColor: '#1e5a3c',
        color: '#1e5a3c'
    }
});