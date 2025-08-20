import React, { useState } from 'react';
import { Typography, Box, Button, TextField, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

// Import the custom styled components
import {
    StyledPaper,
    HeaderBox,
    HeaderTypography,
    StyledButton,
    StyledTaxSectionTitle,
    StyledTaxSettingsBox,
    StyledTaxRateBox,
    StyledEditBox,
    StyledEditIcon,
    StyledEditTypography,
    StyledDivider,
    GreenSwitch
} from '../adminstyles/Taxsettings.styles';

const Taxsettings: React.FC = () => {
    const navigate = useNavigate();
    const [gstEnabled, setGstEnabled] = useState(true);
    const [serviceTaxEnabled, setServiceTaxEnabled] = useState(true);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '500px', p: 1 }}>
            <StyledPaper>
                <HeaderBox>
                    <HeaderTypography>
                        Tax Settings
                    </HeaderTypography>
                    <StyledButton
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('addtax')}
                    >
                        Add Tax
                    </StyledButton>
                </HeaderBox>

                {/* GST Settings */}
                <StyledTaxSectionTitle>
                    GST Tax Settings
                </StyledTaxSectionTitle>
                <StyledTaxSettingsBox mt={2}>
                    <Typography>
                        Enable GST
                    </Typography>
                    <GreenSwitch
                        checked={gstEnabled}
                        onChange={(e) => setGstEnabled(e.target.checked)}
                    />
                </StyledTaxSettingsBox>

                <StyledTaxRateBox>
                    <TextField value="GST Tax Rate-10%" size="small" />
                    <StyledEditBox>
                        <StyledEditIcon />
                        <StyledEditTypography>
                            Edit
                        </StyledEditTypography>
                    </StyledEditBox>
                </StyledTaxRateBox>
                <StyledDivider />

                {/* Service Tax Settings */}
                <StyledTaxSettingsBox>
                    <StyledTaxSectionTitle>
                        Service Tax Settings
                    </StyledTaxSectionTitle>
                    <GreenSwitch
                        checked={serviceTaxEnabled}
                        onChange={(e) => setServiceTaxEnabled(e.target.checked)}
                    />
                </StyledTaxSettingsBox>

                <StyledTaxRateBox mb={3}>
                    <TextField value="Service Tax Rate-5%" size="small" />
                    <StyledEditBox>
                        <StyledEditIcon />
                        <StyledEditTypography>
                            Edit
                        </StyledEditTypography>
                    </StyledEditBox>
                </StyledTaxRateBox>
            </StyledPaper>
        </Box>
    );
};

export default Taxsettings;