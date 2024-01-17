import React, { useState } from 'react'
import LoaderCategory from './LoaderCategory'

import {
    styled,
    Link
} from '@mui/material'


const CategoryContainer = styled('div')({
    width:'100%',
    height:'100%',
})

const CategoryCard = ({categoryTitle, categoryImg, categoryLink}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
        sx={{
            position: 'relative',
            margin: '20px',
        }}
        href={`/${categoryLink}`}
        underline="none"
    >
        {!loaded && <LoaderCategory/>}
        <CategoryContainer
            onLoad={() => setLoaded(true)}
            sx={{
                zIndex:'0',
                position: 'relative',
                opacity: !loaded && 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '500px',
                maxHeight: '700px',
                borderRadius: '1px',
                boxShadow: 5,
                background: 'rgba(0, 0, 0, 0.7)',
                animation: loaded && 'fade-in 1s',
                transition: "transform 0.6s, background 0.6s",
                "&:hover":{
                    transform: 'scale(1.02)',
                    cursor: 'pointer',
                    background: 'rgba(0, 0, 0, 0.3)'
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
                    opacity: '0.6',
                    width: '100%',
                    height: '100%',
                    borderRadius: '1px',
                }}
                src={categoryImg} alt="imagen categoria" />
                <h3 style={{
                    position: 'absolute',
                    bottom: '50%',
                    zIndex: '5',
                    color: 'white',
                    fontSize: '30px',
                }}>{categoryTitle}</h3>
        </CategoryContainer>
    </Link>
  )
}

export default CategoryCard