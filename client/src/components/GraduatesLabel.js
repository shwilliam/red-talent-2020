import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 25px 0;

  @media only screen and (min-width: 768px) {
    padding: 30px 0 50px 0;
  }
`

const GraduatesLabel = ({children}) => (
  <StyledDiv>{children}</StyledDiv>
)

export default GraduatesLabel
