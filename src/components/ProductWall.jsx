import React, { useContext, useState } from 'react'
import ProductCard from './ProductCard'
import bodyImg from '../assets/body.jpeg'

import {
    styled,
} from '@mui/material'
import { cartContext } from './Context'

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  background: `linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, .6)),
    url(${bodyImg})`,
})


const ProductWall = ({cards}) => {

  return (
    <Wall>
        {cards.map((card, index) => (
            <ProductCard
            key={index}
            imgId={card.imgId}
            productName={card.productName}
            productDescription={card.productDescription}
            productSizes={card.productSizes}
            productPrice={card.productPrice}
            card={card}
            />
        ))}
    </Wall>
  )
}

export default ProductWall