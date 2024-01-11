import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

  const Countdown = () => {
    const [countdown, setCountdown] = useState(3);

    const navigate = useNavigate()

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else {
          navigate('/admin');
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }, [countdown, navigate]);

    return (
      <div>
        <Typography
          sx={{
              paddingTop:'.6rem'
          }}
        >
          A "Todos mis Productos" en <span style={{fontSize:'1.1rem', fontWeight:'600'}}>{countdown}s</span>
        </Typography>
      </div>
    );
  };

export default Countdown;