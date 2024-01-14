import React from 'react'
import CategoryCard from './CategoryCard'

import {
    styled,
} from '@mui/material'

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
})

const ProductWall = ({categoryData}) => {

  return (
    <Wall>
      {
        categoryData?.map(category => (
          <CategoryCard
            key={category?._id}
            categoryTitle={category?.title}
            categoryImg={category?.image}
            categoryLink={category?.link}
          />
        ))
      }
    </Wall>
  )
}

export default ProductWall