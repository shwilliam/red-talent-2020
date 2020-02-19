import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 30vh;

  @media only screen and (min-width: 768px) {
    height: 70vh;
  }
`

const Banner = ({ image }) => <StyledImg src={image} />

export default Banner
