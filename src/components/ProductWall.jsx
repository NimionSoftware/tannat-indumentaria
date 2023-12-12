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
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  background: `linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, .6)),
    url(${bodyImg})`
})


const ProductWall = ({cards}) => {

  const {isInCart, addItem, quantity} = useContext(cartContext);

  const onAdd = (item) =>{
    isInCart(item.imgId)
    addItem(item, quantity)
  }


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
          />
      ))}
    </Wall>
  )
}

export default ProductWall