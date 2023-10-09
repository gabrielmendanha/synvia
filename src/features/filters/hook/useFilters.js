import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from 'context/products'

const useFilters = () => {
  const { products, setFilteredProducts, categories } =
        useContext(ProductsContext)

  const [hasFavoriteFilter, setFavoriteFilter] = useState(false)
  const [activeCategories, setActiveCategories] = useState(new Map())
  const [term, setTerm] = useState('')
  const [order, setOrder] = useState('')

  const getFilteredCategories = () => {
    if ([...activeCategories.values()].includes(true)) {
      let newFilteredProducts = []
      categories.forEach((category) => {
        if (activeCategories.get(category)) {
          newFilteredProducts = newFilteredProducts.concat(
            products.filter(
              (product) => product.category === category
            )
          )
        }
      })
      return newFilteredProducts
    }
    return products
  }

  const getFilteredFavorites = (currentProducts) => {
    if (hasFavoriteFilter) {
      return currentProducts?.filter((product) => product.isFavorite)
    }

    return currentProducts
  }

  const getFilteredText = (currentProducts) => {
    if (term !== '') {
      return currentProducts?.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      )
    }

    return currentProducts
  }

  const ordersFn = {
    min: (a, b) => a.price - b.price,
    max: (a, b) => b.price - a.price,
    az: (a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      }

      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      }

      return 0
    },
    za: (a, b) => {
      if (b.name.toLowerCase() < a.name.toLowerCase()) {
        return -1
      }

      if (b.name.toLowerCase() > a.name.toLowerCase()) {
        return 1
      }

      return 0
    }
  }

  const getOrder = (currentProducts) => {
    if (order !== '') {
      return [...currentProducts.sort(ordersFn[order])]
    }

    return currentProducts
  }

  const applyFilters = () => {
    const fCategories = getFilteredCategories()
    const fFavorites = getFilteredFavorites(fCategories)
    const fText = getFilteredText(fFavorites)
    const fOrder = getOrder(fText)

    setFilteredProducts(fOrder)
  }

  useEffect(() => {
    applyFilters()
  }, [activeCategories, hasFavoriteFilter, term, order])

  return {
    hasFavoriteFilter,
    setFavoriteFilter,
    categories,
    activeCategories,
    setActiveCategories,
    term,
    setTerm,
    order,
    setOrder
  }
}

export default useFilters
