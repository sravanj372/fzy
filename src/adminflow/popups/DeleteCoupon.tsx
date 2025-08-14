// ./popups/DeleteCoupon.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface DeleteCouponProps {
    deletecoupon: boolean;
    couponclose: () => void;
}

const DeleteCoupon: React.FC<DeleteCouponProps> = ({ deletecoupon, couponclose }) => {
    if (!deletecoupon) {
        return null;
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                p: 4,
                boxShadow: 0,
                textAlign: 'center',
                zIndex: 10,
                maxWidth: '400px',
                width: '90%',
            }}
        >
            <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
                Are you sure you want to cancel the coupon?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                <Button
                    variant="outlined"
                    onClick={couponclose}
                    sx={{
                        color: '#FF3326',
height: '30px',
width: '100px',
                        borderColor: '#FF3326',
                        '&:hover': {
                            borderColor: '#FF3326',
                            backgroundColor: 'rgba(211, 47, 47, 0.04)',
                        }
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={couponclose}
                    sx={{
                        backgroundColor: '#FF3326',
height: '30px',
width: '100px',
                        '&:hover': {
                            backgroundColor: '#FF3326',
                        }
                    }}
                >
                    Suspend
                </Button>
            </Box>
        </Box>
    );
};

export default DeleteCoupon;