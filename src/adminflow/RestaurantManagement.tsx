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
import { restaurantManagementStyles } from "../adminstyles/RestaurantManagement.styles";

// Assuming these assets and data files are available
import download from "../assets/downloadicon.png";
import data from "./data.json";
import {
  HeaderTypography,
  StyledTableCell,
  PendingTableCell,
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
      tabledetails = data.pendingdetails as unknown as Tabledetails[];
      break;
    case "suspend-account":
      tableheading = suspendedheadings;
      tabledetails = data.suspendedaccounts as unknown as Tabledetails[];
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

  const styles = restaurantManagementStyles;

  return (
    <Box sx={styles.mainContainer}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" sx={styles.headerContainer}>
        <Box>
          <HeaderTypography path={path}>
            {path === "pending-request" ? (
              <>
                <ArrowBackIcon
                  onClick={() => navigate("/admin/restaurant-management")}
                  sx={styles.backIconPending}
                />
                Pending Restaurant Requests
              </>
            ) : path === "suspend-account" ? (
              <>
                <ArrowBackIcon
                  onClick={() => navigate("/admin/restaurant-management")}
                  sx={styles.backIconSuspended}
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
              sx={styles.filterButtonFull}
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
                      style={styles.downloadIcon}
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
                    sx: styles.exportMenuPaper,
                  }}
                >
                  <MenuItem onClick={handleCloses} sx={styles.exportMenuItem}>
                    Week
                  </MenuItem>
                  <Divider sx={styles.menuDivider} />
                  <MenuItem onClick={handleCloses} sx={styles.exportMenuItem}>
                    Month
                  </MenuItem>
                  <Divider sx={styles.menuDivider} />
                  <MenuItem onClick={handleCloses} sx={styles.exportMenuItemLast}>
                    Year
                  </MenuItem>
                </Menu>
                <Pendingreqbutton
                  variant="contained"
                  onClick={pendingRestaurentHandler}
                >
                  Pending Restaurant Request
                  <CircleIcon sx={styles.notificationCircle} />
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
          <Table sx={styles.table(path)}>
            <TableHead>
              <TableRow sx={TableHeadRow}>
                {tableheading.map((headings) => (
                  <StyledTableCell key={headings.id} path={path} isHeader={true}>
                    {headings.heading}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={styles.tableBody}>
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
                      <PendingTableCell isEmailCell={true}>
                        {(tdata as PendingDetails).email}
                      </PendingTableCell>
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
                          endIcon={<KeyboardArrowDownIcon sx={styles.arrowDown} />}
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
                          PaperProps={{ sx: styles.actionMenuPaper }}
                        >
                          <MenuItem onClick={handleClose} sx={styles.pendingMenuItem}>
                            <ListItemIcon>
                              <CheckCircleIcon fontSize="small" sx={styles.approveIcon} />
                            </ListItemIcon>
                            <ListItemText sx={styles.approveText}>Approve</ListItemText>
                          </MenuItem>
                          <Divider sx={styles.menuDivider} />
                          <MenuItem onClick={handleClose} sx={styles.pendingMenuItemLast}>
                            <ListItemIcon>
                              <CancelIcon fontSize="small" sx={styles.rejectIcon} />
                            </ListItemIcon>
                            <ListItemText sx={styles.rejectText}>Reject</ListItemText>
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
                        <CircleIcon sx={styles.statusIcon((tdata as Suspendaccounts).status)} />
                        {(tdata as Suspendaccounts).status}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <SuspendedButton
                          id={`actions-button-${index}`}
                          aria-controls={open ? "suspend-actions-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon sx={styles.suspendArrowDown} />}
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
                          PaperProps={{ sx: styles.actionMenuPaper }}
                        >
                          <MenuItem
                            onClick={() => openModal('unsuspend')}
                            sx={styles.suspendMenuItemBlack}
                          >
                            <ListItemText>Unsuspend</ListItemText>
                          </MenuItem>
                          <Divider sx={styles.menuDivider} />
                          <MenuItem
                            onClick={() => openModal('delete')}
                            sx={styles.suspendMenuItemBlackLast}
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
                        <CircleIcon sx={styles.statusIcon((tdata as RestaurantDetails).status)} />
                        {(tdata as RestaurantDetails).status}
                      </StyledTableCell>
                      <StyledTableCell path={path}>
                        <StyledButton
                          id={`actions-button-${index}`}
                          aria-controls={open ? "restaurent-actions-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon sx={styles.arrowDown} />}
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
                          PaperProps={{ sx: styles.actionMenuPaper }}
                        >
                          <MenuItem
                            onClick={() => openModal('suspend')}
                            sx={styles.restaurantSuspendMenuItem}
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
        <Box sx={styles.modalOverlay}>
          <Box sx={styles.deleteModalContent}>
            <Box sx={styles.alertIconContainer}>
              {/* Using the imported 'alert' image here */}
              <img src={alert} alt="Alert Icon" style={styles.alertIcon} />
            </Box>
            <Typography sx={styles.deleteModalTitle}>
              Are you sure you want to delete the Suspended Account?
            </Typography>
            <Typography sx={styles.deleteModalNote}>
              <Box component="span" sx={styles.deleteModalNoteBold}>Note:</Box> This action is permanent. Once deleted, the <br /> account and its data cannot be recovered.
            </Typography>
            <Box sx={styles.modalButtonContainer}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={styles.deleteModalCancelButton}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmDelete}
                sx={styles.deleteModalDeleteButton}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {isModalOpen && modalType === 'suspend' && (
        <Box sx={styles.modalOverlay}>
          <Box sx={styles.suspendModalContent}>
            <Typography variant="h6" sx={styles.suspendModalTitle}>
              Are you sure you want to Suspend the Account?
            </Typography>
            <Box sx={styles.suspendModalButtonContainer}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={styles.suspendModalCancelButton}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmSuspend}
                sx={styles.suspendModalSuspendButton}
              >
                Suspend
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {isModalOpen && modalType === 'unsuspend' && (
        <Box sx={styles.modalOverlay}>
          <Box sx={styles.unsuspendModalContent}>
            <Typography variant="h6" sx={styles.unsuspendModalTitle}>
              Are you sure you want to Unsuspend the Account?
            </Typography>
            <Box sx={styles.unsuspendModalButtonContainer}>
              <Button
                variant="outlined"
                onClick={closeModal}
                sx={styles.unsuspendModalCancelButton}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmUnsuspend}
                sx={styles.unsuspendModalUnsuspendButton}
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