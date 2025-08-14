import React, { useState, ChangeEvent } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import calicon from '../assets/uil_calender.png';
import upload from '../assets/Vector (1).png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);

const Homepagetitle = () => {
    // State to hold form data
    const [bannerText, setBannerText] = useState('');
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);

    // State to hold validation errors
    const [bannerTextError, setBannerTextError] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);
    const [startDateError, setStartDateError] = useState<string | null>(null);
    const [endDateError, setEndDateError] = useState<string | null>(null);

    // Constants for validation logic
    const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024; // 1MB in bytes
    const today = dayjs().startOf('day');

    // Styled component for hidden file input
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

    const navigate = useNavigate();

    // Handler for banner text changes with validation
    const handleBannerTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setBannerText(text);
        if (text.length > 5) {
            setBannerTextError(null);
        } else {
            setBannerTextError('Banner text must be greater than 5 characters.');
        }
    };

    // Handler for start date changes with validation
    const handleStartDateChange = (newValue: Dayjs | null) => {
        setStartDate(newValue);
        if (newValue && newValue.isBefore(today, 'day')) {
            setStartDateError('Start date cannot be before today.');
        } else {
            setStartDateError(null);
        }
        // Also validate end date if start date is changed
        if (endDate && newValue && (endDate.isBefore(newValue, 'day') || endDate.isSame(newValue, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else {
            // Clear end date error if the new start date makes it valid
            if (endDateError && endDate && newValue && endDate.isSameOrBefore(newValue, 'day')) {
                setEndDateError(null);
            }
        }
    };

    // Handler for end date changes with validation
    const handleEndDateChange = (newValue: Dayjs | null) => {
        setEndDate(newValue);
        if (newValue && startDate && (newValue.isBefore(startDate, 'day') || newValue.isSame(startDate, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else {
            setEndDateError(null);
        }
    };

    // Handler for file upload with size validation
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
        }
    };

    // Custom icon components
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
            sx={{ width: 18, height: 18 }}
        />
    );

    // Main submission handler with final validation check
    const handleSubmit = () => {
        let isFormValid = true;

        // Check if all fields are filled
        if (bannerText.length <= 5) {
            setBannerTextError('Banner text must be greater than 5 characters.');
            isFormValid = false;
        }

        if (!startDate) {
            setStartDateError('Start date is required.');
            isFormValid = false;
        }

        if (!endDate) {
            setEndDateError('End date is required.');
            isFormValid = false;
        }

        if (!uploadedImagePreview) {
            setImageError('An image is required.');
            isFormValid = false;
        }

        // Re-run date validation for a final check
        if (startDate && startDate.isBefore(today, 'day')) {
            setStartDateError('Start date cannot be before today.');
            isFormValid = false;
        }

        if (endDate && startDate && (endDate.isBefore(startDate, 'day') || endDate.isSame(startDate, 'day'))) {
            setEndDateError('End date must be after the start date.');
            isFormValid = false;
        }
        
        if (imageError || startDateError || endDateError || bannerTextError) {
          isFormValid = false;
        }

        if (isFormValid) {
            // All validations passed. Proceed with saving logic.
            console.log("Form submitted successfully!");
            // E.g., API call, navigation, etc.
            // navigate('/admin/dashboard');
        } else {
            console.log("Form has validation errors.");
        }
    };
    
    // isSaveButtonDisabled check needs to be more precise for dates
    const isSaveButtonDisabled = !bannerText || !!bannerTextError || !!imageError || !!startDateError || !!endDateError || !startDate || !endDate || !uploadedImagePreview;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box p={{ xs: 2, md: 3 }}>
                <Box display="flex" justifyContent="space-between" mb={{ xs: 2, md: 3 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <ArrowBackIcon
                            onClick={() => navigate('/admin/dashboard')}
                            sx={{ cursor: 'pointer', mt: { xs: 0, md: 1 }, color: '#2F7A52', fontSize: { xs: '18px', md: '20px' } }}
                        />
                        <Typography
                            color="#2F7A52"
                            fontSize={{ xs: '18px', md: '20px' }}
                            fontWeight="500"
                            mb={-1}
                        >
                            Homepage Title
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 4 }}>
                    {/* Banner Text Section */}
                    <Stack direction={{ md: 'row', xs: 'column' }} p={1} gap={{ xs: 1, md: 3 }} alignItems="center">
                        <Box sx={{ width: { xs: "100%", md: "15%" } }} >
                            <Typography sx={{ width: '100%', fontSize: { xs: '15px', md: '17px' },mb:1 }}>Banner Text</Typography>
                        </Box>
                        <Box width={{ md: "40%", xs: "100%" }}>
                            <TextField
                                size="small"
                                value={bannerText}
                                onChange={handleBannerTextChange}
                                error={!!bannerTextError}
                                helperText={bannerTextError || ' '}
                                sx={{
                                    width: "100%",
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

                    {/* Duration Period Section */}
                    <Stack direction={{ md: 'row', xs: 'column' }} p={1} gap={{ xs: 1, md: 3 }} alignItems="center">
                        <Box sx={{ width: { xs: "100%", md: "15%" } }} >
                            <Typography sx={{ width: '100%', fontSize: { xs: '15px', md: '17px' }, mb:1 }}>Duration Period</Typography>
                        </Box>
                        <Box width={{ md: "40%", xs: "100%" }} display="flex" gap={2} alignItems="center">
                            <DatePicker
                                value={startDate}
                                onChange={handleStartDateChange}
                                format="MM-DD-YYYY"
                                slots={{ openPickerIcon: CustomCalendarIcon }}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        fullWidth: true,
                                        error: !!startDateError,
                                        helperText: startDateError || ' ',
                                    }
                                }}
                                minDate={today} // Prevents selecting dates before today
                            />
                            <Typography component="span" sx={{ whiteSpace: 'nowrap', fontSize: { xs: '15px', md: '17px' },mb:2 }}>
                                To
                            </Typography>
                            <DatePicker
                                value={endDate}
                                onChange={handleEndDateChange}
                                format="MM-DD-YYYY"
                                slots={{ openPickerIcon: CustomCalendarIcon }}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        fullWidth: true,
                                        error: !!endDateError,
                                        helperText: endDateError || ' ',
                                    }
                                }}
                                minDate={startDate || today} // End date cannot be before start date or today
                            />
                        </Box>
                    </Stack>

                    {/* Image Upload Section */}
                    <Stack direction={{ md: 'row', xs: 'column' }} p={1} gap={{ xs: 1, md: 3 }} alignItems="center">
                        <Box sx={{ width: { xs: "100%", md: "15%", mt: { xs: 0, md: 2 } } }} >
                            <Typography sx={{ width: '100%', fontSize: { xs: '15px', md: '17px' }, mb:1 }}>Image</Typography>
                            <Typography fontSize={{ xs: '10px', md: '12px' }} paddingBottom={{ xs: '5px' }}>(Upload In SVG format)</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                            <Button
                                sx={{ width: '100px' }}
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                endIcon={<CustomUploadIcon />}
                            >
                                Upload
                                <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                            </Button>
                            {uploadedImagePreview && (
                                <Box>
                                    <Box
                                        component="img"
                                        src={uploadedImagePreview}
                                        alt="Uploaded Preview"
                                        sx={{ width: '80px', height: 'auto', mt: { xs: 0, md: -4 } }}
                                    />
                                </Box>
                            )}
                            <Box sx={{ minHeight: '1.5rem', display: 'flex', alignItems: 'center' }}>
                                {imageError && (
                                    <Typography color="error" sx={{ fontSize: '12px' }}>
                                        {imageError}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Stack>

                    {/* Save Button */}
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, paddingY: 2 }}>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={isSaveButtonDisabled}
                            sx={{
                                width: { xs: '100%', sm: 'auto' },
                                marginLeft: { md: '400px' },
                                paddingX: 5,
                                borderRadius: '10px',
                                textTransform: 'none'
                            }}
                        >
                            SAVE
                        </Button>
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default Homepagetitle;
