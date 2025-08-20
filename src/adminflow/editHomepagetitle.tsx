import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { Box, Button, Stack, TextField, Typography, DialogContent, DialogActions } from "@mui/material";
import Radio from '@mui/material/Radio';
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

// Import all styled components
import {
  VisuallyHiddenInput,
  ModalOverlay,
  ModalContent,
  HeaderIcon,
  HeaderText,
  DeleteContainer,
  DeleteImage,
  DeleteText,
  FormSection,
  FormLabel,
  FormInputContainer,
  InputTextField,
  DatePickerContainer,
  ToText,
  RadioContainer,
  ImageUploadContainer,
  UploadButton,
  ImagePreview,
  ErrorText,
  SubmitButtonContainer,
  SubmitButton,
  DeleteModalTitle,
  DeleteModalText,
  DeleteModalActions,
  CancelButton,
  DeleteConfirmButton,
} from '../adminstyles/EditHomepageTitle.styles';

// --- Main Component ---

const EditHomepageTitle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const path = pathname.split('/').pop();
  
  useEffect(() => {
    console.log("Current pathname:", pathname);
    console.log("Extracted path:", path);
  }, [pathname, path]);

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
    if (endDate && newValue && (endDate.isBefore(newValue, 'day') || endDate.isSame(newValue, 'day'))) {
      setEndDateError('End date must be after the start date.');
    } else {
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
      setImageError('An image is required.');
    }
  };
  
  const CustomCalendarIcon = () => (
    <Box
      component="img"
      src={calicon}
      alt="Calendar Icon"
    />
  );

  const CustomUploadIcon = () => (
    <Box
      component="img"
      src={upload}
      alt="Upload Icon"
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
      <Box p={{ xs: 2, md: 3 }} ref={containerRef}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <ArrowBackIcon onClick={() => navigate('/admin/dashboard')} className="header-icon" />
            <HeaderText>
  {path === 'edit-home-title' ? "Edit Homepage Title" : "Edit Homepage Title"}
</HeaderText>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <DeleteContainer onClick={handleDeleteClick}>
              <DeleteImage
                component="img"
                src={DeleteIcon}
                alt="Delete"
              />
              <DeleteText variant="caption">DELETE</DeleteText>
            </DeleteContainer>
          </Stack>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <FormSection direction={{ md: 'row', xs: 'column' }}>
            <FormLabel>
              <Typography width="100%">Banner Text</Typography>
            </FormLabel>
            <FormInputContainer>
              <InputTextField
                size="small"
                value={bannerText}
                onChange={handleBannerTextChange}
                error={!!bannerTextError}
                helperText={bannerTextError || ' '}
              />
            </FormInputContainer>
          </FormSection>
          <FormSection direction={{ md: 'row', xs: 'column' }}>
            <FormLabel>
              <Typography width="100%">Duration Period</Typography>
            </FormLabel>
            <DatePickerContainer>
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
              <ToText component="span">To</ToText>
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
            </DatePickerContainer>
          </FormSection>
          <FormSection direction={{ md: 'row', xs: 'column' }}>
            <FormLabel></FormLabel>
            <RadioContainer>
              <Radio size="small" checked={isFixed} onChange={handleFixedChange} />
              <Typography component="span">Fixed</Typography>
            </RadioContainer>
          </FormSection>
          <FormSection direction={{ md: 'row', xs: 'column' }}>
            <FormLabel>
              <Typography width="100%">Image</Typography>
              <Typography fontSize="10px" paddingBottom={1} >(Upload in SVG format)</Typography>
            </FormLabel>
            <ImageUploadContainer>
              <Box display="flex" alignItems="center" gap={2}>
                <UploadButton
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  endIcon={<CustomUploadIcon />}>
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
              </Box>
              <Box>
                {imageError && (
                  <ErrorText color="error">
                    {imageError}
                  </ErrorText>
                )}
              </Box>
            </ImageUploadContainer>
          </FormSection>
          <SubmitButtonContainer>
            <SubmitButton
              variant="contained" 
              onClick={handleSubmit}
              disabled={isSaveButtonDisabled}
            >
              UPDATE
            </SubmitButton>
          </SubmitButtonContainer>
        </Box>
      </Box>
      
      {/* The custom modal and overlay */}
      {openDeleteModal && (
        <ModalOverlay>
          <ModalContent>
            <DialogContent>
              <DeleteModalTitle variant="h6">
                Are you sure you want to delete this homepage title?
              </DeleteModalTitle>
              <DeleteModalText>
              </DeleteModalText>
            </DialogContent>
            <DeleteModalActions>
              <CancelButton variant="outlined" onClick={handleCloseDeleteModal}>
                Cancel
              </CancelButton>
              <DeleteConfirmButton variant="contained" onClick={handleConfirmDelete}>
                Delete
              </DeleteConfirmButton>
            </DeleteModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </LocalizationProvider>
  );
};

export default EditHomepageTitle;