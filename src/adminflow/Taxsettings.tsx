import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Divider,
  Switch,
  styled
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

// Styled Switch - reduced size by 10%
const GreenSwitch = styled(Switch)(() => ({
  width: 45,  // was 50
  height: 23, // was 26
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 2.7, // scaled from 3
    "&.Mui-checked": {
      transform: "translateX(21.6px)", // 10% smaller than 24px
      "& + .MuiSwitch-track": {
        backgroundColor: "#2F7A52",
        opacity: 1,
        border: 0
      }
    }
  },
  "& .MuiSwitch-thumb": {
    width: 18,
    height: 18,
    backgroundColor: "#E5E7EB",
    border: "2px solid white"
  },
  "& .MuiSwitch-track": {
    borderRadius: 11.5,
    backgroundColor: "#2F7A52",
    opacity: 1
  }
}));

const Taxsettings: React.FC = () => {
  const navigate = useNavigate();
  const [gstEnabled, setGstEnabled] = useState(true);
  const [serviceTaxEnabled, setServiceTaxEnabled] = useState(true);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        p: 1,
      }}
    >
      <Paper
        sx={{
          padding: "10px",
          border: "1px solid green",
          overflowX: "hidden",
          width: '100%',
          height: '431px',
          position: 'absolute',
          right: '2px',
          borderRadius: '14px',
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography
            mb={2}
            color="#2F7A52"
            sx={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 500,
              fontSize: '19px',
              lineHeight: '175%',
            }}
          >
            Tax Settings
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('addtax')}
          >
            Add Tax
          </Button>
        </Box>

        {/* GST Settings */}
        <Typography
          color="#2F7A52"
          sx={{
            textDecoration: "underline",
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '175%',
            textDecorationStyle: 'solid',
            textDecorationThickness: '0%',
            textDecorationColor: '#2F7A52',
            textUnderlineOffset: 0,
          }}
        >
          GST Tax Settings
        </Typography>
        <Box display="flex" gap={5} mt={2}>
          <Typography
            sx={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 500,
              fontSize: '19px',
              lineHeight: '175%',
              color: 'black',
            }}
          >
            Enable GST
          </Typography>
          <GreenSwitch
            checked={gstEnabled}
            onChange={(e) => setGstEnabled(e.target.checked)}
          />
        </Box>

        <Box display="flex" gap={3} alignItems="center" mt={2}>
          <TextField value="GST Tax Rate-10%" size="small" />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              cursor: "pointer",
              borderBottom: "1px solid #2F7A52",
              gap: "3px",
            }}
          >
            <EditIcon
              sx={{
                fontSize: "17px",
                verticalAlign: "middle",
                color: "#2F7A52",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                color: "#2F7A52",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Edit
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ border: "1px solid green", width: "100%", margin: '10px 0px 10px 0px' }}
        />

        {/* Service Tax Settings */}
        <Box display="flex" gap={5} mt={2}>
          <Typography
            color="#2F7A52"
            sx={{
              textDecoration: "underline",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '175%',
              textDecorationStyle: 'solid',
              textDecorationThickness: '0%',
              textDecorationColor: '#2F7A52',
              textUnderlineOffset: 0,
            }}
          >
            Service Tax Settings
          </Typography>
          <GreenSwitch
            checked={serviceTaxEnabled}
            onChange={(e) => setServiceTaxEnabled(e.target.checked)}
          />
        </Box>

        <Box display="flex" gap={3} alignItems="center" mt={2} mb={3}>
          <TextField value="Service Tax Rate-5%" size="small" />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              cursor: "pointer",
              borderBottom: "1px solid #2F7A52",
              gap: "3px",
            }}
          >
            <EditIcon
              sx={{
                fontSize: "17px",
                verticalAlign: "middle",
                color: "#2F7A52",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                color: "#2F7A52",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Edit
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Taxsettings;
