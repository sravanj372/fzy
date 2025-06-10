import { Box,Button,Paper} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import RestaurentDetails from "./RestaurentDetails";
import { useLocation } from "react-router-dom";


const RestaurantManagement =() => {


const location=useLocation()
const pathname=location.pathname
console.log(pathname)


const restaurentheading=[
  {id:1,heading:'Restaurant Name'},
  {id:2,heading:'Vendor Name'},
  {id:3,heading:'Contact Number'},
  {id:4,heading:'Location'},
  {id:5,heading:'Tax'},
   {id:6,heading:'Total Revenue'},
    {id:7,heading:'Status'},
     {id:8,heading:'Actions'},

]  
const restaurentdetails=[
  {id:1,restaurentname:'The Urban Pantry',vendorname:'Jamie Cook',contactno:'+61 412 345 678',location:'sydney',gst:"10%",
  totalrevenue:'$2041.96', status:'Active'},
  {id:2,restaurentname:'The Urban Pantry',vendorname:'Jamie Cook',contactno:'+61 412 345 678',location:'sydney',gst:"10%",
  totalrevenue:'$2041.96', status:'Active'},
  {id:3,restaurentname:'The Urban Pantry',vendorname:'Jamie Cook',contactno:'+61 412 345 678',location:'sydney',gst:"10%",
  totalrevenue:'$2041.96', status:'Active'},
  {id:4,restaurentname:'The Urban Pantry',vendorname:'Jamie Cook',contactno:'+61 412 345 678',location:'sydney',gst:"10%",
  totalrevenue:'$2041.96', status:'Active'},
   {id:5,restaurentname:'The Urban Pantry',vendorname:'Jamie Cook',contactno:'+61 412 345 678',location:'sydney',gst:"10%",
  totalrevenue:'$2041.96', status:'Active'},
]


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
  <Box sx={{ background:'white',height:'auto',p:1}}>  
   <Box sx={{border:'1px solid green',borderRadius:4,p:2}}> 
   <RestaurentDetails />
  <Box mt={2}> 
  <TableContainer component={Paper} border={1}>
  <Table>
   <TableHead>
   
   <TableRow sx={{background:'#F1F4F9'}}>
     {restaurentheading.map((headings)=><TableCell sx={{color:'#2F7A52',fontWeight:700}}>{headings.heading}</TableCell>)}
   </TableRow>
   </TableHead>
   <TableBody>
    {restaurentdetails.map((restaurent)=>(
       <TableRow key={restaurent.id}>
         <TableCell component="th" scope="row" sx={{color:'#2F7A52',textDecoration:'underline'}}>
          {restaurent.restaurentname}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.vendorname}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.contactno}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.location}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.gst}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.totalrevenue}
        </TableCell>
        <TableCell component="th" scope="row">
        {restaurent.status}
        </TableCell>
        <TableCell component="th" scope="row">
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       endIcon={<KeyboardArrowDownIcon/>}
    >
        Actions
      </Button>
         <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
         >
         <MenuItem onClick={handleClose}>Suspend</MenuItem>
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
  )
} 

export default RestaurantManagement
