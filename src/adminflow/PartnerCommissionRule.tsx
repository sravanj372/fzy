

import React, { useState } from 'react';
import {
  Button,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import DeleteOutlinedIcon from "../assets/1vector.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '../assets/Group 39840 (1).png';
import PaginationBox from './PaginationBox.tsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the icon

interface CommissionRule {
  id: number;
  restaurantName: string;
  commission: number;
}

const PartnerCommissionRule: React.FC = () => {
  const [commissionRules, setCommissionRules] = useState<CommissionRule[]>([
    {
      id: 1,
      restaurantName: "The Urban Pantry",
      commission: 10,
    },
    {
      id: 2,
      restaurantName: "Gary Danko",
      commission: 5,
    },
    {
      id: 3,
      restaurantName: "Fog Harbour Fish House",
      commission: 10,
    },
  ]);
  
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [ruleToDeleteId, setRuleToDeleteId] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleAddRule = () => {
    navigate('/admin/configsetting/add-partner-commission-rule');
  };

  const openDeleteModal = (id: number) => {
    console.log(`Attempting to open modal for rule with ID: ${id}`);
    setRuleToDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    console.log('Cancel button clicked. Hiding modal.');
    setShowDeleteModal(false);
    setRuleToDeleteId(null);
  };

  const handleConfirmDelete = () => {
    console.log(`Delete confirmed for rule with ID: ${ruleToDeleteId}`);
    if (ruleToDeleteId !== null) {
      setCommissionRules(prevRules => prevRules.filter(rule => rule.id !== ruleToDeleteId));
      setShowDeleteModal(false);
      setRuleToDeleteId(null);
    }
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4, mt: -2, ml: -2 }, backgroundColor: '#F5FAF6', fontFamily: 'Arial, sans-serif', minHeight: '100vh', position: 'relative' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          color: '#2f7a52',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIcon
            onClick={() => navigate('/admin/configsetting/paymentsettings')}
            sx={{ cursor: 'pointer', mr: 1 }}
          />
          <Typography variant="h6">
            Partner Commission Rule
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={handleAddRule}
        >
          <img src={AddCircleOutlineIcon} alt="Add Rule" style={{ width: 24, height: 24, marginRight: 4 }} />
          <Typography variant="body1"  sx={{textDecoration: 'underline'}}>
            Add Another Partner Commission Rule
          </Typography>
        </Box>
      </Box>

      {/* Commission Rules Display Section */}
      {commissionRules.map((rule, index) => (
        <React.Fragment key={rule.id}>
          <Box sx={{ mb: 1 }}>
            {/* Restaurant Name Row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 0 }
              }}>
              <Typography sx={{ width: { sm: '20%' }, mb: { xs: 1, sm: 0 } }}>
                Restaurant Name
              </Typography>
              <Box sx={{ display: 'flex', width: { sm: '40%' }, gap: 1, alignItems: 'center' }}>
                <Box sx={{
                  height: 40,
                  width: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between', // Aligns items and icon to the ends
                  border: '1px solid #2f7a52',
                  borderRadius: '10px',
                  p: 1,
                  pr: 1.5, // Add some padding to the right for the icon
                  cursor: 'pointer' // Indicate it's clickable
                }}>
                  <Typography variant="body1">
                    {rule.restaurantName}
                  </Typography>
                  <KeyboardArrowDownIcon sx={{ color: '#2f7a52' }} />
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#f44336',
                    color: '#f44336',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      borderColor: '#d32f2f',
                      backgroundColor: 'rgba(244, 67, 54, 0.04)',
                    }
                  }}
                  startIcon={<img src={DeleteOutlinedIcon} alt="Delete" style={{ width: 20, height: 20 }} />}
                  onClick={() => openDeleteModal(rule.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>

            {/* Commission % Row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 0 }
              }}>
              <Typography sx={{ width: { sm: '20%' }, mb: { xs: 1, sm: 0 } }}>
                Commission %
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', width: { sm: '40%' } }}>
                <Typography variant="body1" sx={{
                  height: 40,
                  width: 300,
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #2f7a52',
                  borderRadius: '10px',
                  p: 1,
                }}>
                  {rule.commission}%
                </Typography>
              </Box>
            </Box>
          </Box>
          {index < commissionRules.length - 1 && <Divider sx={{ my: 3, borderColor: '#ccc' }} />}
        </React.Fragment>
      ))}

      {/* Save Button and Pagination */}
      <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2f7a52',
            color: '#ffffff',
            textTransform: 'none',
            borderRadius: '8px',
            marginLeft: 40,
            mb: 2,
            px: 7,
            py: 1,
            '&:hover': {
              backgroundColor: '#235c3e',
            }
          }}
        >
          SAVE
        </Button>
      </Box>
      <PaginationBox />
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
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
            
            zIndex: 1000,
          }}
        >
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
              Are you sure you want to delete the Partner commission rule?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
              <Button
                variant="outlined"
                onClick={handleCancelDelete}
                sx={{
                  color: '#FF3326',
                  width: '100px',
                  height: '30px',
                  borderColor: '#FF3326',
                  '&:hover': {
                    borderColor: '#FF3326',
                    backgroundColor: 'rgba(211, 47, 47, 0.04)',
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirmDelete}
                sx={{
                  backgroundColor: '#FF3326',
                  width: '100px',
                  height: '30px',
                  '&:hover': {
                    backgroundColor: '#FF3326',
                  }
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PartnerCommissionRule;