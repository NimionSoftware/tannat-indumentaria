import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

export default function ToastCreated({success, setSuccess}) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(!success);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box sx={{minWidth:'20rem', width: '35%', position:'fixed', bottom:'0', right:'0' }}>
      <Collapse in={success}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccess(!success);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          ¡Muy bien! Agregaste un nuevo producto a tu tienda!
        </Alert>
      </Collapse>
    </Box>
  );
}