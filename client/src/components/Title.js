import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: #5c5c5c;
  font-weight: 700;
  font-size: 1.17rem;
  text-transform: capitalize;
  text-align: center;
`

const Title = ({children}) => <StyledTitle>{children}</StyledTitle>

export default Title
