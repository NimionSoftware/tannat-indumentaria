import React, { useState } from 'react'
import ProductCard from './ProductCard'
import bodyImg from '../assets/body.jpeg'

import {
    styled,
} from '@mui/material'

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  background: `linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, .6)),
    url(${bodyImg})`,
})

const ProductWall = ({cards}) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null)

  return (
    <Wall>
      {cards?.map((card) => (
          <ProductCard
          key={card?._id}
          imgId={`http://drive.google.com/uc?export=view&id=${card?.image}`}
          productName={card?.title}
          productDescription={card?.description}
          productSizes={card?.sizes}
          productPrice={card?.price}
          card={card}
          index={card?._id}
          isExpanded={{isExpandedIndex, setIsExpandedIndex}}
          />
      ))}
    </Wall>
  )
}

export default ProductWall