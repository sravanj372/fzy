// ./popups/DeleteHPT.tsx
import React from 'react';
import { Box, Button, Typography, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  // Styles for the actual popup content box
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  p: 4,
  outline: 'none',
  zIndex: 10, // Ensure the dialog content is above the backdrop
};

interface DeleteHPTProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteHPT: React.FC<DeleteHPTProps> = ({ open, onClose, onConfirm }) => {
  if (!open) {
    return null;
  }

  return (
    <Box
      // This is the full-screen semi-transparent overlay
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // The semi-transparent shadow
        backdropFilter: 'blur(3px)', // The blur effect on the background
        zIndex: 9, // Place this behind the dialog content but in front of the main app
      }}
    >
      {/* This is the actual dialog content */}
      <Box sx={style}>
       

        {/* Title/Message */}
        <Typography
          id="delete-modal-title"
          variant="h6"
          component="h2"
          sx={{
            color: '#FF0000',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: 2,
            mb: 3,
          }}
        >
          Are you sure you want to delete the Homepage title?
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              color: '#FF0000',
              borderColor: '#FF0000',
              borderRadius: '8px',
              textTransform: 'none',
              padding: '2px 24px',
              '&:hover': {
                borderColor: '#CC0000',
                color: '#CC0000',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            sx={{
              backgroundColor: '#FF0000',
              color: '#FFFFFF',
              borderRadius: '8px',
              textTransform: 'none',
              padding: '2px 24px',
              '&:hover': {
                backgroundColor: '#CC0000',
              },
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default DeleteHPT;
