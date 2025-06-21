import { Box, Card, CardContent, Divider,Paper,Typography,Select, MenuItem, Button} from "@mui/material"
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaymentsIcon from '@mui/icons-material/Payments';
import CompostIcon from '@mui/icons-material/Compost';
import { BarChart } from '@mui/x-charts/BarChart';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {

const dashboarddata=[
  {id:1,icon:<LocalDiningIcon/>, count:80,label:'Total Restuarents'},
  {id:2,icon:<ShoppingBagIcon/>, count:200,label:'Active Orders'},
  {id:3,icon:<PaymentsIcon/>, count:`$${30635}`,label:'Total Revenue'},
  {id:4,icon:<CompostIcon/>, count:`10,000Kgs`,label:'Total CO2 Saved'}, 
] 

const deliverystatusdata=[
  {id:1,count:100,label:'Scheduled Pickups',},
  {id:2,count:260,label:'Completed Deliveries'},
  {id:3,count:80,label:'Pending Orders'},
]

/* graphs */
const data = [300, 700, 800, 500, 900, 700, 500, 500, 500, 500, 500, 500];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

return (
    <Box display="flex" gap={2} flexDirection="column" >  
    <Paper  sx={{width:'100%',border:'1px solid green'}}>
     <Box display="flex" flexDirection={{md:'row',xs:'column'}} gap={15} padding={2}> 
     {dashboarddata.map((data)=>(

      <Box display="flex" gap={4} justifyContent="flex-start">
      <Box color="#2F7A52" fontSize="24px">{data.icon}</Box>
      <Box>
      <Typography color="#2F7A52" fontSize="24px">{data.count}</Typography>
      <Typography sx={{marginBottom:{xs:'10px'}}}>{data.label}</Typography>
       <Divider sx={{border:'1px solid gray',display:{md:'none'},width:'100%'}}/>
     </Box>
     {data.id===4?null:<Divider sx={{border:'1px solid gray',display:{md:'block',xs:'none'}}}/>} 
     
     </Box>
    ))}

    </Box>
          
    </Paper>
    {/* second section start */}
    <Box sx={{width:"100%",display:'flex',flexDirection:{md:'row', xs:'column',gap:"10px"}}}>
     <Box display="flex"  flexDirection="column" gap={2} >    
      {/* pickup and delivery status */}
      <Paper sx={{p:2,border:'1px solid green',width:{xs:'100%'}}}>
      <Typography color="#2F7A52">Pickup and Delivery Status</Typography>
      <Box display="flex" alignItems="center" flexDirection={{md:'row',xs:'column'}} 
      justifyContent="space-between" gap={2}>
      {deliverystatusdata.map((deliverydata)=>(
      <Card variant="outlined" sx={{fontFamily:'Nunito Sans',borderRadius:'8px',width:{md:'250px',xs:'100%'},
      height:'150px',whiteSpace:"wrap"}}>
      <CardContent>{deliverydata.label}</CardContent>
      <CardContent sx={{fontSize:'30px'}}>{deliverydata.count}</CardContent>
      </Card>
    
    ))}
  </Box> 
    </Paper>
    {/* graph */}
     
       <Paper
      sx={{
        border: '1px solid green',
        width: { xs: '100%'},
        padding: 2,
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          border: '1px solid #d0e0e8',
          borderRadius: '8px',
          padding: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#2e7d32',
            }}
          >
            Total Revenue
          </Typography>

          <Select
            value="2025"
            variant="standard"
            disableUnderline
            sx={{
              fontSize: '14px',
              color: '#555',
              '& .MuiSelect-icon': { color: '#555' },
            }}
          >
            <MenuItem value="2025">This Year </MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </Box>

        {/* Chart - scrollable on small screens */}
        <Box sx={{ overflowX: 'auto' }}>
          <Box sx={{ minWidth: 600 }}>
            <BarChart
              width={600}
              height={300}
              series={[
                {
                  data,
                  label: 'Revenue ($)',
                  color: '#2F7A52',
                },
              ]}
              xAxis={[
                {
                  scaleType: 'band',
                  data: months,
                  tickLabelStyle: { color: '#555', fontSize: 12 },
                },
              ]}
              yAxis={[
                {
                  min: 0,
                  max: 1000,
                  tickMinStep: 200, 
                  tickLabelStyle: { color: '#555' },
                },
              ]}
              sx={{
                '& .MuiBarElement-root': {
                  borderRadius: '2px',
                },
                '& .MuiChartsAxis-highlight': {
                  stroke: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
     </Paper>
    {/* graph end */}
     </Box>

    <Box sx={{width:'100%'}}>{/* right */}
       <Paper sx={{p:2,border:'1px solid green',width:{xs:'100%'}}}>
         <Box display="flex" justifyContent="space-between">
         <Typography>Homepage Title</Typography>
         <Button variant="contained" startIcon={<AddIcon />}>Add New</Button>
         </Box>
       </Paper>
    </Box>
    </Box> 
    </Box>
  )
}

export default Dashboard
