import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const Suspendpopup = ({suspenopen,supendclose}:{suspenopen:any;supendclose:any}) => {
  return (
    
      <Dialog
        open={suspenopen}
        onClose={supendclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
         PaperProps={{
          sx: {
            width: '400px',  
            height: '200px',
          },
  }}
        >
        <DialogContent>
        <Typography textAlign="center">Are you sure want to delete the Suspend Account?</Typography>
        </DialogContent>
        <DialogActions sx={{display:'flex', justifyContent:'center',marginBottom:'36px', gap:"100px"}}>
          <Button variant="outlined" onClick={supendclose}>Cancel</Button>
          <Button variant="contained" onClick={supendclose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    
  )
}

export default Suspendpopup
