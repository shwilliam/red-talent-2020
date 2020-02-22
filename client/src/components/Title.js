import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #5c5c5c;
  font-weight: 700;
  font-size: 1.17rem;
  text-transform: capitalize;
  text-align: center;

  @media only screen and (min-width: 768px) {
    color: #fff;
    font-size: 2rem;
  }
`

const Title = ({children}) => <StyledTitle>{children}</StyledTitle>

export default Title
