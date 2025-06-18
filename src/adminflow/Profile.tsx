import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

const Profile = () => {
   
  const profiledata=[
    {id:1,label:'Phone Number',value:'+612303'},
    {id:2,label:'Email',value:'Ramesh@gmail.com'},
    {id:3,label:'Password',value:'*******'},
]

const[state,setState]=useState(false)

const[email,setEmail]=useState('')
const updateEmailhandler=(profile:any)=>{
 
  if(profile.id ===2){
    setState(true)
    setEmail(profile.value)
}
}
  return (
  <Box padding={1} gap={2}>  
      <Paper  sx={{border: "1px solid green",overflowX:{xs:'hidden'}}}>
        <Typography color="#2F7A52" pl={2}>Profile</Typography>
        <Typography fontWeight="700" color="#2F7A52" pl={2} mt={2}>ADMIN</Typography>
         {profiledata.map((profile)=>(
           <Stack direction="row" gap={2} p={2} display="flex" flexWrap="wrap">
            <Typography minWidth="150px">{profile.label}</Typography>
            {state===true && profile.id===2 ?<TextField size="small" value={email} />:<Typography>{profile.value}</Typography> }
            {profile.label==='Email'&&
            <Typography sx={{textDecoration:'underline',color:'#2F7A52',cursor:'pointer'}} 
              onClick={()=>updateEmailhandler(profile)}>Update</Typography>}
            {profile.label==='Password'&& <Button variant="outlined" size="small">Change Password</Button>} 
           </Stack>

          ))}
          

      </Paper>
   </Box>   
  )
}

export default Profile
