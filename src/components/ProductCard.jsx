import React from 'react'
import {
    Card, Item
} from "@mui/material"

const ProductCard = ({imgId}) => {
  return (
    <Card>
      <Item>
        <img src={`http://drive.google.com/uc?export=view&id=${imgId}`} alt="" />
      </Item>
    </Card>
  )
}

export default ProductCard