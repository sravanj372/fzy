import { styled, Button, TableCell, Box, Typography } from "@mui/material";

export const Suspendedbutton = styled(Button)({
  minWidth: "175px",
  color: "#FF3326",
  borderColor: "#FF3326",
});

export const Filterbutton = styled(Button)({
  backgroundColor: "#E0E0E0",
  color: "#2F7A52",
});

export const TableHeadCell = styled(TableCell)({
  fontWeight: 700,
  whiteSpace: 'nowrap',
});

export const UserInfoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  cursor: "pointer",
  wordBreak: "break-word",
});

export const StatusIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  justifyContent: "center",
});

export const StatusText = styled(Typography)({
  fontWeight: 400,
});

export const ActionsButton = styled(Button)({
  border: "1px groove gray",
  padding: '0 8px',
  color: '#FF3326',
  fontWeight: 700,
});

// Modal Styles
export const ModalContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)',
  zIndex: 1000,
});

export const ModalPaper = styled(Box)({
  backgroundColor: '#FF3326',
  borderRadius: '8px',
  padding: 4,
  boxShadow: 3,
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%',
  color: '#ffffff',
});

export const ModalImage = styled('img')({
  width: '150px',
  height: '150px',
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
});

export const ModalTitle = styled(Typography)({
  fontSize: '20px',
  marginBottom: '24px',
});

export const ModalNote = styled(Typography)({
  fontFamily: 'Nunito Sans',
  fontSize: '15px',
  lineHeight: '100%',
  letterSpacing: '-0.11px',
  textAlign: 'center',
  marginBottom: '32px',
  color: '#fcfcfc',
  opacity: 1,
});

export const ModalButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '48px',
});

export const ModalCancelButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  color: '#FF3326',
  borderColor: '#FF3326',
  width: '110px',
  height: '30px',
});

export const ModalConfirmButton = styled(Button)({
  backgroundColor: '#ffffffff',
  color: '#FF3326',
  height: '30px',
  width: '110px',
});