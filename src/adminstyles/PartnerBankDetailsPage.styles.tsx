import { styled } from '@mui/material/styles';
import {
    Paper, Typography, Box, Table, TableHead, TableCell, TableRow, Button,
} from "@mui/material";

// Main container for the page
export const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#F5FAF6',
    minHeight: '100vh',
}));

// Container for the header with the title and export button
export const HeaderBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
}));

// Typography for the page title
export const TitleTypography = styled(Typography)(({ theme }) => ({
    variant: "h6",
    fontWeight: "bold",
    color: "#2F7A52",
    textDecoration: "underline",
}));

// Styled button for the Export button
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

// Paper component for the table container
export const TablePaper = styled(Paper)(({ theme }) => ({
    padding: "10px",
    border: "1px solid green",
    borderRadius: '8px',
}));

// TableRow for the table head
export const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
    background: "#F1F4F9",
}));

// TableCell for the table header
export const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Nunito Sans',
    fontWeight: 700,
    fontSize: '14px',
    color: '#2F7A52',
    backgroundColor: '#F1F4F9',
}));

// TableCell for the table body
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // General styles for body cells
}));

// Styled button for the "View" action
export const ViewButton = styled(Button)(({ theme }) => ({
    color: '#060606ff',
    textTransform: 'none',
}));

// Box for the pagination component
export const PaginationBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
}));
