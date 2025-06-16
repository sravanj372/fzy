import { Button, Paper, Typography } from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from 'react'
import Userphoto from '../assets/userphoto.jpg'
import Suspendaccount from "./popups/Suspendaccount";
const UserprofileInfo = () => {

 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const userprofiledata=[
    {id:1,key:'First Name',value:'James'},
    {id:2,key:'Last Name',value:'Murphy'},
    {id:3,key:'Email Address',value:'James@gmail.com'},
    {id:4,key:'Contact Number',value:'+61 412 345 678'},
    {id:5,key:'Total Orders',value:'20'},
    {id:6,key:'Total Co2 Emission',value:'500'},
    {id:7,key:'No of food Posted',value:'10'},
    {id:8,key:'Food Preference',value:'Vegan'},
    {id:9,key:'Dietary',value:'Organic'},
    {id:10,key:'Allergy to',value:'Garlic'},
]

//suspend popup 
const [suspendOpen, setsuspendOpen] = React.useState<boolean | null>(false);

const suspendPopuphandler=()=>{
   setsuspendOpen(true)
}

const handleClickOpen=()=>{
   setsuspendOpen(false)
}

return (
    <Box padding={1} gap={2}>  
    <Paper  sx={{border: "1px solid green",overflowX:{xs:'hidden'}}}>
      <Grid container p={2} >
         <Grid size={{md:2,xs:12}}>
           <Box width="200px" height="250px" >
           <Box
               component="img"
               src={Userphoto}
               sx={{ width: "65%", height: "60%",objectFit:'cover'}}
             /> 
           </Box>   
         </Grid>
         <Grid size={{md:8,xs:12}}  >
         
         <Stack direction="column" gap={1} >
          <Typography color="#2F7A52" fontWeight="700">James Murphy</Typography> 
           {userprofiledata.map((user)=>(
             <Stack direction="row" spacing={{md:4,xs:3}} key={user.id}>
             <Typography minWidth="150px" >{user.key}</Typography>
             <Typography minWidth="160px" >{user.value}</Typography>
             </Stack>

           ))}
           
           
         </Stack>
         </Grid>
         <Grid size={{md:2,xs:12}}>
             <Button
               sx={{ border: "1px groove gray", height: "48px", width: "100px" }}
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
              <MenuItem onClick={suspendPopuphandler}> 
                Suspend
              </MenuItem>
               {suspendOpen&&<Suspendaccount  suspenopen={suspendOpen} supendclose={handleClickOpen} />}
     
             </Menu>
         </Grid>
         </Grid>

    </Paper>
    </Box>
  )
}

export default UserprofileInfo
