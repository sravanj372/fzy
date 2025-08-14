import React from 'react';
import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface UnsuspendProps {
  suspenopen: boolean;
  suspendclose: () => void;
  onConfirm: () => void;
}

const Unsuspend = ({ suspenopen, suspendclose, onConfirm }: UnsuspendProps) => {
  return (
    <Dialog
      open={suspenopen}
      onClose={suspendclose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          width: '400px',
          height: '230px',
          boxShadow: 'none',
          borderRadius: '16px',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'transparent',
          backdropFilter: 'none',
        },
      }}
    >
      <DialogContent sx={{ paddingTop: '50px' }}>
        <Typography textAlign="center">Are you sure you want to Unsuspend the Account?</Typography>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', gap: "80px" }}>
        <Button variant="outlined" onClick={suspendclose} sx={{ border: '1px solid red', paddingX: '30px', color: 'red' }}>Cancel</Button>
        <Button variant="contained" onClick={onConfirm} autoFocus sx={{ background: 'red', '&:hover': {
          background: 'red' }, paddingX: '30px', }}>
          Unsuspend
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Unsuspend;