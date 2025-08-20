// styles.ts
import { SxProps } from '@mui/material';

interface Styles {
  container: SxProps;
  formContainer: SxProps;
  header: SxProps;
  backIcon: SxProps;
  headerText: SxProps;
  labelWrapper: SxProps;
  labelText: SxProps;
  inputField: SxProps;
  adornment: SxProps;
  helperText: SxProps;
  saveButtonWrapper: SxProps;
  saveButton: SxProps;
}

const styles: Styles = {
  container: {
    backgroundColor: '#F7FBF7',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'left',
    p: 2,
  },
  formContainer: {
    maxWidth: '700px',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    mb: 4,
  },
  backIcon: {
    cursor: 'pointer',
    color: '#2F7A52',
    mr: 1,
  },
  headerText: {
    fontFamily: 'Nunito Sans',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '175%',
    color: '#2F7A52',
  },
  labelWrapper: {
    height: '74px',
    display: 'flex',
    alignItems: 'center',
  },
  labelText: {
    fontFamily: 'Nunito Sans',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '100%',
    color: '#000000',
  },
  inputField: {
    width: 379,
    height: 54,
    borderRadius: '10px',
    backgroundColor: '#F5FAF6',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2F7A52',
      borderWidth: '1px',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      borderWidth: '1px',
    },
    '& input::placeholder': {
      fontFamily: 'Yu Gothic UI',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '100%',
      letterSpacing: '0px',
      color: '#000000',
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  },
  adornment: {
    color: '#2F7A52',
  },
  helperText: {
    minHeight: '1.25em',
  },
  saveButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3,
    ml: { md: 24, xs: 0 },
  },
  saveButton: {
    width: 150,
    height: 44,
    borderRadius: '10px',
    border: '1px solid #2F7A52',
    backgroundColor: '#2F7A52',
    color: '#FFFFFF',
    padding: '14px 9px',
    gap: '15px',
    fontSize: '14px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#256340',
    },
    boxShadow: 'none',
  },
};

export default styles;