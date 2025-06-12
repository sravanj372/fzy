import { Divider, Paper, Stack, Typography } from "@mui/material"
import { Box, Grid } from "@mui/system"


const OrderandBills = () => {

   const orderbills=[
    {id:1,item:'Croissant',quantity:`x${2}`,price:'$15.00'},
    {id:2,item:'Lemon Tart',quantity:`x${2}`,price:'$12.00'},
    {id:3,item:'Tacos',quantity:`x${3}`,price:'$20.00'},
    {id:4,item:'Soup',quantity:`x${1}`,price:'$30.00'},
   ] 

   const totalbills=[
     {id:1,key:'SubTotal',price:`${42}`},
     {id:2,key:'Coupon (SAVE 10)',price:`$${12}`},
     {id:3,key:'Tax and Charges',price:`$${5}`},
     {id:3,key:'Total Amount',price:`$${37}`},
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
        <Paper sx={{border: "1px solid green", mt:"12px",overflowX:{xs:'hidden'}}}>
          <Grid container p={2} >
            <Grid size={{md:12,xs:12}}  >
          
          <Stack direction="column" gap={1} >
           <Typography color="#2F7A52" fontWeight="700">Order and Bills Details</Typography> 
            {orderbills.map((bill)=>(
               
               <> 
                <Stack direction="row" spacing={{md:50,xs:3}} >   
                <Typography minWidth="160px" >{bill.item}<Typography component="span">{bill.quantity}</Typography></Typography>
                <Typography minWidth="160px" >{bill.price}</Typography>
                
                </Stack>
               <Divider />
               
              </> 
            ))} 
         </Stack>
         <Stack direction="column" gap={1} >
            {totalbills.map((total)=>(
               <> 
                <Stack direction="row" spacing={{md:50,xs:3}} >                
                  <Typography minWidth="160px" ><strong>{total.key}</strong></Typography>
                  <Typography minWidth="160px" >{total.price}</Typography>
                </Stack>
               
               
              </> 
            ))} 
         </Stack>
          {/* new end */}
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
  )
}

export default OrderandBills
