import styled from 'styled-components'

export const Container = styled.div`
    align-items: flex-start;
    display: flex;
    padding-left: 20px;
    height: 85%;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    position: fixed;
    left: 0;
    width: 20%;
`

export const Label = styled.div`
    color: #494949;
    font-size: 12px;
    font-weight: 700;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CategoriesContainer = styled.div`
    display: flex;
    gap: 7px;
    flex-direction: row;
    flex-wrap: wrap;
`
