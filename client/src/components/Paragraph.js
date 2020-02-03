import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  padding: 30px 0 10px 0;
  line-height: 1.5;
  color: #5c5c5c;
  text-align: left;

  @media only screen and (min-width: 700px) {
    color: #fff;
  }
`

const Paragraph = ({children}) => <StyledP>{children}</StyledP>

export default Paragraph
