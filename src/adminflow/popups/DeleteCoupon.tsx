import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const DeleteCoupon = ({deletecoupon,couponclose}:{deletecoupon:any,couponclose:any}) => {
  return (
    <Dialog
              open={deletecoupon}
              onClose={couponclose}
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
              <Typography textAlign="center">Are you sure want to Cancel the Coupon?</Typography>
              </DialogContent>
              <DialogActions sx={{display:'flex', justifyContent:'center',marginBottom:'36px', gap:"100px"}}>
                <Button variant="outlined" onClick={couponclose} sx={{border:'1px solid red',color:'red',
                '&:hover':{border:'1px solid red'

                }}}>Cancel</Button>
                <Button variant="contained" onClick={couponclose} autoFocus sx={{background:'red','&:hover':{
                              background:'red' }}}>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
  )
}

export default DeleteCoupon
