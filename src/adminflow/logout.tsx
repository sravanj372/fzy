import React from 'react';
import { Box, Button, Typography, Paper, Modal } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface LogoutScreenProps {
  open: boolean; // Add an 'open' prop to control the modal's visibility
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutScreen: React.FC<LogoutScreenProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open} // Bind the modal's open state to the 'open' prop
      onClose={onClose}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // The rest of the modal's styling is handled internally by MUI
      }}
    >
      <Paper
        sx={{
          width: { xs: 300, sm: 340 },
          maxWidth: '90%',
          p: { xs: 2, sm: 3 },
          textAlign: 'center',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          outline: 'none', // Remove the default focus outline for a cleaner look
        }}
      >
        <Typography
          id="logout-modal-title"
          sx={{
            color: '#FF3326',
            fontWeight: 600,
            fontSize: { xs: '16px', sm: '18px' },
            mb: 6,
            mt: 4,
          }}
        >
          Are you sure you want to log out?
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Button
            onClick={onClose}
            sx={{
              color: '#FF3326',
              borderColor: '#FF3326',
              '&:hover': {
                borderColor: '#FF3326',
                backgroundColor: 'rgba(255, 51, 38, 0.08)',
              },
              fontWeight: 600,
              textTransform: 'none',
              minWidth: '120px',
              height: '30px',
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            sx={{
              bgcolor: '#FF3326',
              color: 'white',
              '&:hover': {
                bgcolor: '#e02c1e',
              },
              fontWeight: 600,
              textTransform: 'none',
              minWidth: '120px',
              height: '30px',
            }}
            variant="contained"
          >
            Log Out
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <ArrowBackIcon sx={{ fontSize: '14px', color: '#2F7A52' }} />
          <Typography sx={{ color: '#070808ff', fontSize: '14px', fontWeight: 500 }}>
            Back to 
          </Typography>
          <Typography sx={{ color: '#2F7A52', fontSize: '15px', fontWeight: 500, textDecoration: 'underline' }}>
            Log in
          </Typography>
        </Box>
      </Paper>
    </Modal>
  );
};

export default LogoutScreen;