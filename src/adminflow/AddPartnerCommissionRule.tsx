import React, { useState, ChangeEvent } from 'react';
import {
    Button,
    TextField,
    Typography,
    Box,
    Stack,
    InputAdornment,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import {
    PageContainer,
    HeaderBox,
    HeaderTitle,
    FormBox,
    FormLabel,
    StyledTextField,
    AddButton,
} from '../adminstyles/AddPartnerCommissionRule.styles';

const AddPartnerCommissionRule = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [commission, setCommission] = useState('');
    const [restaurantNameError, setRestaurantNameError] = useState('');
    const [commissionError, setCommissionError] = useState('');
    const navigate = useNavigate();

    const handleRestaurantNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRestaurantName(value);

        if (value.trim().length < 3) {
            setRestaurantNameError('Restaurant name must be at least 3 characters.');
        } else {
            setRestaurantNameError('');
        }
    };

    const handleCommissionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCommission(value);

        const rate = parseFloat(value);
        if (isNaN(rate) || rate <= 0 || rate > 100) {
            setCommissionError('Commission rate must be a number between 0 and 100.');
        } else {
            setCommissionError('');
        }
    };

    const handleAdd = () => {
        const rate = parseFloat(commission);
        const isRestaurantNameValid = restaurantName.trim().length >= 3;
        const isCommissionValid = !isNaN(rate) && rate > 0 && rate <= 100;

        if (!isRestaurantNameValid) {
            setRestaurantNameError('Restaurant name must be at least 3 characters.');
        }
        if (!isCommissionValid) {
            setCommissionError('Commission rate must be a number between 0 and 100.');
        }

        if (isRestaurantNameValid && isCommissionValid) {
            console.log('Adding new rule:', { restaurantName, commission });
            navigate('/admin/configsetting/partner-commission');
        } else {
            console.log('Form has validation errors.');
        }
    };

    const isAddButtonDisabled = restaurantName.trim() === '' || commission.trim() === '' || !!restaurantNameError || !!commissionError;

    return (
        <PageContainer>
            <HeaderBox>
                <ArrowBackIcon
                    onClick={() => navigate('/admin/configsetting/paymentsettings/partner-commission')}
                    sx={{ cursor: 'pointer' }}
                />
                <HeaderTitle variant="h6" component="h1">Add Partner Commission Rule</HeaderTitle>
            </HeaderBox>

            <FormBox>
                <Stack direction={{ md: 'row', xs: 'column' }} gap={4} alignItems="center">
                    <FormLabel>
                        Restaurant Name
                    </FormLabel>
                    <StyledTextField
                        value={restaurantName}
                        onChange={handleRestaurantNameChange}
                        error={!!restaurantNameError}
                        helperText={restaurantNameError || ' '}
                    />
                </Stack>

                <Stack direction={{ md: 'row', xs: 'column' }} gap={4} alignItems="center">
                    <FormLabel>
                        Commission %
                    </FormLabel>
                    <StyledTextField
                        type="number"
                        value={commission}
                        onChange={handleCommissionChange}
                        error={!!commissionError}
                        helperText={commissionError || ' '}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                    />
                </Stack>

                <Box sx={{ display: 'flex', justifyContent: { md: 'flex-start', xs: 'center' }, mt: 2, ml: { md: '216px', xs: '0' } }}>
                    <AddButton
                        variant="contained"
                        onClick={handleAdd}
                        disabled={isAddButtonDisabled}
                    >
                        ADD
                    </AddButton>
                </Box>
            </FormBox>
        </PageContainer>
    );
};

export default AddPartnerCommissionRule;
