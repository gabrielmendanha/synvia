import { useContext } from 'react'
import { ProductsContext } from 'context/products'

const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleClick = (productId) => {
    const index = products.findIndex((product) => product.id === productId)
    const item = products[index]

    item.isFavorite = !item.isFavorite
    products[index] = item

    setProducts([...products])
  }

  return { products, handleClick }
}

export default useProducts
