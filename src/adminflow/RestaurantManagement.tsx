import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/system";
import {
  Exportbutton,
  Pendingreqbutton,
  Suspendedbutton,
  Filterbutton,
} from "../adminstyles/Adminstyles";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Suspendpopup from "./popups/Suspendpopup";
import CircleIcon from '@mui/icons-material/Circle';

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

  const restaurentheading: Restaurentheading[] = [
    { id: 1, heading: "Restaurant Name" },
    { id: 2, heading: "Vendor Name" },
    { id: 3, heading: "Contact Number" },
    { id: 4, heading: "Location" },
    { id: 5, heading: "Tax" },
    { id: 6, heading: "Total Revenue" },
    { id: 7, heading: "Status" },
    { id: 8, heading: "Actions" },
  ];
  const restaurentdetails: RestaurantDetails[] = [
    {
      id: 1,
      restaurantname: "The Urban Pantry",
      vendorname: "Jamie Cook",
      contactno: "+61 412 345 678",
      location: "sydney",
      gst: "10%",
      totalrevenue: "$2041.96",
      status: "Active",
    },
    {
      id: 2,
      restaurantname: "The Urban Pantry",
      vendorname: "Jamie Cook",
      contactno: "+61 412 345 678",
      location: "sydney",
      gst: "10%",
      totalrevenue: "$2041.96",
      status: "Active",
    },
    {
      id: 3,
      restaurantname: "The Urban Pantry",
      vendorname: "Jamie Cook",
      contactno: "+61 412 345 678",
      location: "sydney",
      gst: "10%",
      totalrevenue: "$2041.96",
      status: "Active",
    },
    {
      id: 4,
      restaurantname: "The Urban Pantry",
      vendorname: "Jamie Cook",
      contactno: "+61 412 345 678",
      location: "sydney",
      gst: "10%",
      totalrevenue: "$2041.96",
      status: "Active",
    },
    {
      id: 5,
      restaurantname: "The Urban Pantry",
      vendorname: "Jamie Cook",
      contactno: "+61 412 345 678",
      location: "sydney",
      gst: "10%",
      totalrevenue: "$2041.96",
      status: "Active",
    },
  ];

  const pendingheadings: Pendingheadings[] = [
    { id: 1, heading: "Restuarent Name" },
    { id: 2, heading: "Vendor Name" },
    { id: 3, heading: "Email" },
    { id: 4, heading: "Contact Number" },
    { id: 5, heading: "Location" },
    { id: 6, heading: "ABC/ABN No" },
    { id: 7, heading: "Food Categories" },
    { id: 8, heading: "Request Date" },
    { id: 9, heading: "Action" },
  ];

  const pendingdetails: PendingDetails[] = [
    {
      id: 1,
      restaurantname: "Green Kitchen Co",
      vendorname: "John Smith",
      email: "example@gmail.com",
      contactno: "+61 400 123 456",
      location: "45 king St,Melbourne, VIC",
      abcno: 123456,
      foodcategory: "Vegon,Organic,Salads",
      requestdate: "08-5-2025",
    },
    {
      id: 2,
      restaurantname: "Green Kitchen Co",
      vendorname: "John Smith",
      email: "example@gmail.com",
      contactno: "+61 400 123 456",
      location: "45 king St,Melbourne, VIC",
      abcno: 123456,
      foodcategory: "Vegon,Organic,Salads",
      requestdate: "08-5-2025",
    },
    {
      id: 3,
      restaurantname: "Green Kitchen Co",
      vendorname: "John Smith",
      email: "example@gmail.com",
      contactno: "+61 400 123 456",
      location: "45 king St,Melbourne, VIC",
      abcno: 123456,
      foodcategory: "Vegon,Organic,Salads",
      requestdate: "08-5-2025",
    },
    {
      id: 4,
      restaurantname: "Green Kitchen Co",
      vendorname: "John Smith",
      email: "example@gmail.com",
      contactno: "+61 400 123 456",
      location: "45 king St,Melbourne, VIC",
      abcno: 123456,
      foodcategory: "Vegon,Organic,Salads",
      requestdate: "08-5-2025",
    },
    {
      id: 5,
      restaurantname: "Green Kitchen Co",
      vendorname: "John Smith",
      email: "example@gmail.com",
      contactno: "+61 400 123 456",
      location: "45 king St,Melbourne, VIC",
      abcno: 123456,
      foodcategory: "Vegon,Organic,Salads",
      requestdate: "08-5-2025",
    },
  ];

  const suspendedheadings: Suspendedheadings[] = [
    { id: 1, heading: "S.No" },
    { id: 2, heading: "Restuarent Name" },
    { id: 3, heading: "User Contact" },
    { id: 4, heading: "Date Suspended" },
    { id: 5, heading: "Location" },
    { id: 6, heading: "Status" },
    { id: 7, heading: "Actions" },
  ];

  const suspendaccounts: Suspendaccounts[] = [
    {
      id: 1,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
    {
      id: 2,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
    {
      id: 3,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
    {
      id: 4,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
    {
      id: 5,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
    {
      id: 6,
      restaurantname: "The Urban Pantry",
      contactno: "+61 412 345 678",
      suspenddate: "02/06/2025",
      location: "Sydney",
      status: "Inactive",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //for export button
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE2);
  const handleClicks1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };
  //for export button

  const location = useLocation();
  const pathname = location.pathname;
  const path = pathname.split("/").pop();
  console.log("Current path", path);

  //default declaration

  type Tableheading = Restaurentheading;
  type Tabledetails = RestaurantDetails | PendingDetails | Suspendaccounts;

  let tableheading: Tableheading[] = restaurentheading;
  let tabledetails: Tabledetails[] = restaurentdetails;

  switch (path) {
    case "pending-request":
      tableheading = pendingheadings;
      tabledetails = pendingdetails;
      break;
    case "suspend-account":
      tableheading = suspendedheadings;
      tabledetails = suspendaccounts;
      break;
    default:
      tableheading = restaurentheading;
      tabledetails = restaurentdetails;
      break;
  }

  function pendingRestaurentHandler() {
    navigate("pending-request");
  }

  function suspendRequestHandler() {
    navigate("suspend-account");
  }

//suspend popup 
const [suspendOpen, setsuspendOpen] = React.useState<boolean | null>(false);

const suspendPopuphandler=()=>{
   setsuspendOpen(true)
}

const handleClickOpen=()=>{
   setsuspendOpen(false)
}

  return (
    <Box sx={{ background: "white", height: "auto"}}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        {/* restaurent details start */}
        <Grid container justifyContent="space-between">
          <Grid size={{ md: 6, sm: 12 }}>
            <Typography color={path === "suspend-account" ? "red" : "#2F7A52"}>
              {path === "pending-request"
                ? "Pending Restaurant Requests"
                : path === "suspend-account"
                ? "Suspended Accounts"
                : "Restaurant Details"}
            </Typography>
          </Grid>
          <Grid size={{ md: 6, sm: 12 }}>
            {path !== "suspend-account" && (
              <Stack
                display="flex"
                direction="row"
                useFlexGap
                spacing={2}
                flexWrap="wrap"
                justifyContent="flex-end"
                gap={{ xs: 1 }}
              >
                {/* Show only Filter for pending-request */}
                {path === "pending-request" ? (
                  <Filterbutton
                    variant="contained"
                    startIcon={<FilterListIcon />}
                  >
                    Filters
                  </Filterbutton>
                ) : (
                  // Show all buttons for restaurant-management or any other case
                  <>
                    <Suspendedbutton
                      variant="outlined"
                      onClick={suspendRequestHandler}
                    >
                      Suspended Accounts
                    </Suspendedbutton>

                    <Exportbutton
                      variant="contained"
                      endIcon={<DownloadIcon />}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClicks1}
                    >
                      Export
                    </Exportbutton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorE2}
                      open={open1}
                      onClose={handleCloses}
                    >
                      <MenuItem onClick={handleCloses}>Week</MenuItem>
                      <MenuItem onClick={handleCloses}>Month</MenuItem>
                      <MenuItem onClick={handleCloses}>Year</MenuItem>
                    </Menu>

                    <Pendingreqbutton
                      variant="contained"
                      onClick={pendingRestaurentHandler}
                    >
                      Pending Restaurant Request
                    </Pendingreqbutton>

                    <Filterbutton
                      variant="contained"
                      startIcon={<FilterListIcon />}
                    >
                      Filters
                    </Filterbutton>
                  </>
                )}
              </Stack>
            )}
          </Grid>
        </Grid>
        {/* restaurent details end */}
        <Box mt={2}>
         <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {tableheading.map((headings) => (
                    <TableCell
                      sx={{
                         color: path === "suspend-account" ? "red" : "#2F7A52",
                        fontWeight: 700,
                      }}
                    >
                      {headings.heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledetails.map((tdata) => (
                  <TableRow key={tdata.id}>
                    {path === "pending-request" ? (
                      <>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#2F7A52", textDecoration: "underline" }}
                        >
                          {tdata.restaurantname}
                        </TableCell>
                        {path === "pending-request" &&
                          "vendorname" in tdata && (
                            <TableCell component="th" scope="row">
                              {tdata.vendorname}
                            </TableCell>
                          )}
                        {path === "pending-request" && "email" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.email}
                          </TableCell>
                        )}

                        <TableCell component="th" scope="row">
                          {tdata.contactno}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {tdata.location}
                        </TableCell>
                        {path === "pending-request" && "abcno" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.abcno}
                          </TableCell>
                        )}
                        {path === "pending-request" &&
                          "foodcategory" in tdata && (
                            <TableCell component="th" scope="row">
                              {tdata.foodcategory}
                            </TableCell>
                          )}

                        {path === "pending-request" &&
                          "requestdate" in tdata && (
                            <TableCell component="th" scope="row">
                              {tdata.requestdate}
                            </TableCell>
                          )}

                        <TableCell component="th" scope="row">
                          <Button
                            sx={{ border: "1px groove gray" }}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <CheckCircleIcon
                                  fontSize="small"
                                  sx={{ color: "#2F7A52" }}
                                />
                              </ListItemIcon>
                              <ListItemText>Approve</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <CancelIcon
                                  fontSize="small"
                                  sx={{ color: "red" }}
                                />
                              </ListItemIcon>
                              <ListItemText>Reject</ListItemText>
                            </MenuItem>
                          </Menu>
                        </TableCell>
                      </>
                    ) : path === "suspend-account" ? (
                      <>
                        <TableCell component="th" scope="row" >
                          {tdata.id}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#2F7A52", textDecoration: "underline" }}
                         >
                          {tdata.restaurantname}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {tdata.contactno}
                        </TableCell>
                        {path === "suspend-account" &&
                          "suspenddate" in tdata && (
                            <TableCell component="th" scope="row">
                              {tdata.suspenddate}
                            </TableCell>
                          )}

                        <TableCell component="th" scope="row">
                          {tdata.location}
                        </TableCell>
                        {path === "suspend-account" && "status" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.status}
                          </TableCell>
                        )}
                        <TableCell component="th" scope="row">
                          <Button
                            sx={{ color: "red", border: "1px groove gray" }}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={handleClose}>UnSuspend</MenuItem>
                          </Menu>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#2F7A52", textDecoration: "underline",cursor:'pointer'}}
                          onClick={()=>navigate('restaurant-details')}>
                          {tdata.restaurantname}
                        </TableCell>
                        {"vendorname" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.vendorname}
                          </TableCell>
                        )}

                        <TableCell component="th" scope="row">
                          {tdata.contactno}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {tdata.location}
                        </TableCell>
                        {"gst" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.gst}
                          </TableCell>
                        )}
                        {"totalrevenue" in tdata && (
                          <TableCell component="th" scope="row">
                            {tdata.totalrevenue}
                          </TableCell>
                        )}

                        {"status" in tdata && (
                          <TableCell component="th" scope="row">
                           <CircleIcon sx={{ marginTop: '5px', marginRight: '2px', fontSize: "11px",color:'#2F7A52' }} /> {tdata.status}
                          </TableCell>
                        )}

                        <TableCell component="th" scope="row">
                          <Button
                            sx={{ border: "1px groove gray" }}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={suspendPopuphandler}>Suspend</MenuItem>
                            {suspendOpen&&<Suspendpopup  suspenopen={suspendOpen} supendclose={handleClickOpen} />}
                          </Menu>
                        </TableCell>
                      </>
                    )}{" "}
                    {/* //1st condition end */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantManagement;
