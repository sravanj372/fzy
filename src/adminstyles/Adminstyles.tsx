import { Button, Box, FormControl, InputLabel, Stack, Pagination, Card, Divider, Paper, Typography, Select, TableContainer, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';

export const Suspendedbutton = styled(Button)(({ theme }) => ({
    borderColor: 'red',
    color: 'red',
    '&:hover': {
        borderColor: 'red',
        background: 'white'
    },
    [theme.breakpoints.down('sm')]: {
        width: '60%',
    },
}));

export const Exportbutton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down('sm')]: {
        width: '35%',
        justifyContent: 'center',
    },
}));

export const Pendingreqbutton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%',
    },
}));

export const Filterbutton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    background: 'white',
    '&:hover': {
        backgroundColor: 'white',
    },
    border: '1px solid #2F7A52',
    [theme.breakpoints.down('sm')]: {
        width: '25%',
    },
}));

export const Liveorders = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down('sm')]: {
        width: '34%',
    },
}));

export const ExportBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 1,
    width: '98px',
    border: '1px solid gray',
    position: 'absolute',
    top: '60px',
    right: '349px',
    background: 'white',
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        width: '196px',
        top: '63px',
        right: '10px',
        zIndex: "100",
        background: theme.palette.secondary.main
    },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        width: "80%",
    },
    '& input[type="date"]::-webkit-calendar-picker-indicator': {
        filter: 'invert(68%) sepia(10%) saturate(1486%) hue-rotate(64deg) brightness(91%) contrast(89%);',
        width: "28%"
    },
}));

export const StyledInputLabel = styled(InputLabel)(() => ({
    color: '#000000'
}));

export const PasswordupdateBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px',
    padding: '30px',
    border: '1px solid green',
    borderRadius: '10px'
}));

export const Logincontainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "auto",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    gap: 20
}));

export const LoginBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: "white",
    width: '450px',
    [theme.breakpoints.down('sm')]: {
        width: "100%",
        padding: "30px 40px "
    }
}));

interface PaginationProps {
    path?: string;
}

export const PaginationStack = styled(Stack)<PaginationProps>(({ path }) => ({
    border: path === 'suspend-account' ? '1px solid red' : '1px solid green',
    width: 'fit-content',
    padding: '5px',
    borderRadius: '10px',
    margin: 'auto',
    background: 'white'
}));

export const DashboardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    backgroundColor: '#f8f8f8',
    padding: theme.spacing(3),
}));

export const TopSectionPaper = styled(Paper)(({ theme }) => ({
    border: '1px solid #2F7A52',
    borderRadius: '8px',
    padding: theme.spacing(3),
}));

export const DashboardDataGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

export const DashboardCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    flex: 1,
}));

export const DashboardIcon = styled('img')(({ theme }) => ({
    width: '24px',
    height: '24px',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
        width: '30px',
        height: '30px',
    },
}));

export const CountText = styled(Typography)(({ theme }) => ({
    color: '#2F7A52',
    fontSize: '20px',
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
        fontSize: '25px',
    },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#555',
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    },
}));

export const VerticalDivider = styled(Divider)(({ theme }) => ({
    borderColor: '#E9ECEF',
    display: 'block',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const MiddleSection = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: theme.spacing(2.5),
    },
}));

export const LeftColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    flex: 2,
    [theme.breakpoints.down('md')]: {
        flex: 1,
        gap: theme.spacing(2),
    },
}));

export const DeliveryStatusPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    border: '1px solid #2F7A52',
    width: '100%',
    borderRadius: '8px',
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    color: '#2F7A52',
    fontWeight: 600,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
        fontSize: '18px',
    },
}));

export const DeliveryStatusCardsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'stretch',
    paddingTop: theme.spacing(2),
    flexDirection: 'row',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

export const DeliveryStatusCard = styled(Card)(({ theme }) => ({
    flex: 1,
    borderColor: '#979797',
    borderRadius: '16px',
    padding: theme.spacing(2),
}));

export const DeliveryStatusLabel = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(-0.5),
    color: '#555',
}));

export const DeliveryStatusCount = styled(Typography)(() => ({
    fontSize: '30px',
    color: '#2F7A52',
    fontWeight: 700,
}));

