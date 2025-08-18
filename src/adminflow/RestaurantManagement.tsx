import { Box, Paper } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from "@mui/material/Divider";
import alert from '../assets/line-md_alert.png'
// Assuming these styles and components are defined in the provided paths
import {
  Exportbutton,
  Pendingreqbutton,
  Suspendedbutton,
  Filterbutton,
} from "../adminstyles/Adminstyles";
import PaginationBox from "./PaginationBox";

// Assuming these assets and data files are available
import download from "../assets/downloadicon.png";
import data from "./data.json";
import {
  HeaderTypography,
  StyledTableCell,
  StyledButton,
  SuspendedButton,
  TableHeadRow,
  TableContainerStyle,
  TableBodyRow,
} from "../styles/RestaurantManagementStyles";

interface Restaurentheading {
  id: number;
  heading: string;
}

interface RestaurantDetails {
  id: number;
  restaurantname: string;
  vendorname: string;
  contactno: string;
  location: string;
  gst: string;
  totalrevenue: string;
  status: string;
}

interface Pendingheadings {
  id: number;
  heading: string;
}

interface PendingDetails {
  id: number;
  restaurantname: string;
  vendorname: string;
  email: string;
  contactno: string;
  location: string;
  abcno: number;
  foodcategory: string;
  requestdate: string;
}

interface Suspendedheadings {
  id: number;
  heading: string;
}

interface Suspendaccounts {
  id: number;
  restaurantname: string;
  contactno: string;
  suspenddate: string;
  location: string;
  status: string;
}

const RestaurantManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const path = pathname.split("/").pop();

  const restaurentheading: Restaurentheading[] = [
    { id: 1, heading: "Restaurant Name" },
    { id: 2, heading: "Vendor Name" },
    { id: 3, heading: "Contact Number" },
    { id: 4, heading: "Location" },
    { id: 5, heading: "Tax" },
    { id: 6, heading: "Total Revenue" },
    { id: 7, heading: "Status" },
    { id: 8, heading: "Action" },
  ];

  const pendingheadings: Pendingheadings[] = [
    { id: 1, heading: "Restaurant Name" },
    { id: 2, heading: "Vendor Name" },
    { id: 3, heading: "Email" },
    { id: 4, heading: "Contact Number" },
    { id: 5, heading: "Location" },
    { id: 6, heading: "ABC/ABN No" },
    { id: 7, heading: "Food Categories" },
    { id: 8, heading: "Request Date" },
    { id: 9, heading: "Action" },
  ];

  const suspendedheadings: Suspendedheadings[] = [
    { id: 1, heading: "S.No" },
    { id: 2, heading: " Restaurant Name" },
    { id: 3, heading: "User Contact" },
    { id: 4, heading: "Date Suspended" },
    { id: 5, heading: "Location" },
    { id: 6, heading: "Status" },
    { id: 7, heading: "Action" },
  ];

  type Tableheading = Restaurentheading | Pendingheadings | Suspendedheadings;
  type Tabledetails = RestaurantDetails | PendingDetails | Suspendaccounts;

  let tableheading: Tableheading[] = restaurentheading;
  let tabledetails: Tabledetails[] = data.restaurentdetails as Tabledetails[];

  switch (path) {
    case "pending-request":
      tableheading = pendingheadings;
      tabledetails = data.pendingdetails as Tabledetails[];
      break;
    case "suspend-account":
      tableheading = suspendedheadings;
      tabledetails = data.suspendedaccounts as Tabledetails[];
      break;
    default:
      tableheading = restaurentheading;
      tabledetails = data.restaurentdetails as Tabledetails[];
      break;
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE2);
  const handleClicks1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };

  // --- POPUP STATE MANAGEMENT ---
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
    handleClose();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleConfirmSuspend = () => {
    console.log("Account has been suspended!");
    closeModal();
  };

  const handleConfirmDelete = () => {
    console.log("Account has been deleted!");
    closeModal();
  };

  const handleConfirmUnsuspend = () => {
    console.log("Account has been unsuspended!");
    closeModal();
  };

  function pendingRestaurentHandler() {
    navigate("pending-request");
  }

  function suspendRequestHandler() {
    navigate("suspend-account");
  }

  const commonMenuItemSx = {
    height: "24px",
    fontSize: "0.875rem",
    color: "#2F7A52",
    marginBottom: "4px",
    px: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  const menuDividerSx = {
    my: "4px",
    backgroundColor: "#E0E0E0",
  };

  const pendingMenuItemSx = {
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
  };

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: 4,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        background: "white",
        height: "auto",
        position: 'relative',
      }}
    >
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" sx={{ gap: 2 }}>
        <Box>
          <HeaderTypography path={path}>
            {path === "pending-request" ? (
              <>
                <ArrowBackIcon
                  onClick={() => navigate("/admin/restaurant-management")}
                  sx={{
                    cursor: "pointer",
                    color: "#2F7A52",
                    fontSize: "20px",
                    mr: 1,
                  }}
                />
                Pending Restaurant Requests
              </>
            ) : path === "suspend-account" ? (
              <>
                <ArrowBackIcon
                  onClick={() => navigate("/admin/restaurant-management")}
                  sx={{
                    cursor: "pointer",
                    color: "#E45040",
                    fontSize: "20px",
                    mr: 1,
                  }}
                />
                Suspended Accounts
              </>
            ) : (
              "Restaurant Details"
            )}
          </HeaderTypography>
        </Box>
        <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
          {path === "pending-request" ? (
            <Filterbutton
              sx={{ width: "100%" }}
              variant="contained"
              startIcon={<FilterListIcon />}
            >
              Filters
            </Filterbutton>
          ) : (
            path !== "suspend-account" && (
              <>
                <Suspendedbutton
                  variant="outlined"
                  onClick={suspendRequestHandler}
                >
                  Suspended Accounts
                </Suspendedbutton>
                <Exportbutton
                  variant="contained"
                  endIcon={
                    <img
                      src={download}
                      alt="download"
                      style={{ width: "18px", height: "18px" }}
                    />
                  }
                  id="basic-button-export"
                  aria-controls={open1 ? "export-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClicks1}
                >
                  Export
                </Exportbutton>
                <Menu
                  id="export-menu"
                  anchorEl={anchorE2}
                  open={open1}
                  onClose={handleCloses}
                  elevation={0}
                  PaperProps={{
                    style: { width: anchorE2 ? anchorE2.offsetWidth : undefined },
                    sx: { border: "1px solid #E0E0E0" },
                  }}
                >
                  <MenuItem onClick={handleCloses} sx={commonMenuItemSx}>
                    Week
                  </MenuItem>
                  <Divider sx={menuDividerSx} />
                  <MenuItem onClick={handleCloses} sx={commonMenuItemSx}>
                    Month
                  </MenuItem>
                  <Divider sx={menuDividerSx} />
                  <MenuItem onClick={handleCloses} sx={{ ...commonMenuItemSx, marginBottom: "0" }}>
                    Year
                  </MenuItem>
                </Menu>
                <Pendingreqbutton
                  variant="contained"
                  onClick={pendingRestaurentHandler}
                >
                  Pending Restaurant Request
                  <CircleIcon
                    sx={{
                      position: "absolute",
                      fontSize: "14px",
                      top: "-3px",
                      color: "red",
                      right: "-3px",
                    }}
                  />
                </Pendingreqbutton>
                <Filterbutton
                  variant="contained"
                  startIcon={<FilterListIcon />}
                >
                  Filters
                </Filterbutton>
              </>
            )
          )}
        </Box>
      </Box>
      <Box mt={2}>
        <TableContainer
          component={Paper}
          sx={{ ...TableContainerStyle, border: "1px solid #E0E0E0" }}
        >
          <Table sx={{ tableLayout: path === "pending-request" ? "fixed" : "auto" }}>
            <TableHead>
              <TableRow sx={TableHeadRow}>
                {tableheading.map((headings) => (
                  <StyledTableCell key={headings.id} path={path} isHeader={true}>
                    {headings.heading}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ whiteSpace: "normal" }}>
              {tabledetails.map((tdata, index) => (
                <TableRow key={tdata.id} sx={TableBodyRow}>
                  {path === "pending-request" ? (
                    <>
                      <StyledTableCell
                        path={path}
                        component="th"
                        scope="row"
                        isRestaurantName={true}
                        // Corrected navigation to the fixed path
                        onClick={() => navigate("/admin/restaurant-management/pending-restaurant-info")}
                      >
                        {(tdata as PendingDetails).restaurantname}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).vendorname}
                      </StyledTableCell>
                      <StyledTableCell path={path} isEmailCell={true}>
                        {(tdata as PendingDetails).email}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).contactno}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).location}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).abcno}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).foodcategory}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as PendingDetails).requestdate}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <StyledButton
                          id={`actions-button-${index}`}
                          aria-controls={open ? "pending-actions-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem" }} />}
                        >
                          Actions
                        </StyledButton>
                        <Menu
                          id="pending-actions-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          elevation={0}
                          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                          transformOrigin={{ vertical: "top", horizontal: "right" }}
                          PaperProps={{ sx: { border: "1px solid #E0E0E0" } }}
                        >
                          <MenuItem onClick={handleClose} sx={pendingMenuItemSx}>
                            <ListItemIcon>
                              <CheckCircleIcon fontSize="small" sx={{ color: "#2F7A52", fontSize: "16px" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: "#2F7A52" }}>Approve</ListItemText>
                          </MenuItem>
                          <Divider sx={menuDividerSx} />
                          <MenuItem onClick={handleClose} sx={{ ...pendingMenuItemSx, marginBottom: "0" }}>
                            <ListItemIcon>
                              <CancelIcon fontSize="small" sx={{ color: "#f42f25", fontSize: "16px" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: "#f42f25" }}>Reject</ListItemText>
                          </MenuItem>
                        </Menu>
                      </StyledTableCell>
                    </>
                  ) : path === "suspend-account" ? (
                    <>
                      <StyledTableCell path={path}>
                        {(tdata as Suspendaccounts).id}
                      </StyledTableCell>
                      <StyledTableCell
                        path={path}
                        component="th"
                        scope="row"
                        isRestaurantName={true}
                        onClick={() => navigate("/admin/restaurant-management/suspend-restaurant")}
                      >
                        {(tdata as Suspendaccounts).restaurantname}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as Suspendaccounts).contactno}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as Suspendaccounts).suspenddate}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as Suspendaccounts).location}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <CircleIcon
                          sx={{
                            marginTop: "5px",
                            marginRight: "2px",
                            fontSize: "8px",
                            color: (tdata as Suspendaccounts).status === "Active" ? "#68B266" : "#f42f25",
                          }}
                        />
                        {(tdata as Suspendaccounts).status}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <SuspendedButton
                          id={`actions-button-${index}`}
                          aria-controls={open ? "suspend-actions-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem", color: "#E45040" }} />}
                        >
                          Actions
                        </SuspendedButton>
                        <Menu
                          id="suspend-actions-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          elevation={0}
                          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                          transformOrigin={{ vertical: "top", horizontal: "right" }}
                          PaperProps={{ sx: { border: "1px solid #E0E0E0" } }}
                        >
                          <MenuItem
                            onClick={() => openModal('unsuspend')}
                            sx={{ ...pendingMenuItemSx, color: "black" }}
                          >
                            <ListItemText>Unsuspend</ListItemText>
                          </MenuItem>
                          <Divider sx={menuDividerSx} />
                          <MenuItem
                            onClick={() => openModal('delete')}
                            sx={{ ...pendingMenuItemSx, color: "black", marginBottom: "0" }}
                          >
                            <ListItemText>Delete</ListItemText>
                          </MenuItem>
                        </Menu>
                      </StyledTableCell>
                    </>
                  ) : (
                    <>
                      <StyledTableCell
                        path={path}
                        component="th"
                        scope="row"
                        isRestaurantName={true}
                        onClick={() => navigate(`restaurant-details`)}
                      >
                        {(tdata as RestaurantDetails).restaurantname}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as RestaurantDetails).vendorname}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as RestaurantDetails).contactno}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as RestaurantDetails).location}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as RestaurantDetails).gst}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        {(tdata as RestaurantDetails).totalrevenue}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <CircleIcon
                          sx={{
                            marginTop: "5px",
                            marginRight: "2px",
                            fontSize: "8px",
                            color: (tdata as RestaurantDetails).status === "Active" ? "#68B266" : "#E45040",
                          }}
                        />
                        {(tdata as RestaurantDetails).status}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <StyledButton
                          id={`actions-button-${index}`}
                          aria-controls={open ? "restaurent-actions-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem" }} />}
                        >
                          Actions
                        </StyledButton>
                        <Menu
                          id="restaurent-actions-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          elevation={0}
                          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                          transformOrigin={{ vertical: "top", horizontal: "right" }}
                          PaperProps={{ sx: { border: "1px solid #E0E0E0" } }}
                        >
                          <MenuItem
                            onClick={() => openModal('suspend')}
                            sx={{
                              ...pendingMenuItemSx,
                              color: "#000000",
                              marginBottom: "0",
                              pr: "36px",
                            }}
                          >
                            <ListItemText>Suspend</ListItemText>
                          </MenuItem>
                        </Menu>
                      </StyledTableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <PaginationBox />
      </Box>
      {isModalOpen && modalType === 'delete' && (
        <Box
          sx={{
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
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FF3326',
              borderRadius: '8px',
              p: 4,
              boxShadow: 3,
              textAlign: 'center',
              maxWidth: '400px',
              width: '90%',
            }}
          >
            <Box sx={{
              width: '140px',
              height: '140px',
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto'
            }}>
              {/* Using the imported 'alert' image here */}
              <img src={alert} alt="Alert Icon" style={{ width: '150px', height: '150px' }} />
            </Box>
            <Typography sx={{ color: '#ffffffff', mb: 3, fontSize: '20px' }}>
              Are you sure you want to delete the Suspended Account?
            </Typography>
            <Typography sx={{
              fontFamily: 'Nunito Sans',
              fontSize: '15px',
              lineHeight: '100%',
              letterSpacing: '-0.11px',
              textAlign: 'center',
              mb: 4,
              color: '#fcfcfcff',
              opacity: 1
            }}>
              <Box component="span" sx={{ fontWeight: 700 }}>Note:</Box> This action is permanent. Once deleted, the <br /> account and its data cannot be recovered.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={{
                  width: '100px',
                  backgroundColor: '#FFFFFF',
                  color: '#FF3326',
                  borderColor: '#FF3326',
                  
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmDelete}
                sx={{
                  width: '100px',
                  backgroundColor: '#ffffffff',
                  color: '#FF3326',
                  
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {isModalOpen && modalType === 'suspend' && (
        <Box
          sx={{
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
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              p: 4,
              boxShadow: 3,
              textAlign: 'center',
              maxWidth: '400px',
              width: '90%',
            }}
          >
            <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
              Are you sure you want to Suspend the Account?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={{
                  color: '#FF3326',
                  borderColor: '#FF3326',
                  width: '100px',
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmSuspend}
                sx={{
                  backgroundColor: '#FF3326',
                  '&:hover': {
                    backgroundColor: '#FF3326',
                  }
                }}
              >
                Suspend
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {isModalOpen && modalType === 'unsuspend' && (
        <Box
          sx={{
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
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              p: 4,
              boxShadow: 3,
              textAlign: 'center',
              maxWidth: '400px',
              width: '90%',
            }}
          >
            <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
              Are you sure you want to Unsuspend the Account?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={{
                  color: '#FF3326',
                  borderColor: '#FF3326',
                  width: '100px',
                  '&:hover': {
                    borderColor: '#FF3326',
                    backgroundColor: 'rgba(47, 122, 82, 0.04)',
                    
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmUnsuspend}
                sx={{
                  backgroundColor: '#FF3326',
                  '&:hover': {
                    backgroundColor: '#FF3326',
                  }
                }}
              >
                Unsuspend
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RestaurantManagement;