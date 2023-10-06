import React from 'react'
import { Logo, Navbar } from './styled'

const Header = () => {
  return (
        <Navbar>
            <Logo>
                <img src={'logo.avif'} alt={'synvia logo'} />
            </Logo>
        </Navbar>
  )
}

export default Header
