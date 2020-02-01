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
`

const Banner = ({ image, height = '30vh' }) => (
  <StyledImg src={image} style={{ height }} />
)

export default Banner
