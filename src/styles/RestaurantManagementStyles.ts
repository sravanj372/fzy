import { styled } from '@mui/system';
import { Button, TableCell, Typography } from '@mui/material';

// Define the custom props for the HeaderTypography component
interface HeaderTypographyProps {
  path?: string;
}

// Styled Typography for the header
export const HeaderTypography = styled(Typography)<HeaderTypographyProps>(({ path }) => ({
  display: 'flex',
  alignItems: 'center',
  color: path === 'suspend-account' ? '#f42f25' : '#2F7A52',
  //fontWeight: 'bold',
  fontSize: '1.25rem',
}));

// Styled Button for standard actions (main table)
export const StyledButton = styled(Button)({
  border: "1px solid #D3D3D3",
  color: "#2F7A52",
  textTransform: 'none',
  fontSize: '0.8rem',
  padding: '3px 7px',
  borderRadius: '4px',
});

// Styled Button for suspended actions (suspended table)
export const SuspendedButton = styled(Button)({
  border: "1px solid #f42f25",
  color: "#f42f25",
  textTransform: 'none',
  fontSize: '0.7rem',
  padding: '3px 7px',
  borderRadius: '4px',
});

// Styled Button for pending actions (pending requests table)
export const PendingStyledButton = styled(Button)({
  border: "1px solid #2F7A52",
  color: "#2F7A52",
  textTransform: 'none',
  fontSize: '0.7rem',
  padding: '3px 7px',
  borderRadius: '4px',
});

// Define the custom props for the StyledTableCell component
interface StyledTableCellProps {
  path?: string;
  isHeader?: boolean;
  isRestaurantName?: boolean;
}

// Styled TableCell for the default and suspended tables
export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => !['isRestaurantName', 'path', 'isHeader'].includes(String(prop)),
})<StyledTableCellProps>(({ path, isHeader, isRestaurantName }) => ({
  color: isHeader
    ? (path === 'suspend-account' ? '#f42f25' : '#2F7A52')
    : isRestaurantName
    ? '#2F7A52'
    : '#000000',
  fontWeight: isHeader ? 'bold' : 'normal',
  textDecoration: isRestaurantName ? 'underline' : 'none',
  cursor: isRestaurantName ? 'pointer' : 'default',
  whiteSpace: 'normal',
  textAlign: 'center',
  fontSize: '0.75rem',
  padding: isHeader ? '12px 16px' : '10px 16px',
  borderBottom: isHeader ? 'none' : '1px solid #EEEEEE',
  borderRight: 'none',
}));

// Define the custom props for the PendingTableCell component
interface PendingTableCellProps {
  isHeader?: boolean;
  isRestaurantName?: boolean;
  isEmailCell?: boolean;
}

// New styled component for the pending requests table
export const PendingTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => !['isRestaurantName', 'isHeader', 'isEmailCell'].includes(String(prop)),
})<PendingTableCellProps>(({ isHeader, isRestaurantName, isEmailCell }) => ({
  color: isHeader ? '#2F7A52' : isRestaurantName ? '#2F7A52' : isEmailCell ? '#060606ff' : '#000000',
  fontWeight: isHeader ? 'bold' : 'normal',
  textDecoration: isRestaurantName ? 'underline' : 'none',
  cursor: isRestaurantName ? 'pointer' : 'default',
  whiteSpace: 'normal',
  textAlign: 'center',
  fontSize: '0.55rem',
  padding: isHeader ? '12px 16px' : '10px 16px',
  borderBottom: isHeader ? 'none' : '1px solid #EEEEEE',
  borderRight: 'none',
}));


// Style objects for Table components
export const TableHeadRow = {
  background: "#F1F4F9",
};

export const TableContainerStyle = {
  boxShadow: 'none',
  borderRadius: '8px',
  border: 'none',
};

export const TableBodyRow = {
  backgroundColor: '#FFFFFF',
  '&:last-child td': { borderBottom: 0 },
};