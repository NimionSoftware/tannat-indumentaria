import React from 'react';
import {
    CircularProgress,
    Box
} from '@mui/material';

 const LoaderCategory = () => {
  return (
    <Box sx={{
        position: "absolute",
        display: 'flex',
        bottom: '50%',
        left: '50%',
        }}>
      <CircularProgress />
    </Box>
  );
}

export default LoaderCategory;