import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin: 35px 15px 5px 15px;
  text-align: center;

  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 30%;
    left: 5%;
    width: 45%;
  }
`

const Header = ({children}) => <StyledHeader>{children}</StyledHeader>

export default Header
