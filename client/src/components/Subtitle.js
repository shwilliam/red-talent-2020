import React from 'react'
import styled from 'styled-components'

const StyledSubTitle = styled.h2`
  font-size: 1.25rem;
  color: #000;
  font-family: Lato-Regular;
`

const SubTitle = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>

export default SubTitle
