import {
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box} from "@mui/system";
import Icon from "@mui/material/Icon";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PartnerCommissionRule = () => {
  const commissionrule = [
    {
      id: 1,
      label: "Restaurant Name",
      label2: "Commission %",
      value: "The Urban Party",
      value2: "10%",
    },
    {
      id: 2,
      label: "Restaurant Name",
      label2: "Commission %",
      value: "Gary Danko",
      value2: "5%",
    },
    {
      id: 3,
      label: "Restaurant Name",
      label2: "Commission %",
      value: "Fog Harbour Fish",
      value2: "5%",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/").pop();
  console.log(path);

  return (
    <Box p={1} sx={{overflowX:{xs:'hidden'}}}>
      <Box display="flex" justifyContent="space-between" color="#2F7A52">
        <Box display="flex">
        <ArrowBackIcon 
                onClick={()=>navigate('/admin/configsetting/paymentsettings')} 
                sx={{cursor:'pointer',color:'#2F7A52',fontSize:'20px'}}/><Typography>
          {path === "addpartner"
            ? "Add Partner Commission Rule"
            : "Partner Commission Rule"}
        </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          {path !== "addpartner" && (
            <Icon sx={{ color: "#2F7A52" }} component="span">
              add_circle
            </Icon>
          )}
          <Typography onClick={() => navigate("addpartner")} sx={{cursor:'pointer'}}>
            {" "}
            {path !== "addpartner" && "Add Another Commission Rule"}
          </Typography>
        </Box>
      </Box>
      {/* form section */}
      {path === "addpartner" ? (
        <>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} mt={2}>
            <Box sx={{ width: { xs: "100%", md: "20%" } }}>
              <Typography width="100%">Restaurant Name</Typography>
            </Box>
            <Box width={{ md: "22%", xs: "72%" }} display="flex" gap={3}>
              <FormControl
                size="small"
                variant="outlined"
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
              >
                <Select>
                  <MenuItem value={10}>The Urban Pantry</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/*commission row*/}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            mt={2}
          >
            <Box sx={{ width: { xs: "100%", md: "20%" } }}>
              <Typography width="100%">Commission %</Typography>
            </Box>
            <Box width={{ md: "22%", xs: "72%" }} display="flex" gap={3}>
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
          </Box>
        </>
      ) : (
        commissionrule.map((commission) => (
          <>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              mt={2}
            >
              <Box sx={{ width: { xs: "100%", md: "20%" } }}>
                <Typography width="100%">{commission.label}</Typography>
              </Box>
              <Box width={{ md: "30%", xs: "100%" }} display="flex" gap={3}>
                <TextField
                  size="small"
                  value={commission.value}
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
                <Button
                  sx={{ color: "red", borderColor: "red" }}
                  variant="outlined"
                  startIcon={<DeleteOutlinedIcon />}
                >
                  Delete
                </Button>
              </Box>
            </Box>
            {/* commission row */}

            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              mt={2}
            >
              <Box sx={{ width: { xs: "100%", md: "20%" } }}>
                <Typography width="100%">{commission.label2}</Typography>
              </Box>
              <Box width={{ md: "22%", xs: "72%" }} display="flex" gap={3}>
                <TextField
                  size="small"
                  value={commission.value2}
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
            </Box>
            <Box mt={2} mb={2}>
              <Divider sx={{ border: "1px solid green", width: "1000px" }} />
            </Box>
          </>
        ))
      )}
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Button
          variant="contained"
          sx={{
            marginLeft: { md: "300px" },
            margin: { xs: "auto" },
            marginTop: { xs: "20px" },
          }}
        >
          {path === "addpartner" ? "Add" : "Save"}
        </Button>
      </Box>
    </Box>
  );
};

export default PartnerCommissionRule;
