import React from "react";
import {
    Box,
    Typography,
    Stack,
    Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import all styled components
import {
    OrderandBillsContainer,
    BackButton,
    InfoPaper,
    InfoTitle,
    InfoStack,
    InfoRow,
    InfoKey,
    InfoValue,
    BillDetailsPaper,
    BillItemRow,
    ItemNameText,
    ItemPriceText,
    SummaryItemText,
    SummaryValueText,
    TotalAmountRow,
    TotalAmountLabel,
    TotalAmountValue,
} from "../adminstyles/OrderandBills.styles";

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
        <OrderandBillsContainer>
            {/* Back Button */}
            <Box mb={1}>
                <BackButton onClick={handleBack}>
                    <ArrowBackIcon />
                </BackButton>
            </Box>

            {/* Order Info Section */}
            <InfoPaper>
                <InfoTitle variant="h6">
                    Order Information
                </InfoTitle>
                <InfoStack spacing={2}>
                    {orderInformation.map((item, index) => (
                        <InfoRow key={index}>
                            <InfoKey>
                                {item.key}
                            </InfoKey>
                            <InfoValue>
                                {item.value}
                            </InfoValue>
                        </InfoRow>
                    ))}
                </InfoStack>
            </InfoPaper>
            
            {/* Order and Bill Details Component */}
            <BillDetailsPaper>
                <InfoTitle variant="h6">
                    Order and Bill Details
                </InfoTitle>
                <Box>
                    {billDetails.map((item, index) => (
                        <React.Fragment key={index}>
                            <BillItemRow>
                                <ItemNameText>
                                    {item.name} {item.quantity > 1 && `x${item.quantity}`}
                                </ItemNameText>
                                <ItemPriceText>
                                    ${item.price.toFixed(2)}
                                </ItemPriceText>
                            </BillItemRow>
                            {index < billDetails.length - 1 && (
                                <Divider sx={{ my: "16px", borderColor: "#E0E0E0" }} />
                            )}
                        </React.Fragment>
                    ))}
                </Box>

                <Divider sx={{ my: "16px", borderColor: "#C1C1C1", borderWidth: '1px' }} />

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
                                <SummaryItemText>
                                    {item.label}
                                </SummaryItemText>
                                <SummaryValueText>
                                    ${item.value}
                                </SummaryValueText>
                            </Box>
                        ))}
                        <TotalAmountRow>
                            <TotalAmountLabel>
                                Total Amount
                            </TotalAmountLabel>
                            <TotalAmountValue>
                                ${totalAmount.toFixed(2)}
                            </TotalAmountValue>
                        </TotalAmountRow>
                    </Stack>
                </Box>
            </BillDetailsPaper>

            {/* Restaurant Information Component */}
            <InfoPaper>
                <InfoTitle variant="h6">
                    Restaurant Information
                </InfoTitle>
                <InfoStack spacing={2}>
                    {restaurantInformation.map((item, index) => (
                        <InfoRow key={index}>
                            <InfoKey>
                                {item.key}
                            </InfoKey>
                            <InfoValue>
                                {item.value}
                            </InfoValue>
                        </InfoRow>
                    ))}
                </InfoStack>
            </InfoPaper>

            {/* Customer Information Component */}
            <InfoPaper>
                <InfoTitle variant="h6">
                    Customer Information
                </InfoTitle>
                <InfoStack spacing={2}>
                    {customerInformation.map((item, index) => (
                        <InfoRow key={index}>
                            <InfoKey>
                                {item.key}
                            </InfoKey>
                            <InfoValue>
                                {item.value}
                            </InfoValue>
                        </InfoRow>
                    ))}
                </InfoStack>
            </InfoPaper>
        </OrderandBillsContainer>
    );
};
export default OrderandBills;