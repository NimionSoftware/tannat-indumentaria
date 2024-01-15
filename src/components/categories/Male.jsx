import React, {useState} from 'react'
import ProductCard from '../ProductCard'

import {
    styled,
} from '@mui/material'

const Wall = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minHeight: '70vh',
  })


const Male = ({cards}) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null)

  return (
    <Wall>
    {cards?.map(card => {
           return (
            (card?.gender === 'Masculino' || card?.gender === 'masculino') &&
            <ProductCard
            key={card?._id}
            imgId={card?.image}
            productName={card?.title}
            productDescription={card?.description}
            productSizes={card?.sizes}
            productPrice={card?.price}
            card={card}
            index={card?._id}
            isExpanded={{isExpandedIndex, setIsExpandedIndex}}
            />)
            }
    )}
    </Wall>
  )
}

export default Male