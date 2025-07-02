import { Avatar, Box, Button,Paper, Typography } from "@mui/material";
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
import { Suspendedbutton,Filterbutton } from "../adminstyles/Adminstyles";
import React from "react";
import Userpic1 from '../assets/av1.jpg' 
import { useLocation, useNavigate } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';

const UserManagement = () => {

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

const suspenduserheadings=[
  {id:1,suspendheading:'S.No'},
  {id:2,suspendheading:'User Name'},
  {id:2,suspendheading:'User Contact'},
  {id:2,suspendheading:'Date Suspended'},
  {id:2,suspendheading:'Status'},
  {id:2,suspendheading:'Action'},
]

const suspenduseraccount=[
  {id:1,avator:Userpic1,username:'James Murphy',contact:'+61 412 345 668',date:'2/06/2025',status:'InActive'},
  {id:2,avator:Userpic1,username:'Ralph Edwards',contact:'+61 412 345 679',date:'2/06/2025',status:'InActive'},
  {id:3,avator:Userpic1,username:'Annette Black',contact:'+61 412 345 778',date:'2/06/2025',status:'InActive'},
  {id:4,avator:Userpic1,username:'Darlene Robertson',contact:'+61 412 775 679',date:'2/06/2025',status:'InActive'},
  {id:5,avator:Userpic1,username:'James Murphy',contact:'+61 412 344 660',date:'2/06/2025',status:'InActive'},
]


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const navigate=useNavigate()
 const location=useLocation()
 const path=location.pathname.split('/').pop()
 console.log(path)
 
 
return (
    <Box sx={{ background: "white", height: "auto", p: 1 }}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        <Box display="flex" justifyContent="space-between"
          flexWrap="wrap">
          <Box>
            <Typography color={path==='suspend-user'?'red':'#2F7A52'}>{path==='suspend-user'? "Suspended Accounts":"User Management"}</Typography>
          </Box>
          <Box>
            <Box
              display="flex" flexWrap="wrap" 
             >
              {path=='suspend-user' ?(<Filterbutton variant="contained" startIcon={<FilterListIcon />}>
                    Filters
              </Filterbutton>):(<Suspendedbutton variant="outlined" 
               sx={{minWidth:'175px'}}  onClick={()=>navigate('suspend-user')}>
                Suspended Accounts
              </Suspendedbutton>)}
              </Box>
          </Box>
        </Box>
       {/* Usermanagement table start*/}
         <Box mt={2}>
                   <TableContainer component={Paper}>
                     <Table size="small" >
                       <TableHead>
                         <TableRow sx={{ background: "#F1F4F9" }}>
                          { path=='suspend-user'?(
                            suspenduserheadings.map((suspend)=>
                             <TableCell  sx={{
                         color: path === "suspend-user" ? "red" : "#2F7A52",
                        fontWeight: 700,
                      }}>{suspend.suspendheading}</TableCell> 
                            ))
                           :userheading.map((heading) => (
                             <TableCell>{heading.heading}</TableCell>
                          ))}
                           
                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {path==='suspend-user'?(
                          suspenduseraccount.map((suspenduser)=>(
                           <TableRow>
                             <TableCell component="th" scope="row" >
                              {suspenduser.id}
                             </TableCell>
                             <TableCell component="th" scope="row" sx={{display:'flex',alignItems:'center',gap:'12px'}}>
                              <Avatar src={suspenduser.avator}/> {suspenduser.username}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {suspenduser.contact}
                             </TableCell>
                             <TableCell component="th" scope="row">
                               {suspenduser.date}
                             </TableCell>
                             <TableCell component="th" scope="row">
                              <CircleIcon sx={{ marginTop: '5px', marginRight: '2px', fontSize: "11px",color:'red' }} />  {suspenduser.status}
                             </TableCell>
                              <TableCell component="th" scope="row">
                               <Button
                                 sx={{ border: "1px groove gray",
                                 color: path === "suspend-user" ? "red" : "#2F7A52",
                                 fontWeight: 700
                                }}
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
                                {/*  <Divider sx={{border:'1px solid gray'}}/> */}
                                 <MenuItem onClick={handleClose}>
                                   Suspend
                                 </MenuItem>
                               </Menu>
                             </TableCell>
                           </TableRow>
                            
                          ))):(
                           userdata.map((user) => (
                           <TableRow>
                             <TableCell component="th" scope="row" sx={{display:'flex',alignItems:'center',gap:'12px'}}
                             onClick={()=>navigate('user-profile')}>
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
                            <TableCell component="th" scope="row" >
                             <CircleIcon sx={{fontSize:'12px',color:'#2F7A52' }} /> {user.status}
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
                                 <MenuItem onClick={handleClose}>Unsuspend</MenuItem>
                                 {/* <Divider sx={{border:'1px solid gray'}}/> */}
                                 <MenuItem onClick={handleClose}>
                                   Delete
                                 </MenuItem>
                               </Menu>
                             </TableCell>
                           </TableRow>
                         )) 
                         )} {/* table condition end */}
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
