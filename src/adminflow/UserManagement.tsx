import React from "react";
import {
  Avatar,
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
  ActionButton,
  ActionsButton,
  ModalContainer,
  ModalPaper,
  ModalImage,
  ModalTitle,
  ModalNote,
  ModalButtonBox,
  ModalCancelButton,
  ModalConfirmButton,
  ModalConfirmdButton,
  ConfirmationModalPaper,
  ConfirmationModalTitle,
} from "../adminstyles/usermanagement.styles";

import alertIcon from "../assets/line-md_alert.png";

const UserManagement = () => {
  const {
    path,
    isModalOpen,
    modalType,
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
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" gap={1}>
            {path === "suspend-user" && (
              <ArrowBackIcon
                onClick={() => navigate(-1)}
                sx={{
                  cursor: "pointer",
                  color: "#FF3326",
                  fontSize: "24px",
                }}
              />
            )}
            <Typography
              color={path === "suspend-user" ? "#FF3326" : "#2F7A52"}
            >
              {path === "suspend-user"
                ? "Suspended Accounts"
                : "User Management"}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" sx={{ gap: 2 }}>
            {path === "suspend-user" ? (
              // Pass the isSuspended prop to the Filterbutton
              <Filterbutton variant="contained" startIcon={<FilterListIcon />} isSuspendedPath={true}>
                Filters
              </Filterbutton>
            ) : (
              // Pass the isSuspended prop to the Suspendedbutton
              <Suspendedbutton
                variant="outlined"
                onClick={() => navigate("suspend-user")}
                isSuspendedPath={false}
              >
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
                        <TableHeadCell
                          key={heading.id}
                          align={heading.align}
                          sx={{ 
                            color: "#FF3326",
                            // Add a conditional width for the username column
                            ...(heading.id === '2' && { width: '20%' }) 
                          }}
                        >
                          {heading.suspendheading}
                        </TableHeadCell>
                      ))
                    : userheading.map((heading) => (
                        <TableHeadCell
                          key={heading.id}
                          align={heading.align}
                          sx={{ color: "#2F7A52" }}
                        >
                          {heading.heading}
                        </TableHeadCell>
                      ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Suspended Users Table */}
                {path === "suspend-user"
                  ? paginatedSuspendedData.map((suspenduser) => (
                      <TableRow key={suspenduser.id}>
                        <TableCell align="left">{suspenduser.id}</TableCell>
                        <TableCell 
                          align="left"
                          sx={{ width: '20%' }}
                        >
                          <UserInfoBox
                            onClick={() =>
                              navigate("/admin/user-management/user-profile")
                            }
                          >
                            <Avatar src={suspenduser.avator} />
                            <Typography>{suspenduser.username}</Typography>
                          </UserInfoBox>
                        </TableCell>
                        <TableCell align="center">
                          {suspenduser.contact}
                        </TableCell>
                        <TableCell align="center">{suspenduser.date}</TableCell>
                        <TableCell align="center">
                          <StatusIcon>
                            <CircleIcon
                              sx={{ fontSize: "11px", color: "#FF3326" }}
                            />
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
                        <TableCell align="center">
                          <UserInfoBox onClick={() => navigate("user-profile")}>
                            <Avatar src={user.avator} />
                            <Typography>{user.username}</Typography>
                          </UserInfoBox>
                        </TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.phone}</TableCell>
                        <TableCell align="center">{user.totalorders}</TableCell>
                        <TableCell align="center">{user.co2emission}</TableCell>
                        <TableCell align="center">{user.foodpostedno}</TableCell>
                        <TableCell align="center">
                          <StatusIcon>
                            <CircleIcon
                              sx={{ fontSize: "12px", color: "#68B266" }}
                            />
                            <StatusText sx={{ color: "#000000ff" }}>
                              {user.status}
                            </StatusText>
                          </StatusIcon>
                        </TableCell>
                        <TableCell align="center">
                          <ActionButton
                            id={`basic-button-${user.id}`}
                            aria-controls={
                              open ? `basic-menu-${user.id}` : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => handleClick(e, user)}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions
                          </ActionButton>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Pagination Box moved outside of the main table grid but inside the Paper component */}
        
      </Paper>
      
      <Box> <PaginationBox /></Box>
      {/* Actions Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          style: {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            minWidth: anchorEl ? anchorEl.clientWidth : undefined,
          },
        }}
      >
        {path === "suspend-user" ? (
          <>
            <MenuItem onClick={() => openModal("unsuspend")}>
              Unsuspend
            </MenuItem>
            <MenuItem onClick={() => openModal("delete")}>Delete</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleView}>View</MenuItem>
            <MenuItem onClick={() => openModal("suspend")}>Suspend</MenuItem>
          </>
        )}
      </Menu>

      {/* Modal Section */}
      {isModalOpen && (
        <ModalContainer>
          {modalType === "delete" && (
            <ModalPaper>
              <ModalImage src={alertIcon} alt="Alert Icon" />
              <ModalTitle>
                Are you sure you want to delete the Suspended Account?
              </ModalTitle>
              <ModalNote>
                <Box component="span" sx={{ fontWeight: 700 }}>
                  Note:
                </Box>{" "}
                This action is permanent. Once deleted, the <br /> account and
                its data cannot be recovered.
              </ModalNote>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>
                  Cancel
                </ModalCancelButton>
                <ModalConfirmdButton
                  variant="contained"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </ModalConfirmdButton>
              </ModalButtonBox>
            </ModalPaper>
          )}

          {modalType === "suspend" && (
            <ConfirmationModalPaper>
              <ConfirmationModalTitle>
                Are you sure you want to Suspend the account?
              </ConfirmationModalTitle>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>
                  Cancel
                </ModalCancelButton>
                <ModalConfirmButton
                  variant="contained"
                  onClick={handleConfirmSuspend}
                >
                  Suspend
                </ModalConfirmButton>
              </ModalButtonBox>
            </ConfirmationModalPaper>
          )}

          {modalType === "unsuspend" && (
            <ConfirmationModalPaper>
              <ConfirmationModalTitle>
                Are you sure you want to Unsuspend the account?
              </ConfirmationModalTitle>
              <ModalButtonBox>
                <ModalCancelButton variant="outlined" onClick={closeModal}>
                  Cancel
                </ModalCancelButton>
                <ModalConfirmButton
                  variant="contained"
                  onClick={handleConfirmUnsuspend}
                >
                  Unsuspend
                </ModalConfirmButton>
              </ModalButtonBox>
            </ConfirmationModalPaper>
          )}
        </ModalContainer>
      )}
    </Box>
  );
};

export default UserManagement;