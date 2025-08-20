import { Button, TableCell, Typography, styled } from "@mui/material";

// Common styles for menu items and dividers are now handled within the components themselves,
// but for more complex cases, you might create styled components for them as well.

export const Exportbutton = styled(Button)({
  backgroundColor: "#2F7A52",
  color: "#FFFFFF",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#246142",
  },
});

export const Filterbutton = styled(Button)({
  backgroundColor: "#E0E0E0",
  color: "#2F7A52",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#C0C0C0",
  },
});

export const Liveorders = styled(Button)({
  backgroundColor: "#2F7A52",
  color: "#FFFFFF",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#246142",
  },
});

export const TableHeadCell = styled(TableCell)({
  padding: "16px",
  color: '#2F7A52',
  fontWeight: 600,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  backgroundColor: "#F1F4F9",
});

export const TableCellStyle = {
  textAlign: 'center'
};

export const StatusChip = styled(Typography)({
  padding: "6.8px 13.6px",
  borderRadius: "16px",
  fontSize: "15px",
});

export const ActionsButton = styled(Button)({
  border: "1px groove gray",
});