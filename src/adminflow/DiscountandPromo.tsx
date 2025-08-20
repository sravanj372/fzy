import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteCoupon from "./popups/DeleteCoupon";
import PaginationBox from "./PaginationBox";
import deleteico from "../assets/1vector.png";
import {
    PageContainer,
    ContentBox,
    TableCard,
    TableControls,
    TableTitle,
    TableButtonsStack,
    ActionButton,
    FilterButton,
    TableContainerStyled,
    TableHeadRowStyled,
    TableCellHeader,
    TableCellContent,
    StatusTypography,
    DeleteButton,
    DeleteIcon,
    ModalOverlay,
} from "../adminstyles/DiscountandPromo.styles";

const DiscountandPromo = () => {
    const navigate = useNavigate();

    const discountheadings = [
        { id: 1, heading: "Restaurant Name", align: "center" as const },
        { id: 2, heading: "Coupon Code", align: "center" as const },
        { id: 3, heading: "Description", align: "center" as const },
        { id: 4, heading: "Valid Till", align: "center" as const },
        { id: 5, heading: "Eligibility Condition", align: "center" as const },
        { id: 6, heading: "Discount Percentage", align: "center" as const },
        { id: 7, heading: "Status", align: "center" as const },
        { id: 8, heading: "Action", align: "center" as const },
    ];

    const discountdetails = [
        {
            id: 1,
            restaurantname: "The Urban Pantry",
            couponcode: "SAVE 10",
            description: "10% OFF",
            vaidtill: "May 30, 2025",
            eligibility: "Orders above $30",
            discount: "12%",
            status: "Active",
        },
        {
            id: 2,
            restaurantname: "The Urban Pantry",
            couponcode: "SAVE 10",
            description: "10% OFF",
            vaidtill: "May 30, 2025",
            eligibility: "Orders above $30",
            discount: "12%",
            status: "Active",
        },
        {
            id: 3,
            restaurantname: "The Urban Pantry",
            couponcode: "SAVE 10",
            description: "10% OFF",
            vaidtill: "May 30, 2025",
            eligibility: "Orders above $30",
            discount: "12%",
            status: "In active",
        },
        {
            id: 4,
            restaurantname: "The Urban Pantry",
            couponcode: "SAVE 10",
            description: "10% OFF",
            vaidtill: "May 30, 2025",
            eligibility: "Orders above $30",
            discount: "12%",
            status: "Active",
        },
        {
            id: 5,
            restaurantname: "The Urban Pantry",
            couponcode: "SAVE 10",
            description: "10% OFF",
            vaidtill: "May 30, 2025",
            eligibility: "Orders above $30",
            discount: "12%",
            status: "In active",
        },
    ];

    const [deleteCoupon, setDeleteCoupon] = useState(false);

    const deleteCouponHandler = () => {
        setDeleteCoupon(true);
    };

    const closeCouponHandler = () => {
        setDeleteCoupon(false);
    };

    return (
        <PageContainer>
            <ContentBox>
                <TableCard>
                    <TableControls>
                        <TableTitle>Discount & Promo Reimbursements Table</TableTitle>
                        <TableButtonsStack direction="row" spacing={2}>
                            <ActionButton variant="contained" onClick={() => navigate("/admin/discountpromo/admin-coupon")}>
                                Admin Coupons
                            </ActionButton>
                            <ActionButton variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/admin/discountpromo/add-coupon")}>
                                ADD COUPON
                            </ActionButton>
                            <FilterButton variant="contained" startIcon={<FilterListIcon />}>
                                Filters
                            </FilterButton>
                        </TableButtonsStack>
                    </TableControls>

                    <TableContainerStyled component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableHeadRowStyled>
                                    {discountheadings.map((heading) => (
                                        <TableCellHeader key={heading.id} align={heading.align}>
                                            {heading.heading}
                                        </TableCellHeader>
                                    ))}
                                </TableHeadRowStyled>
                            </TableHead>
                            <TableBody>
                                {discountdetails.map((discount) => (
                                    <TableRow key={discount.id}>
                                        <TableCellContent align="center">
                                            <Typography
                                                sx={{ color: "#2F7A52", textDecoration: "underline", cursor: "pointer" }}
                                                onClick={() => navigate("/admin/restaurant-management/restaurant-details")}
                                            >
                                                {discount.restaurantname}
                                            </Typography>
                                        </TableCellContent>
                                        <TableCellContent align="center">{discount.couponcode}</TableCellContent>
                                        <TableCellContent align="center">{discount.description}</TableCellContent>
                                        <TableCellContent align="center" sx={{ color: "#2F7A52" }}>{discount.vaidtill}</TableCellContent>
                                        <TableCellContent align="center">{discount.eligibility}</TableCellContent>
                                        <TableCellContent align="center">{discount.discount}</TableCellContent>
                                        <TableCellContent align="center">
                                            <StatusTypography status={discount.status}>
                                                {discount.status}
                                            </StatusTypography>
                                        </TableCellContent>
                                        <TableCellContent align="center">
                                            <DeleteButton
                                                variant="outlined"
                                                startIcon={<DeleteIcon src={deleteico} alt="Delete" />}
                                                onClick={deleteCouponHandler}
                                            >
                                                Delete
                                            </DeleteButton>
                                        </TableCellContent>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerStyled>
                </TableCard>
                <Box sx={{ display: 'flex', justifyContent: 'top', mt: 2 }}>
                    <PaginationBox />
                </Box>
            </ContentBox>

            {deleteCoupon && (
                <ModalOverlay>
                    <DeleteCoupon deletecoupon={deleteCoupon} couponclose={closeCouponHandler} />
                </ModalOverlay>
            )}
        </PageContainer>
    );
};

export default DiscountandPromo;
