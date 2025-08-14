import React, { useState } from "react";
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
    IconButton,
    Chip,
    Pagination,
    Dialog,
    DialogContent,
    DialogActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useNavigate } from "react-router-dom";
import deleteico from "../assets/1vector.png";
import alert from '../assets/line-md_alert.png'; // Assuming this is your alert icon

// Sample data
const couponData = [
    {
        couponCode: "SAVE 10",
        description: "Winter Sale",
        validTill: "May 30, 2025",
        eligibilityCondition: "Orders above $30",
        discountPercentage: "10%",
        status: "Active",
    },
    {
        couponCode: "BURGER 20",
        description: "Christmas Sale",
        validTill: "May 31, 2025",
        eligibilityCondition: "No minimum order required",
        discountPercentage: "20%",
        status: "In active",
    },
    {
        couponCode: "FLAT 10",
        description: "Flat 10% discount for this Easter",
        validTill: "June 2, 2025",
        eligibilityCondition: "Order above $25",
        discountPercentage: "10%",
        status: "Active",
    },
    {
        couponCode: "SAVE 20",
        description: "20% OFF",
        validTill: "June 5, 2025",
        eligibilityCondition: "Order above $50",
        discountPercentage: "20%",
        status: "Active",
    },
    {
        couponCode: "SAVE 50",
        description: "For Christmas day for all items 50% OFF",
        validTill: "Jan 5, 2026",
        eligibilityCondition: "Orders above $100",
        discountPercentage: "50%",
        status: "In active",
    },
];

