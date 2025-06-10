import { createTheme } from '@mui/material/styles';

const theme=createTheme({
    palette:{
        primary:{
            main:'#2F7A52'
         },
        secondary:{
            main:'#DEF6DB'
        },
        background:{
            default:'#DEF6DB'
        }
    },
    typography:{
        fontFamily:'Nunito Sans',
        button:{
            textTransform:'capitalize'
        }
    },
    
})

export default theme;