import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin: 35px 15px 5px 15px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 18rem;
    left: 5%;
    min-width: 30rem;
    width: 50%;
  }
`

const Header = ({children}) => <StyledHeader>{children}</StyledHeader>

export default Header
