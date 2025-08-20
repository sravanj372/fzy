import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const commonInputStyles = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
        color: "#333",
        "& fieldset": { borderColor: "#2F7A52" },
        "&.Mui-focused fieldset": { borderColor: "#2e7d32" },
    },
    "& .MuiFormHelperText-root": {
        minHeight: '1.25em',
    },
};

export const StyledComponents = {
    MainBox: styled(Box)({
        padding: "16px",
        "@media (min-width: 960px)": {
            padding: "24px",
        },
    }),
    HeaderBox: styled(Box)({
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
        "@media (min-width: 960px)": {
            marginBottom: "24px",
        },
    }),
    HeaderTextContainer: styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "8px",
    }),
    ArrowIcon: styled(ArrowBackIcon)({
        cursor: 'pointer',
        marginTop: "0",
        color: '#2F7A52',
        fontSize: "18px",
        "@media (min-width: 960px)": {
            marginTop: "4px",
            fontSize: "20px",
        },
    }),
    PageTitle: styled(Typography)({
        color: "#2F7A52",
        fontSize: "18px",
        fontWeight: 500,
        marginBottom: "-4px",
        "@media (min-width: 960px)": {
            fontSize: "20px",
        },
    }),
    FormContainer: styled(Box)({
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        "@media (min-width: 960px)": {
            gap: "32px",
        },
    }),
    StackRow: styled(Stack)({
        padding: "8px",
        gap: "8px",
        alignItems: "flex-start",
        "@media (min-width: 960px)": {
            gap: "24px",
            flexDirection: "row",
        },
        "@media (max-width: 959px)": {
            flexDirection: "column",
        },
    }),
    LabelBox: styled(Box)({
        width: "100%",
        "@media (min-width: 960px)": {
            width: "15%",
        },
    }),
    LabelText: styled(Typography)({
        width: '100%',
        fontSize: "15px",
        marginBottom: "4px",
        "@media (min-width: 960px)": {
            fontSize: "17px",
        },
    }),
    TextFieldContainer: styled(Box)({
        width: "100%",
        "@media (min-width: 960px)": {
            width: "40%",
        },
    }),
    StyledTextField: styled(TextField)(commonInputStyles),
    StyledDatePicker: styled(TextField)(commonInputStyles), // Reuse styles for DatePicker
    DurationBox: styled(Box)({
        width: "100%",
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        "@media (min-width: 960px)": {
            width: "40%",
        },
    }),
    DurationToText: styled(Typography)({
        whiteSpace: 'nowrap',
        fontSize: "15px",
        marginTop: "4px",
        "@media (min-width: 960px)": {
            fontSize: "17px",
        },
    }),
    ImageLabelBox: styled(Box)({
        width: "100%",
        marginTop: "-1px",
        "@media (min-width: 960px)": {
            width: "15%",
            marginTop: "16px",
        },
    }),
    ImagePreviewContainer: styled(Box)({
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
    }),
    UploadButtonContainer: styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "16px",
    }),
    UploadButton: styled(Button)({
        width: '100px',
    }),
    ImagePreview: styled(Box)({
        width: '80px',
        height: 'auto',
    }),
    ErrorTextContainer: styled(Box)({
        minHeight: '24px',
        display: 'flex',
        alignItems: 'center',
    }),
    ErrorText: styled(Typography)({
        fontSize: '12px',
    }),
    SaveButtonContainer: styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        paddingY: "16px",
        "@media (min-width: 960px)": {
            justifyContent: "flex-start",
        },
    }),
    SaveButton: styled(Button)({
        width: '100%',
        paddingX: "40px",
        borderRadius: '10px',
        textTransform: 'none',
        marginLeft: "0",
        "@media (min-width: 600px)": {
            width: "auto",
        },
        "@media (min-width: 960px)": {
            marginLeft: "400px",
        },
    }),
};