export const BarChartPaper = styled(Paper)(({ theme }) => ({
    border: '1px solid #2F7A52',
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: '8px',
}));

export const ChartHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    marginLeft: '10px',
}));

export const ChartTitle = styled(Typography)(({ theme }) => ({
    fontSize: '23px',
    fontWeight: 600,
    color: '#2e7d32',
}));

export const ChartSelect = styled(Select)(() => ({
    fontSize: '14px',
    color: '#555',
    '& .MuiSelect-icon': {
        color: '#555',
    },
}));

export const BarChartContainer = styled(Box)({
    overflowX: 'auto',
    minWidth: '200px',
    '& .MuiBox-root': {
        minWidth: 200,
    },
});

export const BarChartStyled = styled(BarChart)(({ theme }) => ({
    width: '100%', // Flexible width for responsiveness
    // The following styles were moved from inline sx prop
    '& .MuiBarElement-root': {
        width: '24px !important',
        transform: 'translatex(13px) rotate(0deg)',
        borderRadius: '2px',
    },
    '& .MuiChartsAxis-highlight': {
        stroke: 'rgba(0, 0, 0, 0.05)',
    },
    '& .MuiChartsAxis-tickLabel': {
        fill: '#555',
        fontSize: '12px',
    },
}));


export const RightColumn = styled(Box)(({ theme }) => ({
    flex: 1,
}));

export const HomepageTitlePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    border: '1px solid #2F7A52',
    maxHeight: '950',
    width: '100%',
    borderRadius: '8px',
}));

export const HomepageTitleHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const HomepageTitleText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 600,
    color: '#2F7A52',
    [theme.breakpoints.up('md')]: {
        fontSize: '20px',
    },
}));

export const AddButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2F7A52',
    '&:hover': {
        backgroundColor: '#225a3d',
    },
    whiteSpace: 'nowrap',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        fontSize: '14px',
    },
}));

export const HomepageTitleItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1.7,1),
    margin: theme.spacing(0, 0),
}));

export const HomepageTitleImage = styled('img')(({ theme }) => ({
    width: '30px',
    height: '30px',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
        width: '40px',
        height: '40px',
    },
}));

export const HomepageTitleContent = styled(Box)({
    flexGrow: 1,
});

export const HomepageTitleTitle = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
        fontSize: '14px',
    },
}));

export const HomepageTitleDate = styled(Typography)(({ theme }) => ({
    fontSize: '11px',
    color: '#909090',
    [theme.breakpoints.up('md')]: {
        fontSize: '12px',
    },
}));

export const HomepageTitleActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
}));

export const ActionIcon = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: '13px',
    height: '13px',
    [theme.breakpoints.up('md')]: {
        width: '15px',
        height: '15px',
    },
}));

export const HorizontalDivider = styled(Divider)({
    borderColor: '#E9ECEF',
    width: '100%',
});

export const TablePaper = styled(Paper)(({ theme }) => ({
    border: '1px solid #2F7A52',
    borderRadius: '8px',
    padding: theme.spacing(1, 2),
}));

export const TableHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
    color: '#2F7A52',
    fontWeight: 600,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
        fontSize: '17px',
    },
}));

export const TableSelect = styled(Select)(() => ({
    fontSize: '14px',
    color: '#555',
    '& .MuiSelect-icon': {
        color: '#555',
    },
}));

export const TableContainerStyled = styled(TableContainer)({
    boxShadow: 'none',
    borderRadius: '8px',
    overflowX: 'auto',
    border: '1px solid #E9ECEF',
});

export const TableHeadRow = styled(TableRow)({
    background: "#F1F4F9",
});

export const TableHeadCell = styled(TableCell)({
    color: "#2F7A52",
    fontWeight: 700,
    borderBottom: 'none',
    whiteSpace: 'nowrap',
});

export const TableRowOdd = styled(TableRow)({
    background: '#fcfcfc',
    '&:last-child td, &:last-child th': {
        border: 0
    },
});

export const TableRowEven = styled(TableRow)({
    background: '#FFFFFF',
    '&:last-child td, &:last-child th': {
        border: 0
    },
});

export const TableCellStyled = styled(TableCell)({
    whiteSpace: 'nowrap',
});