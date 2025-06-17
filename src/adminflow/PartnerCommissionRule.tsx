import { Button, Divider, OutlinedInput, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import Icon from "@mui/material/Icon";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useLocation, useNavigate } from "react-router-dom";

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
  ]

const navigate= useNavigate()
const location=useLocation()

const path=location.pathname.split('/').pop()
console.log(path)

return (
    <Box bgcolor="#f0ffff" height="100vh">
      <Box display="flex" justifyContent="space-between" p={2}>

        <Typography color="#2F7A52">{path==='addpartner'?"Add Partner Commission Rule":"Partner Commission Rule"}</Typography>
        <Box display="flex" justifyContent="space-between">
           {path!=='addpartner'&&(<Icon sx={{ color: "#2F7A52" }} component="span">
            add_circle
          </Icon>)} 
          
          <Typography color="#2F7A52" sx={{ textDecoration: "underline",cursor:'pointer'}} 
          onClick={()=>navigate('addpartner')}>
            {path!=='addpartner'&&"Add Another Commission Rule"}
            
          </Typography>
        </Box>
      </Box>

      {/* form fields */}
     {path==='addpartner'?(
        <>
        <Grid
            container
            display="flex"
            justifyContent="flex-start"
            alignContent="center"
            gap={2}
            spacing={2}
            p={2}
            mt={2}
          >
            {/* Restuarant Name */}

            <Grid size={{ md: 2, xs: 12 }}>
              <InputLabel sx={{ color: "#000000" }}>
               Restuarant Name
              </InputLabel>
            </Grid>
            <Grid size={{ md: 10, xs: 12 }}>
              <Box
                display="flex"
                justifySelf="flex-start"
                alignItems="flex-start"
                gap={4}
              >
                <FormControl
                  size="small"
                  variant="outlined"
                  sx={{
                    width: "250px",
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
                  <Select >
                    <MenuItem value={10}></MenuItem>
                  </Select>

                  {/*      <OutlinedInput value={commission.value} /> */}
                </FormControl>
                <Button
                  variant="outlined"
                  startIcon={<DeleteOutlinedIcon />}
                  sx={{ color: "red", borderColor: "red" }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
           <Grid
            container
            display="flex"
            justifyContent="flex-start"
            alignContent="center"
            spacing={3}
            p={1}
          >
            <Grid size={{ md: 2, xs: 12 }}>
              <InputLabel sx={{ color: "#000000",marginLeft:'10px' }} >
                Commission %
              </InputLabel>
            </Grid>
            <Grid size={{ md: 10, xs: 12 }}>
              <Box
                display="flex"
                justifySelf="flex-start"
                alignItems="flex-start"
              >
                <FormControl
                  size="small"
                  variant="outlined"
                  sx={{
                    width: "250px",
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
                  <OutlinedInput  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>  

        </>

     ):(
        commissionrule.map((commission) => (
        <>
          <Grid
            container
            display="flex"
            justifyContent="flex-start"
            alignContent="center"
            gap={2}
            spacing={2}
            p={2}
            mt={2}
          >
            {/* Restuarant Name */}

            <Grid size={{ md: 2, xs: 12 }}>
              <InputLabel sx={{ color: "#000000" }}>
                {commission.label}
              </InputLabel>
            </Grid>
            <Grid size={{ md: 10, xs: 12 }}>
              <Box
                display="flex"
                justifySelf="flex-start"
                alignItems="flex-start"
                gap={4}
              >
                <FormControl
                  size="small"
                  variant="outlined"
                  sx={{
                    width: "250px",
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
                  <Select value={commission.value}>
                    <MenuItem value={10}>{commission.value}</MenuItem>
                  </Select>

                  {/*      <OutlinedInput value={commission.value} /> */}
                </FormControl>
                <Button
                  variant="outlined"
                  startIcon={<DeleteOutlinedIcon />}
                  sx={{ color: "red", borderColor: "red" }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* commission */}
          <Grid
            container
            display="flex"
            justifyContent="flex-start"
            alignContent="center"
            spacing={3}
            p={1}
          >
            <Grid size={{ md: 2, xs: 12 }}>
              <InputLabel sx={{ color: "#000000",marginLeft:'10px' }} >
                {commission.label2}
              </InputLabel>
            </Grid>
            <Grid size={{ md: 10, xs: 12 }}>
              <Box
                display="flex"
                justifySelf="flex-start"
                alignItems="flex-start"
              >
                <FormControl
                  size="small"
                  variant="outlined"
                  sx={{
                    width: "250px",
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
                  <OutlinedInput value={commission.value2} />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box mt={2} mb={2}>
            <Divider sx={{ border: "1px solid green", width: "1000px" }} />
          </Box>
        </>
      ))
     )}

      
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Button
          variant="contained"
          sx={{ marginLeft: { md: "300px" }, margin: { xs: "auto" } }}
        >
          {path==="addpartner"?"Add" :"Save"}
        </Button>
      </Box>
    </Box>
  );
};

export default PartnerCommissionRule;
