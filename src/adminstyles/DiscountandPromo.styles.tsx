import {
    Box,
    Button,
    Paper,
    Stack,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Box)({
    position: 'relative',
    height: 'auto',
    background: 'white',
});

export const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    padding: theme.spacing(1),
}));

export const TableCard = styled(Box)(({ theme }) => ({
    border: "1px solid green",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
}));

export const TableControls = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

export const TableTitle = styled(Typography)({
    color: "#2F7A52",
    fontWeight: 600,
});

export const TableButtonsStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        '& > button': {
            width: '100%',
        },
    },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const FilterButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    background: 'white',
    border: '1px solid #2F7A52',
    '&:hover': {
        backgroundColor: 'white',
        borderColor: theme.palette.primary.dark,
    },
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    boxShadow: "none",
    marginTop: theme.spacing(2),
    overflowX: 'auto',
}));

export const TableHeadRowStyled = styled(TableRow)({
    background: "#F1F4F9",
});

export const TableCellHeader = styled(TableCell)({
    color: "#2F7A52",
    fontWeight: 700,
    whiteSpace: "nowrap",
});

export const TableCellContent = styled(TableCell)({
    whiteSpace: "nowrap",
});

export const StatusTypography = styled(Typography)<{ status: string }>(({ status }) => ({
    backgroundColor: status === "In active" ? "#FF3326" : "transparent",
    color: status === "In active" ? "white" : "#2F7A52",
    border: `1px solid ${status === "In active" ? "#FF3326" : "#2F7A52"}`,
    padding: status === "Active" ? "2px 16px" : "4px 11px",
    borderRadius: "20px",
    fontSize: "13px",
}));

export const DeleteButton = styled(Button)({
    color: "#FF3326",
    borderColor: "#FF3326",
    "&:hover": { borderColor: "#FF3326" },
});

export const DeleteIcon = styled('img')({
    width: "20px",
    height: "20px",
});

export const ModalOverlay = styled(Box)({
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
});
