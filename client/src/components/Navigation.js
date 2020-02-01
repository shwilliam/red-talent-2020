import React, {useState} from 'react'
import styled from 'styled-components'

const NavCont = styled.nav`
  color: #fff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media only screen and (min-width: 700px) {
    margin: 1.5rem auto;
  }
`
const Logo = styled.a`
  text-decoration: none;
`
const MenuLinksCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background: #fff;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`
const MenuLinks = styled.a`
  color: #000;
  padding:  0.5rem 0;
  font-size: 1.25rem;
  text-decoration: none;
  font-family: Lato-Regular;

  @media only screen and (min-width: 700px) {
    margin: 0 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

const Hamburger = styled.p`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  top: 0;
  right: 10px;
  color: #000;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const DesktopNav = styled.div`
  display: none;

  @media only screen and (min-width: 700px) {
    display: block;
  }
`

const Navigation = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)

  return (
    <NavCont>

      <Logo href='/'>LOGO</Logo>
      <Hamburger onClick={handleClick}>Menu</Hamburger>

      {toggle ? (
        <MenuLinksCont>
          <MenuLinks href='/'>Graduates</MenuLinks>
          <MenuLinks href='/contact'>Contact</MenuLinks>
          <MenuLinks href='/'>Event</MenuLinks>
        </MenuLinksCont>
      ) : null}

      <DesktopNav>
        <MenuLinks href='/'>Graduates</MenuLinks>
        <MenuLinks href='/contact'>Contact</MenuLinks>
        <MenuLinks href='/'>Event</MenuLinks>
      </DesktopNav>

    </NavCont>
  )
}

export default Navigation
