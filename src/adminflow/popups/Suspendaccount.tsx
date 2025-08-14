import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';

interface SuspendaccountProps {
  suspenopen: boolean;
  suspendclose: () => void;
  onConfirm: () => void;
}

const Suspendaccount = ({ suspenopen, suspendclose, onConfirm }: SuspendaccountProps) => {
  return (
    <Dialog
      open={suspenopen}
      onClose={suspendclose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          width: '400px',
          height: '200px',
          boxShadow: 'none',
          borderRadius: '16px',
        },
      }}
      BackdropProps={{
        sx: {
          // This will blur the content behind the dialog.
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)', // For Safari support
        },
      }}
    >
      <DialogContent sx={{ paddingTop: '50px' }}>
        <Typography textAlign="center">Are you sure want to Suspend the Account?</Typography>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', gap: "80px" }}>
        <Button variant="outlined" onClick={suspendclose} sx={{ border: '1px solid red', paddingX: '30px', color: 'red' }}>Cancel</Button>
        <Button variant="contained" onClick={onConfirm} autoFocus sx={{ background: 'red', '&:hover': {
          background: 'red' }, paddingX: '30px', }}>
          Suspend
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Suspendaccount;