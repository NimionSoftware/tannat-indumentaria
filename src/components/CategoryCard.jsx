import React, { useEffect, useState } from 'react'

import {
    Box,
    Link
} from '@mui/material'

const CategoryCard = ({categoryTitle, categoryImg, categoryLink}) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setLoad(true);
    }, 1250);
  }, [])

  return (
    <Link
        href={`/${categoryLink}`}
        underline="none"
    >
        <Box
            sx={{
                position: 'relative',
                opacity: !load && 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '400px',
                height: '600px',
                margin: '50px',
                borderRadius: '7px',
                boxShadow: 5,
                animation: load && 'fade-in 1s',
                transition: "transform 0.6s",
                "&:hover":{
                    transform: 'scale(1.02)',
                    cursor: 'pointer'
                },
                "@keyframes fade-in": {
                    "0%": {
                    opacity: 0,
                    transform: 'translateY(15px)'
                    },
                    "100%": {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                },

            }}
        >
                <img
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '7px'
                }}
                src={categoryImg} alt="imagen categoria" />
                <h3 style={{
                    position: 'absolute',
                    bottom: '50%',
                    zIndex: '5',
                    color: 'white',
                    fontSize: '30px',
                }}>{categoryTitle}</h3>
        </Box>
    </Link>
  )
}

export default CategoryCard