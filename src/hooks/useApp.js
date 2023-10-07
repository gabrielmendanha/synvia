import { useEffect, useState } from 'react'
import api from '../services/api'

const useApp = () => {
  const [products, setProducts] = useState()
  const [filteredProducts, setFilteredProducts] = useState()
  const [categories, setCategories] = useState()

  const getCategories = () => {
    if (products) {
      const groups = Object.groupBy(
        products,
        (product) => product.category
      )

      const categoriesDirty = Object.keys(groups)

      const emptyCategoryIndex = categoriesDirty.findIndex(
        (category) => category === ''
      )

      categoriesDirty[emptyCategoryIndex] = 'makeup'

      const categories = categoriesDirty

      setCategories(categories)
    }
  }

  useEffect(() => {
    getCategories()
  }, [products])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get('products.json')
      data.forEach((item) => {
        item.isFavorite = false
      })
      setProducts(data)
      setFilteredProducts(data)
    }
    fetchProducts()
  }, [])

  return {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    categories
  }
}

export default useApp
