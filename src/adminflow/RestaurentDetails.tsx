import { Box, Stack, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import { Exportbutton, Pendingreqbutton, Suspendedbutton,Filterbutton } from '../adminstyles/Adminstyles'
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'

const RestaurentDetails = () => {

const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
  <Box >
    <Grid container justifyContent="space-between" >
       <Grid size={{md:6,sm:12}}>     
       <Typography color="primary" >Restaurent Details</Typography>
       </Grid>
       <Grid size={{md:6,sm:12}}>
       <Stack display="flex" direction="row" useFlexGap
       spacing={2} flexWrap="wrap"  justifyContent="flex-end"  gap={{xs:1}} > 
    
       <Suspendedbutton variant="outlined" >Suspended Accounts</Suspendedbutton>
       <Exportbutton variant='contained' endIcon={<DownloadIcon />}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>Export</Exportbutton>
         <Menu
                 id="basic-menu"
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               
               >
                <MenuItem onClick={handleClose} sx={{width:'100px'}}>Week</MenuItem>
                <MenuItem onClick={handleClose}>Month</MenuItem>
                <MenuItem onClick={handleClose}>Year</MenuItem>
            </Menu>
      {/*  {opendw&&<Exportdropdowns />} */}
       <Pendingreqbutton variant='contained'>Pending Restaurent Request</Pendingreqbutton>
       <Filterbutton variant="contained" startIcon={<FilterListIcon />}>Filters</Filterbutton>
       </Stack>
      </Grid>
      </Grid>
  </Box>
  )
}

export default RestaurentDetails
