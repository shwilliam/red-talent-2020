import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.div`
  background: #414042;
  text-decoration: none;
  padding: 0.8rem 2rem;
  text-align: center;
`
const Logo = styled.p`
  //   spot for logo img styling
`
const PresentBy = styled.p`
  color: #fff;
  font-size: 1rem;
`
const Link = styled.a`
  color: #fff;
`

const Footer = () => (
  <FooterCont>
    <Logo>LOGO</Logo>
    <PresentBy>
      Event promoted by
      <Link href="/"> RED Academy</Link>
    </PresentBy>
  </FooterCont>
)

export default Footer
