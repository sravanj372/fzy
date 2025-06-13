import { Avatar, Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { Grid } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Suspendedbutton } from "../adminstyles/Adminstyles";
import React from "react";
import Userpic1 from '../assets/av1.jpg' 

const UserManagement = () => {

  const userdata=[
    {id:1,avator:Userpic1,username:'James Murphy',email:'James18@gmail.com',phone:'+61 412 345 678', 
    totalorders:20, co2emission:'500kg',foodpostedno:10,status:'Active'},
    {id:2,avator:Userpic1,username:'Ralph Edwards',email:'felicia.reid@example.com',phone:'+61 412 345 123', 
    totalorders:10, co2emission:'300kg',foodpostedno:20,status:'Active'},
    {id:3,avator:Userpic1,username:'Annette Black',email:'georgia.young@example.com',phone:'+61 512 545 679', 
    totalorders:25, co2emission:'200kg',foodpostedno:20,status:'Active'},
    {id:4,avator:Userpic1,username:' Darlene Robertson',email:'jessica.hanson@example.com',phone:'+61 542 545 659', 
    totalorders:26, co2emission:'200kg',foodpostedno:20,status:'Active'},      
    {id:5,avator:Userpic1,username:'Kristin Watson',email:'willie.jennings@example.com',phone:'+61 542 545 393', 
    totalorders:20, co2emission:'200kg',foodpostedno:10,status:'Active'},       
  ]

const userheading=[
  {id:1,heading:'User Name'},
  {id:2,heading:'Email Address'},
  {id:3,heading:'User Contact'},
  {id:4,heading:'Total Orders'},
  {id:5,heading:'Total Co2 Emission'},
  {id:6,heading:'No. of food Posted'},
  {id:7,heading:'Status'},
  {id:8,heading:'Action'}, 
   
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
    <Box sx={{ background: "white", height: "auto", p: 1 }}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid size={{ md: 6, xs: 6}}>
            <Typography color="#2F7A52">User Management</Typography>
          </Grid>
          <Grid size={{ md: 6, xs: 6}}>
            <Stack
              display="flex"
              direction="row"
              useFlexGap
              spacing={2}
              flexWrap="wrap"
              justifyContent="flex-end"
              gap={{ xs: 1 }}
            >
              <Suspendedbutton variant="outlined">
                Suspended Accounts
              </Suspendedbutton>
            </Stack>
          </Grid>
        </Grid>
       {/* usermanagement table start*/}
         <Box mt={2}>
                   <TableContainer component={Paper}>
                     <Table>
                       <TableHead>
                         <TableRow sx={{ background: "#F1F4F9" }}>
                           {userheading.map((heading) => (
                             <TableCell>{heading.heading}</TableCell>
                           ))}
                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {userdata.map((user) => (
                           <TableRow>
                             <TableCell component="th" scope="row" sx={{display:'flex',alignItems:'center',gap:'12px'}}>
                              <Avatar src={user.avator}/>{user.username}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {user.email}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {user.phone}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {user.totalorders}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {user.co2emission}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {user.foodpostedno}
                             </TableCell>
                            <TableCell component="th" scope="row">
                               {user.status}
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
                                 <MenuItem onClick={handleClose}>View</MenuItem>
                                 <Divider sx={{border:'1px solid gray'}}/>
                                 <MenuItem onClick={handleClose}>
                                   Suspend
                                 </MenuItem>
                               </Menu>
                             </TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                 </Box>

       {/* user maanagement table end */} 
      </Box>
    </Box>
  );
};

export default UserManagement;
