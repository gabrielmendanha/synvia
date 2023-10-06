import { useEffect, useState } from 'react'
import api from '../services/api'

const useApp = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get('products.json')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return { products, setProducts }
}

export default useApp
