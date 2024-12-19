import Products from '@/components/products/Products'
import React from 'react'

const ProductRoute = async () => {
  const data = await fetch('https://dummyjson.com/products')
  const posts = await data.json()
  return (
    <div>
      <Products posts={posts} />
    </div>
  )
}

export default ProductRoute
