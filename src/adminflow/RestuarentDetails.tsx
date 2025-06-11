import { Button, Paper, Typography } from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import Restuarent1 from "../assets/restaurant1.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const RestuarentDetails = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const restuarantdata=[
    {id:1,key:'Restaurant Name',value:'Oliva Restaurant'},
    {id:2,key:'Business Email',value:'Oliva Restaurant1@gmail.com'},
    {id:3,key:'Contact Person Name',value:'James'},
    {id:4,key:'Phone Number',value:'+61 412 345 678'},
    {id:4,key:'ABC/ACN Number',value:139994},
    {id:4,key:'Address',value:'The Green plate bistro, 123 foodie lane, Sydney NSW 2000, Australia'},
]
const vendorbankdetails=[
  {id:1,key:'Vendor Name',value:'James'},
  {id:2,key:'Account Holder Name',value:'James Smith'},
  {id:3,key:'Bank Name',value:'Common Wealth'},
  {id:4,key:'Account Number',value:'*** **** **** 4508'},
]

const restaurantinfo=[
  {id:1,key:'Cuisine Types',value:'Australian'},
  {id:2,key:'Food Categories',value:'Bakery Items'},
  {id:3,key:'Dietary & Preference Categories',value:'Bakery Items'},
  {id:4,key:'Storage requirements',value:'Bakery Items'},
  {id:5,key:'Meal Per day',value:'10 to 50'},
  {id:6,key:'Description',value:'Authentic Italian flavors with handcrafted pasta, wood-fired pizzas, and fresh ingredients. Experience the true taste of Italy!'},
]
 return (
    <Box padding={1} gap={2}>  
    <Paper  sx={{border: "1px solid green",overflowX:{xs:'hidden'}}}>
    <Grid container p={2} >
    <Grid size={{md:2,xs:12}}>
      <Box width="200px" height="250px" >
      <Box
          component="img"
          src={Restuarent1}
          sx={{ width: "80%", height: "70%"}}
        /> 
      </Box>   
    </Grid>
    <Grid size={{md:8,xs:12}}  >
    
    <Stack direction="column" gap={1} >
     <Typography color="#2F7A52" fontWeight="700">Oliva Restaurant</Typography> 
    {
      restuarantdata.map((resdata)=>(
        <Stack direction="row" spacing={{md:4,xs:3}} key={resdata.id}>
        <Typography minWidth="150px" >{resdata.key}</Typography>
        <Typography minWidth="160px" >{resdata.value}</Typography>
        </Stack>
      ))
    }
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
         <MenuItem> 
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
    </Grid>
    </Grid>    
    </Paper>

    <Paper sx={{border: "1px solid green", mt:"12px",overflowX:{xs:'hidden'}}}>
    <Grid container p={2} >
    
    <Grid size={{md:12,xs:12}}  >
    
    <Stack direction="column" gap={1} >
     <Typography color="#2F7A52" fontWeight="700">Vendor Bank Details</Typography> 
    {
      vendorbankdetails.map((bankdata)=>(
        <Stack direction="row" spacing={{md:4,xs:3}} key={bankdata.id}>
        <Typography minWidth="160px" >{bankdata.key}</Typography>
        <Typography minWidth="160px" >{bankdata.value}</Typography>
        </Stack>
      ))
    }
    </Stack>
    </Grid>
    </Grid>    
    </Paper> 
    
     <Paper sx={{border: "1px solid green", mt:"12px",overflowX:{xs:'hidden'}}}>
    <Grid container p={2} >
    
    <Grid size={{md:12,xs:12}}  >
    
    <Stack direction="column" gap={1} >
     <Typography color="#2F7A52" fontWeight="700">Restaurant Information</Typography> 
    {
      restaurantinfo.map((restinfo)=>(
        <Stack direction="row" spacing={{md:4,xs:8}} key={restinfo.id}>
        <Typography minWidth={{md:'230px',xs:'230'}} >{restinfo.key}</Typography>
        <Typography minWidth="160px" >{restinfo.value}</Typography>
        </Stack>
      ))
    }
    </Stack>
    </Grid>
    </Grid>    
    </Paper> 

 </Box> 
 
);
};

export default RestuarentDetails;
