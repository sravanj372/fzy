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
  Filterbutton,
  Pendingreqbutton,
} from "../adminstyles/Adminstyles";
import PaginationBox from "./PaginationBox";
import { restaurantManagementStyles } from "../adminstyles/RestaurantManagement.styles";

// Assuming these assets and data files are available
import {
  HeaderTypography,
  StyledTableCell,
  TableHeadRow,
  TableContainerStyle,
  TableBodyRow,
} from "../styles/RestaurantManagementStyles";

// New data interfaces for Bank Verification
interface BankVerificationHeadings {
  id: number;
  heading: string;
}

interface BankVerificationDetails {
  id: number;
  restaurantName: string;
  accountHolderName: string;
  bankName: string;
  bsbCode: string;
  accountNumber: string;
  phoneNumber: string;
}

// Mock data for the Bank Verification table
const bankVerificationHeadings: BankVerificationHeadings[] = [
  { id: 1, heading: "Restaurant Name" },
  { id: 2, heading: "Account Holder Name" },
  { id: 3, heading: "Bank Name" },
  { id: 4, heading: "BSB Code" },
  { id: 5, heading: "Account Number" },
  { id: 6, heading: "Phone Number" },
  { id: 7, heading: "Action" },
];

const bankVerificationDetails: BankVerificationDetails[] = [
  { id: 1, restaurantName: 'The Urban Pantry', accountHolderName: 'Jamie Cook', bankName: 'Commonwealth Bank', bsbCode: '062000', accountNumber: '12345678', phoneNumber: '+61 412 345 678' },
  { id: 2, restaurantName: 'Marufuku Ramen', accountHolderName: 'Smith', bankName: 'Bendigo Bank', bsbCode: '923000', accountNumber: '34567892', phoneNumber: '+61 512 543 83' },
  { id: 3, restaurantName: 'Gary Danko', accountHolderName: 'Jasmine', bankName: 'Westpac Bank', bsbCode: '842000', accountNumber: '67483921', phoneNumber: '+61 322 565 998' },
  { id: 4, restaurantName: 'San Tung', accountHolderName: 'Johnson', bankName: 'Suncorp Bank', bsbCode: '020049', accountNumber: '33458769', phoneNumber: '+61 122 675 994' },
  { id: 5, restaurantName: 'Hog Island Oyster', accountHolderName: 'Julie', bankName: 'Commonwealth Bank', bsbCode: '122000', accountNumber: '18247588', phoneNumber: '+61 482 125 548' },
];

const BankVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const styles = restaurantManagementStyles;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApprove = () => {
    console.log("Request Approved!");
    handleClose();
    // Logic to handle approval, e.g., API call
  };

  const handleReject = () => {
    console.log("Request Rejected!");
    handleClose();
    // Logic to handle rejection, e.g., API call
  };

  return (
    <paper>
    <Box sx={styles.mainContainer}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" sx={styles.headerContainer}>
        <Box>
          <HeaderTypography>
            Restaurant's Bank Verification
          </HeaderTypography>
        </Box>
        <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
          <Pendingreqbutton
            variant="contained"
            sx={{ mr: 2 }} // Added margin to match the design
          >
            Pending Restaurant Request
            <CircleIcon sx={styles.notificationCircle} />
          </Pendingreqbutton>
          <Filterbutton
            variant="outlined"
            startIcon={<FilterListIcon />}
          >
            Filters
          </Filterbutton>
        </Box>
      </Box>

      <Box mt={2}>
        <TableContainer
          component={Paper}
          sx={{ ...TableContainerStyle, border: "1px solid #E0E0E0" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={TableHeadRow}>
                {bankVerificationHeadings.map((headings) => (
                  <StyledTableCell key={headings.id} isHeader={true}>
                    {headings.heading}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bankVerificationDetails.map((tdata, index) => (
                <TableRow key={tdata.id} sx={TableBodyRow}>
                  <StyledTableCell component="th" scope="row">
                    {tdata.restaurantName}
                  </StyledTableCell>
                  <StyledTableCell>{tdata.accountHolderName}</StyledTableCell>
                  <StyledTableCell>{tdata.bankName}</StyledTableCell>
                  <StyledTableCell>{tdata.bsbCode}</StyledTableCell>
                  <StyledTableCell>{tdata.accountNumber}</StyledTableCell>
                  <StyledTableCell>{tdata.phoneNumber}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: 'none', borderRadius: '8px' }}
                      endIcon={<KeyboardArrowDownIcon />}
                      onClick={handleClick}
                    >
                      Actions
                    </Button>
                    <Menu
                      id="pending-actions-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      elevation={0}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                      <MenuItem onClick={handleApprove}>
                        <ListItemIcon>
                          <CheckCircleIcon fontSize="small" color="success" />
                        </ListItemIcon>
                        <ListItemText>Approve</ListItemText>
                      </MenuItem>
                      <MenuItem onClick={handleReject}>
                        <ListItemIcon>
                          <CancelIcon fontSize="small" color="error" />
                        </ListItemIcon>
                        <ListItemText>Reject</ListItemText>
                      </MenuItem>
                    </Menu>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
     
    </Box>
     <Box mt={2}>
  {/* This separate box holds the PaginationBox */}
  <PaginationBox />
</Box>
</paper>
  );
};

export default BankVerification;