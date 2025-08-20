import React, { useState } from 'react';
import {
    Button,
    Divider,
    Typography,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    PageContainer,
    HeaderBox,
    HeaderTitle,
    AddRuleButton,
    RuleContainer,
    RuleRow,
    RuleLabel,
    RuleValueBox,
    DeleteButton,
    SaveButton,
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalButtonBox,
    CancelButton,
    ConfirmDeleteButton,
} from '../adminstyles/PartnerCommissionRule.styles';

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
        navigate('/admin/configsetting/paymentsettings/add-partner-commission-rule');
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
        <PageContainer>
           
            <HeaderBox>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowBackIcon
                        onClick={() => navigate('/admin/configsetting/paymentsettings')}
                        sx={{ cursor: 'pointer', mr: 1 }}
                    />
                    <HeaderTitle variant="h6">
                        Partner Commission Rule
                    </HeaderTitle>
                </Box>
                <AddRuleButton onClick={handleAddRule}>
                    <AddCircleOutlineIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                        Add Another Partner Commission Rule
                    </Typography>
                </AddRuleButton>
            </HeaderBox>

            {/* Commission Rules Display Section */}
            {commissionRules.map((rule, index) => (
                <RuleContainer key={rule.id}>
                    {/* Restaurant Name Row */}
                    <RuleRow>
                        <RuleLabel>
                            Restaurant Name
                        </RuleLabel>
                        <RuleValueBox>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '300px', height: '40px' }}>
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    {rule.restaurantName}
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: '#2f7a52' }} />
                            </Box>
                            <DeleteButton
                                variant="outlined"
                                startIcon={<DeleteOutlinedIcon />}
                                onClick={() => openDeleteModal(rule.id)}
                            >
                                Delete
                            </DeleteButton>
                        </RuleValueBox>
                    </RuleRow>

                    {/* Commission % Row */}
                    <RuleRow>
                        <RuleLabel>
                            Commission %
                        </RuleLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <RuleValueBox sx={{ width: '300px', height: '40px' }}>
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    {rule.commission}%
                                </Typography>
                            </RuleValueBox>
                        </Box>
                    </RuleRow>
                    {index < commissionRules.length - 1 && <Divider sx={{ my: 3, borderColor: '#ccc' }} />}
                </RuleContainer>
            ))}

            {/* Save Button */}
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SaveButton variant="contained">
                    SAVE
                </SaveButton>
            </Box>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalTitle variant="h6">
                            Are you sure you want to delete the Partner commission rule?
                        </ModalTitle>
                        <ModalButtonBox>
                            <CancelButton
                                variant="outlined"
                                onClick={handleCancelDelete}
                            >
                                Cancel
                            </CancelButton>
                            <ConfirmDeleteButton
                                variant="contained"
                                onClick={handleConfirmDelete}
                            >
                                Delete
                            </ConfirmDeleteButton>
                        </ModalButtonBox>
                    </ModalContent>
                </ModalOverlay>
            )}
        </PageContainer>
    );
};

export default PartnerCommissionRule;
