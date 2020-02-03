import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin: 35px 15px 5px 15px;
  text-align: center;

  @media only screen and (min-width: 700px) {
    position: absolute;
    top: 20%;
  }
`

const Header = ({children}) => <StyledHeader>{children}</StyledHeader>

export default Header
