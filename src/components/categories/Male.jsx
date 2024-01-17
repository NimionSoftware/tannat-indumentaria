import React, {useState} from 'react'
import ProductCard from '../ProductCard'

import {
    styled,
} from '@mui/material'

const Wall = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap:'1rem 0',
    flexWrap: 'wrap',
    minHeight: '70vh',
    '@media (max-width: 1100px)': {
      margin:'auto'

    },
  })


const Male = ({cards, isEmpty}) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(null)

  return (
    <>
      {isEmpty ?
        (
        <Wall style={{
            margin: 'auto',
          }}>
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
    </>
  )
}

export default Male