import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import FilterListIcon from "@mui/icons-material/FilterList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Exportbutton,
  Filterbutton,
  Liveorders,
} from "../adminstyles/Adminstyles";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";

const OrderManagement = () => {
  const orderdetails = [
    {
      id: 1,
      orderid: "ORD-2030",
      restaurantname: "The Urban Pantry",
      area: "Sydney,NSW",
      date: "02 May 2025, 11:30 AM",
      pickuptime: "11:00AM",
      amount: "$620.89",
      status: "Delivered",
    },
    {
      id: 2,
      orderid: "ORD-2031",
      restaurantname: "Fog Harbor Fish House",
      area: "Cannberra",
      date: "04 May 2025, 11:30 AM",
      pickuptime: "12:00AM",
      amount: "$640.89",
      status: "Delivered",
    },
    {
      id: 3,
      orderid: "ORD-2032",
      restaurantname: "Marufuku Ramen",
      area: "New South Wales",
      date: "06 May 2025, 11:30 AM",
      pickuptime: "10:00AM",
      amount: "$620.89",
      status: "Cancelled",
    },
    {
      id: 4,
      orderid: "ORD-2033",
      restaurantname: "San Tung",
      area: "Victoria",
      date: "09 May 2025, 11:30 AM",
      pickuptime: "12:30AM",
      amount: "$531.89",
      status: "Delivered",
    },
    {
      id: 5,
      orderid: "ORD-2034",
      restaurantname: "Hog Island Oyster",
      area: "Western Australia",
      date: "08 May 2025, 11:30 AM",
      pickuptime: "04:30PM",
      amount: "$610.89",
      status: "Delivered",
    },
  ];

  const orderheadings = [
    { id: 1, heading: "Customer Name" },
    { id: 2, heading: "Restaurant Name" },
    { id: 3, heading: "Area" },
    { id: 4, heading: "Date & Time" },
    { id: 5, heading: "Pickup Time" },
    { id: 6, heading: "Amount(AUS)" },
    { id: 7, heading: "Status" },
    { id: 8, heading: "Action" },
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
  //for export button end

  //live orders button

  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE3);
  const handleClicks2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE3(null);
  };

  //live order button end

  return (
    <Box sx={{ background: "white", height: "auto", p: 1 }}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        <Grid container justifyContent="space-between">
           <Grid size={{ md: 6, sm: 12 }}>
            <Typography color="#2F7A52">Order Details</Typography>
           </Grid>
           <Grid size={{ md: 6, sm: 12 }}>
            <Stack
              display="flex"
              direction="row"
              useFlexGap
              spacing={2}
              flexWrap="wrap"
              justifyContent="flex-end"
              gap={{ xs: 1 }}
            >
              <Exportbutton
                endIcon={<DownloadIcon />}
                variant="contained"
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

              <Liveorders
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                id="basic-button"
                aria-controls={open2 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClicks2}
              >
                Liveorders
              </Liveorders>
              <Menu
                id="basic-menu"
                anchorEl={anchorE3}
                open={open2}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}>Schedule Orders</MenuItem>
                <MenuItem onClick={handleClose1}>Completed Orders</MenuItem>
                <MenuItem onClick={handleClose1}>Cancelled Orders</MenuItem>
              </Menu>

              <Filterbutton variant="contained" startIcon={<FilterListIcon />}>
                Filters
              </Filterbutton>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {orderheadings.map((heading) => (
                    <TableCell>{heading.heading}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {orderdetails.map((order) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {order.orderid}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.restaurantname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.area}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.pickuptime}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.amount}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography
                        component="span"
                        bgcolor={
                          order.status == "Cancelled" ? "red" : "#68B266"
                        }
                        p={1}
                        color="white"
                        borderRadius={5}
                        fontSize={13}
                      >
                        {order.status}
                      </Typography>
                    </TableCell>

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
                        <MenuItem onClick={handleClose}>View Details</MenuItem>
                        <MenuItem onClick={handleClose}>
                          Download Invoice
                        </MenuItem>
                      </Menu>
                    </TableCell>
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

export default OrderManagement;
