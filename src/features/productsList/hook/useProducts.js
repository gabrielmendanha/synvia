import { useContext } from 'react'
import { ProductsContext } from 'context/products'

const useProducts = () => {
  const { filteredProducts, setFilteredProducts } =
        useContext(ProductsContext)

  const handleClick = (productId) => {
    const index = filteredProducts.findIndex(
      (product) => product.id === productId
    )
    const item = filteredProducts[index]

    item.isFavorite = !item.isFavorite
    filteredProducts[index] = item

    setFilteredProducts([...filteredProducts])
  }

  return { filteredProducts, handleClick }
}

export default useProducts
