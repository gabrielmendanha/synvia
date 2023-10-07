import React from 'react'
import Header from 'features/header'
import { AppContainer, Wrapper } from './layout/appContainer'
import Products from './features/productsList'
import { ProductsContext } from './context/products'
import useApp from './hooks/useApp'
import Filters from './features/filters'

function App () {
  const {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    categories
  } = useApp()

  return (
        <div className="App">
            <Wrapper>
                <Header />
                <ProductsContext.Provider
                    value={{
                      products,
                      setProducts,
                      filteredProducts,
                      setFilteredProducts,
                      categories
                    }}
                >
                    <AppContainer>
                        <Filters />
                        <Products />
                    </AppContainer>
                </ProductsContext.Provider>
            </Wrapper>
        </div>
  )
}

export default App
