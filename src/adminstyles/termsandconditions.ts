import { styled } from '@mui/system';
import { Paper, IconButton, Box } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid #e0e0e0',
  boxShadow: 'none',
  padding: theme.spacing(3),
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.54)',
  padding: theme.spacing(0.25),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const RichTextToolbar = styled(Box)(({ theme }) => ({
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#fafafa',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  flexWrap: 'wrap',
  gap: '2px',
}));

export const RichTextContent = styled(Box)(({ theme }) => ({
  minHeight: '400px',
  padding: theme.spacing(2),
  borderRadius: '8px',
  marginTop: theme.spacing(2),
  fontFamily: 'Nunito Sans, sans-serif',
  lineHeight: 1.6,
  color: '#424242',
  outline: 'none',
  whiteSpace: 'pre-wrap',
}));

// Style objects for inline sx props
export const styles = {
  mainContainer: {
    p: 1,
    bgcolor: '#F5FAFA',
    minHeight: '100vh',
    fontFamily: 'Nunito Sans, sans-serif',
  },
  
  header: {
    display: 'flex',
    alignItems: 'center',
    mb: 7,
  },
  
  backIcon: {
    color: '#2F7A52',
    fontSize: 24,
    cursor: 'pointer',
  },
  
  headerTitle: {
    color: '#2F7A52',
    fontWeight: 600,
    ml: 1,
  },
  
  editorSectionContainer: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-start',
    mb: 4,
  },
  
  editorSectionTitle: {
    flexShrink: 0,
    pt: 2,
    width: '250px',
  },
  
  sectionTitleText: {
    color: '#000000',
    fontWeight: 400,
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '20px',
    lineHeight: '100%',
    ml: 8,
  },
  
  editorSectionContent: {
    flexGrow: 1,
  },
  
  updateButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 4,
    mb: 4,
  },
  
  updateButton: {
    bgcolor: '#2F7A52',
    color: 'white',
    borderRadius: '8px',
    textTransform: 'none',
    px: 5,
    py: 1.5,
    '&:hover': {
      bgcolor: '#2e7d32',
    },
  },
  
  updateButtonContainerLast: {
    display: 'flex',
    justifyContent: 'center',
    mt: 4,
  },
  
  // Toolbar specific styles
  fontSizeSelect: {
    height: '32px',
    fontSize: '12px',
    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
    bgcolor: 'white',
    borderRadius: '4px',
  },
  
  divider: {
    mx: 0.5,
    borderColor: '#e0e0e0',
  },
  
  textColorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  
  textColorLabel: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  
  colorPicker: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    width: '20px',
    height: '20px',
    border: 'none',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  
  superscriptText: {
    fontSize: '18px',
  },
  
  formatSelect: {
    height: '32px',
    fontSize: '12px',
    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
    bgcolor: 'white',
    borderRadius: '4px',
  },
};