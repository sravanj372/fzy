import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import UploadIcon from "@mui/icons-material/Upload";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define a custom theme for consistent typography and colors
const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#2F7A52",
    },
    secondary: {
      main: "#E53935",
    },
  },
});

// Mock data for cuisine types
const initialCuisines = [
  {
    id: 1,
    name: "American",
    imageUrl:
      "https://placehold.co/200x150/E0E0E0/white?text=Cuisine+Image",
  },
  {
    id: 2,
    name: "Italian",
    imageUrl:
      "https://placehold.co/200x150/E0E0E0/white?text=Cuisine+Image",
  },
  {
    id: 3,
    name: "Mexican",
    imageUrl:
      "https://placehold.co/200x150/E0E0E0/white?text=Cuisine+Image",
  },
  {
    id: 4,
    name: "French",
    imageUrl:
      "https://placehold.co/200x150/E0E0E0/white?text=Cuisine+Image",
  },
];

// Styled Button
const StyledButton = styled(Button)({
  borderRadius: "8px",
  textTransform: "none",
  padding: "10px 20px",
  fontWeight: 600,
});

// Styled TextField
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#bdbdbd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2F7A52",
    },
  },
});

// Single cuisine item without the card effect
const CuisineItem = ({ cuisine, onSave, onDelete, index }) => {
  const [name, setName] = useState(cuisine.name);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setIsEdited(name !== cuisine.name);
  }, [name, cuisine.name]);

  const handleSave = () => {
    onSave({ ...cuisine, name });
    setIsEdited(false);
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Three-column Grid layout: Number | Labels | Inputs & Buttons */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Column 1: Serial Number */}
        <Grid item xs={1}>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
            {index + 1}.
          </Typography>
        </Grid>

        {/* Column 2: Labels */}
        <Grid item xs={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 1 }}>
              Cuisine Type
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Image
            </Typography>
          </Box>
        </Grid>

        {/* Column 3: Inputs and Buttons */}
        <Grid item xs={8}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Input field */}
            <StyledTextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "300px" }}
            />
            
            {/* Image */}
            <Box
              component="img"
              src={cuisine.imageUrl}
              alt={cuisine.name}
              sx={{
                width: "120px",
                height: "80px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            
            {/* Action buttons positioned to the right */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 1 }}>
              {isEdited && (
                <StyledButton
                  variant="contained"
                  startIcon={<SaveIcon />}
                  sx={{
                    bgcolor: "#2F7A52",
                    color: "white",
                    "&:hover": { bgcolor: "#245d3e" },
                    minWidth: "100px",
                  }}
                  onClick={handleSave}
                >
                  Save
                </StyledButton>
              )}
              <StyledButton
                variant="contained"
                startIcon={<DeleteIcon />}
                sx={{
                  bgcolor: "#E53935",
                  color: "white",
                  "&:hover": { bgcolor: "#d32f2f" },
                  minWidth: "100px",
                }}
                onClick={() => onDelete(cuisine.id)}
              >
                Delete
              </StyledButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Add New Cuisine Form Component
const AddCuisineForm = ({ onAdd }) => {
  const [newCuisineName, setNewCuisineName] = useState("");
  const [newCuisineImage, setNewCuisineImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCuisineImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    if (newCuisineName.trim()) {
      const newCuisine = {
        id: Date.now(),
        name: newCuisineName.trim(),
        imageUrl: imagePreview || "https://placehold.co/200x150/E0E0E0/white?text=New+Cuisine"
      };
      onAdd(newCuisine);
      setNewCuisineName("");
      setNewCuisineImage(null);
      setImagePreview(null);
    }
  };

  return (
    <Box sx={{ mt: 4, pt: 4, borderTop: "3px solid #2F7A52" }}>
      <Typography variant="h5" sx={{ color: "#2F7A52", fontWeight: 600, mb: 3 }}>
        Add New Cuisine
      </Typography>
      
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <Typography variant="h6">Cuisine Type</Typography>
              <Box>
                <Typography variant="h6">Image</Typography>
                <Typography variant="body2" color="text.secondary">
                  (Resolution)
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <StyledTextField
                fullWidth
                value={newCuisineName}
                onChange={(e) => setNewCuisineName(e.target.value)}
                variant="outlined"
                size="small"
                placeholder="Enter cuisine type"
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <StyledButton
                  component="label"
                  variant="contained"
                  startIcon={<UploadIcon />}
                  sx={{
                    bgcolor: "#2F7A52",
                    color: "white",
                    "&:hover": { bgcolor: "#245d3e" },
                  }}
                >
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </StyledButton>
                {imagePreview && (
                  <Box
                    component="img"
                    src={imagePreview}
                    alt="Preview"
                    sx={{
                      width: "120px",
                      height: "80px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}>
          <StyledButton
            variant="contained"
            onClick={handleAdd}
            disabled={!newCuisineName.trim()}
            sx={{
              bgcolor: "#2F7A52",
              color: "white",
              "&:hover": { bgcolor: "#245d3e" },
              "&:disabled": { bgcolor: "#9ca3af" },
            }}
          >
            ADD
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

// Main Cuisine Component
const Cuisine = () => {
  const [cuisines, setCuisines] = useState(initialCuisines);

  const handleSave = (updatedCuisine) => {
    setCuisines((prev) =>
      prev.map((c) => (c.id === updatedCuisine.id ? updatedCuisine : c))
    );
  };

  const handleDelete = (id) => {
    setCuisines((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAdd = (newCuisine) => {
    setCuisines((prev) => [...prev, newCuisine]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4, bgcolor: "#f4f6f8", minHeight: "100vh" }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <IconButton onClick={() => window.history.back()}>
            <ArrowBackIcon sx={{ color: "#2F7A52", fontSize: 24 }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "#2F7A52", fontWeight: 600, ml: 1 }}>
            Edit Cuisine Types
          </Typography>
        </Box>

        {/* Cuisine List - Two Column Layout */}
        <Box sx={{ bgcolor: "#F5FAFA", borderRadius: "8px", p: 3 }}>
          <Grid container spacing={6}>
            {cuisines.map((cuisine, index) => (
              <React.Fragment key={cuisine.id}>
                <Grid item xs={12} md={6}>
                  <CuisineItem
                    cuisine={cuisine}
                    onSave={handleSave}
                    onDelete={handleDelete}
                    index={index}
                  />
                </Grid>
                {/* Add horizontal divider after every row (2 items) */}
                {index < cuisines.length - 1 && (index + 1) % 2 === 0 && (
                  <Grid item xs={12}>
                    <Divider sx={{ borderColor: '#d1d5db', my: 2 }} />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        {/* Add New Cuisine Form */}
        <AddCuisineForm onAdd={handleAdd} />
      </Box>
    </ThemeProvider>
  );
};

export default Cuisine;