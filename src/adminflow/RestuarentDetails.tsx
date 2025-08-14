import {
  Button,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Restuarent1 from "../assets/restaurant1.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";

// Section component for displaying key-value pairs
const Section = ({
  title,
  data,
}: {
  title: string;
  data: { key: string; value: string }[];
}) => (
  <Paper variant="outlined" sx={{ borderColor: "#C9E7CA", p: 3, mt: 2 }}>
    <Typography
      sx={{
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold', // or 700
        fontSize: '20px',
        color: '#2F7A52',
        lineHeight: '100%',
        letterSpacing: '0%',
        mb: 2,
      }}
    >
      {title}
    </Typography>
    <Box>
      {data.map((item, index) => (
        <Box display="flex" alignItems="center" gap={4} key={index} mb={2.5}>
          <Typography
            sx={{
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: "black",
              minWidth: "290px",
              flexShrink: 0,
            }}
          >
            {item.key}:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Nunito Sans',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  </Paper>
);

const RestuarentDetails = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const restaurantDetails = [
    { key: "Restaurant Name", value: "Oliva Restaurant" },
    { key: "Business Email", value: "OlivaRestaurant1@gmail.com" },
    { key: "Contact Person Name", value: "James" },
    { key: "Phone Number", value: "+61 412 345 678" },
    { key: "ABC/ACN Number", value: "13 99 94" },
    {
      key: "Address",
      value: "The Green plate bistro, 123 foodie lane, Sydney NSW 2000, Australia",
    },
  ];

  const vendorBankDetails = [
    { key: "Vendor Name", value: "James" },
    { key: "Account Holder Name", value: "James Smith" },
    { key: "Bank Name", value: "Common Wealth" },
    { key: "Account Number", value: "*** **** **** 4508" },
  ];

  const restaurantInfo = [
    { key: "Cuisine Types", value: "Australian" },
    { key: "Food Categories", value: "Bakery Items" },
    { key: "Dietary & Preference Categories", value: "Bakery Items" },
    { key: "Storage requirements", value: "Bakery Items" },
    { key: "Meal Per day", value: "10 to 50" },
    {
      key: "Description",
      value:
        "Authentic Italian flavors with handcrafted pasta, wood-fired pizzas, and fresh ingredients. Experience the true taste of Italy!",
    },
  ];

  return (
    <Box p={0}>
      {/* Back Button */}
      <Box display="flex" mb={1}>
        <IconButton onClick={handleBackClick} sx={{ color: "black", p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Main Section */}
      <Paper
        variant="outlined"
        sx={{ borderColor: "#C9E7CA", p: 2, mt: 1, paddingBottom: 4, position: 'relative' }} // Add position: 'relative'
      >
        {/* Actions Button positioned at the top right */}
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Button
            variant="outlined"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              borderColor: "#C9E7CA",
              textTransform: "none",
              height: "40px",
              width: "100px",
            }}
          >
            Actions
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Box>
        
        {/* Content with Image and Details */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="flex-start"
            >
              <Box
                width={{ xs: "100%", sm: "150px" }}
                height="180px"
                flexShrink={0}
                mb={{ xs: 2, sm: 0 }}
                mr={{ xs: 0, sm: 4 }}
              >
                <Box
                  component="img"
                  src={Restuarent1}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 1,
                    objectFit: "cover",
                    mt: 1,
                    ml: 1,
                  }}
                />
              </Box>
              <Box flexGrow={1} sx={{ mt: 1 }}> {/* Add margin top to push content down slightly */}
                <Typography
                  color="#2F7A52"
                  fontWeight="400"
                  fontSize="28px"
                  mb={2}
                >
                  Oliva Restaurant
                </Typography>
                <Box>
                  {restaurantDetails.map((item, index) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      key={index}
                      mb={3}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "20px",
                          color: "black",
                          flexShrink: 0,
                          minWidth: "290px",
                        }}
                      >
                        {item.key}:
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Extra Sections */}
      <Section title="Vendor Bank Details" data={vendorBankDetails} />
      <Section title="Restaurant Information" data={restaurantInfo} />
    </Box>
  );
};

export default RestuarentDetails;