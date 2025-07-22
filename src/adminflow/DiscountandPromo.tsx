import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";
import { Filterbutton } from "../adminstyles/Adminstyles";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react'
import DeleteCoupon from "./popups/DeleteCoupon";
import PaginationBox from "./PaginationBox";

const DiscountandPromo = () =>{
  
  const navigate = useNavigate();

  const discountheadings = [
    { id: 1, heading: "Restaurant Name" },
    { id: 2, heading: "Coupon Code" },
    { id: 3, heading: "Description" },
    { id: 4, heading: "Valid Till" },
    { id: 5, heading: "Eligibility Condition" },
    { id: 6, heading: "Discount Percentage" },
    { id: 7, heading: "Status" },
    { id: 8, heading: "Action" },
  ];

  const discountdetails = [
    {
      id: 1,
      restaurantname: "The Urban Pantry",
      couponcode: "SAVE 10",
      description: "10% OFF",
      vaidtill: "May 30, 2025",
      eligibility: "Orders above $30",
      discount: "12%",
      status: "Active",
    },
    {
      id: 2,
      restaurantname: "The Urban Pantry",
      couponcode: "SAVE 10",
      description: "10% OFF",
      vaidtill: "May 30, 2025",
      eligibility: "Orders above $30",
      discount: "12%",
      status: "Active",
    },
    {
      id: 3,
      restaurantname: "The Urban Pantry",
      couponcode: "SAVE 10",
      description: "10% OFF",
      vaidtill: "May 30, 2025",
      eligibility: "Orders above $30",
      discount: "12%",
      status: "InActive",
    },
    {
      id: 4,
      restaurantname: "The Urban Pantry",
      couponcode: "SAVE 10",
      description: "10% OFF",
      vaidtill: "May 30, 2025",
      eligibility: "Orders above $30",
      discount: "12%",
      status: "Active",
    },
    {
      id: 5,
      restaurantname: "The Urban Pantry",
      couponcode: "SAVE 10",
      description: "10% OFF",
      vaidtill: "May 30, 2025",
      eligibility: "Orders above $30",
      discount: "12%",
      status: "InActive",
    },
  ];

  const couponheadings = [
    { id: 1, heading: "Coupon Code" },
    { id: 2, heading: "Description" },
    { id: 3, heading: "Valid Till" },
    { id: 4, heading: "Eligibility Condition" },
    { id: 5, heading: "Discount Percentage" },
    { id: 6, heading: "Status" },
    { id: 6, heading: "Action" },
  ];

  const coupondetails = [
    {
      id: 1,
      couponcode: "SAVE 10",
      description: "Winter Sale",
      validtill: "May 30 2025",
      eligibility: "Order Above $30",
      discount: "10%",
      status: "Active",
    },
    {
      id: 2,
      couponcode: "BURGER 20",
      description: "Winter Sale",
      validtill: "May 28 2025",
      eligibility: "No Minimum Order required",
      discount: "10%",
      status: "Active",
    },
    {
      id: 3,
      couponcode: "FLAT 10",
      description: "Winter Sale",
      validtill: "May 26 2025",
      eligibility: "Order Above $30",
      discount: "10%",
      status: "InActive",
    },
    {
      id: 4,
      couponcode: "SAVE 20",
      description: "Winter Sale",
      validtill: "May 22 2025",
      eligibility: "Order Above $50",
      discount: "10%",
      status: "Active",
    },
    {
      id: 5,
      couponcode: "SAVE 40",
      description: "Winter Sale",
      validtill: "May 31 2025",
      eligibility: "Order Above $30",
      discount: "10%",
      status: "InActive",
    },
  ];

  const location = useLocation();
  const path = location.pathname.split("/").pop();
  console.log(path);
  
  //deletecoupon handler
  const [deleteCoupon, setDeleteCoupon] = React.useState<boolean | null>(false);
  
  const deleteCouponHandler=()=>{
     setDeleteCoupon(true)
  }
  
  const closeCouponHandler=()=>{
     setDeleteCoupon(false)
  }
  
  
  return (
    <Box sx={{ display:'flex',flexDirection:'column',
    gap:'30px',background: "white", height: "auto", p: 1 }}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        <Box display="flex" justifyContent="space-between"
          flexWrap="wrap">
          <Box>
            <Typography color="#2F7A52">
              {path === "admin-coupon"
                ? "Coupons By Admin"
                : "Discount & Promo Reimbursements Table"}
            </Typography>
          </Box>
          <Box>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {path !== "admin-coupon" && (
                <Button
                  variant="contained"
                  onClick={() => navigate("admin-coupon")}
                >
                  Admin Coupons
                </Button>
              )}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => navigate("/admin/discountpromo/add-coupon")}
               >
                ADD COUPON
              </Button>

              <Filterbutton variant="contained" startIcon={<FilterListIcon />}>
                Filters
              </Filterbutton>
            </Box>
          </Box>
        </Box>

        <Box mt={2}>
          <TableContainer component={Paper}
          sx={{boxShadow:'none'}}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {path === "admin-coupon"
                    ? couponheadings.map((coupon) => (
                        <TableCell sx={{ color: "#2F7A52" }}>
                          {coupon.heading}
                        </TableCell>
                      ))
                    : discountheadings.map((discount) => (
                        <TableCell sx={{ color: "#2F7A52"}}>
                          {discount.heading}
                        </TableCell>
                      ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {path === "admin-coupon"
                  ? coupondetails.map((coupon) => (
                      <TableRow sx={{whiteSpace: 'nowrap'}}>
                        <TableCell component="th" scope="row" >
                          {coupon.couponcode}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {coupon.description}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {coupon.validtill}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {coupon.eligibility}
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{paddingLeft:'50px'}}>
                          {coupon.discount}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          <Typography
                            component="span"
                            bgcolor={
                              coupon.status == "InActive" ? "#E45040" : "transparant"
                            }
                            color={
                              coupon.status=="InActive"?"white":"#2F7A52"
                            }
                            border={
                              coupon.status==="InActive" ?'#E45040':'1px solid #2F7A52'
                            }

                            padding={coupon.status==='Active'?'2px 15px':'4px 11px'}
                            
                            borderRadius={5}
                            fontSize={13}
                          >
                            {coupon.status}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Button
                            variant="outlined"
                            sx={{ color: "red", borderColor: "red",'&:hover':{borderColor:'red'} }}
                            startIcon={<DeleteOutlineIcon />}
                          onClick={deleteCouponHandler}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : discountdetails.map((discount) => (
                      <TableRow >
                        <TableCell component="th" scope="row" sx={{whiteSpace: 'nowrap',color:'#2F7A52',textDecoration:'underline',cursor:'pointer'}}
                        onClick={()=>navigate('/admin/restaurant-management/restaurant-details')}>
                          {discount.restaurantname}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {discount.couponcode}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {discount.description}
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{color:'#2F7A52',whiteSpace:'nowrap'}}>
                          {discount.vaidtill}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {discount.eligibility}
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{paddingLeft:'50px'}}>
                          {discount.discount}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Typography
                            component="span"
                            bgcolor={
                              discount.status == "InActive" ? "#E45040" : "transparant"
                            }
                            padding={discount.status==='Active'?'2px 16px':'4px 11px'}
                            color={
                              discount.status=="InActive"?"white":"#2F7A52"
                            }
                            border={
                              discount.status==="InActive" ?'#E45040':'1px solid #2F7A52'
                            }
                            borderRadius={5}
                            fontSize={13}
                          >
                            {discount.status}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Button
                            variant="outlined"
                            sx={{ color: "red", borderColor: "red",'&:hover':{borderColor:'red'} }}
                            startIcon={<DeleteOutlineIcon />}
                            onClick={deleteCouponHandler}>
                            Delete
                          </Button>
                         {deleteCoupon&& <DeleteCoupon deletecoupon={deleteCoupon} couponclose={closeCouponHandler}/>}
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

export default DiscountandPromo;
