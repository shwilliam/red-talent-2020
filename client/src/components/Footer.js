import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo_footer.svg'

const StyledFooter = styled.footer`
  background: #414042;
  text-decoration: none;
  padding: 1.5rem 0;
  text-align: center;
`
const Logo = styled.img`
  width: 160px;
  height: auto;
  padding: 1rem 0;
`
const Copyright = styled.p`
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.08rem;
  font-weight: 100;
  padding-bottom: 0.5rem;
`
const Link = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  padding: 0.05rem;
`

const Footer = () => (
  <StyledFooter>
    <Logo src={logo} />
    <Copyright>
      Event promoted by <Link href='/'>RED Academy</Link>
    </Copyright>
  </StyledFooter>
)

export default Footer
