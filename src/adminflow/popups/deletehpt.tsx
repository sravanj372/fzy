// ./popups/deletehpt.tsx
import React from 'react';
import { Box, Button, Typography, Stack, Modal } from '@mui/material';

const style = {
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
};

// Add container prop to the interface
interface DeleteHPTProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  container: HTMLDivElement | null;
}

const DeleteHPT: React.FC<DeleteHPTProps> = ({ open, onClose, onConfirm, container }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-modal-title"
      // Apply the container prop here
      container={container}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(1px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }
        }
      }}
    >
      <Box sx={style}>
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
    </Modal>
  );
};

export default DeleteHPT;