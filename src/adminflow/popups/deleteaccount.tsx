import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const Suspendpopup = ({ suspenopen, suspendclose, onConfirm }) => {
  return (
    <Dialog
      open={suspenopen}
      onClose={suspendclose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          width: '547px',
          height: '447px',
          backgroundColor: '#FF3326',
          borderRadius: '24px',
          padding: '1rem',
          boxShadow: 'none',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
      }} 
    >
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0 }}>
        <Box sx={{
          width: '180px',
          height: '180px',
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.9995 8.33333L8.33337 91.6667H91.6657L49.9995 8.33333Z" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50 33.3333V58.3333" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50 75H50.0417" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>

        <Typography 
          sx={{ 
            fontFamily: 'Nunito Sans',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-0.11px',
            textAlign: 'center',
            mb: 2,
            color: '#FFFFFF'
          }}
        >
          Are you sure you want to delete the <br /> Suspended Account?
        </Typography>

        <Typography 
          sx={{ 
            fontFamily: 'Nunito Sans',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '-0.11px',
            textAlign: 'center',
            mb: 4, 
            color: '#FFFFFF', 
            opacity: 1 
          }}
        >
          <Box component="span" sx={{ fontWeight: 700 }}>Note:</Box> This action is permanent. Once deleted, the <br /> account and its data cannot be recovered.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ display: 'flex', justifyContent: 'center', mb: '24px', gap: "100px", padding: 0 }}>
        <Button 
          onClick={suspendclose} 
          sx={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #FF3326',
            color: '#FF3326',
            borderRadius: '8px',
            textTransform: 'none',
            padding: '12px 24px',
            width: '172px',
            height: '44.16px',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            }
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={onConfirm} 
          autoFocus 
          sx={{
            background: '#FFFFFF',
            border: '1px solid #FF3326',
            color: '#FF3326',
            borderRadius: '8px',
            textTransform: 'none',
            padding: '12px 24px',
            width: '172px',
            height: '44.16px',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            }
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Suspendpopup;