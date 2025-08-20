export const restaurantManagementStyles = {
  mainContainer: {
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
  
  headerContainer: {
    gap: 2
  },
  
  backIconPending: {
    cursor: "pointer",
    color: "#2F7A52",
    fontSize: "20px",
    mr: 1,
  },
  
  backIconSuspended: {
    cursor: "pointer",
    color: "#E45040",
    fontSize: "20px",
    mr: 1,
  },
  
  filterButtonFull: {
    width: "100%"
  },
  
  downloadIcon: {
    width: "18px", 
    height: "18px"
  },
  
  exportMenuPaper: {
    border: "1px solid #E0E0E0"
  },
  
  exportMenuItem: {
    height: "24px",
    fontSize: "0.875rem",
    color: "#2F7A52",
    marginBottom: "4px",
    px: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  
  exportMenuItemLast: {
    height: "24px",
    fontSize: "0.875rem",
    color: "#2F7A52",
    marginBottom: "0",
    px: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  
  menuDivider: {
    my: "4px",
    backgroundColor: "#E0E0E0",
  },
  
  notificationCircle: {
    position: "absolute",
    fontSize: "14px",
    top: "-3px",
    color: "red",
    right: "-3px",
  },
  
  table: (path: string) => ({
    tableLayout: path === "pending-request" ? "fixed" : "auto"
  }),
  
  tableBody: {
    whiteSpace: "normal"
  },
  
  arrowDown: {
    fontSize: "1rem"
  },
  
  suspendArrowDown: {
    fontSize: "1rem", 
    color: "#E45040"
  },
  
  actionMenuPaper: {
    border: "1px solid #E0E0E0"
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
  
  pendingMenuItemLast: {
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
  
  approveIcon: {
    color: "#2F7A52", 
    fontSize: "16px"
  },
  
  approveText: {
    color: "#2F7A52"
  },
  
  rejectIcon: {
    color: "#f42f25", 
    fontSize: "16px"
  },
  
  rejectText: {
    color: "#f42f25"
  },
  
  statusIcon: (status: string) => ({
    marginTop: "5px",
    marginRight: "2px",
    fontSize: "8px",
    color: status === "Active" ? "#68B266" : "#f42f25",
  }),
  
  suspendMenuItemBlack: {
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
  
  suspendMenuItemBlackLast: {
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
  
  restaurantSuspendMenuItem: {
    height: "20px",
    fontSize: "0.75rem",
    alignItems: "left",
    color: "#000000",
    marginBottom: "0",
    pr: "36px",
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
  
  modalOverlay: {
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
  
  deleteModalContent: {
    backgroundColor: '#FF3326',
    borderRadius: '8px',
    p: 4,
    boxShadow: 3,
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
  
  alertIconContainer: {
    width: '140px',
    height: '140px',
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto'
  },
  
  alertIcon: {
    width: '150px', 
    height: '150px'
  },
  
  deleteModalTitle: {
    color: '#ffffffff', 
    mb: 3, 
    fontSize: '20px'
  },
  
  deleteModalNote: {
    fontFamily: 'Nunito Sans',
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '-0.11px',
    textAlign: 'center',
    mb: 4,
    color: '#fcfcfcff',
    opacity: 1
  },
  
  deleteModalNoteBold: {
    fontWeight: 700
  },
  
  modalButtonContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: 6
  },
  
  deleteModalCancelButton: {
    width: '100px',
    backgroundColor: '#FFFFFF',
    color: '#FF3326',
    borderColor: '#FF3326',
  },
  
  deleteModalDeleteButton: {
    width: '100px',
    backgroundColor: '#ffffffff',
    color: '#FF3326',
  },
  
  suspendModalContent: {
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
    mb: 3
  },
  
  suspendModalButtonContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: 2
  },
  
  suspendModalCancelButton: {
    color: '#FF3326',
    borderColor: '#FF3326',
    width: '100px',
  },
  
  suspendModalSuspendButton: {
    backgroundColor: '#FF3326',
    '&:hover': {
      backgroundColor: '#FF3326',
    }
  },
  
  unsuspendModalContent: {
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
    mb: 3
  },
  
  unsuspendModalButtonContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: 4
  },
  
  unsuspendModalCancelButton: {
    color: '#FF3326',
    borderColor: '#FF3326',
    width: '100px',
    '&:hover': {
      borderColor: '#FF3326',
      backgroundColor: 'rgba(47, 122, 82, 0.04)',
    }
  },
  
  unsuspendModalUnsuspendButton: {
    backgroundColor: '#FF3326',
    '&:hover': {
      backgroundColor: '#FF3326',
    }
  },
};