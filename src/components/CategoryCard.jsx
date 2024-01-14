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
            position: 'relative'
        }}
        href={`/${categoryLink}`}
        underline="none"
    >
        {!loaded && <LoaderCategory/>}
        <CategoryContainer
            onLoad={() => setLoaded(true)}
            sx={{
                position: 'relative',
                opacity: !loaded && 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '400px',
                height: '600px',
                margin: '50px',
                borderRadius: '7px',
                boxShadow: 5,
                animation: loaded && 'fade-in 1s',
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
        </CategoryContainer>
        
    </Link>
  )
}

export default CategoryCard