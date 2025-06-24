import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Radio from '@mui/material/Radio';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useLocation,useNavigate } from "react-router-dom";
import Christmas11 from '../assets/christmas2.png'
const Homepagetitle = () => {

 const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const location=useLocation()
const pathname=location.pathname
const path=pathname.split('/').pop()
console.log(path)

const navigate=useNavigate()

    return (
    <Box>
      <Box display="flex" justifyContent="space-between">
      <Typography color="#2F7A52" marginBottom={2} p={1}>
        {path==='edit-home-title'?"Edit Homepage Title":"Homepage Title"}</Typography> 
      <Stack direction="row">
      <Button startIcon={<EditIcon/>} onClick={()=>navigate('/admin/dashboard/edit-home-title')}>
       Edit</Button>
      <Button sx={{color:'red'}}startIcon={<DeleteOutlineIcon/>}>Delete</Button>
      </Stack>
      </Box>
     <Box display="flex" flexDirection="column" gap={2}>
     <Stack direction={{md:'row',xs:'column'}} p={1} > 
       <Box sx={{ width: { xs: "100%", md: "15%" } }} >
       <Typography width="100%">Banned Text</Typography>
       </Box>
      <Box width={{ md: "40%", xs: "100%" }} display="flex" gap={3}>
            <TextField
                size="small"
                sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                    color: "#333",
                    "& fieldset": {
                    borderColor: "#68b266",
                    },
                    "&:hover fieldset": {
                    borderColor: "#4CAF50",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "#2e7d32",
                    },
                },
                "& .MuiSelect-icon": {
                    color: "#68b266",
                },
                }}
            />
      </Box>
     </Stack>   
     
     <Stack direction={{md:'row',xs:'column'}} p={1} > 
      <Box sx={{ width: { xs: "100%", md: "15%" } }} >
       <Typography width="100%">Duration Period</Typography>
      </Box>

      <Box width={{ md: "40%", xs: "100%" }} display="flex" gap={3}>
           <TextField type="date" size="small"
            sx={{
             "& .MuiOutlinedInput-root": {
                    color: "#333",
                    "& fieldset": {
                    borderColor: "#68b266",
                    },
                    "&:hover fieldset": {
                    borderColor: "#4CAF50",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "#2e7d32",
                    },
                },
                "& .MuiSelect-icon": {
                    color: "#68b266",
                },
           
           }}/>
           <Typography component="span" display="flex" alignItems="center"
           >to</Typography> 
           <TextField type="date" size="small"
           sx={{
             "& .MuiOutlinedInput-root": {
                    color: "#333",
                    "& fieldset": {
                    borderColor: "#68b266",
                    },
                    "&:hover fieldset": {
                    borderColor: "#4CAF50",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "#2e7d32",
                    },
                },
                "& .MuiSelect-icon": {
                    color: "#68b266",
                },
           }}/>
        </Box>
     </Stack>
     {/* radio */} 
      <Stack direction="row" gap={{md:25}}>
        <Box>
          {""}
        </Box>
        <Box display="flex" alignItems="center">
       <Radio /><Typography component="span">Fixed</Typography>
       </Box> 
      </Stack>
     {/* radio end */} 
     <Stack direction={{md:'row',xs:'column'}} p={1}>
       <Box sx={{ width: { xs: "100%", md: "15%" } }} >
        <Typography width="100%">Image</Typography>
        <Typography fontSize="10px" paddingBottom={{xs:'5px'}}>(Uploaad In SVG format)</Typography>
      </Box>
     <Button
      sx={{width:'100px'}}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      endIcon={<FileUploadIcon />}>
      <VisuallyHiddenInput
        type="file"
       
        multiple
      />
      Upload

     </Button>
     {path==='edit-home-title' &&<Box><Box component="img" src={Christmas11} width="40px" height="auto"/></Box>}
     
     </Stack>
  
     <Box sx={{display:'flex',justifyContent:'flex-start'}}>
     <Button variant="contained" sx={{ margin:{xs:'auto'}, marginLeft:{md:'400px'}}} >
     {path==='edit-home-title'?'UPDATE' :'SAVE'}
     </Button>
     </Box>
     </Box>
    </Box>
  )
}

export default Homepagetitle
