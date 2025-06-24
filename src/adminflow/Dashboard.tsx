import { Box, Card, CardContent, Divider,Paper,Typography,Select,Button} from "@mui/material"
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaymentsIcon from '@mui/icons-material/Payments';
import CompostIcon from '@mui/icons-material/Compost';
import { BarChart } from '@mui/x-charts/BarChart';
import AddIcon from '@mui/icons-material/Add';
import Christmas11 from '../assets/christmas2.png'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

const dashboarddata=[
  {id:1,icon:<LocalDiningIcon/>, count:80,label:'Total Restuarents'},
  {id:2,icon:<ShoppingBagIcon/>, count:200,label:'Active Orders'},
  {id:3,icon:<PaymentsIcon/>, count:`$${30635}`,label:'Total Revenue'},
  {id:4,icon:<CompostIcon/>, count:`$10,000Kgs`,label:'Total CO2 Saved'}, 
] 

const deliverystatusdata=[
  {id:1,count:100,label:'Scheduled Pickups',},
  {id:2,count:260,label:'Completed Deliveries'},
  {id:3,count:80,label:'Pending Orders'},
]

/* graphs */
const data = [300, 700, 800, 500, 900, 700, 500, 500, 500, 500, 500, 500];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const festdata=[
  {id:1,icon:Christmas11,title:'Feast Festively, Waste...',date:'1 Dec - 29 Dec',
   edit:<EditIcon />, deleteicon:<DeleteOutlineIcon />},
  {id:2,icon:Christmas11,title:'Delicious Meals, Zero Waste...',date:'1 Sep - 19 Oct',
  edit:<EditIcon />, deleteicon:<DeleteOutlineIcon />},  
  {id:3,icon:Christmas11,title:'Delicious Meals, Zero Waste...',date:'1 Sep - 19 Oct',
  edit:<EditIcon />, deleteicon:<DeleteOutlineIcon />}, 
  {id:4,icon:Christmas11,title:'Delicious Meals, Zero Waste...',date:'1 Sep - 19 Oct',
  edit:<EditIcon />, deleteicon:<DeleteOutlineIcon />},         
  {id:5,icon:Christmas11,title:'Delicious Meals, Zero Waste...',date:'1 Sep - 19 Oct',
  edit:<EditIcon />, deleteicon:<DeleteOutlineIcon />},    
]

const highestearningsheadings=[
  {id:1,heading:'Restaurant Name'},
  {id:2,heading:'Vendor Name'},
  {id:3,heading:'Restaurant Contact'},
  {id:4,heading:'Total Revenu(AUD)'},
  {id:5,heading:'Location'}
]
const highestearningsdata=[
{id:1,restaurantname:'Tandoori Flame',vendorname:'James Murphy',contact:'+61 412 345 678',totalrevenue:`$${12350.00}`,location:'Sydney'},
{id:2,restaurantname:'Mei Tanaka',vendorname:'James Murphy',contact:'+61 412 345 271',totalrevenue:`$${12350.00}`,location:'Sydney'},
{id:3,restaurantname:'Chicken Flame',vendorname:'James Murphy',contact:'+61 412 545 679',totalrevenue:`$${12350.00}`,location:'Sydney'},
{id:4,restaurantname:'Mutton Flame',vendorname:'James Murphy',contact:'+61 412 645 672',totalrevenue:`$${12350.00}`,location:'Sydney'},
]

const navigate=useNavigate()


return (
    <Box display="flex" gap={2} flexDirection="column" sx={{overflowX:'hidden'}}>  
    <Paper  sx={{width:'100%',border:'1px solid green',p:2}}>
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
   
    <Box sx={{width:"100%",p:"2px",display:'flex',flexDirection:{md:'row', xs:'column',gap:"10px"}}}>
     <Box display="flex"  flexDirection="column" gap={2} sx={{width:{md:'70%'}}}>    
      {/* pickup and delivery status */}
      <Paper sx={{p:2,border:'1px solid green',width:{md:'100%',xs:'100%'}}}>
      <Typography color="#2F7A52" fontWeight="600" >Pickup and Delivery Status</Typography>
      <Box display="flex" alignItems="center" pt={2} flexDirection={{md:'row',xs:'column'}} 
      justifyContent="space-between" gap={2}>
      {deliverystatusdata.map((deliverydata)=>(
      <Card variant="outlined" sx={{
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       fontFamily:'Nunito Sans',
       borderColor:'#979797',borderRadius:'10px',width:{md:'360px',xs:'100%'},
       height:'120px',whiteSpace:"wrap"}}>
      <CardContent sx={{fontSize:'18px'}}>{deliverydata.label}</CardContent>
      <CardContent  sx={{fontSize:'20px',color:'#2F7A52',fontWeight:'700'}}>{deliverydata.count}</CardContent>
      </Card>
    
    ))}
  </Box> 
    </Paper>
   
    {/* graph */}
     
       <Paper
      sx={{
        border: '1px solid green',
        width: {md:'100%',xs: '100%'},
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
              width={800}
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

    <Box sx={{md:'30%',xs:'100%'}}>{/* right */}
       <Paper sx={{p:2,border:'1px solid green',width:{md:'100%',xs:'100%'}}}>
         <Box display="flex" justifyContent="space-between">
         <Typography  color="#2F7A52">Homepage Title</Typography>
         <Button variant="contained" startIcon={<AddIcon />}
           onClick={()=>navigate('home-title')}>Add New</Button>
         </Box>
         {festdata.map((data)=>(
          <Box display="flex" justifyContent="space-between" alignItems="center"
           gap={2} padding={1}>{/* images text flow start */}
           <Box
            component="img"
            src={data.icon}
            sx={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
               
            }}
          />
          <Box>{/* middle */}
          <Typography sx={{ marginRight:data.id===1 ?"20px":null }}>{data.title}</Typography>
          <Typography>{data.date}</Typography>
          </Box>
          <Box display="flex"  gap={1}>{/* Icons */}
           <Box color="#2F7A52">{data.edit}</Box>
            <Box color="#FF3326">{data.deleteicon}</Box>
          </Box>
           </Box>
          
         ))}
    </Paper>
    
    </Box>
    </Box> 

    {/* third section */}
     <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
       <Box display="flex" justifyContent="space-between">
       <Typography color="#2F7A52">Highest-earning restuarents </Typography>
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
         <Box mt={2}>
                 <TableContainer component={Paper}>
                   <Table>
                     <TableHead>
                       <TableRow sx={{ background: "#F1F4F9" }}>
                         {highestearningsheadings.map((heading) => (
                           <TableCell>{heading.heading}</TableCell>
                         ))}
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       {highestearningsdata.map((earning) => (
                         <TableRow>
                           
                           <TableCell component="th" scope="row">
                             {earning.restaurantname}
                           </TableCell>
                           <TableCell component="th" scope="row">
                             {earning.vendorname}
                           </TableCell>
                           <TableCell component="th" scope="row">
                             {earning.contact}
                           </TableCell>
                           <TableCell component="th" scope="row">
                             {earning.totalrevenue}
                           </TableCell>
                           <TableCell component="th" scope="row">
                             {earning.location}
                           </TableCell>
                           </TableRow>
                       ))}
                     </TableBody>
                   </Table>
                 </TableContainer>
               </Box>
    </Box>
    </Box>
  )
}

export default Dashboard
