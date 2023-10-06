import React from 'react'
import { Container } from './styled'
import Item from './components/item/item'
import useProducts from './hook/useProducts'

const Products = () => {
  const { products, handleClick } = useProducts()

  return (
        <Container>
            {products?.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    imgSrc={product.api_featured_image}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    handleClick={handleClick}
                    isFavorite={product.isFavorite}
                />
            ))}
        </Container>
  )
}

export default Products
