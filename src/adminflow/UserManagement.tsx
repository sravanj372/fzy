import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Suspendedbutton, Filterbutton } from "../adminstyles/Adminstyles";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import PaginationBox from "./PaginationBox";

// Import only the dynamic data from the JSON file
import { userData, suspendedUserData } from "./data.json";
import alert from '../assets/line-md_alert.png';

// Define the User type for better type safety
interface User {
  id: number;
  username: string;
  avator: string;
  email: string;
  phone: string;
  totalorders: number;
  co2emission: string;
  foodpostedno: number;
  status: string;
}

interface SuspendedUser {
  id: number;
  username: string;
  avator: string;
  contact: string;
  date: string;
  status: string;
}

const UserManagement = () => {
  // Use a more flexible column definition
  const userheading = [
    { id: 1, heading: "User Name", align: "left" as "left" },
    { id: 2, heading: "Email Address", align: "left" as "left" },
    { id: 3, heading: "User Contact", align: "left" as "left" },
    { id: 4, heading: "Total Orders", align: "center" as "center" },
    { id: 5, heading: "Total Co2 Emission", align: "center" as "center" },
    { id: 6, heading: "No. of food Posted", align: "center" as "center" },
    { id: 7, heading: "Status", align: "center" as "center" },
    { id: 8, heading: "Action", align: "center" as "center" },
  ];

  const suspenduserheadings = [
    { id: 1, suspendheading: "S.No", align: "left" as "left" },
    { id: 2, suspendheading: "User Name", align: "center" as "center" },
    { id: 3, suspendheading: "User Contact", align: "center" as "center" },
    { id: 4, suspendheading: "Date Suspended", align: "center" as "center" },
    { id: 5, suspendheading: "Status", align: "center" as "center" },
    { id: 6, suspendheading: "Action", align: "center" as "center" },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | SuspendedUser | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, user: User | SuspendedUser) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedSuspendedData = suspendedUserData.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'suspend' | 'unsuspend' | 'delete' | null>(null);

  const openModal = (type: 'suspend' | 'unsuspend' | 'delete') => {
    setModalType(type);
    setIsModalOpen(true);
    handleClose();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleConfirmSuspend = () => {
    console.log("Account has been suspended!");
    closeModal();
  };

  const handleConfirmDelete = () => {
    console.log("Account has been deleted!");
    closeModal();
  };

  const handleConfirmUnsuspend = () => {
    console.log("Account has been unsuspended!");
    closeModal();
  };

  return (
    <Box sx={{ background: "white", height: "auto", p: 1 }}>
      <Box sx={{ border: "1px solid green", borderRadius: 4, p: 2 }}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">
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
            <Typography color={path === "suspend-user" ? "#FF3326" : "#2F7A52"}>
              {path === "suspend-user" ? "Suspended Accounts" : "User Management"}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {path === "suspend-user" ? (
              <Filterbutton variant="contained" startIcon={<FilterListIcon />}>
                Filters
              </Filterbutton>
            ) : (
              <Suspendedbutton
                variant="outlined"
                sx={{ minWidth: "175px" }}
                onClick={() => navigate("suspend-user")}
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
                    ? suspenduserheadings.map((suspend) => (
                        <TableCell
                          key={suspend.id}
                          align={suspend.align}
                          sx={{
                            color: "#FF3326",
                            fontWeight: 700,
                          }}
                        >
                          {suspend.suspendheading}
                        </TableCell>
                      ))
                    : userheading.map((heading) => (
                        <TableCell
                          key={heading.id}
                          align={heading.align}
                          sx={{
                            color: "#2F7A52",
                            fontWeight: 700,
                          }}
                        >
                          {heading.heading}
                        </TableCell>
                      ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {path === "suspend-user"
                  ? paginatedSuspendedData.map((suspenduser) => (
                      <TableRow key={suspenduser.id}>
                        <TableCell align="left">{suspenduser.id}</TableCell>
                        <TableCell
                          align="left"
                          sx={{ cursor: "pointer", paddingLeft: 2 }}
                          onClick={() => navigate("/admin/user-management/user-profile")}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-start" }}>
                            <Avatar src={suspenduser.avator} />
                            <Typography>{suspenduser.username}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="center">{suspenduser.contact}</TableCell>
                        <TableCell align="center">{suspenduser.date}</TableCell>
                        <TableCell align="center">
                          <Box sx={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center" }}>
                            <CircleIcon sx={{ fontSize: "11px", color: "#FF3326" }} />
                            <Typography>{suspenduser.status}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            sx={{ border: "1px groove gray", color: "#FF3326", fontWeight: 700, padding: '0 8px' }}
                            id={`basic-button-${suspenduser.id}`}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => handleClick(e, suspenduser)}
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Actions {/* Changed back to "Actions" */}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : userData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>
                            <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  cursor: "pointer",
                                  wordBreak: "break-word"
                                }}
                                onClick={() => navigate("user-profile")}
                              >
                                <Avatar src={user.avator} />
                                <Typography>{user.username}</Typography>
                              </Box>
                        </TableCell>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>{user.email}</TableCell>
                        <TableCell align="left" sx={{ wordBreak: "break-word" }}>{user.phone}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.totalorders}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.co2emission}</TableCell>
                        <TableCell align="center" sx={{ wordBreak: "break-word" }}>{user.foodpostedno}</TableCell>
                        <TableCell align="center">
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center" }}>
                                <CircleIcon sx={{ fontSize: "12px", color: "#68B266" }} />
                                <Typography sx={{ color: "#68B266" }}>{user.status}</Typography>
                            </Box>
                        </TableCell>
                        <TableCell align="center">
                            <Button
                                sx={{ border: "1px groove gray", padding: '0 8px' }}
                                id={`basic-button-${user.id}`}
                                aria-controls={open ? `basic-menu-${user.id}` : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={(e) => handleClick(e, user)}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Actions {/* Changed back to "Actions" */}
                            </Button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <PaginationBox />
      </Box>

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
            <MenuItem onClick={() => openModal('unsuspend')}>Unsuspend</MenuItem>
            <MenuItem onClick={() => openModal('delete')}>Delete</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => openModal('suspend')}>Suspend</MenuItem>
            <MenuItem onClick={handleClose}>View</MenuItem>
          </>
        )}
      </Menu>

      {/* Conditional Modal Rendering */}
      {isModalOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
            zIndex: 1000,
          }}
        >
          {isModalOpen && modalType === 'delete' && (
            <Box
              sx={{
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
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#FF3326',
                  borderRadius: '8px',
                  p: 4,
                  boxShadow: 3,
                  textAlign: 'center',
                  maxWidth: '400px',
                  width: '90%',
                }}
              >
                <Box sx={{
                  width: '140px',
                  height: '140px',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto'
                }}>
                  {/* Using the imported 'alert' image here */}
                  <img src={alert} alt="Alert Icon" style={{ width: '150px', height: '150px' }} />
                </Box>
                <Typography sx={{ color: '#ffffffff', mb: 3, fontSize: '20px' }}>
                  Are you sure you want to delete the Suspended Account?
                </Typography>
                <Typography sx={{
                  fontFamily: 'Nunito Sans',
                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '-0.11px',
                  textAlign: 'center',
                  mb: 4,
                  color: '#fcfcfcff',
                  opacity: 1
                }}>
                  <Box component="span" sx={{ fontWeight: 700 }}>Note:</Box> This action is permanent. Once deleted, the <br /> account and its data cannot be recovered.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                  <Button
                    variant="outlined"
                    onClick={closeModal}
                    sx={{
                      backgroundColor: '#FFFFFF',
                      color: '#FF3326',
                      borderColor: '#FF3326',
                      width: '110px',
                      height: '30px',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleConfirmDelete}
                    sx={{
                      backgroundColor: '#ffffffff',
                      color: '#FF3326',
                      height: '30px',
                      width: '110px',
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
          {modalType === 'suspend' && (
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                p: 4,
                boxShadow: 3,
                textAlign: 'center',
                maxWidth: '400px',
                width: '90%',
              }}
            >
              <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
                Are you sure you want to Suspend the account?
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                <Button variant="outlined" onClick={closeModal} sx={{ color: '#FF3326', borderColor: '#FF3326', height: '30px', width: '100px' }}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleConfirmSuspend} sx={{ backgroundColor: '#FF3326', height: '30px', width: '100px' }}>
                  Suspend
                </Button>
              </Box>
            </Box>
          )}
          {modalType === 'unsuspend' && (
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                p: 4,
                boxShadow: 3,
                textAlign: 'center',
                maxWidth: '400px',
                width: '90%',
              }}
            >
              <Typography variant="h6" sx={{ color: '#FF3326', mb: 3 }}>
                Are you sure you want to Unsuspend the account?
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                <Button variant="outlined" onClick={closeModal} sx={{ color: '#FF3326', borderColor: '#FF3326', width: '100px' }}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleConfirmUnsuspend} sx={{ backgroundColor: '#FF3326', width: '100px' }}>
                  Unsuspend
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserManagement;