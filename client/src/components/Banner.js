import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 260px;
  background: linear-gradient(
      rgba(0, 0, 0, 0.35) 0,
      rgba(0, 0, 0, 0.35)
    ),
    url('https://redacademy.com/content/uploads/2019/05/IMG_6355.jpg');
  background-position: 50%;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    height: 575px;
  }
`

const Banner = ({image}) => <StyledImg src={image} />

export default Banner
