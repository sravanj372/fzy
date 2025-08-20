import { styled } from '@mui/material/styles';
import {
    Button,
    Typography,
    Box,
} from "@mui/material";

// Main container for the page
export const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(-2),
        marginLeft: theme.spacing(-2),
    },
    backgroundColor: '#F5FAF6',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    position: 'relative',
}));

// Header section with title and add rule button
export const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    color: '#2f7a52',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        gap: 0,
    },
}));

// Typography for the header title
export const HeaderTitle = styled(Typography)(({ theme }) => ({
    color: '#2f7a52',
    fontWeight: 'bold',
}));

// Button for adding a new rule
export const AddRuleButton = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#2f7a52',
    '& .MuiTypography-root': {
        textDecoration: 'underline',
    },
}));

// Main container for each commission rule section
export const RuleContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

// Flexbox container for each row (Restaurant Name, Commission %)
export const RuleRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    flexDirection: 'column',
    gap: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        gap: 0,
    },
}));

// Typography for the label of each rule (e.g., "Restaurant Name")
export const RuleLabel = styled(Typography)(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        width: '20%',
        marginBottom: 0,
    },
}));

// Box containing the rule value and any associated actions
export const RuleValueBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    gap: theme.spacing(1),
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        width: '40%',
    },
    '& .MuiBox-root': {
        height: 40,
        width: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #2f7a52',
        borderRadius: '10px',
        padding: theme.spacing(1),
        cursor: 'pointer',
    },
}));

// Button for deleting a rule
export const DeleteButton = styled(Button)(({ theme }) => ({
    borderColor: '#f44336',
    color: '#f44336',
    whiteSpace: 'nowrap',
    '&:hover': {
        borderColor: '#d32f2f',
        backgroundColor: 'rgba(244, 67, 54, 0.04)',
    },
}));

// Button for saving the changes
export const SaveButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2f7a52',
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '8px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 7),
    '&:hover': {
        backgroundColor: '#235c3e',
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
    },
}));

// Modal overlay for the delete confirmation
export const ModalOverlay = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
}));

// Modal content box
export const ModalContent = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: theme.spacing(4),
    boxShadow: theme.shadows[3],
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
}));

// Typography for the modal title
export const ModalTitle = styled(Typography)(({ theme }) => ({
    color: '#FF3326',
    marginBottom: theme.spacing(3),
}));

// Container for the modal buttons
export const ModalButtonBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
}));

// Cancel button in the modal
export const CancelButton = styled(Button)(({ theme }) => ({
    color: '#FF3326',
    width: '100px',
    height: '30px',
    borderColor: '#FF3326',
    '&:hover': {
        borderColor: '#FF3326',
        backgroundColor: 'rgba(211, 47, 47, 0.04)',
    },
}));

// Confirm delete button in the modal
export const ConfirmDeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF3326',
    width: '100px',
    height: '30px',
    '&:hover': {
        backgroundColor: '#FF3326',
    },
}));
