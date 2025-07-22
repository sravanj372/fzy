import { Box,Button,TextField,Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddTax = () => {
const navigate=useNavigate()
return (
 <Box p={2}>
   <Box display="flex">
    <ArrowBackIcon 
                    onClick={()=>navigate('/admin/configsetting/taxsettings')} 
                    sx={{cursor:'pointer',color:'#2F7A52',fontSize:'20px'}}/>
    <Typography color="#2F7A52">Add Tax</Typography>
   </Box>
   
   <Box maxWidth="800px" display="flex" flexDirection="column" gap={3} mt={2}>
   <Box display="flex" flexDirection={{md:'row',xs:'column'}} gap={2}>
    <Typography sx={{width:{md:'100px',xs:'100%'}}}>Tax Name</Typography>
    <TextField size="small" sx={{width:{md:'300px',xs:'100%'},
      '& .MuiOutlinedInput-root':{
        '& fieldset': {
         borderColor: 'green',
      },
      }}}></TextField>
   </Box>
   <Box display="flex" flexDirection={{md:'row',xs:'column'}} gap={2}>
    <Typography sx={{width:{md:'100px',xs:'100%'}}}>Tax Rate</Typography>
    <TextField size="small" sx={{width:{md:'300px',xs:'100%'},
     '& .MuiOutlinedInput-root':{
        '& fieldset': {
         borderColor: 'green',
      },
      } 
    }}></TextField>
   </Box>
   <Box display="flex" justifyContent="center" marginRight={33}>
    <Button variant="contained" >Save</Button>
   </Box>
  </Box> 
 </Box>
  )
}

export default AddTax
