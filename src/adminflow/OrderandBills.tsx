import React from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const OrderandBills = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const orderInformation = [
    { key: "Order ID", value: "#ORD245607" },
    { key: "Order Status", value: "Live" },
    { key: "Order Date", value: "8 May 2025, 10:00 AM" },
    { key: "Pickup Time", value: "8 May 2025, 01:00 PM" },
    { key: "Order Type", value: "Take away" },
    { key: "Deliver Type", value: "Customer Pickup" },
    { key: "Total Amount", value: "$54.00 AUS" },
  ];

  const billDetails = [
    { name: "Croissant", quantity: 2, price: 15.00 },
    { name: "Lemon Tart", quantity: 1, price: 12.00 },
    { name: "Tacos", quantity: 3, price: 20.00 },
  ];

  const subTotal = billDetails.reduce((sum, item) => sum + item.price, 0);
  const couponDiscount = -12.00;
  const taxAndCharges = 5.00;
  const totalAmount = subTotal + couponDiscount + taxAndCharges;

  const summaryItems = [
    { label: "SubTotal", value: subTotal.toFixed(2) },
    { label: "Coupon [SAVE 10]", value: couponDiscount.toFixed(2) },
    { label: "Tax and Charges", value: taxAndCharges.toFixed(2) },
  ];

  const restaurantInformation = [
    { key: "Restaurant Name", value: "Oliva Restaurant" },
    { key: "Contact Person Name", value: "James" },
    { key: "Phone Number", value: "+61 412 987 654" },
    { key: "Address", value: "123 foodie lane, Sydney NSW 2000" },
  ];
  
  const customerInformation = [
    { key: "Customer Name", value: "James" },
    { key: "Phone Number", value: "+61 412 987 654" },
    { key: "Email", value: "James18@gmail.com"},
    { key: "Address", value: "123 foodie lane, Sydney NSW 2000" },
  ];

  return (
    <Box p={2}>
      {/* Back Button */}
      <Box display="flex" mb={1}>
        <IconButton onClick={handleBack} sx={{ color: "gray", p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Order Info Section */}
      <Paper
  variant="outlined"
  sx={{
    marginTop: "16px",
    borderRadius: "12px",
    borderColor: "#2F7A52",
    borderWidth: "1px",
    p: 3,
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: "#2F7A52",
      fontWeight: "600",
      marginBottom: "16px",
    }}
  >
    Order Information
  </Typography>

  <Stack spacing={2}>
    {orderInformation.map((item, index) => (
      <Box
        key={index}
        display="flex"
        alignItems="flex-start"
        paddingBottom={1}
        gap={15} // spacing between columns
      >
        {/* Key */}
        <Box
          sx={{
            width: '200px', // fixed column width
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: "#444746",
              fontSize: "18px",
            }}
          >
            {item.key}
          </Typography>
        </Box>

        {/* Value */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Stack>
</Paper>
      
      
      {/* Order and Bill Details Component */}
      <Paper
        variant="outlined"
        sx={{
          marginTop: "16px",
          borderRadius: "12px",
          borderColor: "#2F7A52",
          borderWidth: "1px",
          padding: "24px",
          paddingRight: "150px ",
          
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#2F7A52",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Order and Bill Details
        </Typography>

        {/* Itemized List */}
        <Box>
          {billDetails.map((item, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  pl: "50px",
                  
                }}
              >
                <Typography sx={{ fontSize: "16px", color: "#000" }}>
                  {item.name} {item.quantity > 1 && `x${item.quantity}`}
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#000" }}>
                  ${item.price.toFixed(2)}
                </Typography>
              </Box>
              {index < billDetails.length - 1 && (
                <Divider sx={{ my: "16px", borderColor: "#E0E0E0" }} />
              )}
            </React.Fragment>
          ))}
        </Box>

        <Divider sx={{ my: "16px", borderColor: "#C1C1C1",borderWidth: '1px' }} />

        {/* Summary Section */}
        <Box>
          <Stack spacing={1}>
            {summaryItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "16px", color: "#000", fontWeight: "600",pl: "50px",
                   }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#000", fontWeight: "600",pr: "0px" }}>
                  ${item.value}
                </Typography>
              </Box>
            ))}

            <Box sx={{ marginTop: "16px", pl: "50px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ fontSize: "16px", color: "#000", fontWeight: "600",pr: "50px" }}
                >
                  Total Amount
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", color: "#000", fontWeight: "600", pr: "0px" }}
                >
                  ${totalAmount.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Paper>

      {/* Restaurant Information Component */}
      <Paper
  variant="outlined"
  sx={{
    marginTop: "16px",
    borderRadius: "12px",
    borderColor: "#2F7A52",
    borderWidth: "1px",
    p: 3,
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: "#2F7A52",
      fontWeight: "600",
      marginBottom: "16px",
    }}
  >
    Restaurant Information
  </Typography>

  <Stack spacing={2}>
    {restaurantInformation.map((item, index) => (
      <Box
        key={index}
        display="flex"
        alignItems="flex-start"
        paddingBottom={1}
        gap={15} // spacing between columns
      >
        {/* Key */}
        <Box
          sx={{
            width: '200px', // fixed column width
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: "#444746",
              fontSize: "18px",
            }}
          >
            {item.key}
          </Typography>
        </Box>

        {/* Value */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Stack>
</Paper>
    <Paper
  variant="outlined"
  sx={{
    marginTop: "16px",
    borderRadius: "12px",
    borderColor: "#2F7A52",
    borderWidth: "1px",
    p: 3,
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: "#2F7A52",
      fontWeight: "600",
      marginBottom: "16px",
    }}
  >
    Customer Information
  </Typography>

  <Stack spacing={2}>
    {customerInformation.map((item, index) => (
      <Box
        key={index}
        display="flex"
        alignItems="flex-start"
        paddingBottom={1}
        gap={15} // spacing between columns
      >
        {/* Key */}
        <Box
          sx={{
            width: '200px', // fixed column width
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: "#444746",
              fontSize: "18px",
            }}
          >
            {item.key}
          </Typography>
        </Box>

        {/* Value */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Stack>
</Paper>

    </Box>
  );
};
export default OrderandBills;