import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Countdown from './Countdown';
import { useLocation } from 'react-router-dom';

export default function ToastCreated({success, setSuccess, text}) {

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(!success);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const location = useLocation().pathname;

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
          sx={{ mb: 2, fontSize:'1.1rem' }}
        >
          {text}
          {location !== "/admin/create" && location !== "/admin/category/create" && <Countdown />}
        </Alert>
      </Collapse>
    </Box>
  );
}