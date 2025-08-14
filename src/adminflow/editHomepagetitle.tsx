import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteHPT from './popups/deletehpt.tsx';
import DeleteIcon from '../assets/1vector.png';
import calicon from '../assets/uil_calender.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);
import upload from '../assets/Vector (1).png';
import Christmas11 from '../assets/christmas2.png';

const EditHomepageTitle = () => {
    const [bannerText, setBannerText] = useState('Delicious meals, zero waste - A greener future!');
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2025-02-06'));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs('2025-02-07'));
    const [isFixed, setIsFixed] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(Christmas11);

    const [bannerTextError, setBannerTextError] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);
    const [startDateError, setStartDateError] = useState<string | null>(null);
    const [endDateError, setEndDateError] = useState<string | null>(null);
    
    const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024;
    const today = dayjs().startOf('day');

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const location = useLocation();
    const pathname = location.pathname;
    const path = pathname.split('/').pop();
    
    useEffect(() => {
        console.log("Current pathname:", pathname);
        console.log("Extracted path:", path);
    }, [pathname, path]);

    const navigate = useNavigate();

    const handleDeleteClick = () => {
        setOpenDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    const handleConfirmDelete = () => {
        console.log('Deleting homepage title...');
        handleCloseDeleteModal();
    };
    
    const handleBannerTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setBannerText(text);
        if (text.length <= 5) {
            setBannerTextError('Banner text must be greater than 5 characters.');
        } else {
            setBannerTextError(null);
        }
    };

    const handleStartDateChange = (newValue: Dayjs | null) => {
        setStartDate(newValue);
        if (newValue) {
            setIsFixed(false);
        }
        if (newValue && newValue.isBefore(today, 'day')) {
            setStartDateError('Start date cannot be before today.');
        } else {
            setStartDateError(null);
        }
        if (endDate && newValue && (endDate.isBefore(newValue, 'day') || endDate.isSame(newValue, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else if (endDate && newValue && !endDate.isBefore(newValue, 'day') && !endDate.isSame(newValue, 'day')) {
            setEndDateError(null);
        }
    };

    const handleEndDateChange = (newValue: Dayjs | null) => {
        setEndDate(newValue);
        if (newValue) {
            setIsFixed(false);
        }
        if (newValue && startDate && (newValue.isBefore(startDate, 'day') || newValue.isSame(startDate, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else {
            setEndDateError(null);
        }
    };

    const handleFixedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIsFixed(checked);
        if (checked) {
            setStartDate(null);
            setEndDate(null);
            setStartDateError(null);
            setEndDateError(null);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > MAX_IMAGE_SIZE_BYTES) {
                setImageError('Image must be less than 1MB.');
                setUploadedImagePreview(null);
                return;
            }
            setImageError(null);
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setUploadedImagePreview(null);
            setImageError('Image is required.');
        }
    };
    
    const CustomCalendarIcon = () => (
        <Box
            component="img"
            src={calicon}
            alt="Calendar Icon"
            sx={{ width: 24, height: 24, cursor: 'pointer' }}
        />
    );

    const CustomUploadIcon = () => (
        <Box
            component="img"
            src={upload}
            alt="Upload Icon"
            sx={{ width: 16, height: 16 }}
        />
    );

    const handleSubmit = () => {
        let isFormValid = true;

        if (bannerText.length <= 5) {
            setBannerTextError('Banner text must be greater than 5 characters.');
            isFormValid = false;
        }

        if (!isFixed) {
            if (!startDate) {
                setStartDateError('Start date is required.');
                isFormValid = false;
            } else if (startDate.isBefore(today, 'day')) {
                setStartDateError('Start date cannot be before today.');
                isFormValid = false;
            }

            if (!endDate) {
                setEndDateError('End date is required.');
                isFormValid = false;
            } else if (startDate && (endDate.isBefore(startDate, 'day') || endDate.isSame(startDate, 'day'))) {
                setEndDateError('End date must be after the start date.');
                isFormValid = false;
            }
        }

        if (!uploadedImagePreview) {
            setImageError('An image is required.');
            isFormValid = false;
        }

        if (!isFormValid) {
            console.log("Form has validation errors.");
        } else {
            console.log("Form submitted successfully!");
        }
    };

    const isSaveButtonDisabled = 
        (bannerText.length <= 5) || 
        (!!bannerTextError) || 
        (!!imageError) || 
        (!uploadedImagePreview) ||
        (!isFixed && (!!startDateError || !startDate || !!endDateError || !endDate));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box p={3}>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                        <ArrowBackIcon onClick={() => navigate('/admin/dashboard')} sx={{ cursor: 'pointer', mt: 1, color: '#2F7A52', fontSize: '20px' }} />
                        <Typography color="#2F7A52" marginBottom={2} p={1}>
                            {path === 'edit-home-title' ? "Edit Homepage Title" : "Edit Homepage Title"}
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }} onClick={handleDeleteClick}>
                            <Box
                                component="img"
                                src={DeleteIcon}
                                alt="Delete"
                                sx={{ width: '24px', height: '24px', objectFit: 'contain' }}
                            />
                            <Typography variant="caption" sx={{ fontSize: '10px', color: '#D32F2F' }}>DELETE</Typography>
                        </Box>
                    </Stack>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                    <Stack direction={{ md: 'row', xs: 'column' }} p={1} alignItems="center">
                        <Box sx={{ width: { xs: "100%", md: "15%" }, mb: 1 }}>
                            <Typography width="100%">Banner Text</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <TextField
                                size="small"
                                value={bannerText}
                                onChange={handleBannerTextChange}
                                error={!!bannerTextError}
                                helperText={bannerTextError || ' '}
                                sx={{
                                    width: { md: "750px", xs: "100%" },
                                    "& .MuiOutlinedInput-root": {
                                        color: "#333",
                                        "& fieldset": { borderColor: "#68b266" },
                                        "&:hover fieldset": { borderColor: "#4CAF50" },
                                        "&.Mui-focused fieldset": { borderColor: "#2e7d32" },
                                    },
                                }}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={{ md: 'row', xs: 'column' }} p={1} alignItems="center">
                        <Box sx={{ width: { xs: "100%", md: "15%" }, mb: 1 }}>
                            <Typography width="100%">Duration Period</Typography>
                        </Box>
                        <Box width={{ md: "40%", xs: "100%" }} display="flex" gap={3} alignItems="center">
                            <DatePicker
                                value={startDate}
                                onChange={handleStartDateChange}
                                format="MM/DD/YYYY"
                                slots={{ openPickerIcon: CustomCalendarIcon }}
                                slotProps={{
                                    textField: { 
                                        size: 'small', 
                                        error: !!startDateError,
                                        helperText: startDateError || ' ' 
                                    } 
                                }}
                                disabled={isFixed}
                            />
                            <Typography component="span" display="flex" alignItems="center" mb={1} >
                                To
                            </Typography>
                            <DatePicker
                                value={endDate}
                                onChange={handleEndDateChange}
                                format="MM/DD/YYYY"
                                slots={{ openPickerIcon: CustomCalendarIcon }}
                                slotProps={{ 
                                    textField: { 
                                        size: 'small',
                                        error: !!endDateError,
                                        helperText: endDateError || ' ' 
                                    } 
                                }}
                                disabled={isFixed}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={{ md: 'row', xs: 'column' }}>
                        <Box sx={{ width: { xs: "100%", md: "15%" } }}></Box>
                        <Box display="flex" alignItems="center">
                            <Radio size="small" checked={isFixed} onChange={handleFixedChange} />
                            <Typography component="span">Fixed</Typography>
                        </Box>
                    </Stack>

                    <Stack direction={{ md: 'row', xs: 'column' }} p={1}>
                        <Box sx={{ width: { xs: "100%", md: "15%", mt: 2 } }}>
                            <Typography width="100%" mt={3}>Image</Typography>
                            <Typography fontSize="10px" paddingBottom={1} >(Upload in SVG format)</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Button
                                sx={{ width: '100px'}}
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                endIcon={<CustomUploadIcon />}>
                                Upload
                                <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                            </Button>
                            {uploadedImagePreview && (
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box 
                                        component="img" 
                                        src={uploadedImagePreview} 
                                        alt="Uploaded Preview"
                                        sx={{ width: '80px', height: 'auto' }} 
                                    />
                                    {imageError && (
                                        <Typography color="error" sx={{ fontSize: '12px' }}>
                                            {imageError}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </Stack>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', paddingBottom: 2 }}>
                        <Button 
                            variant="contained" 
                            onClick={handleSubmit}
                            disabled={isSaveButtonDisabled}
                            sx={{ margin: { xs: 'auto' }, marginLeft: { md: '400px' }, paddingX: 5, borderRadius: '10px' }}>
                            UPDATE
                        </Button>
                    </Box>
                </Box>

                <DeleteHPT
                    open={openDeleteModal}
                    onClose={handleCloseDeleteModal}
                    onConfirm={handleConfirmDelete}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default EditHomepageTitle;