import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: auto;
`

export const Img = styled.div`
    img {
        border-radius: 5px;
        position: absolute;
    }

    position: relative;
    height: 90px;
    width: 90px;
`

export const ImgOverlay = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer;
    display: ${({ display }) => (display ? 'flex' : 'none')};
    justify-content: center;
    position: absolute;
    height: 90px;
    width: 90px;
    z-index: 1;
`

export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 7px;
`

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 7px;
`

export const Name = styled.div`
    color: #494949;
    font-size: 16px;
    font-weight: 700;
`

export const Price = styled.div``

export const Id = styled.div`
    color: #838383;
    font-size: 14px;
    font-weight: 700;
`

export const Category = styled.div`
    color: white;
    display: flex;
    font-size: 12px;
`

export const Wrapper = styled.div`
    align-items: center;
    background-color: #6f42c1;
    border-radius: 3px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    height: 20px;
    width: 50px;
`
