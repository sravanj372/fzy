import { useLocation } from 'react-router-dom';
import { PaginationStack } from '../adminstyles/Adminstyles';
import Pagination from '@mui/material/Pagination';

const PaginationBox = () => {

const location=useLocation()
const path=location.pathname.split('/').pop()


  return (
    <PaginationStack path={path}>
      <Pagination
        count={10}
        color='primary'
        sx={{
          '& .MuiPaginationItem-root': {
            color: path === 'suspend-account' ? 'red' : '#2F7A52',
            borderColor: path === 'suspend-account' ? 'red' : '#2F7A52',
          },
          '& .Mui-selected': {
            backgroundColor: path === 'suspend-account' ? 'red' : '#2F7A52',
            color: 'white',
          },
        }}
      />
    </PaginationStack>
  )
}

export default PaginationBox
