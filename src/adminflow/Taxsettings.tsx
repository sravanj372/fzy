import {
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";


const Taxsettings = () => {
  
  const navigate=useNavigate()
  
  return (
    <Box display="flex" flexDirection="column" gap={2} p={1}>
      <Paper
        sx={{
          padding: "10px",
          border: "1px solid green",
          overflowX: { xs: "hidden" },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography mb={2} color="#2F7A52">
            Tax Settings
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />}
          onClick={()=>navigate('addtax')}>
            Add Tax
          </Button>
        </Box>

        <Typography color="#2F7A52" sx={{ textDecoration: "underline" }}>
          GST Tax Settings
        </Typography>
        <Box display="flex" gap={5} mt={2}>
          <Typography>Enable GST</Typography>
          <Switch defaultChecked size="small" />
        </Box>

        <Box display="flex" gap={3} alignItems="center" mt={2}>
          <TextField value="GST Tax Rate-10%" size="small"></TextField>
          <Typography color="#2F7A52" sx={{ textDecoration: "underline" }}>
            <EditIcon
              sx={{
                fontSize: "17px",
                verticalAlign: "middle",
                color: " #2F7A52",
              }}
            />
            Edit
          </Typography>
        </Box>
        <Divider
          sx={{ border: "1px solid green", width: "100%", margin:'10px 0px 10px 0px' }}
        />

        <Box display="flex" gap={5} mt={2}>
          <Typography color="#2F7A52" sx={{ textDecoration: "underline" }}>
            Service Tax Settings
          </Typography>

          <Switch defaultChecked size="small" />
        </Box>

        <Box display="flex" gap={3} alignItems="center" mt={2} mb={3}>
          <TextField value="Service Tax Rate-5%" size="small"></TextField>
          <Typography color="#2F7A52" sx={{ textDecoration: "underline" }}>
            <EditIcon
              sx={{
                fontSize: "17px",
                verticalAlign: "middle",
                color: " #2F7A52",
              }}
            />
            Edit
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Taxsettings;
