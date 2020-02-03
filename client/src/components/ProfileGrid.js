import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.5rem;
  justify-content: center;
  padding: 0;

  @media only screen and (min-width: 980px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 5rem;
  }
`

const ProfileGrid = ({children}) => <StyledUl>{children}</StyledUl>

export default ProfileGrid
