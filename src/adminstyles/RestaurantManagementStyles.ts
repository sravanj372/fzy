import { SxProps, Theme, styled, Button, TableCell, Typography } from "@mui/material";

// Interfaces for the styled components' props
interface PathProps {
  path: string;
}

interface StatusProps {
  isHeader?: boolean;
}

interface RestaurantNameProps {
  isRestaurantName?: boolean;
}

// Styled components
export const HeaderTypography = styled(Typography)<PathProps>(({ path }) => ({
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "27.32px",
  color: path === "suspend-account" ? "#E45040" : "#2F7A52",
}));

export const StyledTableCell = styled(TableCell)<PathProps & StatusProps & RestaurantNameProps>(
  ({ path, isHeader, isRestaurantName }) => ({
    padding: "16px",
    borderBottom: isHeader ? "1px solid #E0E0E0" : "none",
    fontSize: "14px",
    fontWeight: isHeader ? 600 : 400,
    color: "#000000",
    textAlign: "left",
    cursor: isRestaurantName ? "pointer" : "default",
    ...(isRestaurantName && {
      color: path === "suspend-account" ? "#E45040" : "#2F7A52",
    }),
  })
);

export const Pendingreqbutton = styled(Button)({
  backgroundColor: "#E2F6E1",
  color: "#2F7A52",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "19.1px",
  borderRadius: "100px",
  height: "36px",
  position: "relative",
  padding: "8px 16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#E2F6E1",
  },
});

export const Suspendedbutton = styled(Button)({
  color: "#E45040",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "19.1px",
  borderRadius: "100px",
  height: "36px",
  textTransform: "none",
  borderColor: "#E45040",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "rgba(228, 80, 64, 0.04)",
    borderColor: "#E45040",
  },
});

export const Filterbutton = styled(Button)({
  backgroundColor: "#E2F6E1",
  color: "#2F7A52",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "19.1px",
  borderRadius: "100px",
  height: "36px",
  padding: "8px 16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#E2F6E1",
  },
});

export const StyledButton = styled(Button)({
  backgroundColor: "#2F7A52",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "19.1px",
  borderRadius: "100px",
  height: "36px",
  padding: "8px 16px",
  textTransform: "none",
  minWidth: "120px",
  "&:hover": {
    backgroundColor: "#2F7A52",
  },
});

export const SuspendedButton = styled(Button)({
  backgroundColor: "#E45040",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "19.1px",
  borderRadius: "100px",
  height: "36px",
  padding: "8px 16px",
  textTransform: "none",
  minWidth: "120px",
  "&:hover": {
    backgroundColor: "#E45040",
  },
});

// A separate object for all the plain sx styles
export const restaurantManagementStyles: { [key: string]: SxProps<Theme> | ((...args: any[]) => SxProps<Theme>) } = {
  mainBox: {
    border: "1px solid #E0E0E0",
    borderRadius: 4,
    p: 2,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    background: "white",
    height: "auto",
    position: 'relative',
  },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 2,
  },
  backIcon: {
    cursor: "pointer",
    color: "#2F7A52",
    fontSize: "20px",
    mr: 1,
  },
  backIconSuspend: {
    cursor: "pointer",
    color: "#E45040",
    fontSize: "20px",
    mr: 1,
  },
  buttonsBox: {
    display: "flex",
    gap: 2,
    flexWrap: "wrap",
    alignItems: "center",
  },
  filterButton: {
    width: "100%",
  },
  menuPaper: {
    border: "1px solid #E0E0E0",
  },
  commonMenuItem: {
    height: "24px",
    fontSize: "0.875rem",
    color: "#2F7A52",
    marginBottom: "4px",
    px: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuDivider: {
    my: "4px",
    backgroundColor: "#E0E0E0",
  },
  lastMenuItem: {
    height: "24px",
    fontSize: "0.875rem",
    color: "#2F7A52",
    px: "10px",
    marginBottom: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  pendingIndicator: {
    position: "absolute",
    fontSize: "14px",
    top: "-3px",
    color: "red",
    right: "-3px",
  },
  tableContainer: {
    border: "1px solid #E0E0E0",
  },
  table: (path: string) => ({
    tableLayout: path === "pending-request" ? "fixed" : "auto",
  }),
  tableBody: {
    whiteSpace: "normal",
  },
  tableBodyRow: {
    // A style that's not explicitly defined but is good practice to have.
  },
  emailCell: {
    // This style is not directly in the provided code, but it's common.
    // I've added it for completeness, as it was in the original `PendingTableCell` component.
  },
  pendingMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "black",
    padding: "0 32px 0 10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  approveIcon: {
    color: "#2F7A52",
    fontSize: "16px",
  },
  approveText: {
    color: "#2F7A52",
  },
  rejectMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "black",
    padding: "0 32px 0 10px",
    marginBottom: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  rejectIcon: {
    color: "#f42f25",
    fontSize: "16px",
  },
  rejectText: {
    color: "#f42f25",
  },
  suspendArrowIcon: {
    fontSize: "1rem",
    color: "#E45040",
  },
  statusIcon: (isActive: boolean) => ({
    marginTop: "5px",
    marginRight: "2px",
    fontSize: "8px",
    color: isActive ? "#68B266" : "#E45040",
  }),
  suspendMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "#000000",
    padding: "0 36px 0 10px",
    marginBottom: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  unsuspendMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "black",
    padding: "0 32px 0 10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  deleteMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "black",
    padding: "0 32px 0 10px",
    marginBottom: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "20px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
    zIndex: 1000,
  },
  deleteModal: {
    backgroundColor: '#FF3326',
    borderRadius: '8px',
    p: 4,
    boxShadow: 3,
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
  alertIconBox: {
    width: '140px',
    height: '140px',
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
  },
  deleteModalTitle: {
    color: '#ffffffff',
    mb: 3,
    fontSize: '20px',
  },
  deleteModalText: {
    fontFamily: 'Nunito Sans',
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '-0.11px',
    textAlign: 'center',
    mb: 4,
    color: '#fcfcfcff',
    opacity: 1,
  },
  modalButtonBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: 6,
  },
  deleteCancelButton: {
    width: '100px',
    backgroundColor: '#FFFFFF',
    color: '#FF3326',
    borderColor: '#FF3326',
  },
  deleteConfirmButton: {
    width: '100px',
    backgroundColor: '#ffffffff',
    color: '#FF3326',
  },
  suspendModal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    p: 4,
    boxShadow: 3,
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
  suspendModalTitle: {
    color: '#FF3326',
    mb: 3,
  },
  suspendCancelButton: {
    color: '#FF3326',
    borderColor: '#FF3326',
    width: '100px',
    '&:hover': {
      borderColor: '#FF3326',
      backgroundColor: 'rgba(47, 122, 82, 0.04)',
    },
  },
  suspendConfirmButton: {
    backgroundColor: '#FF3326',
    '&:hover': {
      backgroundColor: '#FF3326',
    },
  },
  unsuspendModal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    p: 4,
    boxShadow: 3,
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
  unsuspendModalTitle: {
    color: '#FF3326',
    mb: 3,
  },
  unsuspendCancelButton: {
    color: '#FF3326',
    borderColor: '#FF3326',
    width: '100px',
    '&:hover': {
      borderColor: '#FF3326',
      backgroundColor: 'rgba(47, 122, 82, 0.04)',
    },
  },
  unsuspendConfirmButton: {
    backgroundColor: '#FF3326',