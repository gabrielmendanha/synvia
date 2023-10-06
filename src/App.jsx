import React from 'react'
import Header from 'features/header'
import { AppContainer, Wrapper } from './layout/appContainer'
import Products from './features/productsList'
import { ProductsContext } from './context/products'
import useApp from './hooks/useApp'

function App () {
  const { products, setProducts } = useApp()

  return (
        <div className="App">
            <Wrapper>
                <Header />
                <ProductsContext.Provider value={{ products, setProducts }}>
                    <AppContainer>
                        <Products />
                    </AppContainer>
                </ProductsContext.Provider>
            </Wrapper>
        </div>
  )
}

export default App
