import { Box, IconButton, Paper, Typography, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Main container for the component
export const OrderandBillsContainer = styled(Box)({
    padding: 2,
});

// Styled back button
export const BackButton = styled(IconButton)({
    color: "#2F7A52",
    padding: 0.5,
});

// Reusable paper for information sections
export const InfoPaper = styled(Paper)({
    marginTop: "16px",
    borderRadius: "12px",
    borderColor: "#2F7A52",
    borderWidth: "1px",
    padding: "24px",
    // Ensure padding is applied responsively or consistently
    '@media (min-width: 900px)': {
        paddingRight: "150px",
    },
});

// Titles for information sections
export const InfoTitle = styled(Typography)({
    color: "#2F7A52",
    fontWeight: "600",
    marginBottom: "16px",
});

// Stack for arranging information rows
export const InfoStack = styled(Stack)({
    spacing: 2,
});

// Container for each key-value pair
export const InfoRow = styled(Box)({
    display: "flex",
    alignItems: "flex-start",
    paddingBottom: 1,
    gap: "15px",
});

// Typography for the key (label)
export const InfoKey = styled(Typography)({
    width: "200px",
    fontWeight: 500,
    color: "#444746",
    fontSize: "18px",
    // Adjust width for smaller screens
    '@media (max-width: 600px)': {
        width: "120px",
    },
});

// Typography for the value
export const InfoValue = styled(Typography)({
    flex: 1,
    fontSize: "18px",
    fontWeight: 400,
    color: "#000000",
});

// Paper for the bill details section
export const BillDetailsPaper = styled(Paper)({
    marginTop: "16px",
    borderRadius: "12px",
    borderColor: "#2F7A52",
    borderWidth: "1px",
    padding: "24px",
    // Add right padding for larger screens
    '@media (min-width: 900px)': {
        paddingRight: "150px",
    },
});

// Container for bill item row
export const BillItemRow = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    paddingLeft: "50px",
    // Remove padding for smaller screens
    '@media (max-width: 600px)': {
        paddingLeft: "0",
    },
});

// Typography for item name
export const ItemNameText = styled(Typography)({
    fontSize: "16px",
    color: "#000",
});

// Typography for item price
export const ItemPriceText = styled(Typography)({
    fontSize: "16px",
    color: "#000",
    paddingRight: "190px",
    // Adjust padding for smaller screens
    '@media (max-width: 600px)': {
        paddingRight: "0",
    },
});

// Typography for summary item labels
export const SummaryItemText = styled(Typography)({
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    paddingLeft: "50px",
    // Remove padding for smaller screens
    '@media (max-width: 600px)': {
        paddingLeft: "0",
    },
});

// Typography for summary item values
export const SummaryValueText = styled(Typography)({
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    paddingRight: "190px",
    // Adjust padding for smaller screens
    '@media (max-width: 600px)': {
        paddingRight: "0",
    },
});

// Container for total amount row
export const TotalAmountRow = styled(Box)({
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "50px",
    // Remove padding for smaller screens
    '@media (max-width: 600px)': {
        paddingLeft: "0",
    },
});

// New styled component for the "Total Amount" label
export const TotalAmountLabel = styled(Typography)({
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
});

// New styled component for the total amount value
export const TotalAmountValue = styled(Typography)({
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    paddingRight: "190px",
    // Adjust padding for smaller screens
    '@media (max-width: 600px)': {
        paddingRight: "0",
    },
});
