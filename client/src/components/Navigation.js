import React from 'react'
import {ModalWrapper, Modal, useModal} from 'react-modal-wrap'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowBack} from 'react-icons/io'
import logo from '../../assets/images/logo.svg'
import mobileLogo from '../../assets/images/logo_mobile.svg'

const NavBar = styled.nav`
  color: #fff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  z-index: 999;

  @media only screen and (min-width: 700px) {
    margin: 0 auto;
    width: 100%;
  }
`

const WhiteNavBar = styled(NavBar)`
  @media only screen and (min-width: 700px) {
    background: #fff;
  }
`

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Link = styled.a`
  text-decoration: none;
  margin-left: 0.5rem;
`

const Logo = styled.img`
  display: none;
  width: 160px;
  height: auto;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

const MobileLogo = styled.img`
  width: 160px;
  height: auto;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background: #fff;
  height: 30%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
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
const MenuLink = styled.a`
  color: #1b1a1a;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  text-decoration: none;
  font-family: Lato;
  border-bottom: 1px solid #979797;
  width: 90%;
  text-align: center;
  &:hover {
    color: #333;
  }

  @media only screen and (min-width: 768px) {
    padding-right: 1.75rem;
    font-size: 1rem;
    border: none;
  }
`

const HamburgerMenu = styled.p`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  top: 15px;
  right: 10px;
  color: #fff;
  font-size: 1.1rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const DesktopNavBar = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

const BigTextButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  font: inherit;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 1rem 1rem 0;

  @media only screen and (min-width: 400px) {
    padding: 1rem;
  }
`

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`

const NavigationModal = () => {
  const {close} = useModal()

  return (
    <Modal overlay>
      <ModalHeader>
        <BigTextButton onClick={close}>
          <IoIosArrowBack />
        </BigTextButton>
      </ModalHeader>

      <MenuLinkContainer>
        <MenuLink href="/">Graduates</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        <MenuLink href="/event">Event</MenuLink>
      </MenuLinkContainer>
    </Modal>
  )
}

const Navigation = () => {
  const {isOpen, open} = useModal()

  return (
    <Container>
      <Link href="/">
        <Logo src={logo} />
        <MobileLogo src={mobileLogo} />
      </Link>

      <HamburgerMenu onClick={open}>
        <GiHamburgerMenu />
      </HamburgerMenu>

      {isOpen && <NavigationModal />}

      <DesktopNavBar>
        <MenuLink href="/">Graduates</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        <MenuLink href="/event">Event</MenuLink>
      </DesktopNavBar>
    </Container>
  )
}

export default ({absolute = false, white = false}) => (
  <ModalWrapper>
    {white ? (
      <WhiteNavBar
        style={{position: absolute ? 'absolute' : 'unset'}}
      >
        <Navigation />
      </WhiteNavBar>
    ) : (
      <NavBar style={{position: absolute ? 'absolute' : 'unset'}}>
        <Navigation />
      </NavBar>
    )}
  </ModalWrapper>
)
