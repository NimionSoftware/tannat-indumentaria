import React, {useState} from 'react'
import ProductCard from '../ProductCard'
import bodyImg from '../../assets/body.jpeg'

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

const Female = ({cards}) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null)
  return (
    <Wall>
    {cards?.map(card => {
           return (
            (card?.gender === 'Femenino' || card?.gender === 'femenino') &&
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

export default Female