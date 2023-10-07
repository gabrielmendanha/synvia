import React from 'react'
import {
  CategoriesContainer,
  Container,
  FilterContainer,
  Label
} from './styled'
import useFilter from './hook/useFilter'
import {
  MenuItem,
  Select,
  Switch,
  TextField,
  ToggleButton
} from '@mui/material'

const Filters = () => {
  const {
    hasFavoriteFilter,
    setFavoriteFilter,
    categories,
    activeCategories,
    setActiveCategories,
    term,
    setTerm,
    order,
    setOrder
  } = useFilter()

  return (
        <Container>
            <FilterContainer>
                <TextField
                    label="Filtre por nome"
                    value={term}
                    onChange={(event) => {
                      setTerm(event.target.value)
                    }}
                />
            </FilterContainer>
            <FilterContainer>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    onChange={(event) => {
                      setOrder(event.target.value)
                    }}
                >
                    <MenuItem value={'min'}>Menor preço primeiro</MenuItem>
                    <MenuItem value={'max'}>Maior preço primeiro</MenuItem>
                    <MenuItem value={'az'}>A - Z</MenuItem>
                    <MenuItem value={'za'}>Z - A</MenuItem>
                </Select>
            </FilterContainer>
            <FilterContainer>
                <Label>Filtrar por categoria</Label>
                <CategoriesContainer>
                    {categories?.map((category) => (
                        <ToggleButton
                            value="check"
                            selected={activeCategories.get(category)}
                            onChange={() => {
                              setActiveCategories(
                                new Map(
                                  activeCategories.set(
                                    category,
                                    !activeCategories.get(category)
                                  )
                                )
                              )
                            }}
                            key={category}
                        >
                            {category}
                        </ToggleButton>
                    ))}
                </CategoriesContainer>
            </FilterContainer>
            <FilterContainer>
                <Label>Filtrar por favoritos</Label>
                <Switch
                    label={'Filtrar por favoritos'}
                    onClick={() => setFavoriteFilter(!hasFavoriteFilter)}
                />
            </FilterContainer>
        </Container>
  )
}

export default Filters
