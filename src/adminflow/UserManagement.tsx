import { Avatar, Box, Button, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PaginationBox from "./PaginationBox";
import { useUserManagement } from "./useUserManagement";
import {
  Suspendedbutton,
  Filterbutton,
  TableHeadCell,
  UserInfoBox,
  StatusIcon,
  StatusText,
  ActionsButton,
  ModalContainer,
  ModalPaper,
  ModalImage,
  ModalTitle,
  ModalNote,
  ModalButtonBox,
  ModalCancelButton,
  ModalConfirmButton,
} from "../adminstyles/usermanagement.styles";

const UserManagement = () => {
  const {
    path,
    isModalOpen,
    modalType,
    selectedUser,
    anchorEl,
    open,
    userData,
    suspendedUserData,
    userheading,
    suspenduserheadings,
    paginatedSuspendedData,
    navigate,
    handleClick,
    handleClose,
    openModal,
    closeModal,
    handleConfirmSuspend,
    handleConfirmUnsuspend,
    handleConfirmDelete,
    handleView,
  } = useUserManagement();

  return (
    <Box sx={{ background: "white", height: "auto", p: 1 }}>
      <Paper sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            {path === "suspend-user" && (
              <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: "pointer", color: "#FF3326", fontSize: "24px" }} />
            )}
            <Typography color={path === "suspend-user" ? "#FF3326" : "#2F7A52"}>
              {path === "suspend-user" ? "Suspended Accounts" : "User Management"}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" sx={{ gap: 2 }}>
            {path === "suspend-user" ? (
              <Filterbutton variant="contained" startIcon={<FilterListIcon />}>Filters</Filterbutton>
            ) : (
              <Suspendedbutton variant="outlined" onClick={() => navigate("suspend-user")}>
                Suspended Accounts
              </Suspendedbutton>
            )}
          </Box>
        </Box>

        {/* Table Section */}
        <Box mt={2}>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ tableLayout: "auto" }}>
              <TableHead>
                <TableRow sx={{ background: "#F1F4F9" }}>
                  {path === "suspend-user"
                    ? suspenduserheadings.map((heading) => (
                      <TableHeadCell key={heading.id} align={heading.align} sx={{ color: "#FF3326" }}>
                        {heading.suspendheading}
                      </TableHeadCell>
                    ))
                    : userheading.map((heading) => (
                      <TableHeadCell key={heading.id} align={heading.align} sx={{ color: "#2F7A52" }}>
                        {heading.heading}
                      </TableHeadCell>
                    ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {path === "suspend-user"
                  ? paginatedSuspendedData.map((suspenduser) => (
                      <TableRow key={suspenduser.id}>
                        <TableCell align="left">{suspenduser.id}</TableCell>
                        <TableCell align="left">
                          <UserInfoBox onClick={() => navigate("/admin/user-management/user-profile")}>
                            <Avatar src={suspenduser.avator} />
                            <Typography>{suspenduser.username}</Typography>
                          </UserInfoBox>
                        </TableCell>
                        <TableCell align="center">{suspenduser.contact}</TableCell>
                        <TableCell align="center">{suspenduser.date}</TableCell>
                        <TableCell align="center">
                          <StatusIcon>
                            <CircleIcon sx={{ fontSize: "11px", color: "#FF3326" }} />
                            <StatusText>{suspenduser.status}</StatusText>
                          </StatusIcon>
                        </TableCell>
                        <TableCell align="center">
                          <ActionsButton
                            id={`basic-button-${suspenduser.id}`}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => handleClick(e, suspenduser)}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </ActionsButton>
                        </TableCell>
                      </TableRow>
                    ))
                  : userData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>
                          <UserInfoBox onClick={() => navigate("user-profile")}>
                            <Avatar src={user.avator} />
                            <Typography>{user.username}</Typography>
                          </UserInfoBox>
                        </TableCell>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>{user.email}</TableCell>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>{user.phone}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.totalorders}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.co2emission}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.foodpostedno}</TableCell>
                        <TableCell align="center">
                          <StatusIcon>
                            <CircleIcon sx={{ fontSize: "12px", color: "#68B266" }} />
                            <StatusText sx={{ color: "#68B266" }}>{user.status}</StatusText>
                          </StatusIcon>
                        </TableCell>
                        <TableCell align="center">
                          <ActionsButton
                            id={`basic-button-${user.id}`}
                            aria-controls={open ? `basic-menu-${user.id}` : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => handleClick(e, user)}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </ActionsButton>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <PaginationBox />
      </Paper>

      {/* Actions Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ style: { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", minWidth: anchorEl ? anchorEl.clientWidth : undefined } }}
      >
        {path === "suspend-user" ? (
          <>
            <MenuItem onClick={() => openModal('unsuspend')}>Unsuspend</MenuItem>
            <MenuItem onClick={() => openModal('delete')}>Delete</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleView}>View</MenuItem>
            <MenuItem onClick={() => openModal('suspend')}>Suspend</MenuItem>
          </>
        )}
      </Menu>

      {/* Conditional Modals */}
      {isModalOpen && (
        <ModalContainer>
          {modalType === 'delete' && (
            <ModalPaper>
              <ModalImage src={selectedUser?.status === 'Suspended' ? 'path/to/red-alert-icon.png' : 'path/to/alert.png'} alt="Alert Icon" />
              <ModalTitle>
                Are you sure you want to delete the Suspended Account?
              </ModalTitle>
              <ModalNote>
                <Box component="span" sx={{ fontWeight: 700 }}>Note:</Box> This action is permanent. Once deleted, the <br /> account and its data cannot be recovered.
              </ModalNote>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>Cancel</ModalCancelButton>
                <ModalConfirmButton variant="contained" onClick={handleConfirmDelete}>Delete</ModalConfirmButton>
              </ModalButtonBox>
            </ModalPaper>
          )}

          {modalType === 'suspend' && (
            <ModalPaper>
              <ModalTitle>Are you sure you want to Suspend the account?</ModalTitle>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>Cancel</ModalCancelButton>
                <ModalConfirmButton variant="contained" onClick={handleConfirmSuspend}>Suspend</ModalConfirmButton>
              </ModalButtonBox>
            </ModalPaper>
          )}

          {modalType === 'unsuspend' && (
            <ModalPaper>
              <ModalTitle>Are you sure you want to Unsuspend the account?</ModalTitle>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>Cancel</ModalCancelButton>
                <ModalConfirmButton variant="contained" onClick={handleConfirmUnsuspend}>Unsuspend</ModalConfirmButton>
              </ModalButtonBox>
            </ModalPaper>
          )}
        </ModalContainer>
      )}
    </Box>
  );
};

export default UserManagement;