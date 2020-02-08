import React from 'react'
import styled from 'styled-components'

const isMobile = (typeof window !== 'undefined' ? window.innerWidth <= 768 : true)

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

const Banner = ({ image, height = 30 }) => (
  <StyledImg
    src={image}
    style={isMobile ? { height: `${height}vh` } : { height: `${height * 2}vh` }}
  />
)

export default Banner
