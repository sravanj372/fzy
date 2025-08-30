import { styled } from '@mui/material/styles';
import {
    Paper,
    Typography,
    Box,
    Button,
    Switch,
    Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const StyledPaper = styled(Paper)({
    padding: "10px",
    border: "1px solid green",
    overflowX: "hidden",
    width: '100%',
    height: '431px',
    position: 'absolute',
    right: '2px',
    borderRadius: '14px',
});

export const HeaderBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
});

export const HeaderTypography = styled(Typography)({
    marginBottom: '16px', // from mb={2}
    color: "#2F7A52",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
    fontSize: '19px',
    lineHeight: '175%',
});

export const StyledButton = styled(Button)({
    // Add any specific styles for the button if needed, like colors, hover states, etc.
});

export const StyledTaxSectionTitle = styled(Typography)({
    color: "#2F7A52",
    textDecoration: "underline",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '175%',
    textDecorationStyle: 'solid',
    textDecorationThickness: '0%',
    textDecorationColor: '#2F7A52',
    textUnderlineOffset: 0,
});

export const StyledTaxSettingsBox = styled(Box)({
    display: "flex",
    gap: '40px', // gap={5} becomes 40px
    marginTop: '16px', // mt={2} becomes 16px
    alignItems: 'center',
    '& .MuiTypography-root': {
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 500,
        fontSize: '19px',
        lineHeight: '175%',
        color: 'black',
    },
});

export const StyledTaxRateBox = styled(Box)({
    display: "flex",
    gap: '24px', // gap={3} becomes 24px
    alignItems: "center",
    marginTop: '16px', // mt={2} becomes 16px
});

export const StyledEditBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderBottom: "1px solid #2F7A52",
    gap: "3px",
});

export const StyledEditIcon = styled(EditIcon)({
    fontSize: "17px",
    verticalAlign: "middle",
    color: "#2F7A52",
});

export const StyledEditTypography = styled(Typography)({
    fontSize: "14px",
    color: "#2F7A52",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
});

export const StyledDivider = styled(Divider)({
    border: "1px solid green",
    width: "100%",
    margin: '10px 0', // margin: '10px 0px 10px 0px' becomes '10px 0'
});

// Corrected Styled Switch
export const GreenSwitch = styled(Switch)(() => ({
    width: 45,
    height: 23,
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase": {
        padding: 2.7,
        "&.Mui-checked": {
            transform: "translateX(21.6px)",
            "& + .MuiSwitch-track": {
                // This is the 'on' state color
                backgroundColor: "#2F7A52",
                opacity: 1,
                border: 0,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        width: 18,
        height: 18,
        backgroundColor: "#E5E7EB", // A light gray color for the thumb
        border: "2px solid white",
    },
    "& .MuiSwitch-track": {
        borderRadius: 11.5,
        // This is the 'off' state color
        backgroundColor: "white", 
        opacity: 1,
        border: '1px solid grey', // Add a subtle border for better contrast
    },
}));