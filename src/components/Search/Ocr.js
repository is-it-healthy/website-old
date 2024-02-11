import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Button, Box, Typography, Container } from '@mui/material';

const Ocr = () => {
  const [numberText, setNumberText] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const { data: { text } } = await Tesseract.recognize(file, 'eng', {
        tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      });

      setNumberText(text);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom>
          OCR - Detect English Letters
        </Typography>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <Button variant="contained" onClick={handleButtonClick}>
          Upload Image
        </Button>
        <div>
          <Typography variant="body1" gutterBottom>
            Detected Text:
          </Typography>
          <Typography variant="body2">{numberText}</Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Ocr;
