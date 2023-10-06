import React, { useState } from 'react'
import {
  Category,
  Container,
  Detail,
  Id,
  Img,
  ImgOverlay,
  Infos,
  Name,
  Price,
  Wrapper
} from './styled'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'

const Item = ({
  imgSrc,
  id,
  category,
  price,
  name,
  isFavorite,
  handleClick
}) => {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleMouseOver = () => {
    setShowOverlay(!showOverlay)
  }

  return (
        <Container>
            <Img
                onClick={() => handleClick(id)}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOver}
            >
                <img
                    src={imgSrc}
                    alt={'pencils'}
                    width={'90px'}
                    height={'90px'}
                />
                <ImgOverlay display={showOverlay}>Favoritar</ImgOverlay>
            </Img>
            <Infos>
                <Id> N° {id}</Id>
                {isFavorite
                  ? (
                    <FontAwesomeIcon icon={faSolidStar} />
                    )
                  : (
                    <FontAwesomeIcon icon={faStar} />
                    )}
            </Infos>
            <Detail>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Detail>
            <Category>
                <Wrapper>{category || 'makeup'}</Wrapper>
            </Category>
        </Container>
  )
}

Item.propTypes = {
  imgSrc: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  handleMouseOver: PropTypes.func,
  handleClick: PropTypes.func,
  isFavorite: PropTypes.bool
}

export default Item