const DiscountPromo = () => {
    const navigate = useNavigate();

    // State for managing the delete dialog
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [couponToDelete, setCouponToDelete] = useState<string | null>(null);

    const handleBack = () => {
        navigate(-1);
    };

    const handleAddCoupon = () => {
        navigate("/admin/discountpromo/add-coupon");
    };

    const handleFilter = () => {
        console.log("Filters clicked");
    };

    const openDeleteModal = (couponCode: string) => {
        setCouponToDelete(couponCode);
        setIsModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsModalOpen(false);
        setCouponToDelete(null);
    };

    const confirmDelete = () => {
        console.log(`Confirmed deletion of coupon: ${couponToDelete}`);
        // Here you would add the actual logic to delete the coupon
        closeDeleteModal();
    };

    const renderStatus = (status: string) => {
        const isActive = status === "Active";
        return (
            <Chip
                label={status}
                sx={{
                    width: '88px',
                    height: '27px',
                    borderRadius: '13.5px',
                    fontWeight: 600,
                    backgroundColor: isActive ? "transparent" : "#F93C65",
                    color: isActive ? "#68B266" : "#FFFFFF",
                    border: isActive ? "1px solid #68B266" : "1px solid #F93C65",
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    '& .MuiChip-label': {
                        p: '4px 8px',
                    },
                }}
            />
        );
    };

    return (
        <Box p={0}>
            {/* Main content container with dimming effect */}
            <Box
                sx={{
                    filter: isModalOpen ? 'brightness(0.5)' : 'none',
                    pointerEvents: isModalOpen ? 'none' : 'auto',
                    transition: 'filter 0.3s ease-in-out',
                }}
            >
                <Box display="flex" alignItems="center" mb={0}>
                    <IconButton onClick={handleBack} sx={{ color: "#2F7A52" }}>
                        <ArrowBackIcon />
                    </IconButton>
                </Box>
                <Paper
                    variant="outlined"
                    sx={{
                        borderRadius: "12px",
                        borderColor: "#E0E0E0",
                        borderWidth: "1px",
                        padding: 3,
                    }}
                >
                    <Stack direction="row" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" fontWeight={600} color="#2F7A52">
                            Coupons By Admin
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{
                                    backgroundColor: "#2F7A52",
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#276544" },
                                }}
                                onClick={handleAddCoupon}
                            >
                                ADD COUPON
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<FilterListIcon />}
                                sx={{
                                    borderColor: "#E0E0E0",
                                    color: "#2F7A52",
                                    textTransform: "none",
                                    borderRadius: "8px",
                                    "&:hover": { borderColor: "#2F7A52" },
                                }}
                                onClick={handleFilter}
                            >
                                Filters
                            </Button>
                        </Stack>
                    </Stack>

                    <TableContainer>
                        <Table>
                            <TableHead
                                sx={{
                                    backgroundColor: "#F1F4F9",
                                    borderRadius: "12px",
                                    "& th:first-of-type": {
                                        borderTopLeftRadius: "12px",
                                        borderBottomLeftRadius: "12px",
                                    },
                                    "& th:last-of-type": {
                                        borderTopRightRadius: "12px",
                                        borderBottomRightRadius: "12px",
                                    },
                                }}
                            >
                                <TableRow sx={{ height: "48px", borderBottom: 'none' }}>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }}>Coupon Code</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }}>Description</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }} align="center">Valid Till</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }}>Eligibility Condition</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }} align="center">Discount Percentage</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }} align="center">Status</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#2F7A52" }} align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {couponData.map((coupon, index) => (
                                    <TableRow key={index} sx={{ borderBottom: 'none' }}>
                                        <TableCell>{coupon.couponCode}</TableCell>
                                        <TableCell>{coupon.description}</TableCell>
                                        <TableCell align="center">{coupon.validTill}</TableCell>
                                        <TableCell>{coupon.eligibilityCondition}</TableCell>
                                        <TableCell align="center">{coupon.discountPercentage}</TableCell>
                                        <TableCell align="center">{renderStatus(coupon.status)}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => openDeleteModal(coupon.couponCode)}
                                                sx={{
                                                    color: "#F93C65",
                                                    borderColor: "#F93C65",
                                                    border: "1px solid",
                                                    borderRadius: "8px",
                                                    textTransform: "none",
                                                    "&:hover": { backgroundColor: "#FFE7EE", borderColor: "#F93C65" },
                                                }}
                                                startIcon={<img src={deleteico} alt="Delete" style={{ width: '20px', height: '20px' }} />}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box display="flex" justifyContent="center" mt={3} alignItems="center" spacing={1}>
                        <Pagination count={5} shape="rounded" color="primary" />
                    </Box>
                </Paper>
            </Box>

            {/* The modal dialog component */}
            <Dialog
                open={isModalOpen}
                onClose={closeDeleteModal}
                PaperProps={{
                    sx: {
                        borderRadius: '8px',
                        backgroundColor: '#fff', // Changed to white as in other examples
                        p: 4,
                        textAlign: 'center',
                        maxWidth: '400px',
                        width: '90%',
                    },
                }}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                       // backdropFilter: 'blur(3px)',
                        //WebkitBackdropFilter: 'blur(3px)',
                    },
                }}
            >
                <DialogContent sx={{ p: 0 }}>
                    <Box sx={{
                        width: '140px',
                        height: '140px',
                        mb: 1,
                        mx: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <img src={alert} alt="Alert Icon" style={{ width: '150px', height: '150px' }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
                        Are you sure you want to delete this coupon?
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Nunito Sans',
                        fontSize: '15px',
                        lineHeight: '100%',
                        letterSpacing: '-0.11px',
                        textAlign: 'center',
                        mb: 4,
                        color: 'text.secondary',
                        opacity: 1,
                    }}>
                        <Box component="span" sx={{ fontWeight: 700 }}>Note:</Box> This action is permanent. Once deleted, the <br /> coupon cannot be recovered.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', gap: 6, p: 0 }}>
                    <Button
                        variant="outlined"
                        onClick={closeDeleteModal}
                        sx={{
                            width: '100px',
                            color: '#FF3326',
                            borderColor: '#FF3326',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 51, 38, 0.04)',
                                borderColor: '#FF3326'
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={confirmDelete}
                        sx={{
                            width: '100px',
                            backgroundColor: '#FF3326',
                            color: '#FFFFFF',
                            '&:hover': {
                                backgroundColor: '#D32F2F',
                            },
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DiscountPromo;