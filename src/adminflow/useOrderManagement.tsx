import React from 'react';

// Define the menu items as constants
export const exportMenuItems = ["Week", "Month", "Year"];
export const liveOrdersMenuItems = ["Scheduled Orders", "Completed Orders", "Cancelled Orders"];
export const actionsMenuItems = ["View Details", "Download Invoice"];

export const useOrderManagement = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorE2);
  const handleClicks1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };

  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE3);
  const handleClicks2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE3(null);
  };

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
    anchorE2,
    open1,
    handleClicks1,
    handleCloses,
    anchorE3,
    open2,
    handleClicks2,
    handleClose1,
  };
};