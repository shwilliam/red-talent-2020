import React from 'react'
import styled from 'styled-components'
import BannerImg from '../../assets/images/about-banner.jpg'

const StyledImg = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 260px;
  background: linear-gradient(rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.35)),
    url(${BannerImg});
  background-position: 0 0;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    height: 575px;
  }
`

const Banner = () => <StyledImg />

export default Banner
