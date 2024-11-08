import React from 'react'

const ProductsAndSingleProduct = ({params}) => {
    const {productId} = params
  return (
    <div>{productId}</div>
  )
}

export default ProductsAndSingleProduct