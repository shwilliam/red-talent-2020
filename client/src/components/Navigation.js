import React from 'react'
import {ModalWrapper, Modal, useModal} from 'react-modal-wrap'
import styled from 'styled-components'
import {IoMdClose, IoIosMenu} from 'react-icons/io'
import logo from '../../assets/images/logo.svg'
import mobileLogo from '../../assets/images/logo_mobile.svg'
import {Button} from './index'

const NavBar = styled.nav`
  color: #fff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  z-index: 999;

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`

const WhiteNavBar = styled(NavBar)`
  @media only screen and (min-width: 768px) {
    background: #fff;
  }
`

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    width: 90%;
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
  width: 250px;
  height: auto;
  padding: 1.5rem 1rem 1rem 0.75rem;

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
  height: 300px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  color: #fff;
  padding-top: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const MenuLink = styled.a`
  position: relative;
  top: 3.25px;
  display: flex;
  flex-direction: column;
  color: ${p =>
    p.disabled ? '#ccc' : p.active ? '#d0382b' : '#1b1a1a'};
  padding: 1rem 0;
  font-size: 1.2rem;
  text-decoration: none;
  font-family: Lato;
  border-bottom: 1px solid #979797;
  width: 90%;
  text-align: center;
  touch-events: ${p => (p.disabled ? 'none' : 'initial')};
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};

  &:hover {
    color: ${p =>
      p.disabled ? '#ccc' : p.active ? '#d0382b' : '#333'};
  }

  @media only screen and (min-width: 768px) {
    padding-right: 1.75rem;
    font-size: 1rem;
    border-color: transparent;

    &:after {
      content: '';
      display: block;
      margin: 0 auto;
      width: 35px;
      padding-top: 6px;
      border-bottom: 1px solid
        ${p => (p.active ? '#d0382b' : 'transparent')};
    }
  }
  @media only screen and (min-width: 1000px) {
    padding-right: 3rem;
  }
`

const HamburgerMenu = styled.p`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  top: 0;
  right: 0;
  padding: 1.35rem 1rem 1rem 1rem;
  color: ${p => (p.white && !p.transparentMobile ? '#000' : '#fff')};
  font-size: 2.1rem;

  @media only screen and (min-width: 768px) {
    color: #fff;
    display: none;
  }
`

const DesktopNavBar = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const BigTextButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  font: inherit;
  font-size: 2.5rem;
  opacity: 0.8;
  cursor: pointer;
  padding: 1rem 0.5rem 1rem 0;

  &:hover {
    opacity: 1;
  }

  @media only screen and (min-width: 400px) {
    padding: 1.25rem 0.5rem 1rem 1rem;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const ModalHeader = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`

const NavigationModal = () => {
  const {close} = useModal()

  return (
    <Modal overlay lockScroll={false}>
      <ModalHeader>
        <MobileLogo src={logo} />
        <BigTextButton onClick={close}>
          <IoMdClose />
        </BigTextButton>
      </ModalHeader>

      <MenuLinkContainer>
        <MenuLink href="/">Graduates</MenuLink>
        <MenuLink href="/about">About us</MenuLink>
        <Button
          padded
          to="https://www.eventbrite.ca/e/red-academy-co-op-talent-connect-tickets-90332810869"
        >
          Event
        </Button>
      </MenuLinkContainer>
    </Modal>
  )
}

const Navigation = ({route, white, transparentMobile}) => {
  const {isOpen, open} = useModal()

  return (
    <Container>
      <Link href="/">
        <Logo src={logo} />
        <MobileLogo
          src={white && !transparentMobile ? logo : mobileLogo}
        />
      </Link>

      <HamburgerMenu
        onClick={open}
        white={white}
        transparentMobile={transparentMobile}
      >
        <IoIosMenu />
      </HamburgerMenu>

      {isOpen && <NavigationModal />}

      <DesktopNavBar>
        <MenuLink active={route === '/'} href="/">
          Graduates
        </MenuLink>
        <MenuLink active={route === '/about'} href="/about">
          About us
        </MenuLink>
        <Button
          small
          noBold
          to="https://www.eventbrite.ca/e/red-academy-co-op-talent-connect-tickets-90332810869"
        >
          Event
        </Button>
      </DesktopNavBar>
    </Container>
  )
}

export default ({
  absolute = false,
  white = false,
  transparentMobile = false,
  route,
}) => (
  <ModalWrapper>
    {white ? (
      <WhiteNavBar
        style={{position: absolute ? 'absolute' : 'unset'}}
      >
        <Navigation
          white
          transparentMobile={transparentMobile}
          route={route}
        />
      </WhiteNavBar>
    ) : (
      <NavBar style={{position: absolute ? 'absolute' : 'unset'}}>
        <Navigation route={route} />
      </NavBar>
    )}
  </ModalWrapper>
)
