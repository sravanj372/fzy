import React from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  MenuItem,
  Select,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import basic Material-UI icons for the toolbar
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/StrikethroughS';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import FormatClearIcon from '@mui/icons-material/FormatClear';

import {
  StyledPaper,
  StyledIconButton,
  RichTextToolbar,
  RichTextContent,
  styles,
} from '../adminstyles/termsandconditions';

// Import the content from the JSON file
import contentData from './data.json';

const EditorToolbar = () => {
  const handleFormat = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value);
  };

  const handleClearFormat = () => {
    document.execCommand('removeFormat', false, null);
  };
  
  const handleImageUpload = () => {
    alert('Image upload functionality to be implemented!');
  };

  return (
    <RichTextToolbar>
      {/* Font Size Dropdown */}
      <Select
        defaultValue="3"
        size="small"
        onChange={(e) => handleFormat('fontSize', e.target.value)}
        sx={styles.fontSizeSelect}
      >
        <MenuItem value="1">10</MenuItem>
        <MenuItem value="2">12</MenuItem>
        <MenuItem value="3">14</MenuItem>
        <MenuItem value="4">16</MenuItem>
        <MenuItem value="5">18</MenuItem>
        <MenuItem value="6">24</MenuItem>
        <MenuItem value="7">32</MenuItem>
      </Select>

      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* T and Circular Color Picker */}
      <Box sx={styles.textColorContainer}>
        <Typography variant="body1" sx={styles.textColorLabel}>
          T
        </Typography>
        <Box
          component="input"
          type="color"
          defaultValue="#000000"
          onChange={(e) => handleFormat('foreColor', e.target.value)}
          sx={styles.colorPicker}
        />
      </Box>

      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* Bold, Italic, Underline, Strikethrough */}
      <StyledIconButton onClick={() => handleFormat('bold')}>
        <FormatBoldIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('italic')}>
        <FormatItalicIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('underline')}>
        <FormatUnderlinedIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('strikeThrough')}>
        <FormatStrikethroughIcon fontSize="small" />
      </StyledIconButton>
      
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      
      {/* Clear Formatting and Superscript/Subscript */}
      <StyledIconButton onClick={handleClearFormat}>
        <FormatClearIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('superscript')}>
        <Typography sx={styles.superscriptText}>X²</Typography>
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('subscript')}>
        <Typography sx={styles.superscriptText}>X₂</Typography>
      </StyledIconButton>
      
      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* Normal and Font Style Dropdowns */}
      <Select
        defaultValue="p"
        size="small"
        onChange={(e) => handleFormat('formatBlock', e.target.value)}
        sx={styles.formatSelect}
      >
        <MenuItem value="p">Normal</MenuItem>
        <MenuItem value="h1">Heading 1</MenuItem>
        <MenuItem value="h2">Heading 2</MenuItem>
      </Select>
      <Select
        defaultValue="Font Style"
        size="small"
        sx={styles.formatSelect}
      >
        <MenuItem value="Font Style">Font Style</MenuItem>
      </Select>

      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* Alignment */}
      <StyledIconButton onClick={() => handleFormat('justifyLeft')}>
        <FormatAlignLeftIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('justifyCenter')}>
        <FormatAlignCenterIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('justifyRight')}>
        <FormatAlignRightIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('justifyFull')}>
        <FormatAlignJustifyIcon fontSize="small" />
      </StyledIconButton>

      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* Numbered & Bulleted List */}
      <StyledIconButton onClick={() => handleFormat('insertOrderedList')}>
        <FormatListNumberedIcon fontSize="small" />
      </StyledIconButton>
      <StyledIconButton onClick={() => handleFormat('insertUnorderedList')}>
        <FormatListBulletedIcon fontSize="small" />
      </StyledIconButton>

      <Divider orientation="vertical" flexItem sx={styles.divider} />

      {/* Image and Link */}
      <StyledIconButton onClick={handleImageUpload}>
        <ImageIcon fontSize="small" />
      </StyledIconButton>

      <StyledIconButton
        onClick={() => {
          const url = prompt('Enter the link URL:');
          if (url) handleFormat('createLink', url);
        }}
      >
        <LinkIcon fontSize="small" />
      </StyledIconButton>
    </RichTextToolbar>
  );
};

interface EditorSectionProps {
  title: string;
  content: string;
}

const EditorSection: React.FC<EditorSectionProps> = ({ title, content }) => (
  <Box sx={styles.editorSectionContainer}>
    <Box sx={styles.editorSectionTitle}>
      <Typography variant="h5" sx={styles.sectionTitleText}>
        {title}
      </Typography>
    </Box>

    <Box sx={styles.editorSectionContent}>
      <StyledPaper>
        <EditorToolbar />
        <RichTextContent
          contentEditable={true}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </StyledPaper>
    </Box>
  </Box>
);

const TermsAndConditions: React.FC = () => {
  const { termsAndConditions, privacyPolicy } = contentData;

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.header}>
        <IconButton onClick={() => window.history.back()} aria-label="back">
          <ArrowBackIcon sx={styles.backIcon} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerTitle}>
          Edit Terms Conditions & Privacy Policy.
        </Typography>
      </Box>

      <EditorSection title="Terms & Conditions" content={termsAndConditions} />

      <Box sx={styles.updateButtonContainer}>
        <Button variant="contained" sx={styles.updateButton}>
          UPDATE
        </Button>
      </Box>

      <EditorSection title="Privacy & Policy" content={privacyPolicy} />

      <Box sx={styles.updateButtonContainerLast}>
        <Button variant="contained" sx={styles.updateButton}>
          UPDATE
        </Button>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;