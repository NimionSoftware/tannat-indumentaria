import React, {useState} from 'react'
import ProductCard from '../ProductCard'

import {
    styled,
} from '@mui/material'


const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  minHeight: '70vh',
  '@media (max-width: 1100px)': {
    margin:'auto'

  },
})

const Female = ({cards, isEmpty}) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null)
  return (
    <>
      {isEmpty ?
        (
        <Wall style={{margin: 'auto'}}>
              <p style={{
                textAlign: 'center',
                width: '100%'
                }}>No existen coincidencias.</p>
        </Wall>
        ) :
        (
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
    </>
  )
}

export default Female