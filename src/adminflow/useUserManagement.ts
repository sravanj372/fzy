import { useState, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userData, suspendedUserData } from "./data.json";

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

// Define header data as constants
const userheading = [
  { id: 1, heading: "User Name", align: "left" as const },
  { id: 2, heading: "Email Address", align: "left" as const },
  { id: 3, heading: "User Contact", align: "left" as const },
  { id: 4, heading: "Total Orders", align: "center" as const },
  { id: 5, heading: "Total Co2 Emission", align: "center" as const },
  { id: 6, heading: "No. of food Posted", align: "center" as const },
  { id: 7, heading: "Status", align: "center" as const },
  { id: 8, heading: "Action", align: "center" as const },
];

const suspenduserheadings = [
  { id: 1, suspendheading: "S.No", align: "left" as const },
  { id: 2, suspendheading: "User Name", align: "center" as const },
  { id: 3, suspendheading: "User Contact", align: "center" as const },
  { id: 4, suspendheading: "Date Suspended", align: "center" as const },
  { id: 5, suspendheading: "Status", align: "center" as const },
  { id: 6, suspendheading: "Action", align: "center" as const },
];

export const useUserManagement = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | SuspendedUser | null>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedSuspendedData = suspendedUserData.slice(startIndex, endIndex);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'suspend' | 'unsuspend' | 'delete' | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, user: User | SuspendedUser) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

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

  const handleView = () => {
    navigate("user-profile");
    handleClose();
  };

  return {
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
  };
};