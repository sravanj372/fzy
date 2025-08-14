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

// --- Styled Components ---

const PageContainer = styled(Box)({
    position: 'relative',
    height: 'auto',
    background: 'white',
});

const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    padding: theme.spacing(1),
}));

const TableCard = styled(Box)(({ theme }) => ({
    border: "1px solid green",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2),
}));

const TableControls = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

const TableTitle = styled(Typography)({
    color: "#2F7A52",
    fontWeight: 600,
});

const TableButtonsStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        '& > button': {
            width: '100%',
        },
    },
}));

const ActionButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const FilterButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    background: 'white',
    border: '1px solid #2F7A52',
    '&:hover': {
        backgroundColor: 'white',
        borderColor: theme.palette.primary.dark,
    },
}));

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    boxShadow: "none",
    marginTop: theme.spacing(2),
    overflowX: 'auto',
}));

const TableHeadRowStyled = styled(TableRow)({
    background: "#F1F4F9",
});

const TableCellHeader = styled(TableCell)({
    color: "#2F7A52",
    fontWeight: 700,
    whiteSpace: "nowrap",
});

const TableCellContent = styled(TableCell)({
    whiteSpace: "nowrap",
});

const StatusTypography = styled(Typography)<{ status: string }>(({ status }) => ({
    backgroundColor: status === "In active" ? "#FF3326" : "transparent",
    color: status === "In active" ? "white" : "#2F7A52",
    border: `1px solid ${status === "In active" ? "#FF3326" : "#2F7A52"}`,
    padding: status === "Active" ? "2px 16px" : "4px 11px",
    borderRadius: "20px",
    fontSize: "13px",
}));

const DeleteButton = styled(Button)({
    color: "#FF3326",
    borderColor: "#FF3326",
    "&:hover": { borderColor: "#FF3326" },
});

const DeleteIcon = styled('img')({
    width: "20px",
    height: "20px",
});

const ModalOverlay = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
});

// --- Main Component ---

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
                                    <TableRow key={discount.id} sx={{ backgroundColor: discount.id % 2 === 0 ? '#FFFFFF' : '#fcfcfc' }}>
                                        <TableCellContent align="center" sx={{ color: "#2F7A52", textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/admin/restaurant-management/restaurant-details")}>
                                            {discount.restaurantname}
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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