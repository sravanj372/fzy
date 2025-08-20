import { styled } from '@mui/material/styles';
import {
    Button,
    TextField,
    Typography,
    Box,
} from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: '#F5FAF6',
    minHeight: '100vh',
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
    color: '#2F7A52',
    fontSize: '20px',
}));

export const FormBox = styled(Box)(({ theme }) => ({
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
}));

export const FormLabel = styled(Typography)(({ theme }) => ({
    width: '100%',
    fontFamily: 'Nunito Sans',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '100%',
    [theme.breakpoints.up('md')]: {
        width: '200px',
    },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '379px',
    },
    '& .MuiOutlinedInput-root': {
        height: '54px',
        borderRadius: '10px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2F7A52',
            borderWidth: '1px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2F7A52',
            borderWidth: '1px',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2F7A52',
            borderWidth: '1px',
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
            borderWidth: '1px',
        },
    },
    '& .MuiFormHelperText-root': {
        minHeight: '1.25em',
    },
    '& input[type=number]': {
        '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },
}));

export const AddButton = styled(Button)(({ theme }) => ({
    width: '123px',
    height: '40px',
    borderRadius: '8px',
    padding: '11px 16px',
    backgroundColor: '#2F7A52',
    '&:hover': {
        backgroundColor: '#2A6A4A',
    },
}));
