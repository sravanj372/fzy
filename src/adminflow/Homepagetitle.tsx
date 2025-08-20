import React, { useState, ChangeEvent } from "react";
import { Stack, TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import calicon from '../assets/uil_calender.png';
import upload from '../assets/Vector (1).png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { VisuallyHiddenInput, StyledComponents } from '../adminstyles/Homepagetitle.styles';

dayjs.extend(isSameOrBefore);

const {
    MainBox,
    HeaderBox,
    HeaderTextContainer,
    ArrowIcon,
    PageTitle,
    FormContainer,
    StackRow,
    LabelBox,
    LabelText,
    TextFieldContainer,
    StyledTextField,
    DurationBox,
    DurationToText,
    ImageLabelBox,
    ImagePreviewContainer,
    UploadButtonContainer,
    UploadButton,
    ImagePreview,
    ErrorTextContainer,
    ErrorText,
    SaveButtonContainer,
    SaveButton
} = StyledComponents;

const Homepagetitle = () => {
    // State for form data
    const [bannerText, setBannerText] = useState('');
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);

    // State for validation errors
    const [bannerTextError, setBannerTextError] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);
    const [startDateError, setStartDateError] = useState<string | null>(null);
    const [endDateError, setEndDateError] = useState<string | null>(null);

    const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024;
    const today = dayjs().startOf('day');
    const navigate = useNavigate();

    const handleBannerTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setBannerText(text);
        if (text.length > 5) {
            setBannerTextError(null);
        } else {
            setBannerTextError('Banner text must be greater than 5 characters.');
        }
    };

    const handleStartDateChange = (newValue: Dayjs | null) => {
        setStartDate(newValue);
        if (newValue && newValue.isBefore(today, 'day')) {
            setStartDateError('Start date cannot be before today.');
        } else {
            setStartDateError(null);
        }
        if (endDate && newValue && (endDate.isBefore(newValue, 'day') || endDate.isSame(newValue, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else {
            if (endDateError && endDate && newValue && endDate.isSameOrBefore(newValue, 'day')) {
                setEndDateError(null);
            }
        }
    };

    const handleEndDateChange = (newValue: Dayjs | null) => {
        setEndDate(newValue);
        if (newValue && startDate && (newValue.isBefore(startDate, 'day') || newValue.isSame(startDate, 'day'))) {
            setEndDateError('End date must be after the start date.');
        } else {
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
            sx={{ width: 18, height: 18 }}
        />
    );

    const handleSubmit = () => {
        let isFormValid = true;

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
            console.log("Form submitted successfully!");
        } else {
            console.log("Form has validation errors.");
        }
    };

    const isSaveButtonDisabled = !bannerText || !!bannerTextError || !!imageError || !!startDateError || !!endDateError || !startDate || !endDate || !uploadedImagePreview;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MainBox>
                <HeaderBox>
                    <HeaderTextContainer>
                        <ArrowIcon onClick={() => navigate('/admin/dashboard')} />
                        <PageTitle>
                            Homepage Title
                        </PageTitle>
                    </HeaderTextContainer>
                </HeaderBox>

                <FormContainer>
                    {/* Banner Text Section */}
                    <StackRow>
                        <LabelBox>
                            <LabelText>Banner Text</LabelText>
                        </LabelBox>
                        <TextFieldContainer>
                            <StyledTextField
                                size="small"
                                value={bannerText}
                                onChange={handleBannerTextChange}
                                error={!!bannerTextError}
                                helperText={bannerTextError || ' '}
                            />
                        </TextFieldContainer>
                    </StackRow>

                    {/* Duration Period Section */}
                    <StackRow>
                        <LabelBox>
                            <LabelText>Duration Period</LabelText>
                        </LabelBox>
                        <DurationBox>
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
                                        sx: {
                                          "& .MuiOutlinedInput-root fieldset": { borderColor: "#2F7A52" },
                                          "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#2e7d32" },
                                        }
                                    }
                                }}
                                minDate={today}
                            />
                            <DurationToText component="span">
                                To
                            </DurationToText>
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
                                        sx: {
                                            "& .MuiOutlinedInput-root fieldset": { borderColor: "#2F7A52" },
                                            "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#2e7d32" },
                                        }
                                    }
                                }}
                                minDate={startDate || today}
                            />
                        </DurationBox>
                    </StackRow>

                    {/* Image Upload Section */}
                    <StackRow>
                        <ImageLabelBox>
                            <LabelText>Image</LabelText>
                            <Typography fontSize={{ xs: '10px', md: '12px' }} paddingBottom="5px">(Upload In SVG format)</Typography>
                        </ImageLabelBox>
                        <ImagePreviewContainer>
                            <UploadButtonContainer>
                                <UploadButton
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    endIcon={<CustomUploadIcon />}
                                >
                                    Upload
                                    <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                                </UploadButton>
                                {uploadedImagePreview && (
                                    <ImagePreview
                                        component="img"
                                        src={uploadedImagePreview}
                                        alt="Uploaded Preview"
                                    />
                                )}
                            </UploadButtonContainer>
                            <ErrorTextContainer>
                                {imageError && (
                                    <ErrorText color="error">
                                        {imageError}
                                    </ErrorText>
                                )}
                            </ErrorTextContainer>
                        </ImagePreviewContainer>
                    </StackRow>

                    {/* Save Button */}
                    <SaveButtonContainer>
                        <SaveButton
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={isSaveButtonDisabled}
                        >
                            SAVE
                        </SaveButton>
                    </SaveButtonContainer>
                </FormContainer>
            </MainBox>
        </LocalizationProvider>
    );
};

export default Homepagetitle;