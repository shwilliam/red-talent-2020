import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #000;
  font-weight: 700;
  font-size: 1.75rem;
  text-transform: capitalize;
  text-align: center;
`

const Title = ({children}) => <StyledTitle>{children}</StyledTitle>

export default Title
