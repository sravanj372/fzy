import { Paper, Typography,Box, TextField, Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react'
import { Exportbutton } from "../adminstyles/Adminstyles";
import DownloadIcon from "@mui/icons-material/Download";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ConfigurationSettings = () => {

  const partnerbankheadings=[
    {id:1,heading:'Restaurant Name'},
    {id:2,heading:'Partner Name'},
    {id:3,heading:'Account Holder Name'},
    {id:2,heading:'Bank Name'},
    {id:2,heading:'Account Number'},
    {id:2,heading:'Date'},
    {id:2,heading:'Action'}
  ]

  const partnerbankdetails=[
    {id:1,restaurantname:'The Urban Pantry',partnername:'James',accountholdername:'James Smith',bankname:'Common Wealth',accountnumber:'****545',date:'May 6, 2025'},
    {id:2,restaurantname:'Food Harbour Fish House',partnername:'Sarah Williom',accountholdername:'Sarah Willioms',bankname:'Common Wealth',accountnumber:'****545',date:'May 6, 2025'},
    {id:3,restaurantname:'Marufuku Raman',partnername:'Aditya',accountholdername:'James Smith',bankname:'Common Wealth',accountnumber:'****545',date:'May 6, 2025'},
    {id:4,restaurantname:'Brenda French',partnername:'Linda',accountholdername:'Linda Nilson',bankname:'Common Wealth',accountnumber:'****545',date:'May 6, 2025'},
   ]


  //for export button
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE2);
  const handleClicks1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };


   const location=useLocation();
   const path=location.pathname.split('/').pop()
   console.log(path)
  
   const navigate=useNavigate()

   return (
    <Box display="flex" flexDirection="column" gap={2} p={1}>  
    {path!=='partner-bankdetails' &&
      <>
        <Paper sx={{padding:"10px",border: "1px solid green",overflowX:{xs:'hidden'}}}>
         <Typography mb={2} color="#2F7A52">Payment Settings</Typography>
         <Box>
         <Typography mb={2} sx={{textDecoration:'underline',color:'#2F7A52'}}>Commission Settings</Typography> 
         <Checkbox defaultChecked size="small" />
         <Typography component="span">Use Global Comission</Typography>
         <Box display="flex" gap={2} alignItems="center">
         <Typography ml={5}>Global Comission Percentage</Typography>
         <TextField  value="10%" size="small" sx={{width:'100px'}}/>
         </Box>
         </Box>
         <Box>
          <Typography sx={{textDecoration:'underline',color:'#2F7A52',cursor:'pointer'}}
          onClick={()=>navigate('partner-commission')}>View Partner Commission Rule</Typography>
         </Box>
       </Paper>

      {/* payment cycle */}

        <Paper sx={{padding:"10px",border: "1px solid green",overflowX:{xs:'hidden'}}}>
          <Typography mb={2} color="#2F7A52">Payment Cycle</Typography>
          <FormControl>
             <RadioGroup
              row>
              <FormControlLabel value="weekly"  control={<Radio size="small"/>} label="Weekly" />
              <FormControlLabel value="bi-weekly" control={<Radio size="small"/>} label="Bi-Weekly" />
              <FormControlLabel value="monthly" control={<Radio size="small"/>} label="Monthly" />

             </RadioGroup>
          </FormControl>
       </Paper>
      </>
}
    {/* Payment Settings */}
       
      {/* Partner bank Details */}

      <Paper sx={{padding:"10px",border: "1px solid green",overflowX:{xs:'hidden'}}}>
       <Box display="flex" justifyContent="space-between">
       <Typography mb={2} color="#2F7A52" sx={{textDecoration:'underline'}}>Partner Bank Details</Typography>
       
       <Exportbutton
                             variant="contained"
                             endIcon={<DownloadIcon />}
                             id="basic-button"
                             aria-controls={open1 ? "basic-menu" : undefined}
                             aria-haspopup="true"
                             aria-expanded={open1 ? "true" : undefined}
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

       </Box>   
       
       
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {partnerbankheadings.map((partnerheading)=>(
                  <TableCell>{partnerheading.heading}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                 {partnerbankdetails.map((partnerdetails)=>(
                    <TableRow>
                    <TableCell component="th" scope="row">
                      {partnerdetails.restaurantname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {partnerdetails.partnername}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {partnerdetails.accountholdername}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {partnerdetails.bankname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {partnerdetails.accountholdername}
                    </TableCell>
                      <TableCell component="th" scope="row">
                      {partnerdetails.date}
                    </TableCell>
                     <TableCell component="th" scope="row">
                      <Button startIcon={<VisibilityIcon/>}>
                        View 
                      </Button>
                      
                    </TableCell>
                  </TableRow> 

                 ))}
                 
                
              </TableBody>
            </Table>
          </TableContainer>
          {path!=='partner-bankdetails'&&
           <Box display="flex" justifyContent="flex-end" mt={2}>
           <Button variant="outlined" onClick={()=>navigate('partner-bankdetails')}>View All Bank Details</Button> 
          </Box>
          }
          
        </Box>
      
      
      </Paper> 
    </Box>
  )
}

export default ConfigurationSettings