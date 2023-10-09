import { renderHook } from '@testing-library/react'
import useFilters from './useFilters'
import { act } from 'react-dom/test-utils'
import { mockProducts, product1, product2 } from 'mocks/products'

const mockFilteredProducts = jest.fn()

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ({
      categories: ['lipstick', 'makeup'],
      products: mockProducts,
      setFilteredProducts: mockFilteredProducts
    })
  }
})

describe('displays products based on filters', () => {
  it('filters by favorite', () => {
    const {
      result: {
        current: { setFavoriteFilter }
      }
    } = renderHook(useFilters)

    act(() => {
      setFavoriteFilter(true)
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product1])
  })

  it('filters by category', () => {
    const {
      result: {
        current: { setActiveCategories }
      }
    } = renderHook(useFilters)

    const activeCategories = new Map()
    activeCategories.set('makeup', true)

    act(() => {
      setActiveCategories(activeCategories)
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product2])
  })

  it('order by max price', () => {
    const {
      result: {
        current: { setOrder }
      }
    } = renderHook(useFilters)

    act(() => {
      setOrder('max')
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product2, product1])
  })

  it('order by min price', () => {
    const {
      result: {
        current: { setOrder }
      }
    } = renderHook(useFilters)

    act(() => {
      setOrder('min')
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product1, product2])
  })

  it('order by asc alphabetically', () => {
    const {
      result: {
        current: { setOrder }
      }
    } = renderHook(useFilters)

    act(() => {
      setOrder('az')
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product1, product2])
  })

  it('order by desc alphabetically', () => {
    const {
      result: {
        current: { setOrder }
      }
    } = renderHook(useFilters)

    act(() => {
      setOrder('za')
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product2, product1])
  })

  it('filters by search term', () => {
    const {
      result: {
        current: { setTerm }
      }
    } = renderHook(useFilters)

    act(() => {
      setTerm('a test')
    })

    expect(mockFilteredProducts).toHaveBeenCalledWith([product1])
  })
})
