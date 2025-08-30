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
    const [gstTaxRate, setGstTaxRate] = useState('10');
    const [serviceTaxRate, setServiceTaxRate] = useState('5');

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
                    {/* Corrected TextField for GST */}
                    <TextField
                        sx={{ flexGrow: -1 }} // Keep flexGrow for proper spacing
                        size="small"
                        value={gstTaxRate}
                        onChange={(e) => setGstTaxRate(e.target.value)}
                        InputProps={{
                            startAdornment: <Typography sx={{ mr: 1, color: 'black', whiteSpace: 'nowrap' }}>GST Tax Rate-</Typography>,
                            endAdornment: <Typography sx={{ ml: 1 }}>%</Typography>,
                        }}
                    />
                    <StyledEditBox>
                        <StyledEditIcon />
                        <StyledEditTypography>
                            Edit
                        </StyledEditTypography>
                    </StyledEditBox>
                </StyledTaxRateBox>
                <StyledDivider />

                {/* Service Tax Settings */}
                <StyledTaxSectionTitle>
                    Service Tax Settings
                </StyledTaxSectionTitle>
                <StyledTaxSettingsBox>
                    <Typography>
                        Enable Service Tax
                    </Typography>
                    <GreenSwitch
                        checked={serviceTaxEnabled}
                        onChange={(e) => setServiceTaxEnabled(e.target.checked)}
                    />
                </StyledTaxSettingsBox>

                <StyledTaxRateBox mb={3}>
                    {/* Corrected TextField for Service Tax */}
                    <TextField
                        sx={{ flexGrow: 0 }} // Keep flexGrow for proper spacing
                        size="small"
                        value={serviceTaxRate}
                        onChange={(e) => setServiceTaxRate(e.target.value)}
                        InputProps={{
                            startAdornment: <Typography sx={{ mr: 1, color: 'black', whiteSpace: 'nowrap' }}>Service Tax Rate-</Typography>,
                            endAdornment: <Typography sx={{ ml: 1 }}>%</Typography>,
                        }}
                    />
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