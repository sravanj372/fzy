import { useLocation } from 'react-router-dom';
import { PaginationStack } from '../adminstyles/Adminstyles';
import Pagination from '@mui/material/Pagination';

const PaginationBox = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

  // Helper variables for better readability
  const isSuspendPage = path === 'suspend-account' || path === 'suspend-user';
  const isUserManagementPage = path === 'user-management' || path === 'suspend-user';

  return (
    <PaginationStack 
      path={path} 
      sx={{ marginTop: isUserManagementPage ? 5 : 0 }}
    >
      <Pagination
        count={10}
        color='primary'
        sx={{
          '& .MuiPaginationItem-root': {
            // Use suspend pages for red color, others for green
            color: isSuspendPage ? '#FF3326' : '#2F7A52',
            borderColor: isSuspendPage ? '#FF3326' : '#2F7A52',
            '&:hover': {
              backgroundColor: 'transparent',
              color: isSuspendPage ? '#FF3326' : '#2F7A52',
            },
          },
          '& .Mui-selected': {
            // Use suspend pages for red background, others for green
            backgroundColor: isSuspendPage ? '#FF3326' : '#2F7A52',
            color: 'white',
            '&:hover': {
              backgroundColor: isSuspendPage ? '#FF3326' : '#2F7A52',
            },
          },
        }}
      />
    </PaginationStack>
  );
};

export default PaginationBox; 