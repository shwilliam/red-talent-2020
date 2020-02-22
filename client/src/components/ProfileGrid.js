import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  justify-content: center;
  padding: 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 5rem;
  }
  @media only screen and (min-width: 970px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 5rem;
  }
`

const ProfileGrid = ({children}) => <StyledUl>{children}</StyledUl>

export default ProfileGrid
