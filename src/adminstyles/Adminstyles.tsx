import { Button,Box, FormControl, InputLabel} from '@mui/material';
import { styled } from '@mui/material/styles';
import type { maxWidth, width } from '@mui/system';


export const Suspendedbutton=styled(Button)(({theme})=>({
    borderColor:'red',
    color:'red',
   '&:hover':{
    borderColor:'red',
    background:'white'
  },
[theme.breakpoints.down('sm')]: {
    width: '50%',

    
  },
}));

export const Exportbutton=styled(Button)(({theme})=>({
 backgroundColor:theme.palette.primary.main,
 color:'white',
 '&:hover':{
    backgroundColor:theme.palette.primary.main
 },
      [theme.breakpoints.down('sm')]: {
    width: '48%', // full width on small screens
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
   width: '60%',
   
 }
}));

export const Filterbutton=styled(Button)(({theme})=>({
 color:theme.palette.primary.main,
 background:'white',
  '&:hover': {
    backgroundColor: 'white',
  },
 [theme.breakpoints.down('sm')]: {
    width: '36%',
},
}));

export const Liveorders=styled(Button)(({theme})=>({
 backgroundColor:theme.palette.primary.main,
 color:'white',
 '&:hover':{
    backgroundColor:theme.palette.primary.main
 },
 [theme.breakpoints.down('sm')]: {
   width: '50%',
   
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