import React, {useState} from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

const BorderedContainer = styled.section`
  border: 1px solid #d0382b;
  border-radius: 4px;
  background: #fff;
  color: #000;
  margin: 2rem auto;
  padding: 1rem 0;
  width: 90%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  padding-top: 0.5rem;
  margin: 0 auto;
`

const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
`

const Content = styled.section`
  padding: 1rem;
  display: flex;
  width: 80%;
  margin: 1rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Dep = styled.h3`
  font-size: 0.9rem;
  font-weight: 100;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
    padding: 1rem 0;
    margin-bottom: 1rem;
    color: #383838;
  }
`

const ContentContainer = styled.p`
  height: 255px;
  padding: 0 0.5rem;

  @media only screen and (min-width: 1000px) {
    height: 185px;
  }

  @media only screen and (min-width: 1500px) {
    height: 165px;
  }
`

const DesktopContainer = styled.section`
  @media only screen and (min-width: 768px) {
    padding: 1rem 0;
  }
`

const DesktopContent = styled.section`
  display: none;
  padding: 0;
  @media only screen and (min-width: 768px) {
    display: inline-block;
    text-align: center;
  }
  @media only screen and (min-width: 900px) {
    padding: 0 1rem;
  }
  @media only screen and (min-width: 1100px) {
    padding: 0 3rem;
  }
`

const Collapsible = ({icon, dep, children}) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <>
      <BorderedContainer>
        <Header>
          <img src={icon} height="50" />
          <Dep>{dep}</Dep>
          <StyledButton onClick={handleToggle}>
            {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </StyledButton>
        </Header>
        {toggle ? <Content>{children}</Content> : null}
      </BorderedContainer>

      <DesktopContainer>
        <DesktopContent>
          <Dep>{dep}</Dep>
          <img style={{padding: '1rem 0'}} src={icon} height="90" />
          <ContentContainer>{children}</ContentContainer>
        </DesktopContent>
      </DesktopContainer>
    </>
  )
}

export default Collapsible
