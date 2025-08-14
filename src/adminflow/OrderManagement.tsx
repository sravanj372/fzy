import { Box, Button, Paper, Typography } from "@mui/material";
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
import PaginationBox from "./PaginationBox";
import { useNavigate } from "react-router-dom";
import orderData from './data.json'; // Import the data here
import Divider from "@mui/material/Divider"; // Import Divider
import download from "../assets/downloadicon.png"

const OrderManagement = () => {
  const navigate = useNavigate();

  // Destructure the data from the imported JSON file using the new names
  const { ordermdetails, ordermheadings } = orderData;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // for export button
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE2);
  const handleClicks1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };
  // for export button end

  // live orders button
  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE3);
  const handleClicks2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE3(null);
  };
  // live order button end

  // Common styles for menu items
  const menuItemSx = {
    height: '24px', // Standard height for menu items
    fontSize: '0.875rem', // Standard font size
    color: 'black', // Default text color for menu items
    px: '16px', // Standard horizontal padding
    '&:hover': {
      backgroundColor: '#f5f5f5', // Light hover background
    },
  };

  // Styles for green menu items
  const greenMenuItemSx = {
    ...menuItemSx, // Inherit common styles
    color: '#2F7A52', // Green color for text
  };

  // Common styles for menu dividers
  const menuDividerSx = {
    my: '4px', // Vertical margin for dividers
    backgroundColor: '#E0E0E0' // Color for dividers
  };

  // Export menu items
  const exportMenuItems = ["Week", "Month", "Year"];
  // Live orders menu items
  const liveOrdersMenuItems = ["Scheduled Orders", "Completed Orders", "Cancelled Orders"];
  // Actions menu items
  const actionsMenuItems = ["View Details", "Download Invoice"];


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }} >
      <Box sx={{ p: 3, background: "white", height: "auto", border: "1px solid green", borderRadius: 4, }} component={Paper}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
          <Box>
  <Typography sx={{ color: "#2F7A52", fontSize: "22px" }}>Order Details</Typography>
</Box>
          <Box>
            <Box display="flex" gap={3} flexWrap="wrap">
              <Exportbutton
                endIcon={<img src={download} alt="Download Icon" style={{ width: 18, height: 18 }} />}
                variant="contained"
                id="basic-button"
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  sx: {
                    border: '1px solid #E0E0E0',
                    minWidth: anchorE2 ? anchorE2.offsetWidth : undefined
                  }
                }}
              >
                {exportMenuItems.map((item, index) => (
                  <React.Fragment key={item}>
                    <MenuItem onClick={handleCloses} sx={greenMenuItemSx}>
                      {item}
                    </MenuItem>
                    {index < exportMenuItems.length - 1 && <Divider sx={menuDividerSx} />}
                  </React.Fragment>
                ))}
              </Menu>

              <Liveorders
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                id="live-orders-button"
                aria-controls={open2 ? "live-orders-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClicks2}
              >
                Live orders
              </Liveorders>
              <Menu
                id="live-orders-menu"
                anchorEl={anchorE3}
                open={open2}
                onClose={handleClose1}
                elevation={0}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  sx: {
                    border: '1px solid #E0E0E0',
                    minWidth: anchorE3 ? anchorE3.offsetWidth : undefined
                  }
                }}
              >
                {liveOrdersMenuItems.map((item, index) => (
                  <React.Fragment key={item}>
                    <MenuItem onClick={handleClose1} sx={greenMenuItemSx}>
                      {item}
                    </MenuItem>
                    {index < liveOrdersMenuItems.length - 1 && <Divider sx={menuDividerSx} />}
                  </React.Fragment>
                ))}
              </Menu>

              <Filterbutton variant="contained" startIcon={<FilterListIcon />} sx={{ mr: 2 }}>
                Filters
              </Filterbutton>
            </Box>
          </Box>
        </Box>
        <Box mt={2}>
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table size="small" sx={{ tableLayout: 'fixed', width: '100%' }}>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {ordermheadings.map((heading) => (
                    <TableCell
                      key={heading.id}
                      sx={{
                        p: 2,
                        color: '#2F7A52',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        textAlign: 'center'
                      }}
                    >
                      {heading.heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {ordermdetails.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.orderid}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.customername}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.restaurantname}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.area}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.date}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.pickuptime}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      {order.amount}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      <Typography
                        component="span"
                        bgcolor={order.status === "Cancelled" ? "red" : "#68B266"}
                        p={0.85}
                        color="white"
                        borderRadius={4}
                        fontSize={15}
                      >
                        {order.status}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                      <Button
                        sx={{ border: "1px groove gray" }}
                        id="actions-button"
                        aria-controls={open ? "actions-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        Actions
                      </Button>
                      <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        elevation={0}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                          sx: {
                            border: '1px solid #E0E0E0',
                            minWidth: anchorEl ? anchorEl.offsetWidth : undefined
                          }
                        }}
                      >
                        {actionsMenuItems.map((item, index) => (
                          <React.Fragment key={item}>
                            <MenuItem onClick={() => {
                              handleClose();
                              if (item === "View Details") {
                                navigate('order-bills', { state: { orderId: order.orderid } });
                              }
                              // Add logic for "Download Invoice" here if needed
                            }} sx={menuItemSx}>
                              {item}
                            </MenuItem>
                            {index < actionsMenuItems.length - 1 && <Divider sx={menuDividerSx} />}
                          </React.Fragment>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box>
        <PaginationBox />
      </Box>
    </Box>
  );
};

export default OrderManagement;