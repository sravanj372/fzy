import {Typography, OutlinedInput, InputAdornment, Button } from "@mui/material"
import { Box, Grid, } from "@mui/system"
import { StyledFormControl, StyledInputLabel } from "../adminstyles/Adminstyles"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Addcoupon = () => {

const navigate=useNavigate()
  return (
    <Box p={2} height="100vh">
      <Box display="flex">
      <ArrowBackIcon onClick={()=>navigate('/admin/discountpromo')} sx={{cursor:'pointer'}}/><Typography color="#2F7A52" >Add Coupon</Typography></Box>
     <Box sx={{maxWidth:'700px',mt:"40px" 
     }}>
      <Grid container display="flex" justifyContent="center" alignContent="center"
      spacing={3}>
        {/* coupon code */}
         <Grid size={{md:3,xs:12}} >
          <StyledInputLabel>Coupon Code</StyledInputLabel>  
         </Grid>
          <Grid size={{md:9,xs:12}}>
             <StyledFormControl fullWidth size="small" variant="outlined">
                <OutlinedInput value="Christmas sale save-10" />
             </StyledFormControl>
           </Grid>
           {/* Discount percentage */}
           <Grid size={{md:3,xs:12}}>
            <StyledInputLabel>Discount Percentage</StyledInputLabel>
           </Grid>
           <Grid size={{md:9,xs:12}}>
             <StyledFormControl fullWidth size="small" variant="outlined" sx={{
             '& .MuiOutlinedInput-notchedOutline': {
             borderColor: 'green',
              }}}>
                <OutlinedInput value="10%"/>
             </StyledFormControl>
           </Grid>
           {/*  Discount description*/}
           <Grid size={{md:3,xs:12}}>
            <StyledInputLabel>Discount Description</StyledInputLabel>
           </Grid>
           <Grid size={{md:9,xs:12}}>
             <StyledFormControl fullWidth size="small" variant="outlined">
                <OutlinedInput value="10% discount on all orders"/>
             </StyledFormControl>
           </Grid>

           {/* date */}
           <Grid size={{md:3,xs:12}}>
            <StyledInputLabel>valid Till</StyledInputLabel>
           </Grid>
           <Grid size={{md:9,xs:12}}>
             <StyledFormControl fullWidth size="small" variant="outlined">
                <OutlinedInput type="date" />
             </StyledFormControl>
           </Grid>
           {/* Eligibility */}
           <Grid size={{md:3,xs:12}}>
            <StyledInputLabel>Eligibility</StyledInputLabel>
           </Grid>
           <Grid size={{md:9,xs:12}}>
             <StyledFormControl fullWidth size="small" variant="outlined">
                <OutlinedInput value="Order above $30" 
                 startAdornment={<InputAdornment position="start" sx={{ color: '#68B266' }}>$</InputAdornment>}/>
             </StyledFormControl>
            </Grid>
           <Box mt={2}>
            <Button variant="contained" size="large" fullWidth sx={{padding:'9px 50px'}}>Save</Button>
           </Box> 
      </Grid>
     </Box>
    
    </Box>
  )
}

export default Addcoupon
