import { Box, Button, Stack, TextField, Typography, Paper, DialogActions } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// --- Styled Components ---

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

export const ModalOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
});

export const ModalContent = styled(Paper)(({ theme }) => ({
    borderRadius: '8px',
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    position: 'relative',
    zIndex: 1001,
}));

export const HeaderIcon = styled(ArrowBackIcon)({
    cursor: 'pointer',
    marginTop: '1px',
    color: '#2F7A52',
    fontSize: '20px',
});

export const HeaderText = styled(Typography)({
    color: '#2F7A52',
    marginBottom: '2px',
    padding: '1px',
});

export const DeleteContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
});

export const DeleteImage = styled(Box)({
    width: '24px',
    height: '24px',
    objectFit: 'contain',
});

export const DeleteText = styled(Typography)({
    fontSize: '10px',
    color: '#D32F2F',
});

export const FormSection = styled(Stack)({
    padding: '1px',
    alignItems: 'flex-start',
});

export const FormLabel = styled(Box)({
    width: '15%',
    marginBottom: '1px',
    '@media (max-width: 900px)': {
        width: '100%',
    },
});

export const FormInputContainer = styled(Box)({
    width: '40%',
    '@media (max-width: 900px)': {
        width: '100%',
    },
});

export const InputTextField = styled(TextField)({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        color: '#333',
        '& fieldset': { borderColor: '#68b266' },
        '&:hover fieldset': { borderColor: '#4CAF50' },
        '&.Mui-focused fieldset': { borderColor: '#2e7d32' },
    },
    '& .MuiFormHelperText-root': {
        minHeight: '1.25em',
    },
});

export const DatePickerContainer = styled(Box)({
    width: '40%',
    display: 'flex',
    gap: '3px',
    alignItems: 'flex-start',
    '@media (max-width: 900px)': {
        width: '100%',
    },
});

export const ToText = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5px',
});

export const RadioContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '-1.5px',
});

export const ImageUploadContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    width: '40%',
    '@media (max-width: 900px)': {
        width: '100%',
    },
});

export const UploadButton = styled(Button)({
    width: '100px',
});

export const ImagePreview = styled(Box)({
    width: '80px',
    height: 'auto',
});

export const ErrorText = styled(Typography)({
    fontSize: '12px',
    minHeight: '1.25em',
});

export const SubmitButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    paddingBottom: '2px',
});

export const SubmitButton = styled(Button)({
    paddingLeft: '5px',
    paddingRight: '5px',
    borderRadius: '10px',
    textTransform: 'none',
    '@media (max-width: 900px)': {
        margin: 'auto',
    },
    '@media (min-width: 901px)': {
        marginLeft: '400px',
    },
});

export const DeleteModalTitle = styled(Typography)({
    color: '#FF3326',
    marginBottom: '3px',
});

export const DeleteModalText = styled(Typography)({
    fontFamily: 'Nunito Sans',
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '-0.11px',
    textAlign: 'center',
    marginBottom: '4px',
    color: 'text.secondary',
    opacity: 1,
});

export const DeleteModalActions = styled(DialogActions)({
    justifyContent: 'center',
    gap: '6px',
    padding: '0',
});

export const CancelButton = styled(Button)({
    width: '100px',
    color: '#FF3326',
    borderColor: '#FF3326',
    '&:hover': {
        backgroundColor: 'rgba(255, 51, 38, 0.04)',
        borderColor: '#FF3326',
    },
});

export const DeleteConfirmButton = styled(Button)({
    width: '100px',
    backgroundColor: '#FF3326',
    color: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#D32F2F',
    },
});