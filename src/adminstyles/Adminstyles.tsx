import { Button,Box, FormControl, InputLabel} from '@mui/material';
import { styled } from '@mui/material/styles';


export const Suspendedbutton=styled(Button)(({theme})=>({
    borderColor:'red',
    color:'red',
   '&:hover':{
    borderColor:'red',
    background:'white'
  },
[theme.breakpoints.down('sm')]: {
    width: '60%',
},
}));

export const Exportbutton=styled(Button)(({theme})=>({
 backgroundColor:theme.palette.primary.main,
 color:'white',
 '&:hover':{
    backgroundColor:theme.palette.primary.main
 },
      [theme.breakpoints.down('sm')]: {
    width: '35%', // full width on small screens
    justifyConntent:'center',
},


}));

export const Pendingreqbutton=styled(Button)(({theme})=>({
 backgroundColor:theme.palette.primary.main,
 color:'white',
 '&:hover':{
    backgroundColor:theme.palette.primary.main
},
 [theme.breakpoints.down('sm')]: {
   width: '70%',
   
 }
}));

export const Filterbutton=styled(Button)(({theme})=>({
 color:theme.palette.primary.main,
 background:'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  border:'1px solid #2F7A52',
 [theme.breakpoints.down('sm')]: {
    width: '25%',
},
}));

export const Liveorders=styled(Button)(({theme})=>({
 backgroundColor:theme.palette.primary.main,
 color:'white',
 '&:hover':{
    backgroundColor:theme.palette.primary.main
 },
 [theme.breakpoints.down('sm')]: {
   width: '34%',
   
 }
}));


export const ExportBox=styled(Box)(({theme})=>({
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
     borderRadius:1,  
     width:'98px',
     border:'1px solid gray',
     position:'absolute',
     top:'60px',
     right:"349px",
     background:'white',
     [theme.breakpoints.down('sm')]: {
       positions:'absolute',
       width:'196px',
       top:'63px',
       right:'10px',
       zIndex:"100",
       background:theme.palette.secondary.main
    },   
      
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    width:"80%",
  },
  '& input[type="date"]::-webkit-calendar-picker-indicator': {
    filter: 'invert(68%) sepia(10%) saturate(1486%) hue-rotate(64deg) brightness(91%) contrast(89%);', // Adjust the filter values to change the color
    width:"28%"
  },
  
  }));

  export const StyledInputLabel = styled(InputLabel)(() => ({
   color:'#000000'

  }));


export const PasswordupdateBox=styled(Box)(()=>({

display:'flex',
flexDirection:'column',
gap:'16px',
maxWidth:'400px',
padding:'30px',
border:'1px solid green',
borderRadius:'10px'

})) 

export const Logincontainer=styled(Box)(({theme})=>({
  display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      width:"auto",
      flexDirection:"column",
      backgroundColor:theme.palette.secondary.main 
  
}));


export const LoginBox=styled(Box)(({theme})=>({
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "white",
          width:'400px',
          [theme.breakpoints.down('sm')]: {
             width:"100%",
             padding:"20px 40px "
          }
               
     

})) 
